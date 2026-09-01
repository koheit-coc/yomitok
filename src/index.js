const MAX_AUDIO_BYTES = 5 * 1024 * 1024;

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

async function transcribe(request, env) {
  if (!env.OPENAI_API_KEY) {
    return json({ error: "Cloudflare に OPENAI_API_KEY が設定されていません。" }, 500);
  }

  try {
    const incoming = await request.formData();
    const file = incoming.get("file");

    if (!(file instanceof File)) {
      return json({ error: "音声ファイルが送信されていません。" }, 400);
    }
    if (!file.size) {
      return json({ error: "音声ファイルが空です。" }, 400);
    }
    if (file.size > MAX_AUDIO_BYTES) {
      return json({ error: "音声ファイルが大きすぎます。" }, 413);
    }

    const form = new FormData();
    form.append("file", file, file.name || "reading.webm");
    form.append("model", "gpt-4o-mini-transcribe");
    form.append("language", "ja");
    form.append("response_format", "json");
    form.append(
      "prompt",
      "小学生の日本語の音読練習です。聞こえた発音をできるだけそのまま文字起こししてください。言い間違いや読み間違いを推測で正解に直さないでください。"
    );

    const openaiResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.OPENAI_API_KEY}`
      },
      body: form
    });

    const payload = await openaiResponse.json().catch(() => ({}));
    if (!openaiResponse.ok) {
      const detail = payload?.error?.message || "OpenAI の文字起こしに失敗しました。";
      console.error("OpenAI transcription error", openaiResponse.status, detail);
      return json({ error: detail }, openaiResponse.status);
    }

    return json({ text: String(payload.text || "").trim() });
  } catch (error) {
    console.error("transcribe worker error", error);
    return json({ error: "音声の処理中にエラーが発生しました。" }, 500);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/transcribe") {
      if (request.method !== "POST") {
        return json({ error: "POST でアクセスしてください。" }, 405);
      }
      return transcribe(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};

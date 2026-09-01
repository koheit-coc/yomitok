# よみトレ - Cloudflare Workers版（スマホ音声認識修正版）

現在の公開URLが `*.workers.dev` の場合はこちらを使うのが自然です。

## 仕組み

- `public/` : index.html / styles.css / app.js
- `src/index.js` : `/api/transcribe` と静的ファイル配信を担当
- スマホ : MediaRecorder → `/api/transcribe` → OpenAI文字起こし
- PC : 既存のブラウザ SpeechRecognition を継続

## 初回セットアップ

```bash
npm install
npx wrangler login
npx wrangler secret put OPENAI_API_KEY
```

最後のコマンドで OpenAI Platform の API Key を貼り付けます。
API Key はソースコードや GitHub に書かないでください。

Cloudflare Dashboard から設定する場合は、対象 Worker の
Settings > Variables and Secrets で `OPENAI_API_KEY` を Secret として追加しても構いません。

## ローカル確認

`.dev.vars` を作成し、次のように書きます（Gitにはコミットされません）。

```text
OPENAI_API_KEY=sk-xxxxxxxx
```

その後:

```bash
npm run dev
```

## デプロイ

```bash
npm run deploy
```

GitHub連携の Workers Builds を使う場合も、このリポジトリ構成と `wrangler.jsonc` をそのまま利用できます。

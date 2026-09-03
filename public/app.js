const QUESTION_SETS = {
  1: [
    {
      sentence: "山の上で日が出る。",
      reading: "やまのうえでひがでる",
      terms: {
        山: "じめんが高くもり上がった所。",
        上: "高いほうのこと。",
        日: "たいようのこと。",
        出る: "中から外へ行くこと。"
      }
    },
    {
      sentence: "大きな木の下で休む。",
      reading: "おおきなきのしたでやすむ",
      terms: {
        大きな: "かたちやりょうが、たくさんあるようす。",
        木の下: "木よりひくいところ。木のすぐそばの下のほう。",
        休む: "からだをらくにすること。"
      }
    },
    {
      sentence: "白い犬が川を見ている。",
      reading: "しろいいぬがかわをみている",
      terms: {
        白い: "ゆきのような色。",
        犬: "人とくらすことが多いどうぶつ。",
        川: "水がながれている所。",
        見て: "目でたしかめて、ということ。"
      }
    },
    {
      sentence: "赤い花が一つさいた。",
      reading: "あかいはながひとつさいた",
      terms: {
        赤い: "りんごのような色。",
        花: "しょくぶつにさく、きれいなところ。",
        一つ: "かずがひとつであること。"
      }
    },
    {
      sentence: "雨の日に車を見る。",
      reading: "あめのひにくるまをみる",
      terms: {
        雨の日: "あめがふっている日。",
        車: "人やものをのせて走るもの。",
        見る: "目でたしかめること。"
      }
    },
    {
      sentence: "手を上げて先生をよぶ。",
      reading: "てをあげてせんせいをよぶ",
      terms: {
        手: "ものをもったり、さわったりするからだのところ。",
        上げて: "高いほうへ動かして、ということ。",
        先生: "べんきょうなどを教えてくれる人。"
      }
    },
    {
      sentence: "青い空に月が見える。",
      reading: "あおいそらにつきがみえる",
      terms: {
        青い: "空や海のような色。",
        空: "上のほうに広がって見えるところ。",
        月: "よるの空に見えることが多い星のようなもの。",
        見える: "目に入ること。"
      }
    },
    {
      sentence: "耳で大きな音を聞く。",
      reading: "みみでおおきなおとをきく",
      terms: {
        耳: "音を聞くからだのところ。",
        大きな: "かたちやりょうが、たくさんあるようす。",
        音: "きこえるもの。",
        聞く: "音や話を耳で受け取ること。"
      }
    },
    {
      sentence: "森の中に小さな虫がいる。",
      reading: "もりのなかにちいさなむしがいる",
      terms: {
        森の中: "木がたくさんある所の中。",
        小さな: "かたちやりょうが、すくないようす。",
        虫: "からだが小さい生きもの。"
      }
    },
    {
      sentence: "右の道から左へまがる。",
      reading: "みぎのみちからひだりへまがる",
      terms: {
        右: "からだの右がわ。",
        道: "人や車が通るところ。",
        左: "からだの左がわ。"
      }
    }
  ],
  2: [
    {
      sentence: "兄と公園で走った。",
      reading: "あにとこうえんではしった",
      terms: {
        兄: "自分より年上の男のきょうだい。",
        公園: "みんながあそんだり休んだりする所。",
        走った: "足を早く動かしてすすんだ、ということ。"
      }
    },
    {
      sentence: "紙に名前を書いた。",
      reading: "かみになまえをかいた",
      terms: {
        紙: "字や絵をかくための、うすいもの。",
        名前: "人やものをよぶためのことば。",
        書いた: "字や絵をかいた、ということ。"
      }
    },
    {
      sentence: "朝、友だちと学校へ行く。",
      reading: "あさともだちとがっこうへいく",
      terms: {
        朝: "一日のはじめのころ。",
        友だち: "なかよくしている人。",
        学校: "みんなでべんきょうする所。",
        行く: "べつの所へすすむこと。"
      }
    },
    {
      sentence: "昼休みに外で遊ぶ。",
      reading: "ひるやすみにそとであそぶ",
      terms: {
        昼休み: "ひるに、すこし休む時間。",
        外: "たてもののそとのこと。",
        遊ぶ: "たのしくすごすこと。"
      }
    },
    {
      sentence: "妹は同じ本を読んだ。",
      reading: "いもうとはおなじほんをよんだ",
      terms: {
        妹: "自分より年下の女のきょうだい。",
        同じ: "ちがいがないこと。",
        本: "文や絵がかかれた読みもの。",
        読んだ: "文字を見て、内容をわかった、ということ。"
      }
    },
    {
      sentence: "寺の近くに古い池がある。",
      reading: "てらのちかくにふるいいけがある",
      terms: {
        寺: "ほとけさまをまつる所。",
        近く: "そばにあること。",
        古い: "長い時間がたっていること。",
        池: "水がたまっている所。"
      }
    },
    {
      sentence: "黒い鳥が西へ飛ぶ。",
      reading: "くろいとりがにしへとぶ",
      terms: {
        黒い: "すみのような色。",
        鳥: "つばさがあり、空をとぶ生きもの。",
        西: "たいようがしずむほう。",
        飛ぶ: "空をすすむこと。"
      }
    },
    {
      sentence: "毎週、図工の時間がある。",
      reading: "まいしゅうずこうのじかんがある",
      terms: {
        毎週: "どの週も、ということ。",
        図工: "絵をかいたり、ものを作ったりする学習。",
        時間: "ときの長さや、何時ごろかをあらわすこと。"
      }
    },
    {
      sentence: "家族で海に行った。",
      reading: "かぞくでうみにいった",
      terms: {
        家族: "いっしょにくらす人たち。",
        海: "しおからい水がたくさんある所。",
        行った: "べつの所へすすんだ、ということ。"
      }
    },
    {
      sentence: "雪の日は長い道を歩く。",
      reading: "ゆきのひはながいみちをあるく",
      terms: {
        雪の日: "ゆきがふる日。",
        長い: "はしからはしまでが大きいこと。",
        道: "人や車が通るところ。",
        歩く: "足でゆっくりすすむこと。"
      }
    }
  ],
  3: [
    {
      sentence: "図書館で物語を読んだ。",
      reading: "としょかんでものがたりをよんだ",
      terms: {
        図書館: "本を読んだり、かりたりできる所。",
        物語: "できごとや人のようすを書いたお話。",
        読んだ: "文字を見て、内容をわかった、ということ。"
      }
    },
    {
      sentence: "畑で野菜を育てる。",
      reading: "はたけでやさいをそだてる",
      terms: {
        畑: "やさいなどを作るための土地。",
        野菜: "食べるために作るしょくぶつ。",
        育てる: "大きくなるように世話をすること。"
      }
    },
    {
      sentence: "短い詩を発表した。",
      reading: "みじかいしをはっぴょうした",
      terms: {
        短い: "長さや時間が少ないようす。",
        詩: "気もちやようすを、ことばであらわした文。",
        発表: "しらべたことや考えを、みんなに話すこと。"
      }
    },
    {
      sentence: "世界の国旗を調べる。",
      reading: "せかいのこっきをしらべる",
      terms: {
        世界: "地球ぜんたいのこと。",
        国旗: "国をあらわすはた。",
        調べる: "わからないことを、見たり聞いたりすること。"
      }
    },
    {
      sentence: "病院で薬をもらった。",
      reading: "びょういんでくすりをもらった",
      terms: {
        病院: "病気やけがをみてもらう所。",
        薬: "病気やけがをよくするために使うもの。"
      }
    },
    {
      sentence: "駅前で荷物を持つ。",
      reading: "えきまえでにもつをもつ",
      terms: {
        駅前: "駅のすぐ前のあたり。",
        荷物: "持ったり運んだりするもの。",
        持つ: "手などでささえること。"
      }
    },
    {
      sentence: "坂道で転ばないように歩く。",
      reading: "さかみちでころばないようにあるく",
      terms: {
        坂道: "上り下りがある道。",
        転ばない: "たおれないようにすること。",
        歩く: "足でゆっくりすすむこと。"
      }
    },
    {
      sentence: "係の仕事を決めた。",
      reading: "かかりのしごとをきめた",
      terms: {
        係: "きめられたしごとをする役。",
        仕事: "しなければならないこと。",
        決めた: "どうするかをえらんだ、ということ。"
      }
    },
    {
      sentence: "港に船が着いた。",
      reading: "みなとにふねがついた",
      terms: {
        港: "船がとまる所。",
        船: "水の上をすすむのりもの。",
        着いた: "その場所についた、ということ。"
      }
    },
    {
      sentence: "農家の人に質問した。",
      reading: "のうかのひとにしつもんした",
      terms: {
        農家: "米ややさいなどを作るしごとの家。",
        質問: "わからないことをたずねること。"
      }
    }
  ],
  4: [
    {
      sentence: "季節の変化を観察する。",
      reading: "きせつのへんかをかんさつする",
      terms: {
        季節: "春、夏、秋、冬のこと。",
        変化: "ようすがかわること。",
        観察: "よく見て、気づいたことをしらべること。"
      }
    },
    {
      sentence: "県の特産品を調べた。",
      reading: "けんのとくさんひんをしらべた",
      terms: {
        県: "日本を分けたまとまりの一つ。",
        特産品: "その土地で多く作られる有名なもの。",
        調べた: "わからないことを、見たり聞いたりしたということ。"
      }
    },
    {
      sentence: "協力して安全な道を選ぶ。",
      reading: "きょうりょくしてあんぜんなみちをえらぶ",
      terms: {
        協力: "みんなで力を合わせること。",
        安全: "あぶなくないこと。",
        選ぶ: "いくつかの中から、よいものを決めること。"
      }
    },
    {
      sentence: "健康のために運動する。",
      reading: "けんこうのためにうんどうする",
      terms: {
        健康: "からだや心のぐあいがよいこと。",
        運動: "からだを動かすこと。"
      }
    },
    {
      sentence: "植物の成長を記録する。",
      reading: "しょくぶつのせいちょうをきろくする",
      terms: {
        植物: "草や木などの生きもの。",
        成長: "大きくなったり、よくなったりすること。",
        記録: "あとで見られるように書いておくこと。"
      }
    },
    {
      sentence: "目標を決めて努力する。",
      reading: "もくひょうをきめてどりょくする",
      terms: {
        目標: "そこまでがんばろうとするめあて。",
        決めて: "どうするかをえらんで、ということ。",
        努力: "できるように、がんばること。"
      }
    },
    {
      sentence: "低い声で静かに話す。",
      reading: "ひくいこえでしずかにはなす",
      terms: {
        低い: "高くないこと。",
        声: "口から出る音。",
        静か: "音が少なく、しずかなようす。",
        話す: "ことばでつたえること。"
      }
    },
    {
      sentence: "試合の結果を伝える。",
      reading: "しあいのけっかをつたえる",
      terms: {
        試合: "勝ち負けをきめるために行うこと。",
        結果: "あとに出たことや、わかったこと。",
        伝える: "相手に知らせること。"
      }
    },
    {
      sentence: "給食の準備を手伝う。",
      reading: "きゅうしょくのじゅんびをてつだう",
      terms: {
        給食: "学校などで出る食事。",
        準備: "はじめる前に用意すること。",
        手伝う: "人のしごとをたすけること。"
      }
    },
    {
      sentence: "関係のある資料を集める。",
      reading: "かんけいのあるしりょうをあつめる",
      terms: {
        関係: "つながりがあること。",
        資料: "しらべるときに役に立つもの。",
        集める: "いろいろな所から一つにすること。"
      }
    }
  ],
  5: [
    {
      sentence: "原因を考えて結果をまとめる。",
      reading: "げんいんをかんがえてけっかをまとめる",
      terms: {
        原因: "ものごとが起きたもとになること。",
        結果: "あとに出たことや、わかったこと。",
        まとめる: "わかりやすく一つにすること。"
      }
    },
    {
      sentence: "条件を比べて判断した。",
      reading: "じょうけんをくらべてはんだんした",
      terms: {
        条件: "ものごとを決めるために必要なこと。",
        比べて: "ちがいや同じ所を見ること。",
        判断: "よく考えて、どうするか決めること。"
      }
    },
    {
      sentence: "輸送の仕組みを説明する。",
      reading: "ゆそうのしくみをせつめいする",
      terms: {
        輸送: "人やものをべつの場所へ運ぶこと。",
        仕組み: "ものごとが動くようにできている形。",
        説明: "相手にわかるように話すこと。"
      }
    },
    {
      sentence: "責任を持って任務を果たす。",
      reading: "せきにんをもってにんむをはたす",
      terms: {
        責任: "自分の役目をさいごまでやること。",
        任務: "やらなければならない役目。",
        果たす: "さいごまでやりとげること。"
      }
    },
    {
      sentence: "歴史資料を分類する。",
      reading: "れきししりょうをぶんるいする",
      terms: {
        歴史: "むかしから今までのできごとのこと。",
        資料: "しらべるときに役に立つもの。",
        分類: "にているものどうしに分けること。"
      }
    },
    {
      sentence: "税金の使い道を学ぶ。",
      reading: "ぜいきんのつかいみちをまなぶ",
      terms: {
        税金: "みんなのために国や町へおさめるお金。",
        使い道: "何に使うか、ということ。",
        学ぶ: "新しいことを知ること。"
      }
    },
    {
      sentence: "河川の水量を測定した。",
      reading: "かせんのすいりょうをそくていした",
      terms: {
        河川: "川のこと。",
        水量: "水の多さ。",
        測定: "長さや多さをはかること。"
      }
    },
    {
      sentence: "防災訓練に参加する。",
      reading: "ぼうさいくんれんにさんかする",
      terms: {
        防災: "さいがいでこまらないようにそなえること。",
        訓練: "できるように、くり返しれんしゅうすること。",
        参加: "そのあつまりに入ること。"
      }
    },
    {
      sentence: "利益と損失を比べる。",
      reading: "りえきとそんしつをくらべる",
      terms: {
        利益: "もうけや、よいこと。",
        損失: "なくしたり、へったりしたもの。",
        比べる: "ちがいや同じ所を見ること。"
      }
    },
    {
      sentence: "複雑な問題を解く。",
      reading: "ふくざつなもんだいをとく",
      terms: {
        複雑: "いろいろなものがまざって、わかりにくいこと。",
        問題: "考えて答えを出すもの。",
        解く: "答えを見つけること。"
      }
    }
  ],
  6: [
  {
    sentence: "祖母は地域の伝統行事を大切にしている。",
    reading: "そぼはちいきのでんとうぎょうじをたいせつにしている",
    terms: {
      祖母: "おばあさんのこと。",
      地域: "人がくらしている、あるあたりのこと。",
      伝統行事: "むかしからつづいている、まつりやもよおしのこと。",
      大切: "とてもだいじなこと。"
    }
  },
  {
    sentence: "委員会で資料を調べ、解決策を提案した。",
    reading: "いいんかいでしりょうをしらべかいけつさくをていあんした",
    terms: {
      委員会: "学校などで、きめられたしごとをするあつまり。",
      資料: "しらべるときに役に立つもの。",
      調べ: "わからないことを、見たり聞いたりすること。",
      解決策: "こまったことをよくするためのやり方。",
      提案: "自分の考えを、みんなに出すこと。"
    }
  },
  {
    sentence: "歴史の授業で幕府の政治を学んだ。",
    reading: "れきしのじゅぎょうでばくふのせいじをまなんだ",
    terms: {
      歴史: "むかしから今までのできごとのこと。",
      授業: "学校で先生や友だちと学ぶ時間。",
      幕府: "しょうぐんが国をおさめた、むかしのしくみ。",
      政治: "みんなのくらしをよくするために、きまりを作ること。",
      学んだ: "新しいことを知った、ということ。"
    }
  },
  {
    sentence: "災害に備えて避難経路を確認する。",
    reading: "さいがいにそなえてひなんけいろをかくにんする",
    terms: {
      災害: "じしんや大雨などで、こまったことが起きること。",
      備えて: "あとでこまらないように、前もって用意しておくこと。",
      避難経路: "あぶない所から、あんぜんな所へ行く道すじ。",
      確認: "まちがいがないか、たしかめること。"
    }
  },
  {
    sentence: "酸素の性質を実験で確かめた。",
    reading: "さんそのせいしつをじっけんでたしかめた",
    terms: {
      酸素: "空気の中にあり、いきものがすうもの。",
      性質: "そのものがもっている、とくちょう。",
      実験: "本当にそうなるか、ためしてみること。",
      確かめた: "本当にそうか、しらべたということ。"
    }
  },
  {
    sentence: "新聞記事の要点を整理して発表する。",
    reading: "しんぶんきじのようてんをせいりしてはっぴょうする",
    terms: {
      新聞: "世の中のできごとを知らせる読みもの。",
      記事: "新聞などに書かれた文。",
      要点: "話や文の中で、いちばん大事なところ。",
      整理: "わかりやすくまとめること。",
      発表: "しらべたことや考えを、みんなに話すこと。"
    }
  },
  {
    sentence: "俳句には季節を表す言葉が入る。",
    reading: "はいくにはきせつをあらわすことばがはいる",
    terms: {
      俳句: "五・七・五のリズムで作る、短い詩。",
      季節: "春、夏、秋、冬のこと。",
      表す: "考えや気もちを、わかるようにすること。",
      言葉: "気もちや考えをつたえるためのもの。",
      入る: "中にある、または中にくわわること。"
    }
  },
  {
    sentence: "裁判所は法律にもとづいて判断する。",
    reading: "さいばんしょはほうりつにもとづいてはんだんする",
    terms: {
      裁判所: "もめごとなどを、きまりにそって決める所。",
      法律: "国がきめた、みんなが守るきまり。",
      判断: "よく考えて、どうするか決めること。"
    }
  },
  {
    sentence: "干潮の時刻を調べて海岸を観察した。",
    reading: "かんちょうのじこくをしらべてかいがんをかんさつした",
    terms: {
      干潮: "海の水がひいて、海が低く見えるとき。",
      時刻: "何時何分かということ。",
      調べて: "わからないことを、見たり聞いたりして、ということ。",
      海岸: "海とりくがつながっている所。",
      観察: "よく見て、気づいたことをしらべること。"
    }
  },
  {
    sentence: "尊敬する人物の功績を年表にまとめた。",
    reading: "そんけいするじんぶつのこうせきをねんぴょうにまとめた",
    terms: {
      尊敬: "すごい人だと思い、大切に思うこと。",
      人物: "その話に出てくる人のこと。",
      功績: "その人がのこした、よいはたらき。",
      年表: "できごとを、年のじゅんにならべた表。"
    }
  }
  ]
};

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const MOBILE_SPEECH_MODE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const USE_SERVER_TRANSCRIPTION = MOBILE_SPEECH_MODE;
const TRANSCRIBE_ENDPOINT = "/api/transcribe";
const MOBILE_SILENCE_STOP_MS = 2000;
const MOBILE_MAX_RECORDING_MS = 30000;

const TERM_READINGS = {
  山: "やま",
  上: "うえ",
  日: "ひ",
  出る: "でる",
  大きな: "おおきな",
  木の下: "きのした",
  木下: "きのした",
  木: "き",
  下: "した",
  休む: "やすむ",
  白い: "しろい",
  犬: "いぬ",
  川: "かわ",
  皮: "かわ",
  見て: "みて",
  赤い: "あかい",
  花: "はな",
  一つ: "ひとつ",
  雨の日: "あめのひ",
  雨: "あめ",
  車: "くるま",
  見る: "みる",
  手: "て",
  上げて: "あげて",
  先生: "せんせい",
  青い: "あおい",
  空: "そら",
  月: "つき",
  見える: "みえる",
  耳: "みみ",
  音: "おと",
  聞く: "きく",
  森の中: "もりのなか",
  森: "もり",
  中: "なか",
  小さな: "ちいさな",
  虫: "むし",
  右: "みぎ",
  道: "みち",
  左: "ひだり",
  兄: "あに",
  公園: "こうえん",
  走った: "はしった",
  紙: "かみ",
  名前: "なまえ",
  書いた: "かいた",
  朝: "あさ",
  友だち: "ともだち",
  友達: "ともだち",
  学校: "がっこう",
  行く: "いく",
  昼休み: "ひるやすみ",
  昼: "ひる",
  外: "そと",
  遊ぶ: "あそぶ",
  妹: "いもうと",
  同じ: "おなじ",
  本: "ほん",
  寺: "てら",
  近く: "ちかく",
  古い: "ふるい",
  池: "いけ",
  黒い: "くろい",
  鳥: "とり",
  西: "にし",
  飛ぶ: "とぶ",
  毎週: "まいしゅう",
  図工: "ずこう",
  時間: "じかん",
  家族: "かぞく",
  海: "うみ",
  行った: "いった",
  雪の日: "ゆきのひ",
  雪: "ゆき",
  長い: "ながい",
  歩く: "あるく",
  図書館: "としょかん",
  物語: "ものがたり",
  読んだ: "よんだ",
  畑: "はたけ",
  野菜: "やさい",
  育てる: "そだてる",
  短い: "みじかい",
  詩: "し",
  世界: "せかい",
  国旗: "こっき",
  調べる: "しらべる",
  病院: "びょういん",
  薬: "くすり",
  駅前: "えきまえ",
  駅: "えき",
  荷物: "にもつ",
  持つ: "もつ",
  坂道: "さかみち",
  転ばない: "ころばない",
  係: "かかり",
  仕事: "しごと",
  決めた: "きめた",
  港: "みなと",
  船: "ふね",
  着いた: "ついた",
  農家: "のうか",
  質問: "しつもん",
  変化: "へんか",
  県: "けん",
  特産品: "とくさんひん",
  調べた: "しらべた",
  協力: "きょうりょく",
  安全: "あんぜん",
  選ぶ: "えらぶ",
  健康: "けんこう",
  運動: "うんどう",
  植物: "しょくぶつ",
  成長: "せいちょう",
  記録: "きろく",
  目標: "もくひょう",
  決めて: "きめて",
  努力: "どりょく",
  低い: "ひくい",
  声: "こえ",
  静か: "しずか",
  話す: "はなす",
  試合: "しあい",
  伝える: "つたえる",
  給食: "きゅうしょく",
  準備: "じゅんび",
  手伝う: "てつだう",
  関係: "かんけい",
  集める: "あつめる",
  原因: "げんいん",
  考えて: "かんがえて",
  結果: "けっか",
  まとめる: "まとめる",
  条件: "じょうけん",
  比べて: "くらべて",
  輸送: "ゆそう",
  仕組み: "しくみ",
  説明: "せつめい",
  責任: "せきにん",
  任務: "にんむ",
  果たす: "はたす",
  分類: "ぶんるい",
  税金: "ぜいきん",
  使い道: "つかいみち",
  学ぶ: "まなぶ",
  河川: "かせん",
  水量: "すいりょう",
  測定: "そくてい",
  防災: "ぼうさい",
  訓練: "くんれん",
  参加: "さんか",
  利益: "りえき",
  損失: "そんしつ",
  比べる: "くらべる",
  複雑: "ふくざつ",
  問題: "もんだい",
  解く: "とく",
  祖母: "そぼ",
  地域: "ちいき",
  伝統行事: "でんとうぎょうじ",
  大切: "たいせつ",
  委員会: "いいんかい",
  資料: "しりょう",
  調べ: "しらべ",
  解決策: "かいけつさく",
  提案: "ていあん",
  歴史: "れきし",
  授業: "じゅぎょう",
  幕府: "ばくふ",
  政治: "せいじ",
  学んだ: "まなんだ",
  災害: "さいがい",
  備えて: "そなえて",
  避難経路: "ひなんけいろ",
  確認: "かくにん",
  酸素: "さんそ",
  性質: "せいしつ",
  実験: "じっけん",
  確かめた: "たしかめた",
  新聞: "しんぶん",
  記事: "きじ",
  要点: "ようてん",
  整理: "せいり",
  発表: "はっぴょう",
  俳句: "はいく",
  季節: "きせつ",
  表す: "あらわす",
  言葉: "ことば",
  入る: "はいる",
  裁判所: "さいばんしょ",
  法律: "ほうりつ",
  判断: "はんだん",
  干潮: "かんちょう",
  時刻: "じこく",
  調べて: "しらべて",
  海岸: "かいがん",
  観察: "かんさつ",
  尊敬: "そんけい",
  人物: "じんぶつ",
  功績: "こうせき",
  年表: "ねんぴょう"
};

const state = {
  grade: null,
  questions: [],
  index: 0,
  attempts: 0,
  totalScore: 0,
  recognition: null,
  listening: false,
  finalTranscripts: [],
  interimTranscript: "",
  listenTimer: null,
  audioContext: null,
  analyser: null,
  micStream: null,
  meterFrame: null,
  voices: [],
  resultApplied: false,
  discardCurrentRecognition: false,
  autoStartTimer: null,
  speechHeard: false,
  lastVoiceTime: 0,
  mediaRecorder: null,
  recordedChunks: [],
  recordingMimeType: "",
  transcribing: false
};

const sentenceEl = document.querySelector("#sentence");
const gradeScreenEl = document.querySelector("#grade-screen");
const practiceScreenEl = document.querySelector("#practice-screen");
const gradeButtonsEl = document.querySelector("#grade-buttons");
const gradeLabelEl = document.querySelector("#grade-label");
const recognizedEl = document.querySelector("#recognized");
const feedbackEl = document.querySelector("#feedback");
const scoreEl = document.querySelector("#score");
const questionCountEl = document.querySelector("#question-count");
const progressBarEl = document.querySelector("#progress-bar");
const wordListEl = document.querySelector("#word-list");
const meaningBoxEl = document.querySelector("#meaning-box");
const listenButton = document.querySelector("#listen-button");
const stopButton = document.querySelector("#stop-button");
const nextButton = document.querySelector("#next-button");
const changeGradeButton = document.querySelector("#change-grade-button");
const micStatusEl = document.querySelector("#mic-status");
const levelBarEl = document.querySelector("#level-bar");

const SPEECH_ERRORS = {
  "aborted": "音声認識が途中で止まりました。もう一度「聞き取り開始」を押してください。",
  "audio-capture": "マイクから音を受け取れませんでした。OS やブラウザのマイク設定を確認してください。",
  "bad-grammar": "音声認識の設定を読み込めませんでした。",
  "language-not-supported": "このブラウザの音声認識は日本語に対応していません。",
  "network": "音声認識サービスに接続できませんでした。Codex 内ブラウザでは起きることがあるため、Chrome または Edge でも試してください。",
  "no-speech": "声が検出されませんでした。ボタンを押してから、少し大きめに読み始めてください。",
  "not-allowed": "マイクの使用が許可されていません。ブラウザの設定でマイクを許可してください。",
  "service-not-allowed": "このブラウザでは音声認識サービスの使用が許可されていません。Chrome または Edge で開いてください。"
};

function normalizeReading(value) {
  return value
    .replace(/[。、，,.!?！？\s]/g, "")
    .replace(/は/g, "わ")
    .replace(/へ/g, "え")
    .replace(/を/g, "お")
    .replace(/[ァ-ン]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60))
    .toLowerCase();
}

function normalizeText(value) {
  return value.replace(/[。、，,.!?！？\s]/g, "").toLowerCase();
}

function replaceKnownTermsWithReadings(value) {
  const compactText = normalizeText(value);
  return Object.entries(TERM_READINGS)
    .sort(([a], [b]) => b.length - a.length)
    .reduce((text, [term, reading]) => text.replaceAll(normalizeText(term), reading), compactText);
}

function transcriptToComparableReading(spokenRaw, question) {
  const spokenText = normalizeText(spokenRaw);
  if (spokenText === normalizeText(question.sentence)) {
    return normalizeReading(question.reading);
  }
  return normalizeReading(replaceKnownTermsWithReadings(spokenRaw));
}

function createSpeakButton(text, className, datasetKey) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = text;
  button.dataset.speak = TERM_READINGS[text] || text;
  button.dataset[datasetKey] = text;
  return button;
}

function renderGradeButtons() {
  gradeButtonsEl.innerHTML = "";
  Object.keys(QUESTION_SETS).forEach((grade) => {
    const button = document.createElement("button");
    button.className = "grade-button";
    button.type = "button";
    button.textContent = `${grade}年生`;
    button.dataset.grade = grade;
    gradeButtonsEl.append(button);
  });
}

function selectGrade(grade) {
  state.grade = Number(grade);
  state.questions = QUESTION_SETS[state.grade] || [];
  state.index = 0;
  state.attempts = 0;
  state.totalScore = 0;
  state.resultApplied = false;
  state.discardCurrentRecognition = false;
  gradeLabelEl.textContent = `小学${state.grade}年生の漢字`;
  gradeScreenEl.hidden = true;
  practiceScreenEl.hidden = false;
  renderQuestion();
  startListeningSoon();
}

function showGradeScreen() {
  cancelAutoStart();
  if (state.listening) {
    state.discardCurrentRecognition = true;
    if (USE_SERVER_TRANSCRIPTION && state.mediaRecorder?.state !== "inactive") {
      state.mediaRecorder.stop();
    } else if (state.recognition) {
      state.recognition.abort();
    }
  }
  window.speechSynthesis?.cancel();
  stopMicMeter();
  setListeningUi(false);
  practiceScreenEl.hidden = true;
  gradeScreenEl.hidden = false;
}

function renderSentence(question) {
  const terms = Object.keys(question.terms).sort((a, b) => b.length - a.length);
  const fragment = document.createDocumentFragment();
  let index = 0;

  while (index < question.sentence.length) {
    const term = terms.find((candidate) => question.sentence.startsWith(candidate, index));

    if (term) {
      fragment.append(createSpeakButton(term, "term", "term"));
      index += term.length;
      continue;
    }

    const char = question.sentence[index];
    fragment.append(document.createTextNode(char));
    index += 1;
  }

  sentenceEl.replaceChildren(fragment);
}

function renderWords(question) {
  wordListEl.innerHTML = "";
  Object.entries(question.terms).forEach(([term, meaning]) => {
    const button = document.createElement("button");
    button.className = "word-button";
    button.type = "button";
    button.textContent = term;
    button.dataset.term = term;
    button.dataset.meaning = meaning;
    wordListEl.append(button);
  });
  meaningBoxEl.textContent = "語句をタップすると、意味がここに出ます。";
}

function showMeaning(term) {
  const question = state.questions[state.index];
  const meaning = question.terms[term];
  if (!meaning) return;

  const reading = TERM_READINGS[term];
  meaningBoxEl.innerHTML = `<strong>${term}</strong>${reading ? `（${reading}）` : ""}<br>${meaning}`;
  document.querySelectorAll(".word-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.term === term);
  });
  speakTerm(reading || term);
}

function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  state.voices = window.speechSynthesis.getVoices();
}

function findJapaneseVoice() {
  return state.voices.find((voice) => voice.lang === "ja-JP")
    || state.voices.find((voice) => voice.lang?.startsWith("ja"))
    || null;
}

function speakTerm(term) {
  if (!("speechSynthesis" in window)) {
    meaningBoxEl.innerHTML += "<br><small>このブラウザは読み上げに対応していません。</small>";
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(term);
  const voice = findJapaneseVoice();
  utterance.lang = "ja-JP";
  utterance.rate = 0.78;
  utterance.pitch = 1.05;
  utterance.volume = 1;
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function renderQuestion() {
  const question = state.questions[state.index];
  if (!question) return;
  renderSentence(question);
  renderWords(question);
  recognizedEl.textContent = "まだ読んでいません";
  feedbackEl.textContent = "文章を読んだら、まちがえた所をここに表示します。";
  questionCountEl.textContent = `${state.index + 1} / ${state.questions.length}`;
  progressBarEl.style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  updateScore();
}

function resetCurrentAttempt(message) {
  const question = state.questions[state.index];
  renderSentence(question);
  renderWords(question);
  state.finalTranscripts = [];
  state.interimTranscript = "";
  state.resultApplied = false;
  state.discardCurrentRecognition = false;
  recognizedEl.textContent = "まだ読んでいません";
  feedbackEl.textContent = message || "文章を読んだら、まちがえた所をここに表示します。";
}

function compareReadings(question, spokenRaw) {
  const expectedRaw = question.reading;
  const expected = normalizeReading(expectedRaw);
  const spoken = transcriptToComparableReading(spokenRaw, question);
  const max = Math.max(expected.length, spoken.length);
  let correct = 0;
  const chunks = [];

  for (let i = 0; i < max; i += 1) {
    const displayChar = expectedRaw[i] || "□";
    const expectedChar = expected[i] || "□";
    const spokenChar = spoken[i] || "□";
    if (expectedChar === spokenChar) {
      correct += 1;
      chunks.push(`<span class="match">${displayChar}</span>`);
    } else {
      chunks.push(`<span class="miss" title="聞こえた音: ${spokenChar}">${displayChar}</span>`);
    }
  }

  return {
    percent: expected.length ? Math.round((correct / expected.length) * 100) : 0,
    html: chunks.join(""),
    perfect: expected === spoken
  };
}

function updateScore() {
  if (state.attempts === 0) {
    scoreEl.textContent = "--%";
    return;
  }
  scoreEl.textContent = `${Math.round(state.totalScore / state.attempts)}%`;
}

function applyResult(transcript) {
  if (state.resultApplied) return;
  const question = state.questions[state.index];
  const result = compareReadings(question, transcript);
  state.resultApplied = true;
  state.attempts += 1;
  state.totalScore += result.percent;

  recognizedEl.textContent = transcript || "聞き取れませんでした";
  feedbackEl.innerHTML = result.perfect
    ? `よく読めました。正解の読みは「${question.reading}」です。`
    : `赤い文字のあたりをもう一度練習しよう。<br>${result.html}<br><small>正解: ${question.reading}</small>`;
  updateScore();
}

function setListeningUi(isListening) {
  state.listening = isListening;
  listenButton.disabled = isListening || state.transcribing;
  stopButton.disabled = !isListening || state.transcribing;
  nextButton.disabled = isListening || state.transcribing;
  changeGradeButton.disabled = isListening || state.transcribing;
  listenButton.classList.toggle("listening", isListening);
  listenButton.innerHTML = isListening
    ? '<span class="mic-dot" aria-hidden="true"></span>聞き取り中...'
    : '<span class="mic-dot" aria-hidden="true"></span>聞き取り開始';
}

function setTranscribingUi(isTranscribing) {
  state.transcribing = isTranscribing;
  listenButton.disabled = isTranscribing || state.listening;
  stopButton.disabled = isTranscribing || !state.listening;
  nextButton.disabled = isTranscribing || state.listening;
  changeGradeButton.disabled = isTranscribing || state.listening;
  if (isTranscribing) {
    listenButton.innerHTML = '<span class="mic-dot" aria-hidden="true"></span>判定中...';
    recognizedEl.textContent = "音声を文字にしています...";
    micStatusEl.textContent = "判定中...";
  } else if (!state.listening) {
    listenButton.innerHTML = '<span class="mic-dot" aria-hidden="true"></span>聞き取り開始';
  }
}

function chooseRecordingMimeType() {
  if (!("MediaRecorder" in window)) return "";
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/mp4",
    "audio/webm",
    "audio/ogg;codecs=opus"
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported?.(type)) || "";
}

function extensionForMimeType(type) {
  if (type.includes("mp4")) return "m4a";
  if (type.includes("ogg")) return "ogg";
  if (type.includes("wav")) return "wav";
  return "webm";
}

async function startMobileRecording() {
  if (state.listening || state.transcribing || practiceScreenEl.hidden) return;
  if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) {
    feedbackEl.textContent = "このスマホでは録音機能を利用できません。OSとブラウザを最新版にして、もう一度試してください。";
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });
    const mimeType = chooseRecordingMimeType();
    const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);

    state.micStream = stream;
    state.mediaRecorder = recorder;
    state.recordedChunks = [];
    state.recordingMimeType = recorder.mimeType || mimeType || "audio/webm";
    state.resultApplied = false;
    state.discardCurrentRecognition = false;
    state.speechHeard = false;
    state.lastVoiceTime = 0;

    recorder.addEventListener("dataavailable", (event) => {
      if (event.data?.size) state.recordedChunks.push(event.data);
    });

    recorder.addEventListener("stop", async () => {
      const chunks = state.recordedChunks.slice();
      const mime = state.recordingMimeType || "audio/webm";
      const speechHeard = state.speechHeard;
      state.mediaRecorder = null;
      state.recordedChunks = [];
      stopMicMeter();
      setListeningUi(false);

      if (state.discardCurrentRecognition) {
        setTranscribingUi(false);
        resetCurrentAttempt("語句を確認したので、この問題を最初からやり直しましょう。");
        return;
      }

      if (!chunks.length || !speechHeard) {
        setTranscribingUi(false);
        recognizedEl.textContent = "聞き取れませんでした";
        feedbackEl.textContent = "声が検出されませんでした。もう一度、少し大きめの声で読んでください。";
        return;
      }

      const audioBlob = new Blob(chunks, { type: mime });
      await transcribeRecordedAudio(audioBlob, mime);
    });

    setListeningUi(true);
    recognizedEl.textContent = "聞き取り中...";
    feedbackEl.textContent = "読み終わると、約2秒の無音で自動判定します。すぐ判定したい時は「読み終わった」を押してください。";
    startMicMeter(stream);
    recorder.start(250);

    state.listenTimer = window.setTimeout(() => {
      if (state.listening) stopMobileRecording();
    }, MOBILE_MAX_RECORDING_MS);
  } catch (error) {
    stopMicMeter();
    setListeningUi(false);
    const name = error?.name || "";
    feedbackEl.textContent = name === "NotAllowedError"
      ? "マイクの使用が許可されていません。ブラウザのサイト設定でマイクを許可してください。"
      : `録音を開始できませんでした。もう一度試してください。${name ? `（${name}）` : ""}`;
  }
}

function stopMobileRecording() {
  window.clearTimeout(state.listenTimer);
  state.listenTimer = null;
  if (!state.mediaRecorder || state.mediaRecorder.state === "inactive") return;
  setTranscribingUi(true);
  try {
    state.mediaRecorder.stop();
  } catch (error) {
    stopMicMeter();
    setListeningUi(false);
    setTranscribingUi(false);
    feedbackEl.textContent = "録音を終了できませんでした。もう一度試してください。";
  }
}

async function transcribeRecordedAudio(audioBlob, mimeType) {
  setTranscribingUi(true);
  try {
    const formData = new FormData();
    const extension = extensionForMimeType(mimeType);
    formData.append("file", audioBlob, `reading.${extension}`);

    const response = await fetch(TRANSCRIBE_ENDPOINT, {
      method: "POST",
      body: formData
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload.error || `文字起こしAPIでエラーが発生しました（${response.status}）`);
    }

    const transcript = String(payload.text || "").trim();
    if (!transcript) {
      recognizedEl.textContent = "聞き取れませんでした";
      feedbackEl.textContent = "音声は届きましたが、読みを文字にできませんでした。もう一度試してください。";
      return;
    }

    applyResult(transcript);
  } catch (error) {
    recognizedEl.textContent = "判定できませんでした";
    feedbackEl.textContent = `音声の判定に失敗しました。${error?.message || "通信状態を確認して、もう一度試してください。"}`;
  } finally {
    setTranscribingUi(false);
  }
}

function startListening() {
  if (USE_SERVER_TRANSCRIPTION) {
    startMobileRecording();
    return;
  }
  if (!state.recognition || state.listening || state.transcribing || practiceScreenEl.hidden) return;
  try {
    state.recognition.start();
  } catch (error) {
    feedbackEl.textContent = "聞き取りを開始できませんでした。少し待ってからもう一度押してください。";
  }
}

function currentTranscript() {
  return [...state.finalTranscripts, state.interimTranscript].join(" ").trim();
}

function readingProgressRatio(transcript) {
  const question = state.questions[state.index];
  if (!question || !transcript) return 0;
  const expectedLength = normalizeReading(question.reading).length;
  const spokenLength = transcriptToComparableReading(transcript, question).length;
  return expectedLength ? Math.min(1, spokenLength / expectedLength) : 0;
}

function silenceLimitForTranscript(transcript) {
  return readingProgressRatio(transcript) >= 0.8 ? 900 : 3500;
}

function startListeningSoon() {
  cancelAutoStart();
  if (MOBILE_SPEECH_MODE) {
    startListening();
    return;
  }
  state.autoStartTimer = window.setTimeout(() => {
    state.autoStartTimer = null;
    startListening();
  }, 350);
}

function cancelAutoStart() {
  window.clearTimeout(state.autoStartTimer);
  state.autoStartTimer = null;
}

function stopMicMeter() {
  if (state.meterFrame) {
    cancelAnimationFrame(state.meterFrame);
    state.meterFrame = null;
  }
  if (state.micStream) {
    state.micStream.getTracks().forEach((track) => track.stop());
    state.micStream = null;
  }
  if (state.audioContext) {
    state.audioContext.close();
    state.audioContext = null;
  }
  state.analyser = null;
  state.speechHeard = false;
  state.lastVoiceTime = 0;
  levelBarEl.style.width = "0";
  micStatusEl.textContent = "マイク待機中";
}

async function startMicMeter(existingStream = null) {
  if (!navigator.mediaDevices?.getUserMedia && !existingStream) return;

  try {
    if (!existingStream) {
      state.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } else {
      state.micStream = existingStream;
    }
    state.audioContext = new AudioContext();
    if (state.audioContext.state === "suspended") {
      await state.audioContext.resume().catch(() => {});
    }
    const source = state.audioContext.createMediaStreamSource(state.micStream);
    state.analyser = state.audioContext.createAnalyser();
    state.analyser.fftSize = 256;
    source.connect(state.analyser);
    const data = new Uint8Array(state.analyser.frequencyBinCount);

    const draw = () => {
      if (!state.analyser) return;
      state.analyser.getByteTimeDomainData(data);
      let sum = 0;
      for (const value of data) {
        const centered = value - 128;
        sum += centered * centered;
      }
      const rms = Math.sqrt(sum / data.length);
      const level = Math.min(100, Math.round(rms * 5));
      const now = Date.now();
      levelBarEl.style.width = `${level}%`;
      micStatusEl.textContent = level > 8 ? "マイク入力あり" : "声を待っています";
      if (level > 8) {
        state.speechHeard = true;
        state.lastVoiceTime = now;
      }

      if (USE_SERVER_TRANSCRIPTION) {
        if (
          state.listening &&
          state.speechHeard &&
          state.mediaRecorder?.state === "recording" &&
          now - state.lastVoiceTime >= MOBILE_SILENCE_STOP_MS
        ) {
          stopMobileRecording();
          return;
        }
      } else {
        const transcript = currentTranscript();
        if (state.listening && state.speechHeard && transcript && now - state.lastVoiceTime > silenceLimitForTranscript(transcript)) {
          state.recognition.stop();
          return;
        }
      }
      state.meterFrame = requestAnimationFrame(draw);
    };
    draw();
  } catch (error) {
    micStatusEl.textContent = "マイク入力を確認できません";
  }
}

function finishListening() {
  window.clearTimeout(state.listenTimer);
  state.listenTimer = null;
  stopMicMeter();
  setListeningUi(false);

  if (state.discardCurrentRecognition) {
    resetCurrentAttempt("語句を確認したので、この問題を最初からやり直しましょう。");
    return;
  }

  const transcript = currentTranscript();
  if (transcript && !state.resultApplied) {
    applyResult(transcript);
  }
}

function cancelAttemptForWordHelp() {
  cancelAutoStart();

  if (USE_SERVER_TRANSCRIPTION) {
    if (!state.listening || !state.mediaRecorder) return false;
    state.discardCurrentRecognition = true;
    window.clearTimeout(state.listenTimer);
    state.listenTimer = null;
    window.speechSynthesis?.cancel();
    if (state.mediaRecorder.state !== "inactive") state.mediaRecorder.stop();
    return true;
  }

  if (!state.listening || !state.recognition) return false;
  state.discardCurrentRecognition = true;
  window.clearTimeout(state.listenTimer);
  stopMicMeter();
  setListeningUi(false);
  window.speechSynthesis?.cancel();
  state.recognition.abort();
  return true;
}

function setupSpeechRecognition() {
  if (USE_SERVER_TRANSCRIPTION) {
    return;
  }
  if (!SpeechRecognition) {
    listenButton.disabled = true;
    feedbackEl.textContent = "このブラウザは音声認識に対応していません。Chrome または Edge で開いてください。";
    return;
  }

  state.recognition = new SpeechRecognition();
  state.recognition.lang = "ja-JP";
  state.recognition.continuous = !MOBILE_SPEECH_MODE;
  state.recognition.interimResults = !MOBILE_SPEECH_MODE;
  state.recognition.maxAlternatives = 1;

  state.recognition.addEventListener("start", () => {
    setListeningUi(true);
    state.finalTranscripts = [];
    state.interimTranscript = "";
    state.resultApplied = false;
    state.discardCurrentRecognition = false;
    recognizedEl.textContent = "聞き取り中...";
    feedbackEl.textContent = "読み終わったら自動で止まります。すぐ判定したい時は「読み終わった」を押してください。";
    startMicMeter();
    state.listenTimer = window.setTimeout(() => {
      if (state.listening) {
        state.recognition.stop();
      }
    }, 10000);
  });

  state.recognition.addEventListener("result", (event) => {
    state.interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const transcript = event.results[i][0].transcript.trim();
      if (event.results[i].isFinal) {
        state.finalTranscripts[i] = transcript;
      } else {
        state.interimTranscript += transcript;
      }
    }
    const transcript = currentTranscript();
    recognizedEl.textContent = transcript || "聞き取り中...";
    if (transcript) {
      state.speechHeard = true;
      state.lastVoiceTime = Date.now();
    }
    if (transcript && compareReadings(state.questions[state.index], transcript).perfect) {
      applyResult(transcript);
      state.recognition.stop();
    }
  });

  state.recognition.addEventListener("error", (event) => {
    window.clearTimeout(state.listenTimer);
    stopMicMeter();
    setListeningUi(false);
    if (state.discardCurrentRecognition) {
      resetCurrentAttempt("語句を確認したので、この問題を最初からやり直しましょう。");
      return;
    }
    const transcript = currentTranscript();
    if (transcript) {
      applyResult(transcript);
      return;
    }
    feedbackEl.textContent = `${SPEECH_ERRORS[event.error] || "うまく聞き取れませんでした。もう一度試してください。"}（${event.error}）`;
  });

  state.recognition.addEventListener("end", () => {
    finishListening();
  });
}

listenButton.addEventListener("click", () => {
  startListening();
});

stopButton.addEventListener("click", () => {
  if (USE_SERVER_TRANSCRIPTION) {
    stopMobileRecording();
    return;
  }
  if (!state.recognition || !state.listening) return;
  state.recognition.stop();
});

nextButton.addEventListener("click", () => {
  cancelAutoStart();
  window.speechSynthesis?.cancel();
  if (state.listening) {
    state.discardCurrentRecognition = true;
    if (USE_SERVER_TRANSCRIPTION && state.mediaRecorder?.state !== "inactive") {
      state.mediaRecorder.stop();
    } else if (state.recognition) {
      state.recognition.abort();
    }
  }
  stopMicMeter();
  setListeningUi(false);
  state.index = (state.index + 1) % state.questions.length;
  state.resultApplied = false;
  state.discardCurrentRecognition = false;
  renderQuestion();
  startListeningSoon();
});

changeGradeButton.addEventListener("click", showGradeScreen);

gradeButtonsEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-grade]");
  if (!button) return;
  selectGrade(button.dataset.grade);
});

document.addEventListener("click", (event) => {
  const termButton = event.target.closest("[data-term]");
  if (termButton) {
    const wasListening = cancelAttemptForWordHelp();
    window.setTimeout(() => showMeaning(termButton.dataset.term), wasListening ? 250 : 0);
    return;
  }

  const speakButton = event.target.closest("[data-speak]");
  if (!speakButton) return;
  const wasListening = cancelAttemptForWordHelp();
  window.setTimeout(() => speakTerm(speakButton.dataset.speak), wasListening ? 250 : 0);
});

if ("speechSynthesis" in window) {
  refreshVoices();
  window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
}

setupSpeechRecognition();
renderGradeButtons();

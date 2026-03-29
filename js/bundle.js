// --- data.js ---
const geographyMaster = [
  {
    "geoId": "river_shinano",
    "name": "信濃川",
    "kana": "しなのがわ",
    "type": "river",
    "charName": "シアン・ストリーム",
    "charImage": "assets/avatars/avatar_shinano_river_ssr_v2.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "日本最長の大動脈、越後平野を潤す恵みの水",
    "stats": {
      "長さ": "367km (全国1位)",
      "流域面積": "11,900km² (全国3位)"
    },
    "charStats": {
      "power": 65,
      "defense": 45,
      "speed": 85
    },
    "relatedKeywords": [
      "越後平野",
      "稲作",
      "大河津分水路"
    ],
    "dummyKanji": [
      "農",
      "阿",
      "賀",
      "木",
      "曽",
      "天",
      "竜",
      "黒",
      "部"
    ],
    "hiddenFacts": [
      "Lv2: 大河津分水路は1922年完成。越後平野を洪水から守った",
      "Lv3: 河口の港町は新潟市。日本海側に注ぐ",
      "Lv4: 元は山梨県長野市内が発源。信濃国(長野県)から名前がつく",
      "Lv5: 中流部の新潟平野仙田市付近では「姫川」と呼ばれる"
    ]
  },
  {
    "geoId": "range_hida",
    "name": "飛騨山脈",
    "kana": "ひださんみゃく",
    "type": "mountain",
    "charName": "ハイダ・ピーク",
    "charImage": "assets/avatars/avatar_hida_range_ssr_v2.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "『北アルプス』の別名を持つ、3000m級の巨峰群",
    "stats": {
      "最高峰": "穂高岳 (3,190m)",
      "通称": "北アルプス"
    },
    "charStats": {
      "power": 95,
      "defense": 92,
      "speed": 28
    },
    "relatedKeywords": [
      "氷河地形",
      "中部山岳国立公園"
    ],
    "dummyKanji": [
      "弾",
      "木",
      "曽",
      "赤",
      "石",
      "白",
      "山",
      "御",
      "嶽"
    ],
    "hiddenFacts": [
      "Lv2: 木曽山脈(中央アルプス)・赤石山脈(南アルプス)と併せて「日本アルプス」と呼ぶ",
      "Lv3: 沖山カール・上高地歩きなどの氷河地形が現在も確認できる",
      "Lv4: 樹木限界は標高約2,500m。それ以上は高山植物帯",
      "Lv5: 北アルプスの山水温泉(沢温泉等)は登山者の皇潤となっている"
    ]
  },
  {
    "geoId": "coast_sanriku",
    "name": "三陸海岸",
    "kana": "さんりくかいがん",
    "type": "coast",
    "charName": "シルヴァ・リアス",
    "charImage": "assets/avatars/avatar_ice_1773059882411.png",
    "region": "tohoku",
    "rarity": "SSR",
    "flavorText": "入り組んだ地形がもたらす豊かな漁場",
    "stats": {
      "地形": "リアス海岸",
      "海流": "親潮と黒潮の潮目"
    },
    "charStats": {
      "power": 72,
      "defense": 65,
      "speed": 58
    },
    "relatedKeywords": [
      "養殖業",
      "東日本大震災",
      "津波"
    ],
    "dummyKanji": [
      "三",
      "陸",
      "志",
      "摩",
      "若",
      "狭",
      "九",
      "十",
      "九",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 南部(山田県等)はリアス海岸、北部(青森県)は単射海岸",
      "Lv3: 魚類が豊富な理由は親潮と黒潮の潮目が行き交い切り帯になるため",
      "Lv4: たこ(山田港など)やほたていの養殖が盛ん。座効な番所",
      "Lv5: 2011年東日本大震災の津波は最大40m超。防潮堤整備が現在も続く"
    ]
  },
  {
    "geoId": "lake_biwa",
    "name": "琵琶湖",
    "kana": "びわこ",
    "type": "lake",
    "charName": "アクア・ビワ",
    "charImage": "assets/avatars/avatar_biwa_ssr.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "日本最大の湖、近畿の水瓶として40万人の命を支える",
    "stats": {
      "面積": "670km² (全国1位)",
      "貯水量": "275億m³"
    },
    "charStats": {
      "power": 45,
      "defense": 82,
      "speed": 35
    },
    "relatedKeywords": [
      "近畿の水瓶",
      "固有種",
      "琵琶湖疏水"
    ],
    "dummyKanji": [
      "霞",
      "ヶ",
      "浦",
      "サ",
      "ロ",
      "マ",
      "摩",
      "周",
      "猪",
      "苗",
      "代"
    ],
    "hiddenFacts": [
      "Lv2: 滋賀県の面積の約6分の1を占める",
      "Lv3: 約400万年前に誕生した古代湖の一つ",
      "Lv4: 淀川となって大阪湾に流れる",
      "Lv5: ビワコオオナマズなどの固有種が60種以上生息"
    ]
  },
  {
    "geoId": "plain_kanto",
    "name": "関東平野",
    "kana": "かんとうへいや",
    "type": "plain",
    "charName": "テラ・カントウ",
    "charImage": "assets/avatars/avatar_terra_kanto_1773578013588.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "日本一の広さを誇る平野、首都圏の基盤",
    "stats": {
      "面積": "17,000km² (全国1位)",
      "土壌": "関東ローム層"
    },
    "charStats": {
      "power": 62,
      "defense": 75,
      "speed": 48
    },
    "relatedKeywords": [
      "利根川",
      "近郊農業",
      "ヒートアイランド現象"
    ],
    "dummyKanji": [
      "濃",
      "尾",
      "石",
      "狩",
      "越",
      "後",
      "筑",
      "紫",
      "十",
      "勝"
    ],
    "hiddenFacts": [
      "Lv2: 富士山などの火山灰が積もった『関東ローム層』が広がる",
      "Lv3: 日本最大の流域面積を持つ利根川が流れる",
      "Lv4: 冬には北西からの季節風『からっ風』が吹く",
      "Lv5: 多くの台地と低地が組み合わさった地形"
    ]
  },
  {
    "geoId": "river_tone",
    "name": "利根川",
    "kana": "とねがわ",
    "type": "river",
    "charName": "トネ・ストリーム",
    "charImage": "assets/avatars/avatar_tone_river_ssr_v2.png",
    "region": "kanto",
    "rarity": "SSR",
    "flavorText": "『坂東太郎』との異名を持つ、日本最大の流域面積を誇る川",
    "stats": {
      "長さ": "322km (全国2位)",
      "流域面積": "16,840km² (全国1位)"
    },
    "charStats": {
      "power": 78,
      "defense": 52,
      "speed": 82
    },
    "relatedKeywords": [
      "坂東太郎",
      "関東平野",
      "水郷"
    ],
    "dummyKanji": [
      "信",
      "濃",
      "阿",
      "賀",
      "木",
      "曽",
      "筑",
      "後",
      "淀"
    ],
    "hiddenFacts": [
      "Lv2: かつては東京湾に流れていたが、江戸時代に東へ移された（利根川の東遷）",
      "Lv3: 千葉県の銚子市で太平洋に注ぐ",
      "Lv4: 上流には八ッ場ダムなどの多くのダムがある",
      "Lv5: 流域の市町村数は日本一"
    ]
  },
  {
    "geoId": "river_mogami",
    "name": "最上川",
    "kana": "もがみがわ",
    "type": "river",
    "charName": "モガミ・アース",
    "charImage": "assets/avatars/avatar_shinano_river_1773615130219.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "山形県を縦断し日本海へ注ぐ、日本三大急流の一つ",
    "stats": {
      "長さ": "229km",
      "通称": "日本三大急流"
    },
    "charStats": {
      "power": 62,
      "defense": 42,
      "speed": 88
    },
    "relatedKeywords": [
      "山形県",
      "庄内平野",
      "松尾芭蕉"
    ],
    "dummyKanji": [
      "球",
      "磨",
      "富士",
      "信",
      "濃",
      "阿",
      "賀"
    ],
    "hiddenFacts": [
      "Lv2: 一つの県（山形県）のみを流れる川としては日本最長級",
      "Lv3: 松尾芭蕉が『五月雨を あつめて早し 最上川』と詠んだ",
      "Lv4: 庄内平野の稲作に欠かせない水源",
      "Lv5: かつては舟運が盛んで、紅花などが運ばれた"
    ]
  },
  {
    "geoId": "plain_ishikari",
    "name": "石狩平野",
    "kana": "いしかりへいや",
    "type": "plain",
    "charName": "イシカリ・ランド",
    "charImage": "assets/avatars/avatar_ishikari_land_1773578076906.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "北海道西部に広がる広大な平野、大規模な稲作が行われる",
    "stats": {
      "面積": "約3,800km²",
      "主要都市": "札幌市"
    },
    "charStats": {
      "power": 58,
      "defense": 65,
      "speed": 42
    },
    "relatedKeywords": [
      "泥炭地",
      "客土",
      "石狩川"
    ],
    "dummyKanji": [
      "十",
      "勝",
      "根",
      "釧",
      "筑",
      "紫",
      "佐",
      "賀"
    ],
    "hiddenFacts": [
      "Lv2: もともとは泥炭地という湿地で農業に不向きだった",
      "Lv3: 他の土地から土を持ってくる『客土』によって豊かな農地になった",
      "Lv4: 石狩川の三日月湖が多く残っている",
      "Lv5: 札幌・千歳・小樽などの主要都市が集中している"
    ]
  },
  {
    "geoId": "peak_fuji",
    "name": "富士山",
    "kana": "ふじさん",
    "type": "mountain",
    "charName": "マウント・フジ",
    "charImage": "assets/avatars/avatar_fire_1773535917004.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "日本の象徴、標高3776mの独立最高峰",
    "stats": {
      "標高": "3,776m (日本一)",
      "山容": "成層火山"
    },
    "charStats": {
      "power": 100,
      "defense": 88,
      "speed": 35
    },
    "relatedKeywords": [
      "世界遺産",
      "独立峰",
      "フォッサマグナ"
    ],
    "dummyKanji": [
      "剣",
      "北",
      "南",
      "中",
      "阿",
      "蘇",
      "白",
      "山",
      "立",
      "山"
    ],
    "hiddenFacts": [
      "Lv2: 山頂は静岡県と山梨県のどちらにも属さない境界未定地がある",
      "Lv3: 数百年前には大きな噴火（宝永噴火）があった",
      "Lv4: 豊富な伏流水があり、麓では湧水が有名",
      "Lv5: 日本の三名山の一つでもある"
    ]
  },
  {
    "geoId": "range_ou",
    "name": "奥羽山脈",
    "kana": "おううさんみゃく",
    "type": "mountain",
    "charName": "オウウ・スパイン",
    "charImage": "assets/avatars/avatar_ouu_range_ssr_v2.png",
    "region": "tohoku",
    "rarity": "SSR",
    "flavorText": "東北の背骨、冷たい『やませ』をせき止める壁",
    "stats": {
      "延長": "約500km (日本最長)",
      "最高峰": "岩手山 (2,038m)"
    },
    "charStats": {
      "power": 88,
      "defense": 92,
      "speed": 28
    },
    "relatedKeywords": [
      "背骨",
      "やませ",
      "気候の境界",
      "分水嶺"
    ],
    "dummyKanji": [
      "羽",
      "出",
      "北",
      "上",
      "阿",
      "武",
      "隈",
      "白",
      "神"
    ],
    "hiddenFacts": [
      "Lv2: 東日本の太平洋側と日本海側の気候を分ける重要な境界線",
      "Lv3: 火山が多く、温泉地も多数存在する",
      "Lv4: かつては交通の難所だったが、現在はトンネルが貫通している",
      "Lv5: 日本最大の延長を誇る陸上の山脈"
    ]
  },
  {
    "geoId": "range_kiso",
    "name": "木曽山脈",
    "kana": "きそさんみゃく",
    "type": "mountain",
    "charName": "キソ・リッジ",
    "charImage": "assets/avatars/avatar_kiso_range_sr_v2.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "中央アルプス、伊那盆地を眼下に見下ろす連峰",
    "stats": {
      "最高峰": "木曽駒ヶ岳 (2,956m)",
      "通称": "中央アルプス"
    },
    "charStats": {
      "power": 82,
      "defense": 78,
      "speed": 42
    },
    "relatedKeywords": [
      "中央アルプス",
      "伊那盆地",
      "天竜川"
    ],
    "dummyKanji": [
      "曾",
      "飛",
      "騨",
      "赤",
      "石",
      "南",
      "北",
      "中",
      "央"
    ],
    "hiddenFacts": [
      "Lv2: 天竜川と木曽川に挟まれた険しい山脈",
      "Lv3: 駒ヶ岳ロープウェイで一気に2,600m超まで登れる",
      "Lv4: 日本アルプスの一つとして数えられる",
      "Lv5: 花崗岩が多く、白い岩肌が特徴的"
    ]
  },
  {
    "geoId": "range_akaishi",
    "name": "赤石山脈",
    "kana": "あかいしさんみゃく",
    "type": "mountain",
    "charName": "アカイシ・ウォール",
    "charImage": "assets/avatars/avatar_akaishisan_sr.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "南アルプス、鋭くそびえる『南の巨壁』",
    "stats": {
      "最高峰": "北岳 (3,193m)",
      "通称": "南アルプス"
    },
    "charStats": {
      "power": 89,
      "defense": 95,
      "speed": 22
    },
    "relatedKeywords": [
      "南アルプス",
      "北岳",
      "大井川"
    ],
    "dummyKanji": [
      "飛",
      "騨",
      "木",
      "曽",
      "中央",
      "富士",
      "箱",
      "根",
      "伊",
      "豆"
    ],
    "hiddenFacts": [
      "Lv2: 最高峰の北岳は日本で2番目に高い山",
      "Lv3: 他のアルプスと比べて隆起速度が非常に速い",
      "Lv4: 険しい地形のため、大規模な登山技術が必要とされる",
      "Lv5: 南端は静岡県の駿河湾付近まで伸びている"
    ]
  },
  {
    "geoId": "basin_kofu",
    "name": "甲府盆地",
    "kana": "こうふぼんち",
    "type": "basin",
    "charName": "コウフ・ベイスン",
    "charImage": "assets/avatars/avatar_kofubasin_sr.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "扇状地が広がる果実の王国、武田信玄の故郷",
    "stats": {
      "特色": "ぶどう・桃の生産日本一",
      "地形": "扇状地が発達"
    },
    "charStats": {
      "power": 45,
      "defense": 55,
      "speed": 72
    },
    "relatedKeywords": [
      "扇状地",
      "果樹栽培",
      "ぶどう",
      "甲州"
    ],
    "dummyKanji": [
      "府",
      "神",
      "戸",
      "福",
      "島",
      "山",
      "形",
      "長",
      "野"
    ],
    "hiddenFacts": [
      "Lv2: 夏は非常に暑く、最高気温の記録が出やすい",
      "Lv3: 水はけの良い扇状地を利用した果樹栽培が盛ん",
      "Lv4: 武田信玄の拠点であり、歴史的な遺構も多い",
      "Lv5: 富士山の北側に位置し、美しい眺望が楽しめる"
    ]
  },
  {
    "geoId": "basin_kyoto",
    "name": "京都盆地",
    "kana": "きょうとぼんち",
    "type": "basin",
    "charName": "キョウト・ミスト",
    "charImage": "assets/avatars/avatar_kyoto_basin_sr.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "三方を山に囲まれた古都、夏は蒸し暑く冬は冷え込む",
    "stats": {
      "特色": "盆地特有の気候",
      "河川": "淀川水系"
    },
    "charStats": {
      "power": 35,
      "defense": 78,
      "speed": 55
    },
    "relatedKeywords": [
      "古都",
      "盆地特有の気候",
      "内陸性気候"
    ],
    "dummyKanji": [
      "奈",
      "良",
      "近",
      "江",
      "滋",
      "賀",
      "都",
      "京",
      "阪"
    ],
    "hiddenFacts": [
      "Lv2: 古都京都の街並みを守るため、景観条例が厳しい",
      "Lv3: 夏の『京の底冷え』と呼ばれる独特の寒さがある",
      "Lv4: 鴨川や桂川が流れ、豊かな水資源に恵まれている",
      "Lv5: 伝統工緯や茶道などの文化が今も色濃く残る"
    ]
  },
  {
    "geoId": "range_kitakami",
    "name": "北上高地",
    "kana": "きたかみこうち",
    "type": "highland",
    "charName": "キタカミ-プレイス",
    "charImage": "assets/avatars/avatar_earth_v2_1773536009354.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "東北東部の古い隆起準平原、リアス海岸の背後に連なる",
    "stats": {
      "地形": "隆起準平原",
      "気候": "冷涼 (やませの影響)"
    },
    "charStats": {
      "power": 42,
      "defense": 65,
      "speed": 48
    },
    "relatedKeywords": [
      "隆起準平原",
      "リアス海岸",
      "三陸"
    ],
    "dummyKanji": [
      "山",
      "脈",
      "奥",
      "羽",
      "出",
      "下",
      "上",
      "南",
      "西"
    ],
    "hiddenFacts": [
      "Lv2: 古い地層が隆起してできた、なだらかな地形が特徴",
      "Lv3: リアス海岸が発達した三陸海岸の背後に位置する",
      "Lv4: 酪農や林業が盛んなエリアでもある",
      "Lv5: 地質学的に非常に古い岩石が見られる"
    ]
  },
  {
    "geoId": "range_dewa",
    "name": "出羽山地",
    "kana": "でわさんち",
    "type": "mountain",
    "charName": "デワ-フォレスト",
    "charImage": "assets/avatars/avatar_dewasan_r.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "山形県を南北に走る山地、日本海からの風を遮る",
    "stats": {
      "位置": "山形県中央部",
      "信仰": "出羽三山"
    },
    "charStats": {
      "power": 55,
      "defense": 62,
      "speed": 38
    },
    "relatedKeywords": [
      "日本海側",
      "最上川",
      "庄内平野"
    ],
    "dummyKanji": [
      "羽",
      "奥",
      "羽",
      "阿",
      "武",
      "隈",
      "北",
      "上"
    ],
    "hiddenFacts": [
      "Lv2: 庄内平野を冬の強い季節風から守る役割がある",
      "Lv3: 出羽三山（月山・羽黒山・湯殿山）の信仰と深い関わりがある",
      "Lv4: 最上川が山地を切り裂いて日本海へと注ぐ",
      "Lv5: ブナの原生林が多く残されている"
    ]
  },
  {
    "geoId": "range_echigo",
    "name": "越後山脈",
    "kana": "えちごさんみゃく",
    "type": "mountain",
    "charName": "エチゴ-スノー",
    "charImage": "assets/avatars/avatar_echigosan_sr.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "日本有数の豪雪地帯、信濃川の源流域の一つ",
    "stats": {
      "気候": "日本有数の豪雪",
      "用途": "水力発電"
    },
    "charStats": {
      "power": 75,
      "defense": 82,
      "speed": 25
    },
    "relatedKeywords": [
      "雪解け水",
      "水力発電",
      "信濃川"
    ],
    "dummyKanji": [
      "超",
      "後",
      "期",
      "飛",
      "騨",
      "木",
      "曽",
      "赤",
      "石"
    ],
    "hiddenFacts": [
      "Lv2: 日本有数の豪雪地帯であり、冬の積雪量はトップクラス",
      "Lv3: 豊富な雪解け水を利用した水力発電所が多数ある",
      "Lv4: 魚沼産コシヒカリなどのブランド米を育む水源",
      "Lv5: 信濃川や阿賀野川の源流がこの山脈にある"
    ]
  },
  {
    "geoId": "peninsula_shima",
    "name": "志摩半島",
    "kana": "しまはんとう",
    "type": "peninsula",
    "charName": "シマ-アクア",
    "charImage": "assets/avatars/avatar_shimasan_sr.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "複雑なリアス海岸が続く、真珠養殖の発祥地",
    "stats": {
      "地形": "リアス海岸",
      "産業": "真珠養殖"
    },
    "charStats": {
      "power": 38,
      "defense": 52,
      "speed": 78
    },
    "relatedKeywords": [
      "真珠養殖",
      "英虞湾",
      "リアス海岸"
    ],
    "dummyKanji": [
      "島",
      "摩",
      "紀",
      "伊",
      "知",
      "多",
      "渥",
      "美",
      "能",
      "登"
    ],
    "hiddenFacts": [
      "Lv2: 英虞湾を中心とした複雑なリアス海岸が美しい",
      "Lv3: 世界で初めて真珠の養殖に成功した地として有名",
      "Lv4: 伊勢志摩国立公園の一部であり、観光客も多い",
      "Lv5: 海女（あま）漁の文化が今も継承されている"
    ]
  },
  {
    "geoId": "peninsula_kii",
    "name": "紀伊半島",
    "kana": "きいはんとう",
    "type": "peninsula",
    "charName": "キイ・フォレスト",
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "kinki",
    "rarity": "SSR",
    "flavorText": "日本最大、黒潮、林業、尾鷲",
    "stats": {
      "規模": "日本最大級の半島",
      "気候": "多雨地域"
    },
    "charStats": {
      "power": 85,
      "defense": 75,
      "speed": 55
    },
    "relatedKeywords": [
      "日本最大",
      "黒潮",
      "林業",
      "尾鷲"
    ],
    "dummyKanji": [
      "記",
      "伊",
      "志",
      "摩",
      "佐",
      "多",
      "岬",
      "室",
      "戸"
    ],
    "hiddenFacts": [
      "Lv2: 和歌山県、三重県、奈良県にまたがる広大な半島",
      "Lv3: 日本有数の多雨地帯であり、特に尾鷲市が有名",
      "Lv4: 紀伊山地の霊場と参詣道が世界遺産に登録されている",
      "Lv5: 温暖な気候を利用したミカンやウメの栽培が盛ん"
    ]
  },
  {
    "geoId": "channel_kiisuido",
    "name": "紀伊水道",
    "kana": "きいすいどう",
    "type": "channel",
    "charName": "キイ-ゲート",
    "charImage": "assets/avatars/avatar_kiichannel_r.png",
    "region": "kinki",
    "rarity": "R",
    "flavorText": "紀伊半島と四国の間の海域、鳴門の渦潮の近く",
    "stats": {
      "接続": "大阪湾と太平洋",
      "特徴": "豊かな漁場"
    },
    "charStats": {
      "power": 52,
      "defense": 38,
      "speed": 85
    },
    "relatedKeywords": [
      "徳島県",
      "和歌山県",
      "鳴門海峡"
    ],
    "dummyKanji": [
      "豊",
      "後",
      "鳴",
      "門",
      "明",
      "石",
      "海",
      "峡",
      "路"
    ],
    "hiddenFacts": [
      "Lv2: 紀伊半島と四国の間に位置する交通の要所",
      "Lv3: 鳴門海峡の渦潮で知られる荒々しい潮流が特徴",
      "Lv4: 漁業資源が豊富で、タイやアジなどの名産地",
      "Lv5: 大阪湾と太平洋を結ぶ大型船舶の重要な航路"
    ]
  },
  {
    "geoId": "bay_wakasa",
    "name": "若狭湾",
    "kana": "わかさわん",
    "type": "bay",
    "charName": "ワカサ-ブルー",
    "charImage": "assets/avatars/avatar_wakasabay_sr.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "日本海側最大のリアス海岸、古くは『御食国』",
    "stats": {
      "地形": "リアス海岸",
      "主要都市": "敦賀市"
    },
    "charStats": {
      "power": 45,
      "defense": 68,
      "speed": 62
    },
    "relatedKeywords": [
      "リアス海岸",
      "原子力発電所",
      "敦賀"
    ],
    "dummyKanji": [
      "伊",
      "勢",
      "富",
      "山",
      "大",
      "阪",
      "三",
      "河",
      "狭"
    ],
    "hiddenFacts": [
      "Lv2: 日本海側には珍しい、大規模なリアス海岸が広がる",
      "Lv3: 原子力発電所が集中しており、電力需要を支える側面がある",
      "Lv4: 歴史的には『御食国（みけつくに）』として京の食材を支えた",
      "Lv5: 敦賀港は古くから大陸との交易の玄関口として栄えた"
    ]
  },
  {
    "geoId": "plain_miyazaki",
    "name": "宮崎平野",
    "kana": "みやざきへいや",
    "type": "plain",
    "charName": "ミヤザキ-サン",
    "charImage": "assets/avatars/avatar_miyazaki_plain_r_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "黒潮の影響で温暖な平野、冬の促成栽培が盛ん",
    "stats": {
      "農業": "促成栽培 (ピーマン等)",
      "気候": "温暖多雨"
    },
    "charStats": {
      "power": 52,
      "defense": 45,
      "speed": 88
    },
    "relatedKeywords": [
      "促成栽培",
      "ピーマン",
      "黒潮"
    ],
    "dummyKanji": [
      "筑",
      "紫",
      "佐",
      "賀",
      "八",
      "代",
      "熊",
      "本",
      "薩",
      "摩"
    ],
    "hiddenFacts": [
      "Lv2: 温暖な気候と黒潮の恩恵を受けた農業地帯",
      "Lv3: ビニールハウスを利用したピーマンやキュウリの促成栽培が有名",
      "Lv4: プロ野球やサッカーのキャンプ地としても人気",
      "Lv5: 南部平野の広大な土地は畜産も盛んに行われている"
    ]
  },
  {
    "geoId": "plateau_shirasu",
    "name": "シラス台地",
    "kana": "しらすだいち",
    "type": "plateau",
    "charName": "シラス-マグマ",
    "charImage": "assets/avatars/avatar_shirasu_plateau_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "南九州の火山灰地、サツマイモや畜産が盛ん",
    "stats": {
      "土壌": "シラス (火山砕屑物)",
      "名産": "サツマイモ"
    },
    "charStats": {
      "power": 68,
      "defense": 82,
      "speed": 35
    },
    "relatedKeywords": [
      "火山灰",
      "サツマイモ",
      "桜島"
    ],
    "dummyKanji": [
      "白",
      "洲",
      "笠",
      "野",
      "原",
      "牧",
      "之",
      "原",
      "根"
    ],
    "hiddenFacts": [
      "Lv2: 水はけが良すぎて稲作に向かず、江戸時代には貧しい土地だった",
      "Lv3: サツマイモの栽培が定着し、現在では焼酎の原料など重要産業に",
      "Lv4: 火砕流堆積物は熱に強く、耐火レンガなどの材料になる",
      "Lv5: 台地の崖は崩れやすく、防災対策が重要な課題"
    ]
  },
  {
    "geoId": "basin_nara",
    "name": "奈良盆地",
    "kana": "ならぼんち",
    "type": "basin",
    "charName": "ナラ-レイク",
    "charImage": "assets/avatars/avatar_narasan_sr.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "古称は大和盆地、水不足を補う『ため池』が点在する",
    "stats": {
      "別名": "大和盆地",
      "特徴": "ため池の多さ"
    },
    "charStats": {
      "power": 32,
      "defense": 85,
      "speed": 45
    },
    "relatedKeywords": [
      "大和盆地",
      "ため池",
      "金魚養殖"
    ],
    "dummyKanji": [
      "京",
      "都",
      "近",
      "江",
      "上",
      "野",
      "伊",
      "勢",
      "志"
    ],
    "hiddenFacts": [
      "Lv2: 水資源が乏しかったため、数多くの『ため池』が作られた",
      "Lv3: 大和郡山市を中心に金魚の養殖が全国的に有名",
      "Lv4: 歴史の舞台となった古墳や寺社が数多く点在する",
      "Lv5: 周囲を山に囲まれ、冬は非常に冷え込む気候"
    ]
  },
  {
    "geoId": "range_chugoku",
    "name": "中国山地",
    "kana": "ちゅうごくさんち",
    "type": "mountain",
    "charName": "チュウゴク-テール",
    "charImage": "assets/avatars/avatar_mogami_earth_1773578063160.png",
    "region": "chugoku",
    "rarity": "SSR",
    "flavorText": "標高は低いがなだらかに連なる、かつての鉄の産地",
    "stats": {
      "形状": "隆起準平原",
      "歴史": "たたら製鉄"
    },
    "charStats": {
      "power": 72,
      "defense": 68,
      "speed": 45
    },
    "relatedKeywords": [
      "なだらか",
      "豪雪地帯",
      "冬の季節風"
    ],
    "dummyKanji": [
      "四",
      "国",
      "讃",
      "岐",
      "石",
      "鎚",
      "剣",
      "山",
      "脈"
    ],
    "hiddenFacts": [
      "Lv2: 標高はそれほど高くないが、冬の日本海側（山陰）は豪雪地帯になる",
      "Lv3: 古くから『たたら製鉄』という伝統的な製鉄が行われていた",
      "Lv4: 山地内には多くのカルスト地形（鍾乳洞など）が見られる",
      "Lv5: 瀬戸内側と日本海側の交通・文化を繋ぐ多くの峠がある"
    ]
  },
  {
    "geoId": "range_shikoku",
    "name": "四国山地",
    "kana": "しこくさんみゃく",
    "type": "mountain",
    "charName": "シコク-ピーク",
    "charImage": "assets/avatars/avatar_shikoku_range_ssr_v2.png",
    "region": "shikoku",
    "rarity": "SSR",
    "flavorText": "鋭く険しい石鎚山を擁する、四国の険しい分水嶺",
    "stats": {
      "最高峰": "石鎚山 (1,982m)",
      "気候": "太平洋側多雨"
    },
    "charStats": {
      "power": 100,
      "defense": 72,
      "speed": 65
    },
    "relatedKeywords": [
      "険しい",
      "石鎚山",
      "剣山",
      "太平洋側"
    ],
    "dummyKanji": [
      "中",
      "国",
      "讃",
      "岐",
      "阿",
      "讃",
      "山",
      "地",
      "高"
    ],
    "hiddenFacts": [
      "Lv2: 最高峰の石鎚山は西日本最高峰でもある",
      "Lv3: 非常に急峻な地形であり、四国の南北を断絶する壁となっている",
      "Lv4: 吉野川の源流はこの深い山々の中に位置する",
      "Lv5: 台風の通り道であり、太平洋側の斜面は世界有数の多雨地帯"
    ]
  },
  {
    "geoId": "lake_suwa",
    "name": "諏訪湖",
    "kana": "すわこ",
    "type": "lake",
    "charName": "スワ-ミラー",
    "charImage": "assets/avatars/avatar_suwa_sr.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "長野県最大の湖、精密機械工業の拠点に囲まれる",
    "stats": {
      "現象": "御神渡り",
      "流出": "天竜川"
    },
    "charStats": {
      "power": 48,
      "defense": 65,
      "speed": 52
    },
    "relatedKeywords": [
      "天竜川",
      "精密機械工業",
      "断層"
    ],
    "dummyKanji": [
      "諏",
      "訪",
      "河",
      "口",
      "浜",
      "名",
      "中",
      "禅",
      "寺"
    ],
    "hiddenFacts": [
      "Lv2: 厳冬期には湖面に『御神渡り（おみわたり）』という亀裂が走る",
      "Lv3: 周辺は歴史的に時計やカメラなどの『精密機械工業』で栄えた",
      "Lv4: 天竜川の溢出口（あふれぐち）としての重要な役割がある",
      "Lv5: 日本最大の断層帯『中央構造線』と『フォッサマグナ』が交わる位置"
    ]
  },
  {
    "geoId": "lake_kasumigaura",
    "name": "霞ヶ浦",
    "kana": "かすみがうら",
    "type": "lake",
    "charName": "カスミ-フリーズ",
    "charImage": "assets/avatars/avatar_kasumigaura_sr.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "日本第2位の面積、利根川の下流域に広がる巨大な湖",
    "stats": {
      "面積": "約220km² (全国2位)",
      "名産": "ワカサギ・レンコン"
    },
    "charStats": {
      "power": 45,
      "defense": 88,
      "speed": 32
    },
    "relatedKeywords": [
      "日本第2位",
      "干拓",
      "利根川"
    ],
    "dummyKanji": [
      "琵",
      "琶",
      "中",
      "海",
      "北",
      "浦",
      "印",
      "旛",
      "沼"
    ],
    "hiddenFacts": [
      "Lv2: 琵琶湖に次いで日本で2番目に広い面積を持つ湖",
      "Lv3: かつては入江だったが、土砂の堆積などで出口が塞がって湖になった",
      "Lv4: 伝統的な『帆引き船』によるワカサギ漁が風物詩",
      "Lv5: 周辺は平坦で、レンコンなどの湿地農業が盛ん"
    ]
  },
  {
    "geoId": "peninsula_shimabara",
    "name": "島原半島",
    "kana": "しまばらはんとう",
    "type": "peninsula",
    "charName": "シマバラ-ファイヤ",
    "charImage": "assets/avatars/avatar_shimasan_sr.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "中央に雲仙岳がそびえる、火山の恵みと歴史の地",
    "stats": {
      "主峰": "雲仙岳",
      "歴史": "島原の乱"
    },
    "charStats": {
      "power": 82,
      "defense": 55,
      "speed": 58
    },
    "relatedKeywords": [
      "雲仙岳",
      "有明海",
      "火砕流"
    ],
    "dummyKanji": [
      "大",
      "隅",
      "薩",
      "摩",
      "国",
      "東",
      "北",
      "松",
      "浦"
    ],
    "hiddenFacts": [
      "Lv2: 中央にそびえる雲仙普賢岳は、1990年代に大規模な噴火を起こした",
      "Lv3: 豊富な温泉資源があり、キリシタンの歴史も深いエリア",
      "Lv4: 有明海と橘湾に三方を囲まれた独特の景観",
      "Lv5: 土石流災害を教訓とした世界最大規模の砂防ダムがある"
    ]
  },
  {
    "geoId": "strait_kanmon",
    "name": "関門海峡",
    "kana": "かんもんかいきょう",
    "type": "strait",
    "charName": "カンモン-シティー",
    "charImage": "assets/avatars/avatar_kanmonstrait_sr.png",
    "region": "chugoku",
    "rarity": "SR",
    "flavorText": "本州と九州を隔てる狭い海域、壇ノ浦の舞台",
    "stats": {
      "接続": "日本海と瀬戸内海",
      "特徴": "非常に複雑で速い潮流"
    },
    "charStats": {
      "power": 65,
      "defense": 48,
      "speed": 92
    },
    "relatedKeywords": [
      "下関",
      "門司",
      "本州と九州",
      "壇ノ浦"
    ],
    "dummyKanji": [
      "明",
      "石",
      "鳴",
      "門",
      "津",
      "軽",
      "宗",
      "谷",
      "紀"
    ],
    "hiddenFacts": [
      "Lv2: 本州最西端の下関市と九州最北端の北九州市を隔てる狭い海峡",
      "Lv3: 世界に類を見ない『海底を歩ける人道トンネル』がある",
      "Lv4: 源平合戦の最終決戦場、壇ノ浦（だんのうら）の舞台",
      "Lv5: 非常に複雑で速い潮流があり、1日約700隻の船が行き交う"
    ]
  },
  {
    "geoId": "cape_soya",
    "name": "宗谷岬",
    "kana": "そうやみさき",
    "type": "cape",
    "charName": "ソウヤ-ノース",
    "charImage": "assets/avatars/avatar_soya_n.png",
    "region": "hokkaido",
    "rarity": "N",
    "flavorText": "日本の最北端、サハリンを望む絶壁の岬",
    "stats": {
      "位置": "北海道稚内市",
      "特徴": "日本最北端"
    },
    "charStats": {
      "power": 35,
      "defense": 45,
      "speed": 72
    },
    "relatedKeywords": [
      "最北端",
      "稚内",
      "サハリン"
    ],
    "dummyKanji": [
      "岬",
      "納",
      "沙",
      "布",
      "襟",
      "裳",
      "知",
      "床"
    ],
    "hiddenFacts": [
      "Lv2: 日本最北端の地として知られ、記念碑が立っている",
      "Lv3: 晴れた日には、海の向こうにサハリン（樺太）が見える",
      "Lv4: 周辺は強い風が吹き抜けることが多く、風力発電も行われている",
      "Lv5: 北極圏に近い、日本で最も厳しい冬を経験する場所の一つ"
    ]
  },
  {
    "geoId": "lake_hamana",
    "name": "浜名湖",
    "kana": "はまなこ",
    "type": "lake",
    "charName": "ハマナ-アクア",
    "charImage": "assets/avatars/avatar_hamana_n.png",
    "region": "chubu",
    "rarity": "N",
    "flavorText": "ウナギ養殖で有名、海とつながる汽水湖",
    "stats": {
      "種類": "汽水湖",
      "名産": "ウナギ・スッポン"
    },
    "charStats": {
      "power": 42,
      "defense": 52,
      "speed": 55
    },
    "relatedKeywords": [
      "ウナギ",
      "汽水湖",
      "浜松市"
    ],
    "dummyKanji": [
      "名",
      "古",
      "屋",
      "琵",
      "琶",
      "霞",
      "浦",
      "中",
      "海"
    ],
    "hiddenFacts": [
      "Lv2: 淡水と海水が混ざり合う『汽水湖』で、魚の種類が非常に豊富",
      "Lv3: 日本のウナギ養殖発祥の地として知られている",
      "Lv4: 湖畔には浜松市などの都市があり、精密機械工業も盛ん",
      "Lv5: 地震による津波で海とつながった歴史を持つ"
    ]
  },
  {
    "geoId": "cape_muroto",
    "name": "室戸岬",
    "kana": "むろとみさき",
    "type": "cape",
    "charName": "ムロト-ウェーブ",
    "charImage": "assets/avatars/avatar_muroto_n.png",
    "region": "shikoku",
    "rarity": "N",
    "flavorText": "太平洋に突き出した『台風銀座』、荒波が削る豪快な海岸",
    "stats": {
      "位置": "高知県",
      "指定": "世界ジオパーク"
    },
    "charStats": {
      "power": 48,
      "defense": 65,
      "speed": 35
    },
    "relatedKeywords": [
      "台風銀座",
      "高知県",
      "ジオパーク"
    ],
    "dummyKanji": [
      "岬",
      "足",
      "摺",
      "佐",
      "多",
      "潮",
      "岬",
      "御",
      "前"
    ],
    "hiddenFacts": [
      "Lv2: 台風の通り道になりやすいため『台風銀座』とも呼ばれる",
      "Lv3: 地殻変動によって地面が何度も隆起した跡が見られる",
      "Lv4: 弘法大師（空海）が修行したと言われる洞窟がある",
      "Lv5: 巨大な白い灯台は、日本の灯台の中でもトップクラスの光達距離を誇る"
    ]
  },
  {
    "geoId": "lake_shinji",
    "name": "宍道湖",
    "kana": "しんじこ",
    "type": "lake",
    "charName": "シンジ-ミスト",
    "charImage": "assets/avatars/avatar_shinji_mist_v1.png",
    "region": "chugoku",
    "rarity": "N",
    "flavorText": "シジミ漁が盛ん、夕日が美しい島根のシンボル",
    "stats": {
      "名産": "ヤマトシジミ (日本一)",
      "景観": "夕日の絶景"
    },
    "charStats": {
      "power": 32,
      "defense": 48,
      "speed": 62
    },
    "relatedKeywords": [
      "シジミ",
      "中海",
      "松江市"
    ],
    "dummyKanji": [
      "中",
      "海",
      "穴",
      "道",
      "琵",
      "琶",
      "諏",
      "訪",
      "猪"
    ],
    "hiddenFacts": [
      "Lv2: ヤマトシジミの漁獲量が日本一の湖として有名",
      "Lv3: 汽水湖であり、隣の中海（なかうみ）と繋がっている",
      "Lv4: 湖に浮かぶ嫁ヶ島と夕日のコントラストは日本屈指の美しさ",
      "Lv5: 宍道湖七珍（しんじこしっちん）と呼ばれる7種の名産品がある"
    ]
  },
  {
    "geoId": "cape_sata",
    "name": "佐多岬",
    "kana": "さたみさき",
    "type": "cape",
    "charName": "サタ-サウス",
    "charImage": "assets/avatars/avatar_sata_south_v1.png",
    "region": "kyushu",
    "rarity": "N",
    "flavorText": "本土の最南端、亜熱帯の植物が茂る絶景の岬",
    "stats": {
      "位置": "鹿児島県大隅半島",
      "特徴": "本土最南端"
    },
    "charStats": {
      "power": 45,
      "defense": 42,
      "speed": 78
    },
    "relatedKeywords": [
      "最南端",
      "大隅半島",
      "種子島"
    ],
    "dummyKanji": [
      "佐",
      "多",
      "野",
      "母",
      "崎",
      "指",
      "宿",
      "都",
      "井"
    ],
    "hiddenFacts": [
      "Lv2: 九州の、そして本土の最南端に位置する岬",
      "Lv3: 北緯31度線上にあり、ソテツなどの亜熱帯植物が自生している",
      "Lv4: 太平洋と東シナ海が交わる壮大な海の景色が見られる",
      "Lv5: 晴れて視界が良い日には、種子島や屋久島が遠くに見える"
    ]
  },
  {
    "geoId": "strait_tsugaru",
    "name": "津軽海峡",
    "kana": "つがるかいきょう",
    "type": "strait",
    "charName": "ツガル-トンネル",
    "charImage": "assets/avatars/avatar_tsugarustrait_r.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "本州と北海道を分かつ荒波、海底を通る青函トンネル",
    "stats": {
      "海底": "青函トンネル",
      "接続": "日本海と太平洋"
    },
    "charStats": {
      "power": 62,
      "defense": 78,
      "speed": 55
    },
    "relatedKeywords": [
      "青函トンネル",
      "青森県",
      "北海道",
      "冬景色"
    ],
    "dummyKanji": [
      "津",
      "軽",
      "軽",
      "海",
      "峡",
      "宗",
      "谷",
      "対",
      "馬"
    ],
    "hiddenFacts": [
      "Lv2: 本州（青森）と北海道（函館）の間にある重要な海峡",
      "Lv3: 世界最大級の海底トンネル『青函トンネル』が地下を通っている",
      "Lv4: 非常に流れが速く、冬には厳しい寒波が押し寄せる",
      "Lv5: 国際海峡であり、多くの中央国籍の船も通行する"
    ]
  },
  {
    "geoId": "channel_bungosuido",
    "name": "豊後水道",
    "kana": "ぶんごすいどう",
    "type": "channel",
    "charName": "ブンゴ-カレント",
    "charImage": "assets/avatars/avatar_bungochannel_r.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "九州と四国の間の急流、関サバ・関アジの宝庫",
    "stats": {
      "接続": "瀬戸内海と太平洋",
      "名産": "関サバ・関アジ"
    },
    "charStats": {
      "power": 58,
      "defense": 45,
      "speed": 82
    },
    "relatedKeywords": [
      "大分県",
      "愛媛県",
      "急流",
      "一本釣り"
    ],
    "dummyKanji": [
      "豊",
      "後",
      "水道",
      "紀",
      "伊",
      "伊",
      "予",
      "灘"
    ],
    "hiddenFacts": [
      "Lv2: 九州（大分）と四国（愛媛）に挟まれた海域",
      "Lv3: 潮流が非常に速く、身の締まった高級魚が育つ好漁場",
      "Lv4: ここで捕れるマサバ・マアジは『関サバ』『関アジ』としてブランド化されている",
      "Lv5: 足摺岬からの太平洋の荒波が流れ込むダイナミックなエリア"
    ]
  },
  {
    "geoId": "bay_ise",
    "name": "伊勢湾",
    "kana": "いせわん",
    "type": "bay",
    "charName": "イセ-ポート",
    "charImage": "assets/avatars/avatar_ise_r.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "中京工業地帯を支える日本有数の巨大湾",
    "stats": {
      "産業": "名古屋港 (貨物量日本一)",
      "湾": "日本有数の広さ"
    },
    "charStats": {
      "power": 55,
      "defense": 72,
      "speed": 48
    },
    "relatedKeywords": [
      "名古屋港",
      "中京工業地帯",
      "伊勢神宮"
    ],
    "dummyKanji": [
      "三",
      "河",
      "大",
      "阪",
      "東",
      "京",
      "若",
      "狭",
      "湾"
    ],
    "hiddenFacts": [
      "Lv2: 愛知県と三重県に囲まれた、日本有数の広さを誇る湾",
      "Lv3: 名古屋港は、日本国内で貨物取扱量がトップクラスの重要港",
      "Lv4: 木曽三川（木曽・長良・揖斐）などの大河が注ぎ込んでいる",
      "Lv5: かつて伊勢湾台風という甚大な被害をもたらした自然災害の歴史もある"
    ]
  },
  {
    "geoId": "range_kyushu",
    "name": "九州山地",
    "kana": "きゅうしゅうさんち",
    "type": "mountain",
    "charName": "キュウシュウ-ボルケーノ",
    "charImage": "assets/avatars/avatar_kyushusan_r.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "九州中央部を南北に貫く、峻険な山地",
    "stats": {
      "最高峰": "祖母山 (1,756m)",
      "特徴": "九州の背骨"
    },
    "charStats": {
      "power": 75,
      "defense": 70,
      "speed": 40
    },
    "relatedKeywords": [
      "祖母山",
      "九州の背骨",
      "球磨川"
    ],
    "dummyKanji": [
      "筑",
      "紫",
      "讃",
      "岐",
      "石",
      "鎚",
      "雲",
      "仙"
    ],
    "hiddenFacts": [
      "Lv2: 九州で最も高い山々が連なる、峻険な地帯",
      "Lv3: 日本三大急流の一つ、球磨川の源流域がある",
      "Lv4: 椎葉村などの平家の落人伝説が残る地域もある",
      "Lv5: 特殊な地質構造を持ち、希少な高山植物も見られる"
    ]
  },
  {
    "geoId": "peak_chokaisan",
    "name": "鳥海山",
    "kana": "ちょうかいさん",
    "type": "mountain",
    "charName": "チョウカイ-ピーク",
    "charImage": "assets/avatars/avatar_hida_peak_1773577968576.png",
    "region": "tohoku",
    "rarity": "SSR",
    "flavorText": "『出羽富士』と称される、日本海に面した名峰",
    "stats": {
      "標高": "2,236m",
      "通称": "出羽富士"
    },
    "charStats": {
      "power": 88,
      "defense": 82,
      "speed": 45
    },
    "relatedKeywords": [
      "出羽富士",
      "日本海",
      "氷河"
    ],
    "dummyKanji": [
      "鳥",
      "海",
      "磐",
      "梯",
      "白",
      "岩",
      "木"
    ],
    "hiddenFacts": [
      "Lv2: 山形県と秋田県の県境に位置し、日本海に直接落ち込むような地形",
      "Lv3: 国内最南端の氷河が存在すると言われている",
      "Lv4: 山頂付近には固有種のチョウカイアザミが自生する",
      "Lv5: 麓には鳥海山からの豊富な湧水による水田が広がる"
    ]
  },
  {
    "geoId": "peak_bandaisan",
    "name": "磐梯山",
    "kana": "ばんだいさん",
    "type": "mountain",
    "charName": "バンダイ-ボルケーノ",
    "charImage": "assets/avatars/avatar_bandaisan_sr.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "『宝の山』と謳われる、会津を象徴する活火山",
    "stats": {
      "標高": "1,816m",
      "湖": "猪苗代湖"
    },
    "charStats": {
      "power": 85,
      "defense": 72,
      "speed": 48
    },
    "relatedKeywords": [
      "会津若松",
      "猪苗代湖",
      "爆裂火口"
    ],
    "dummyKanji": [
      "磐",
      "梯",
      "岩",
      "木",
      "鳥",
      "海",
      "会",
      "津"
    ],
    "hiddenFacts": [
      "Lv2: 明治時代の噴火で山体崩壊を起こし、裏磐梯の湖沼群が形成された",
      "Lv3: 五色沼などの美しい湖沼群は観光名所となっている",
      "Lv4: 『会津磐梯山は宝の山よ』という民謡で有名",
      "Lv5: 冬はスキーのリゾート地として多くの客が訪れる"
    ]
  },
  {
    "geoId": "peak_hakusan",
    "name": "白山",
    "kana": "はくさん",
    "type": "mountain",
    "charName": "ハクサン-スノー",
    "charImage": "assets/avatars/avatar_hakusan_ssr_v2.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "信仰の対象として尊崇される、日本三名山の一つ",
    "stats": {
      "標高": "2,702m",
      "別名": "日本三名山"
    },
    "charStats": {
      "power": 92,
      "defense": 88,
      "speed": 35
    },
    "relatedKeywords": [
      "日本三名山",
      "白山信仰",
      "高山植物"
    ],
    "dummyKanji": [
      "白",
      "富士",
      "立",
      "山",
      "御",
      "嶽"
    ],
    "hiddenFacts": [
      "Lv2: 富士山、立山と並び『日本三名山』の一つとされる",
      "Lv3: 山頂部には火口湖が存在し、高山植物の宝庫でもある",
      "Lv4: 麓には白山比咩神社などの信仰拠点が点在する",
      "Lv5: 日本で最も西にある標高2,500mを超える山"
    ]
  },
  {
    "geoId": "peak_asamanoyama",
    "name": "浅間山",
    "kana": "あさまやま",
    "type": "mountain",
    "charName": "アサマ-フレア",
    "charImage": "assets/avatars/avatar_asama_ssr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "今も噴煙を上げる、日本屈指の活火山",
    "stats": {
      "標高": "2,568m",
      "山容": "成層火山"
    },
    "charStats": {
      "power": 95,
      "defense": 65,
      "speed": 42
    },
    "relatedKeywords": [
      "天明の大噴火",
      "鬼押出し園",
      "軽井沢"
    ],
    "dummyKanji": [
      "浅",
      "八",
      "ヶ",
      "岳",
      "御",
      "嶽",
      "三",
      "原"
    ],
    "hiddenFacts": [
      "Lv2: 江戸時代の『天明の大噴火』は冷害を引き起こし大飢饉の原因となった",
      "Lv3: 『鬼押出し』は当時の溶岩流が固まってできた独特の景観",
      "Lv4: 山体の一部が崩壊した跡（馬蹄形火口）が見られる",
      "Lv5: 軽井沢などの避暑地から望む壮大な山容が有名"
    ]
  },
  {
    "geoId": "peak_yatsugatake",
    "name": "八ヶ岳",
    "kana": "やつがたけ",
    "type": "mountain",
    "charName": "ヤツガ・レジオン",
    "charImage": "assets/avatars/avatar_yatsugatake_sr.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "南北に広がる大規模な火山群、苔むした森の楽園",
    "stats": {
      "最高峰": "赤岳 (2,899m)",
      "延長": "約30km"
    },
    "charStats": {
      "power": 82,
      "defense": 85,
      "speed": 38
    },
    "relatedKeywords": [
      "赤岳",
      "苔",
      "清里"
    ],
    "dummyKanji": [
      "八",
      "浅",
      "間",
      "蓼",
      "科",
      "霧",
      "ヶ",
      "峰"
    ],
    "hiddenFacts": [
      "Lv2: 険しい岩場の『北八ヶ岳』となだらかな森の『南八ヶ岳』で異なる表情を持つ",
      "Lv3: 山頂部はフォッサマグナに関連する複雑な地質構造を持つ",
      "Lv4: 森の中には数百種類の苔が生息し、神秘的な景観を作る",
      "Lv5: 麓には野辺山高原などの高冷地野菜の産地が広がる"
    ]
  },
  {
    "geoId": "peak_ontake-san",
    "name": "御嶽山",
    "kana": "おんたけさん",
    "type": "mountain",
    "charName": "オンタケ・ロード",
    "charImage": "assets/avatars/avatar_ontake_sr.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "山岳信仰の聖地、木曽の谷にそびえ立つ霊峰",
    "stats": {
      "標高": "3,067m",
      "特徴": "山岳信仰"
    },
    "charStats": {
      "power": 88,
      "defense": 82,
      "speed": 30
    },
    "relatedKeywords": [
      "御嶽教",
      "木曽",
      "2014年噴火"
    ],
    "dummyKanji": [
      "御",
      "岳",
      "白",
      "聖",
      "駒",
      "ヶ",
      "岳"
    ],
    "hiddenFacts": [
      "Lv2: 日本で標高3000mを超える山として最も西に位置する",
      "Lv3: 木曽節などの民謡に歌われ、地元住民の信仰が極めて厚い",
      "Lv4: 2014年の噴火は戦後最悪の火山災害となった",
      "Lv5: 山頂付近には『一ノ池』から『五ノ池』までの火口湖がある"
    ]
  },
  {
    "geoId": "peninsula_shiretoko",
    "name": "知床半島",
    "kana": "しれとこはんとう",
    "type": "peninsula",
    "charName": "シレトコ-エンシェント",
    "charImage": "assets/avatars/avatar_shiretoko_ssr.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "世界自然遺産の断崖、流氷が運ぶ豊かな生態系",
    "stats": {
      "地形": "断崖絶壁・山岳",
      "指定": "世界自然遺産"
    },
    "charStats": {
      "power": 85,
      "defense": 90,
      "speed": 40
    },
    "relatedKeywords": [
      "世界遺産",
      "ヒグマ",
      "流氷"
    ],
    "dummyKanji": [
      "根",
      "室",
      "宗",
      "谷",
      "積",
      "丹",
      "渡",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 日本最後の秘境とも呼ばれ、手つかずの広大な自然が残る",
      "Lv3: 海底から隆起した険しい山々が直接海に落ち込む雄大な景観",
      "Lv4: 冬にはオホーツク海から流氷が押し寄せ、プランクトンを運んでくる",
      "Lv5: ヒグマやシマフクロウなど、野生動物の保護区としても極めて重要"
    ]
  },
  {
    "geoId": "peninsula_nemuro",
    "name": "根室半島",
    "kana": "ねむろはんとう",
    "type": "peninsula",
    "charName": "ネムロ-エッジ",
    "charImage": "assets/avatars/avatar_nemuro_peninsula_r_v1.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "最東端の地、北方領土を間近に望む岬の半島",
    "stats": {
      "位置": "北海道東端",
      "名所": "納沙布岬"
    },
    "charStats": {
      "power": 45,
      "defense": 68,
      "speed": 52
    },
    "relatedKeywords": [
      "納沙布岬",
      "カニ",
      "北方領土"
    ],
    "dummyKanji": [
      "知",
      "床",
      "野",
      "付",
      "宗",
      "谷",
      "襟",
      "裳"
    ],
    "hiddenFacts": [
      "Lv2: 半島の先端にある納沙布岬は、一般人が行ける日本最東端",
      "Lv3: 根室市街地が広がり、サンマや花咲ガニなどの漁業が極めて盛ん",
      "Lv4: 明治時代には既に灯台が設置され、海の安全の要だった",
      "Lv5: 平坦な地形が多く、牧場や湿原が点在している"
    ]
  },
  {
    "geoId": "peninsula_tsugaru",
    "name": "津軽半島",
    "kana": "つがるはんとう",
    "type": "peninsula",
    "charName": "ツガル-ノース",
    "charImage": "assets/avatars/avatar_tsugaru_peninsula_sr_v1.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "龍飛崎の強風、太宰治の故郷を抱く荒ぶる半島",
    "stats": {
      "名所": "龍飛崎",
      "地形": "青函トンネルが貫く"
    },
    "charStats": {
      "power": 62,
      "defense": 78,
      "speed": 45
    },
    "relatedKeywords": [
      "龍飛崎",
      "階段国道",
      "太宰治"
    ],
    "dummyKanji": [
      "下",
      "北",
      "男",
      "鹿",
      "牡",
      "鹿",
      "房",
      "総"
    ],
    "hiddenFacts": [
      "Lv2: 先端の龍飛崎（たっぴざき）は強風で有名で、風力発電も盛ん",
      "Lv3: 日本唯一の『階段国道』（国道339号）が存在する",
      "Lv4: 青函トンネルの本州側の入り口があり、交通の最重要拠点",
      "Lv5: 作家・太宰治の小説『津軽』の舞台であり、生家の斜陽館がある"
    ]
  },
  {
    "geoId": "peninsula_shimokita",
    "name": "下北半島",
    "kana": "しもきたはんとう",
    "type": "peninsula",
    "charName": "シモキタ-ホーン",
    "charImage": "assets/avatars/avatar_shimokita_peninsula_sr_v1.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "本州最北の『まさかり形』、恐山信仰が息づく地",
    "stats": {
      "名所": "恐山・大間崎",
      "形状": "斧（まさかり）形"
    },
    "charStats": {
      "power": 55,
      "defense": 82,
      "speed": 42
    },
    "relatedKeywords": [
      "恐山",
      "大間のマグロ",
      "仏ヶ浦"
    ],
    "dummyKanji": [
      "津",
      "軽",
      "男",
      "鹿",
      "牡",
      "鹿",
      "能",
      "登"
    ],
    "hiddenFacts": [
      "Lv2: 日本三大霊場の一つ『恐山』があり、イタコの口寄せでも知られる",
      "Lv3: 北端の大間崎は本州最北端。超高級な『大間のマグロ』の拠点",
      "Lv4: 西岸には『仏ヶ浦』という巨大な白岩群が続く絶景がある",
      "Lv5: 自然豊かな一方で、原子力の研究・関連施設も集まっている"
    ]
  },
  {
    "geoId": "peninsula_oga",
    "name": "男鹿半島",
    "kana": "おがはんとう",
    "type": "peninsula",
    "charName": "オガ-デモン",
    "charImage": "assets/avatars/avatar_oga_peninsula_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "ナマハゲが住まう伝承の地、日本海に突き出た要塞",
    "stats": {
      "文化": "ナマハゲ",
      "地形": "かつての島が陸続きに"
    },
    "charStats": {
      "power": 65,
      "defense": 72,
      "speed": 48
    },
    "relatedKeywords": [
      "ナマハゲ",
      "入道崎",
      "八郎潟"
    ],
    "dummyKanji": [
      "牡",
      "鹿",
      "津",
      "軽",
      "下",
      "北",
      "能",
      "登"
    ],
    "hiddenFacts": [
      "Lv2: 伝統行事『ナマハゲ』の本場。ユネスコ無形文化遺産にも登録",
      "Lv3: 地質学的には、マールと呼ばれる火山由来の湖（一ノ目潟など）が有名",
      "Lv4: 寒風山からは、かつての八郎潟や日本海のパノラマが一望できる",
      "Lv5: 北緯40度線が通る入道崎には、白黒の縞模様が特徴的な灯台がある"
    ]
  },
  {
    "geoId": "peninsula_oshika",
    "name": "牡鹿半島",
    "kana": "おしかはんとう",
    "type": "peninsula",
    "charName": "オシカ-ガイダー",
    "charImage": "assets/avatars/avatar_oshika_peninsula_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "三陸リアス海岸の南端、金華山を望む漁業の拠点",
    "stats": {
      "近隣": "金華山 (島)",
      "産業": "捕鯨・養殖"
    },
    "charStats": {
      "power": 45,
      "defense": 58,
      "speed": 62
    },
    "relatedKeywords": [
      "石巻",
      "金華山",
      "コバルトライン"
    ],
    "dummyKanji": [
      "男",
      "鹿",
      "三",
      "浦",
      "房",
      "総",
      "渥",
      "美"
    ],
    "hiddenFacts": [
      "Lv2: 複雑に入り組んだ海岸線は、牡蠣や銀鮭の養殖が盛んな好漁場",
      "Lv3: 半島の先端の先にある金華山は『黄金山神社』がある信仰の島",
      "Lv4: 捕鯨の町・鮎川（あゆかわ）は、かつての遠洋捕鯨の重要拠点だった",
      "Lv5: 東日本大震災で甚大な被害を受けたが、復興が進んでいる"
    ]
  },
  {
    "geoId": "cape_inuwasaki",
    "name": "犬吠埼",
    "kana": "いぬぼうさき",
    "type": "cape",
    "charName": "イヌボウ-フラッシュ",
    "charImage": "assets/avatars/avatar_inuwasaki_n_v1.png",
    "region": "kanto",
    "rarity": "N",
    "flavorText": "関東最東端、山頂を除けば日本で最も早く日の出が見られる岬",
    "stats": {
      "特徴": "日本一早い日の出",
      "場所": "千葉県銚子市"
    },
    "charStats": {
      "power": 32,
      "defense": 45,
      "speed": 88
    },
    "relatedKeywords": [
      "銚子",
      "白い灯台",
      "荒磯"
    ],
    "dummyKanji": [
      "房",
      "総",
      "犬",
      "吠",
      "岬",
      "御",
      "前",
      "崎"
    ],
    "hiddenFacts": [
      "Lv2: 白いレンガ造りの『犬吠埼灯台』は、世界の歴史的灯台100選の一つ",
      "Lv3: 元旦には初日の出を見るために、全国から多くの人々が集まる",
      "Lv4: 周辺は銚子電鉄が走り、ぬれ煎餅などの名物も有名",
      "Lv5: 険しい断崖に荒波が打ち寄せる豪快な景色が楽しめる"
    ]
  },
  {
    "geoId": "peninsula_boso",
    "name": "房総半島",
    "kana": "ぼうそうはんとう",
    "type": "peninsula",
    "charName": "ボウソウ-フィールド",
    "charImage": "assets/avatars/avatar_forest_1773535946512.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "温暖な南房総、春の先取りと黒潮の恩恵を受ける巨大半島",
    "stats": {
      "規模": "関東最大の半島",
      "気候": "温暖 (黒潮)"
    },
    "charStats": {
      "power": 58,
      "defense": 82,
      "speed": 35
    },
    "relatedKeywords": [
      "九十九里浜",
      "菜の花",
      "海ほたる"
    ],
    "dummyKanji": [
      "三",
      "浦",
      "伊",
      "豆",
      "紀",
      "伊",
      "知",
      "多"
    ],
    "hiddenFacts": [
      "Lv2: 太平洋と東京湾を隔てる巨大な半島。南部は特に温暖な気候",
      "Lv3: 早春の菜の花やポピーなどの花作りや、イチゴ狩りが盛んな観光地",
      "Lv4: 三浦半島とは、かつて陸続きだった時代もあるほど近い",
      "Lv5: 半島を一周する鉄道（内房線・外房線）があり、海沿いの旅が人気"
    ]
  },
  {
    "geoId": "peninsula_miura",
    "name": "三浦半島",
    "kana": "みうらはんとう",
    "type": "peninsula",
    "charName": "ミウラ-マリン",
    "charImage": "assets/avatars/avatar_city_1773059899618.png",
    "region": "kanto",
    "rarity": "R",
    "flavorText": "東京湾の入口を守る要衝、三崎のマグロと野菜の里",
    "stats": {
      "拠点": "横須賀・三崎",
      "地形": "相模湾と東京湾の間"
    },
    "charStats": {
      "power": 48,
      "defense": 65,
      "speed": 55
    },
    "relatedKeywords": [
      "軍港",
      "三浦大根",
      "城ヶ島"
    ],
    "dummyKanji": [
      "房",
      "総",
      "伊",
      "豆",
      "能",
      "登",
      "知",
      "多"
    ],
    "hiddenFacts": [
      "Lv2: 横須賀などの軍港都市と、南部の豊かな農業・漁業地域が共存する",
      "Lv3: 三崎港は日本屈指のマグロの拠点。周辺のマグロ料理は極めて有名",
      "Lv4: 『三浦大根』は、かつて全国的なシェアを誇った巨大な特産大根",
      "Lv5: 先端にある城ヶ島は、荒磯の絶景と海鳥の繁殖地として知られる"
    ]
  },
  {
    "geoId": "peninsula_izu",
    "name": "伊豆半島",
    "kana": "いずはんとう",
    "type": "peninsula",
    "charName": "イズ-スパ",
    "charImage": "assets/avatars/avatar_izu_peninsula_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "火山の贈りもの、温泉とジオパークの絶景半島",
    "stats": {
      "由来": "フィリピン海プレートで移動",
      "特徴": "日本有数の温泉数"
    },
    "charStats": {
      "power": 62,
      "defense": 78,
      "speed": 38
    },
    "relatedKeywords": [
      "世界ジオパーク",
      "温泉",
      "河津桜"
    ],
    "dummyKanji": [
      "能",
      "登",
      "渥",
      "美",
      "知",
      "多",
      "志",
      "摩"
    ],
    "hiddenFacts": [
      "Lv2: かつては南の海にあった火山島が、本州に衝突してできた特異な地",
      "Lv3: 熱海、伊東、修善寺など、全国的に有名な温泉地が密集している",
      "Lv4: ユネスコ世界ジオパークに認定され、火山の歴史を物語る地形が豊富",
      "Lv5: 春の『河津桜』や初夏のキンメダイなど、四季を通じて観光客が多い"
    ]
  },
  {
    "geoId": "peninsula_noto",
    "name": "能登半島",
    "kana": "のとはんとう",
    "type": "peninsula",
    "charName": "ノト-スピリット",
    "charImage": "assets/avatars/avatar_noto_peninsula_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "日本海に大きく突き出た『能登の心』、千枚田と漆器の伝統",
    "stats": {
      "形状": "右手の拳のような形",
      "名所": "白米千枚田"
    },
    "charStats": {
      "power": 55,
      "defense": 85,
      "speed": 32
    },
    "relatedKeywords": [
      "輪島塗",
      "千枚田",
      "和倉温泉"
    ],
    "dummyKanji": [
      "伊",
      "豆",
      "丹",
      "後",
      "男",
      "鹿",
      "下",
      "北"
    ],
    "hiddenFacts": [
      "Lv2: 半島全体が『能登の里山里海』として世界農業遺産に認定されている",
      "Lv3: 輪島塗の漆工芸は、日本を代表する伝統美として世界的に有名",
      "Lv4: 先端付近の軍艦島（見附島）や、海岸に並ぶ棚田の絶景で知られる",
      "Lv5: 外浦（日本海側）は険しい崖、内浦（富山湾側）は穏やかな海と表情が違う"
    ]
  },
  {
    "geoId": "peninsula_atsumi",
    "name": "渥美半島",
    "kana": "あつみはんとう",
    "type": "peninsula",
    "charName": "アツミ-フローラ",
    "charImage": "assets/avatars/avatar_atsumi_peninsula_sr_v1.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "三河湾を守る南端の半島、電照菊とメロンの農業王国",
    "stats": {
      "場所": "愛知県南部",
      "産業": "電照菊"
    },
    "charStats": {
      "power": 38,
      "defense": 62,
      "speed": 72
    },
    "relatedKeywords": [
      "電照菊",
      "伊良湖岬",
      "三河湾"
    ],
    "dummyKanji": [
      "知",
      "多",
      "房",
      "総",
      "三",
      "浦",
      "伊",
      "豆"
    ],
    "hiddenFacts": [
      "Lv2: 太平洋と三河湾を分ける細長い半島。先端には伊良湖岬がある",
      "Lv3: 夜の車窓から見える『電照菊』の明かりは、半島の冬の風物詩",
      "Lv4: トマト、メロン、キャベツなどの生産額が非常に高く、農業力が強い",
      "Lv5: 伊良湖岬からは、伊勢湾を挟んで三重県の鳥羽へ渡るフェリーがある"
    ]
  },
  {
    "geoId": "peninsula_chita",
    "name": "知多半島",
    "kana": "ちたはんとう",
    "type": "peninsula",
    "charName": "チタ-ハブ",
    "charImage": "assets/avatars/avatar_chita_peninsula_r_v1.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "名古屋の海の玄関口、中部国際空港を擁する進化の半島",
    "stats": {
      "場所": "愛知県西部",
      "拠点": "中部国際空港 (セントレア)"
    },
    "charStats": {
      "power": 45,
      "defense": 55,
      "speed": 82
    },
    "relatedKeywords": [
      "セントレア",
      "常滑焼",
      "海老せんべい"
    ],
    "dummyKanji": [
      "渥",
      "美",
      "志",
      "摩",
      "紀",
      "伊",
      "三",
      "浦"
    ],
    "hiddenFacts": [
      "Lv2: 伊勢湾と三河湾に挟まれた、比較的平坦な地形の半島",
      "Lv3: 人工島の上に中部国際空港（セントレア）があり、世界と繋がる拠点",
      "Lv4: 常滑市は平安時代からの窯業の地。『常滑焼』の急須などが有名",
      "Lv5: 南部のえびせんべいの里や水族館など、レジャースポットも豊富"
    ]
  },
  {
    "geoId": "peninsula_tango",
    "name": "丹後半島",
    "kana": "たんごはんとう",
    "type": "peninsula",
    "charName": "タンゴ-ブルー",
    "charImage": "assets/avatars/avatar_tango_peninsula_r_v1.png",
    "region": "kinki",
    "rarity": "R",
    "flavorText": "京都の北、天橋立を望む神秘の半島",
    "stats": {
      "景勝地": "天橋立",
      "特産": "丹後ちりめん"
    },
    "charStats": {
      "power": 42,
      "defense": 78,
      "speed": 40
    },
    "relatedKeywords": [
      "天橋立",
      "日本三景",
      "浦島太郎"
    ],
    "dummyKanji": [
      "能",
      "登",
      "男",
      "鹿",
      "越",
      "前",
      "若",
      "狭"
    ],
    "hiddenFacts": [
      "Lv2: 日本三景の一つ、天橋立（あまのはしだて）が半島の東端にある",
      "Lv3: 『丹後ちりめん』という絹織物の産地として江戸時代から栄えた",
      "Lv4: 浦島太郎の伝説や羽衣伝説など、多くの神話や伝承が残されている",
      "Lv5: 海岸線には美しい奇岩や透明度の高い海水浴場が多い"
    ]
  },
  {
    "geoId": "cape_ashizuri",
    "name": "足摺岬",
    "kana": "あしずりみさき",
    "type": "cape",
    "charName": "アシズリ-オーシャン",
    "charImage": "assets/avatars/avatar_ashizuri_cape_n_v1.png",
    "region": "shikoku",
    "rarity": "N",
    "flavorText": "四国最南端、太平洋の荒波が打ち寄せる断崖の岬",
    "stats": {
      "位置": "高知県土佐清水市",
      "特徴": "四国最南端"
    },
    "charStats": {
      "power": 45,
      "defense": 62,
      "speed": 38
    },
    "relatedKeywords": [
      "最南端",
      "金剛福寺",
      "亜熱帯植物"
    ],
    "dummyKanji": [
      "室",
      "戸",
      "佐",
      "田",
      "潮",
      "岬",
      "御",
      "前"
    ],
    "hiddenFacts": [
      "Lv2: 四国最南端の岬で、180度のパノラマで地球の丸さが実感できる",
      "Lv3: 弘法大師ゆかりの金剛福寺があり、お遍路さんの重要な巡礼地",
      "Lv4: 黒潮が直接ぶつかる場所のため、気候は極めて温暖で亜熱帯風",
      "Lv5: 高さ80mを超える断崖絶壁が約2kmにわたって続いている"
    ]
  },
  {
    "geoId": "peninsula_satsuma",
    "name": "薩摩半島",
    "kana": "さつまはんとう",
    "type": "peninsula",
    "charName": "サツマ-ヒロイン",
    "charImage": "assets/avatars/avatar_sky_v2_1773535974703.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "鹿児島湾の西側、指宿の砂蒸し風呂と開聞岳の半島",
    "stats": {
      "名所": "開聞岳・指宿温泉",
      "地形": "東は鹿児島湾・西は東シナ海"
    },
    "charStats": {
      "power": 62,
      "defense": 58,
      "speed": 65
    },
    "relatedKeywords": [
      "指宿温泉",
      "開聞岳",
      "知覧"
    ],
    "dummyKanji": [
      "大",
      "隅",
      "島",
      "原",
      "国",
      "東",
      "北",
      "松",
      "浦"
    ],
    "hiddenFacts": [
      "Lv2: 鹿児島市の中心部から南に延びる半島。シンボルは『薩摩富士』開聞岳",
      "Lv3: 指宿市の天然砂むし温泉は、世界的に珍しい海岸での入浴体験ができる",
      "Lv4: 西岸の枕崎市はカツオ節の生産量日本一として知られる",
      "Lv5: 知覧（ちらん）には江戸時代の武家屋敷群が美しく残されている"
    ]
  },
  {
    "geoId": "peninsula_osumi",
    "name": "大隅半島",
    "kana": "おおすみはんとう",
    "type": "peninsula",
    "charName": "オオスミ-フロンティア",
    "charImage": "assets/avatars/avatar_sky_1773535891178.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "本土最南端の佐多岬を擁する、火山の巨大な台地",
    "stats": {
      "名所": "佐多岬・桜島",
      "地形": "シラス台地が広がる"
    },
    "charStats": {
      "power": 68,
      "defense": 78,
      "speed": 32
    },
    "relatedKeywords": [
      "佐多岬",
      "シラス台地",
      "ロケット発射場"
    ],
    "dummyKanji": [
      "薩",
      "摩",
      "島",
      "原",
      "国",
      "東",
      "北",
      "松",
      "浦"
    ],
    "hiddenFacts": [
      "Lv2: 日本本土の最南端・佐多岬があり、ダイナミックな景観が続く",
      "Lv3: 北部の桜島はかつて島だったが、噴火によりこの半島と陸続きになった",
      "Lv4: 肝付町には内之浦宇宙空間観測所があり、ロケット発射が見られる",
      "Lv5: 畜産業（豚・鶏など）が非常に盛んで、日本の食糧供給を支える重要拠点"
    ]
  },
  {
    "geoId": "bay_mutsu",
    "name": "陸奥湾",
    "kana": "むつわん",
    "type": "bay",
    "charName": "ムツ-ブルー",
    "charImage": "assets/avatars/avatar_mutsu_bay_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "下北・津軽の両半島に抱かれた、ホタテ養殖の宝庫",
    "stats": {
      "形状": "ひょうたん形",
      "名産": "ホタテ"
    },
    "charStats": {
      "power": 35,
      "defense": 65,
      "speed": 40
    },
    "relatedKeywords": [
      "ホタテ",
      "青森市",
      "まさかり半島"
    ],
    "dummyKanji": [
      "内",
      "浦",
      "仙",
      "台",
      "新",
      "庄"
    ],
    "hiddenFacts": [
      "Lv2: 津軽半島と下北半島に挟まれ、北は平舘海峡で津軽海峡と繋がる",
      "Lv3: 波が穏やかで、特産のホタテの養殖がいかだ形式で盛んに行われている",
      "Lv4: 青森市のウォーターフロントはこの湾に面しており、美しい夕景が楽しめる",
      "Lv5: 湾内を移動するカマイルカの群れが春から夏にかけて見られることもある"
    ]
  },
  {
    "geoId": "bay_sendai",
    "name": "仙台湾",
    "kana": "せんだいわん",
    "type": "bay",
    "charName": "センダイ-ブルー",
    "charImage": "assets/avatars/avatar_sendai_bay_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "東北有数の重要港湾が集まる、三陸と常磐を結ぶ湾",
    "stats": {
      "拠点": "仙台塩釜港",
      "産業": "漁業・物流"
    },
    "charStats": {
      "power": 45,
      "defense": 58,
      "speed": 55
    },
    "relatedKeywords": [
      "松島",
      "塩釜",
      "石巻"
    ],
    "dummyKanji": [
      "陸",
      "奥",
      "東京",
      "相",
      "模",
      "駿",
      "河"
    ],
    "hiddenFacts": [
      "Lv2: 牡鹿半島から阿武隈川河口付近までを指す。日本三景の松島もこの一部",
      "Lv3: 仙台塩釜港は国際拠点港湾であり、東北全体の物流を支える心臓部",
      "Lv4: 複雑な海岸線の松島湾と、なだらかな砂浜の続く南部平野部で表情が違う",
      "Lv5: 広大な大陸棚があり、サンマやカツオなどの水揚げが多い魚の街道"
    ]
  },
  {
    "geoId": "bay_tokyo",
    "name": "東京湾",
    "kana": "とうきょうわん",
    "type": "bay",
    "charName": "トウキョウ-ネオン",
    "charImage": "assets/avatars/avatar_tokyo_neon_v1.png",
    "region": "kanto",
    "rarity": "SSR",
    "flavorText": "日本の経済と物流の最重要拠点、世界屈指の過密海域",
    "stats": {
      "面積": "約1,380km²",
      "拠点": "東京港・横浜港・千葉港"
    },
    "charStats": {
      "power": 65,
      "defense": 82,
      "speed": 75
    },
    "relatedKeywords": [
      "京浜工業地帯",
      "レインボーブリッジ",
      "埋立地"
    ],
    "dummyKanji": [
      "相",
      "模",
      "駿",
      "河",
      "三",
      "河",
      "伊",
      "勢"
    ],
    "hiddenFacts": [
      "Lv2: かつては『江戸前』と呼ばれ、現在の羽田空港やディズニーランドも埋立地の上にある",
      "Lv3: 1日数百隻の船が行き交い、浦賀水道は世界有数の航行難所として知られる",
      "Lv4: 水質の改善が進み、スズキやクロダイなどの釣りの名所としても人気",
      "Lv5: 歴史的には、ペリーの黒船来航の舞台であり、開国の歴史が刻まれた湾"
    ]
  },
  {
    "geoId": "bay_sagami",
    "name": "相模湾",
    "kana": "さがみわん",
    "type": "bay",
    "charName": "サガミ-ウェーブ",
    "charImage": "assets/avatars/avatar_sagami_bay_sr_v1.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "深い水深が育む豊かな深海生物、湘南の風薫る湾",
    "stats": {
      "最大水深": "約1,600m",
      "名産": "シラス・干物"
    },
    "charStats": {
      "power": 52,
      "defense": 65,
      "speed": 62
    },
    "relatedKeywords": [
      "湘南",
      "鎌倉",
      "江の島",
      "相模トラフ"
    ],
    "dummyKanji": [
      "東",
      "京",
      "駿",
      "河",
      "三",
      "河",
      "富",
      "山"
    ],
    "hiddenFacts": [
      "Lv2: 海岸からすぐに水深が深くなる急深な地形で、相模トラフという巨大な断層がある",
      "Lv3: 深海魚の宝庫であり、昭和天皇が生物学の研究をされたことでも有名",
      "Lv4: 江の島や鎌倉、鵠沼など日本を代表するマリンレジャーの聖地が点在する",
      "Lv5: 冬には富士山を背景とした美しい海の景色が楽しめる"
    ]
  },
  {
    "geoId": "bay_suruga",
    "name": "駿河湾",
    "kana": "するがわん",
    "type": "bay",
    "charName": "スルガ-サーフ",
    "charImage": "assets/avatars/avatar_suruga_bay_sr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "日本一深い湾、サクラエビが躍る神秘の深海",
    "stats": {
      "最大水深": "2,500m (日本一)",
      "名産": "サクラエビ"
    },
    "charStats": {
      "power": 78,
      "defense": 85,
      "speed": 42
    },
    "relatedKeywords": [
      "サクラエビ",
      "富士山",
      "深海"
    ],
    "dummyKanji": [
      "相",
      "模",
      "東",
      "京",
      "三",
      "河",
      "伊",
      "勢"
    ],
    "hiddenFacts": [
      "Lv2: 富士山という日本最高峰と、日本一深いこの湾が隣り合っている奇跡的な地",
      "Lv3: 国内で唯一サクラエビの漁業が許可されており、夜の漁は幻想的",
      "Lv4: 深海からはタカアシガニなどの珍しい生物が水揚げされる",
      "Lv5: 伊豆半島と静岡市を繋ぐ駿河湾フェリーは、海上からの富士山が絶景"
    ]
  },
  {
    "geoId": "bay_mikawa",
    "name": "三河湾",
    "kana": "みかわわん",
    "type": "bay",
    "charName": "ミカワ-マリーナ",
    "charImage": "assets/avatars/avatar_mikawa_bay_sr_v1.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "知多と渥美の両半島に抱かれた、浅くて豊かな内湾",
    "stats": {
      "特徴": "非常に浅い (平均9m)",
      "名産": "アサリ・海苔"
    },
    "charStats": {
      "power": 38,
      "defense": 68,
      "speed": 52
    },
    "relatedKeywords": [
      "アサリ",
      "篠島",
      "日間賀島"
    ],
    "dummyKanji": [
      "駿",
      "河",
      "伊",
      "勢",
      "東",
      "京",
      "富",
      "山"
    ],
    "hiddenFacts": [
      "Lv2: 知多半島と渥美半島に囲まれ、冬でも比較的波が穏やか",
      "Lv3: 遠浅の干潟が広がり、アサリや海苔などの養殖が極めて盛んな『海の畑』",
      "Lv4: 湾内には日間賀島や篠島（しのじま）などの有人島があり、観光も盛ん",
      "Lv5: 三河地方の工業地帯と共存しながら、豊かな漁業資源を守る取り組みが続く"
    ]
  },
  {
    "geoId": "bay_osaka",
    "name": "大阪湾",
    "kana": "おおさかわん",
    "type": "bay",
    "charName": "オオサカ-ゲート",
    "charImage": "assets/avatars/avatar_osaka_bay_ssr_v1.png",
    "region": "kinki",
    "rarity": "SSR",
    "flavorText": "瀬戸内海の東の玄関口、関西経済を支える巨大湾",
    "stats": {
      "拠点": "大阪港・神戸港",
      "接続": "明石海峡・紀友水道"
    },
    "charStats": {
      "power": 62,
      "defense": 78,
      "speed": 68
    },
    "relatedKeywords": [
      "関西国際空港",
      "阪神工業地帯",
      "淡路島"
    ],
    "dummyKanji": [
      "広",
      "島",
      "伊",
      "勢",
      "東京",
      "三",
      "河"
    ],
    "hiddenFacts": [
      "Lv2: 淡路島によって太平洋と隔てられ、明石海峡と紀伊水道でのみ外海と繋がる",
      "Lv3: 港湾都市の神戸や堺を擁し、背後に控える関西圏の全ての物流を担う",
      "Lv4: 沖合には世界初の完全人工島空港『関西国際空港』が浮かんでいる",
      "Lv5: かつては『茅渟の海（ちぬのうみ）』と呼ばれ、クロダイが多く住んでいた"
    ]
  },
  {
    "geoId": "bay_hiroshima",
    "name": "広島湾",
    "kana": "ひろしまわん",
    "type": "bay",
    "charName": "ヒロシマ-シェル",
    "charImage": "assets/avatars/avatar_hiroshima_bay_sr_v1.png",
    "region": "chugoku",
    "rarity": "SR",
    "flavorText": "カキ養殖日本一、厳島神社の鳥居が映える風光明媚な湾",
    "stats": {
      "名産": "マガキ (生産量日本一)",
      "拠点": "広島港・呉港"
    },
    "charStats": {
      "power": 45,
      "defense": 62,
      "speed": 75
    },
    "relatedKeywords": [
      "カキ",
      "宮島",
      "呉"
    ],
    "dummyKanji": [
      "大",
      "阪",
      "瀬",
      "戸",
      "有",
      "明",
      "大",
      "村"
    ],
    "hiddenFacts": [
      "Lv2: 多くの島々が浮かぶ多島海景観が美しく、波が極めて穏やか",
      "Lv3: カキの生産量は、日本全体の約半分を占めるほどの圧倒的なシェア",
      "Lv4: 世界遺産の厳島神社（宮島）があり、海に浮かぶ鳥居は世界中から客を呼ぶ",
      "Lv5: 歴史的には、軍港として栄えた呉（くれ）があり、造船業が現在も盛ん"
    ]
  },
  {
    "geoId": "bay_toyama",
    "name": "富山湾",
    "kana": "とやまわん",
    "type": "bay",
    "charName": "トヤマ-グロウ",
    "charImage": "assets/avatars/avatar_toyama_bay_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "『天然の生け簀』、ホタルイカが光を放つ深い蒼の湾",
    "stats": {
      "最大水深": "約1,200m",
      "名産": "ホタルイカ・寒ブリ"
    },
    "charStats": {
      "power": 58,
      "defense": 72,
      "speed": 45
    },
    "relatedKeywords": [
      "ホタルイカ",
      "蜃気楼",
      "あいの風"
    ],
    "dummyKanji": [
      "駿",
      "河",
      "相",
      "模",
      "若",
      "狭",
      "三",
      "河"
    ],
    "hiddenFacts": [
      "Lv2: 水深300m以下の『日本海固有水』が豊富な、日本海側屈指の深海湾",
      "Lv3: ホタルイカの群遊海面は国の特別天然記念物に指定されている",
      "Lv4: 海越しに標高3,000m級の立山連峰を望むことができる世界的に稀な景観",
      "Lv5: 春の『蜃気楼（しんきろう）』が発生しやすい場所としても有名"
    ]
  },
  {
    "geoId": "bay_omura",
    "name": "大村湾",
    "kana": "おおむらわん",
    "type": "bay",
    "charName": "オオムラ-ラグーン",
    "charImage": "assets/avatars/avatar_omura_bay_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "長崎の『琴の海』、出口が極めて狭い湖のような内海",
    "stats": {
      "特徴": "出口が非常に狭い",
      "場所": "長崎県の中央部"
    },
    "charStats": {
      "power": 32,
      "defense": 78,
      "speed": 42
    },
    "relatedKeywords": [
      "長崎空港",
      "ハウステンボス",
      "スナメリ"
    ],
    "dummyKanji": [
      "有",
      "明",
      "鹿児",
      "島",
      "大",
      "阪",
      "広",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 佐世保湾と2つの狭い瀬戸でのみ繋がっており、潮の干満差が小さい",
      "Lv3: 波が静かで『琴の海（ことのうみ）』とその穏やかさを称えられる",
      "Lv4: 湾内には長崎空港があり、世界初の海上空港としても知られる",
      "Lv5: 絶滅が危惧されるスナメリが定住しており、豊かな環境が保たれている"
    ]
  },
  {
    "geoId": "bay_kagoshima",
    "name": "鹿児島湾",
    "kana": "かごしまわん",
    "type": "bay",
    "charName": "カゴシマ-ボルケーノ",
    "charImage": "assets/avatars/avatar_kagoshima_bay_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "別名『錦江湾』、桜島を中心に抱く火山の恵みの海",
    "stats": {
      "別名": "錦江湾",
      "主峰": "桜島"
    },
    "charStats": {
      "power": 55,
      "defense": 68,
      "speed": 55
    },
    "relatedKeywords": [
      "桜島",
      "錦江湾",
      "ブリ養殖"
    ],
    "dummyKanji": [
      "有",
      "明",
      "大",
      "村",
      "広",
      "島",
      "大",
      "阪"
    ],
    "hiddenFacts": [
      "Lv2: 湾の中央には今も活発な火山・桜島が鎮座し、雄大な景観を作る",
      "Lv3: 湾そのものがかつての巨大カルデラ（姶良カルデラなど）に海水が入ったもの",
      "Lv4: 非常に深く、カンパチやブリなどの養殖が盛んな重要拠点",
      "Lv5: 鹿児島市の街並みは湾を挟んで桜島と向き合っており『東洋のナポリ』と称される"
    ]
  },
  {
    "geoId": "lake_saroma",
    "name": "サロマ湖",
    "kana": "さろまこ",
    "type": "lake",
    "charName": "サロマ-アクア",
    "charImage": "assets/avatars/avatar_saroma_lake_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "北海道最大、海と繋がる汽水湖の夕陽",
    "stats": {
      "面積": "約152km² (全国3位)",
      "種類": "汽水湖"
    },
    "charStats": {
      "power": 38,
      "defense": 72,
      "speed": 45
    },
    "relatedKeywords": [
      "汽水湖",
      "ホタテ",
      "夕日"
    ],
    "dummyKanji": [
      "支",
      "笏",
      "洞",
      "爺",
      "阿",
      "寒",
      "屈",
      "斜"
    ],
    "hiddenFacts": [
      "Lv2: 日本で3番目に広く、北海道では最大の面積を誇る湖",
      "Lv3: オホーツク海と隔てる砂州が切り開かれ、海水が混じり合う汽水湖となっている",
      "Lv4: ホタテやカキの養殖が盛んで、海のような豊かな恵みがある",
      "Lv5: 秋にはサンゴ草（アッケシソウ）が赤く色付き、湖畔を彩る"
    ]
  },
  {
    "geoId": "lake_shikotsu",
    "name": "支笏湖",
    "kana": "しこつこ",
    "type": "lake",
    "charName": "シコツ-クリスタル",
    "charImage": "assets/avatars/avatar_shikotsu_lake_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "日本屈指の透明度を誇る、不凍のカルデラ湖",
    "stats": {
      "水深": "最大363m (全国2位)",
      "特徴": "日本最北の不凍湖"
    },
    "charStats": {
      "power": 42,
      "defense": 88,
      "speed": 35
    },
    "relatedKeywords": [
      "カルデラ",
      "透明度",
      "チップ (ヒメマス)"
    ],
    "dummyKanji": [
      "洞",
      "爺",
      "サ",
      "ロ",
      "マ",
      "摩",
      "周",
      "屈"
    ],
    "hiddenFacts": [
      "Lv2: 巨大なカルデラに水が溜まった湖で、その深さから冬でも凍らない",
      "Lv3: 水質の良さは日本トップクラスで、湖底まで見通せるほどの透明度",
      "Lv4: ヒメマス（チップ）の産地としても有名で、釣り人にも人気",
      "Lv5: 周囲を恵庭岳や風不死岳などの火山に囲まれた神秘的な景観"
    ]
  },
  {
    "geoId": "lake_akan",
    "name": "阿寒湖",
    "kana": "あかんこ",
    "type": "lake",
    "charName": "アカン-ミステリー",
    "charImage": "assets/avatars/avatar_akan_lake_r_v1.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "マリモが眠る深い緑の湖、アイヌの伝説が息づく",
    "stats": {
      "名産": "マリモ (特別天然記念物)",
      "場所": "釧路地方"
    },
    "charStats": {
      "power": 35,
      "defense": 68,
      "speed": 42
    },
    "relatedKeywords": [
      "マリモ",
      "阿寒コタン",
      "アイヌ文化"
    ],
    "dummyKanji": [
      "屈",
      "斜",
      "摩",
      "周",
      "知",
      "床",
      "洞",
      "爺"
    ],
    "hiddenFacts": [
      "Lv2: 特別天然記念物の『マリモ』が群生する稀有な湖",
      "Lv3: 湖畔には大規模なアイヌコタン（集落）があり、アイヌ文化の拠点",
      "Lv4: 火山活動による温泉が豊富で、北海道を代表する観光地の一つ",
      "Lv5: 雄阿寒岳と雌阿寒岳という2つの火山の麓に広がる"
    ]
  },
  {
    "geoId": "lake_chuzenji",
    "name": "中禅寺湖",
    "kana": "ちゅうぜんじこ",
    "type": "lake",
    "charName": "チュウゼンジ-スパ",
    "charImage": "assets/avatars/avatar_chuzenji_lake_r_v1.png",
    "region": "kanto",
    "rarity": "R",
    "flavorText": "日本一標高の高い場所にある湖、奥日光の象徴",
    "stats": {
      "標高": "約1,269m (日本一)",
      "流出": "華厳の滝"
    },
    "charStats": {
      "power": 40,
      "defense": 65,
      "speed": 58
    },
    "relatedKeywords": [
      "日光",
      "華厳の滝",
      "男体山"
    ],
    "dummyKanji": [
      "霞",
      "ヶ",
      "浦",
      "印",
      "旛",
      "沼",
      "芦",
      "ノ",
      "湖"
    ],
    "hiddenFacts": [
      "Lv2: 男体山の噴火による溶岩で川がせき止められてできた湖",
      "Lv3: 湖から流れ出す場所には、日本三大名瀑の一つ『華厳の滝』がある",
      "Lv4: かつては外国人居留者の避暑地として、多くの別荘が建てられた",
      "Lv5: 周囲の山々の紅葉が湖面に映る秋の景色は、日本有数の美しさ"
    ]
  },
  {
    "geoId": "lake_nakaumi",
    "name": "中海",
    "kana": "なかうみ",
    "type": "lake",
    "charName": "ナカウミ-ゲート",
    "charImage": "assets/avatars/avatar_nakaumi_lake_r_v1.png",
    "region": "chugoku",
    "rarity": "R",
    "flavorText": "島根と鳥取を繋ぐ汽水湖、境水道で海と繋がる",
    "stats": {
      "面積": "約86km² (全国5位)",
      "種類": "汽水湖"
    },
    "charStats": {
      "power": 32,
      "defense": 62,
      "speed": 65
    },
    "relatedKeywords": [
      "宍道湖",
      "境港",
      "大根島"
    ],
    "dummyKanji": [
      "宍",
      "道",
      "琵",
      "琶",
      "中",
      "海",
      "猪",
      "苗"
    ],
    "hiddenFacts": [
      "Lv2: 宍道湖と中海、そして日本海が繋がっており、国内有数の汽水湖地帯を成す",
      "Lv3: 湖の中には火山島の『大根島』があり、ボタンの生産が有名",
      "Lv4: かつて大規模な干拓計画があったが、現在は豊かな自然環境が守られている",
      "Lv5: 伝統的なヤマトシジミ漁が行われ、地域の重要な水産資源となっている"
    ]
  },
  {
    "geoId": "island_etorofu",
    "name": "択捉島",
    "kana": "えとろふとう",
    "type": "island",
    "charName": "エトロフ-フロンティア",
    "charImage": "assets/avatars/avatar_etorofu_island_ssr_v1.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "北方領土最大の島、火山と手つかずの自然が眠る場所",
    "stats": {
      "面積": "約3,139km² (日本最大 ※返還時)",
      "地形": "火山島"
    },
    "charStats": {
      "power": 82,
      "defense": 85,
      "speed": 35
    },
    "relatedKeywords": [
      "北方領土",
      "火口湖",
      "散布山"
    ],
    "dummyKanji": [
      "国",
      "後",
      "色",
      "丹",
      "歯",
      "舞",
      "利",
      "尻"
    ],
    "hiddenFacts": [
      "Lv2: 日本の領土の中で、本来は最大の面積を持つ島（本州・四国・九州・北海道を除く）",
      "Lv3: 島内には散布山（ちりっぷさん）など、今も活動する火山が多く存在する",
      "Lv4: かつてはサケやマスの漁業拠点として、多くの日本人が居住していた",
      "Lv5: 歴史的には、太平洋戦争の真珠湾攻撃の艦隊が集結した単冠（ひとかっぷ）湾がある"
    ]
  },
  {
    "geoId": "island_kunashiri",
    "name": "国後島",
    "kana": "くなしりとう",
    "type": "island",
    "charName": "クナシリ-ミスト",
    "charImage": "assets/avatars/avatar_kunashiri_island_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "北海道本島から目視できる、北方領土の大きな島",
    "stats": {
      "名所": "爺爺岳",
      "対岸": "知床半島・根室半島"
    },
    "charStats": {
      "power": 72,
      "defense": 78,
      "speed": 38
    },
    "relatedKeywords": [
      "北方領土",
      "羅臼山",
      "爺爺岳"
    ],
    "dummyKanji": [
      "択",
      "捉",
      "色",
      "丹",
      "歯",
      "舞",
      "礼",
      "文"
    ],
    "hiddenFacts": [
      "Lv2: 知床半島や根室半島から非常に近く、晴れた日にははっきりと見える",
      "Lv3: シンボルの爺爺岳（ちゃちゃだけ）は、美しい円錐形の活火山",
      "Lv4: 温泉が湧き出る川や、柱状節理の絶壁などダイナミックな地形が多い",
      "Lv5: 北方四島の中で、択捉島に次いで2番目に大きい面積を持つ"
    ]
  },
  {
    "geoId": "island_rishiri",
    "name": "利尻島",
    "kana": "りしりとう",
    "type": "island",
    "charName": "リシリ-マウンテン",
    "charImage": "assets/avatars/avatar_rishiri_island_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "海に浮かぶ富士山、最高級コンブが育つ北の島",
    "stats": {
      "主峰": "利尻山 (利尻富士)",
      "名産": "利尻昆布・ウニ"
    },
    "charStats": {
      "power": 65,
      "defense": 82,
      "speed": 40
    },
    "relatedKeywords": [
      "利尻富士",
      "高級昆布",
      "稚内"
    ],
    "dummyKanji": [
      "礼",
      "文",
      "奥",
      "尻",
      "焼",
      "尻",
      "天",
      "売"
    ],
    "hiddenFacts": [
      "Lv2: 島全体が巨大な火山（利尻山）であり、その姿から『利尻富士』と親しまれる",
      "Lv3: 日本最北の日本百名山を擁し、登山客に絶大な人気を誇る",
      "Lv4: 『利尻昆布』は日本を代表する最高級のダシ昆布として知られる",
      "Lv5: 冬には厳しい風雪に見舞われるが、その冷たい海が豊かな海の幸を育む"
    ]
  },
  {
    "geoId": "island_sado",
    "name": "佐渡島",
    "kana": "さどがしま",
    "type": "island",
    "charName": "サド-ゴールド",
    "charImage": "assets/avatars/avatar_sado_island_ssr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "黄金の島の歴史を刻む、日本海に浮かぶ最大の島",
    "stats": {
      "面積": "約855km²",
      "名所": "佐渡金山・朱鷺"
    },
    "charStats": {
      "power": 75,
      "defense": 82,
      "speed": 48
    },
    "relatedKeywords": [
      "佐渡金山",
      "朱鷺 (トキ)",
      "たらい舟"
    ],
    "dummyKanji": [
      "隠",
      "岐",
      "対",
      "馬",
      "壱",
      "岐",
      "五",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 江戸時代には世界有数の産出量を誇った『佐渡金山』があり、幕府を支えた",
      "Lv3: 日本で最後に絶滅した『ニッポントキ』の生息地として、保護活動の拠点",
      "Lv4: 独特な『たらい舟』での漁や観光は、佐渡ならではの伝統文化",
      "Lv5: 貴族や知識人の流刑地でもあったため、洗練された都の文化が色濃く残る"
    ]
  },
  {
    "geoId": "island_shodoshima",
    "name": "小豆島",
    "kana": "しょうどしま",
    "type": "island",
    "charName": "ショウド-オリーブ",
    "charImage": "assets/avatars/avatar_shodoshima_island_sr_v1.png",
    "region": "shikoku",
    "rarity": "SR",
    "flavorText": "オリーブが香る瀬戸内のリゾート、二十四の瞳の郷",
    "stats": {
      "名産": "オリーブ・醤油",
      "面積": "約153km²"
    },
    "charStats": {
      "power": 38,
      "defense": 72,
      "speed": 55
    },
    "relatedKeywords": [
      "オリーブ",
      "寒霞渓",
      "エンジェルロード"
    ],
    "dummyKanji": [
      "淡",
      "路",
      "直",
      "島",
      "豊",
      "島",
      "犬",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 日本で初めてオリーブの栽培に成功した『オリーブの島』として有名",
      "Lv3: 日本三大渓谷美の一つ『寒霞渓（かんかけい）』があり、紅葉が絶景",
      "Lv4: 潮の満ち引きで道が現れる『エンジェルロード』は恋人の聖地",
      "Lv5: 小説・映画『二十四の瞳』の舞台であり、昭和の原風景が残る"
    ]
  },
  {
    "geoId": "island_tsushima",
    "name": "対馬",
    "kana": "つしま",
    "type": "island",
    "charName": "ツシマ-ガーディアン",
    "charImage": "assets/avatars/avatar_tsushima_island_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "国境の島、大陸との歴史の架け橋",
    "stats": {
      "位置": "九州と朝鮮半島の間",
      "固有種": "ツシマヤマネコ"
    },
    "charStats": {
      "power": 62,
      "defense": 85,
      "speed": 45
    },
    "relatedKeywords": [
      "ツシマヤマネコ",
      "金田城",
      "朝鮮通信使"
    ],
    "dummyKanji": [
      "壱",
      "岐",
      "五",
      "島",
      "隠",
      "岐",
      "佐",
      "渡"
    ],
    "hiddenFacts": [
      "Lv2: 韓国から約50km。非常に近く、条件が良ければ釜山の街明かりが見える",
      "Lv3: 絶滅危惧種の『ツシマヤマネコ』が住む、独自の生態系を持つ島",
      "Lv4: 古代からの国防の要塞『金田城』など、防人の歴史が深く刻まれている",
      "Lv5: リアス海岸が発達した浅茅湾（あそうわん）の景観は圧巻"
    ]
  },
  {
    "geoId": "island_yakushima",
    "name": "屋久島",
    "kana": "やくしま",
    "type": "island",
    "charName": "ヤク-フォレスト",
    "charImage": "assets/avatars/avatar_yakushima_island_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "『月に35日雨が降る』、世界遺産の神木の森",
    "stats": {
      "指定": "世界自然遺産",
      "主峰": "宮之浦岳"
    },
    "charStats": {
      "power": 72,
      "defense": 95,
      "speed": 32
    },
    "relatedKeywords": [
      "縄文杉",
      "世界遺産",
      "もののけ姫"
    ],
    "dummyKanji": [
      "種",
      "子",
      "奄",
      "美",
      "徳",
      "之",
      "島",
      "沖",
      "永"
    ],
    "hiddenFacts": [
      "Lv2: 樹齢数千年とも言われる『縄文杉』をはじめ、巨大な屋久杉が自生する",
      "Lv3: 九州最高峰の宮之浦岳があり、亜熱帯から亜寒帯までの植物が1つの島に見られる",
      "Lv4: 映画『もののけ姫』の舞台のモデルの一つと言われる神秘的な苔の森",
      "Lv5: 非常に雨が多く、急峻な山々から流れる滝の数は数百にも上る"
    ]
  },
  {
    "geoId": "island_ishigaki",
    "name": "石垣島",
    "kana": "いしがきじま",
    "type": "island",
    "charName": "イシガキ-ブルー",
    "charImage": "assets/avatars/avatar_ishigaki_island_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "八重山諸島の拠点、ミシュランも認めた川平湾のエメラルド",
    "stats": {
      "名所": "川平湾",
      "主峰": "於茂登岳"
    },
    "charStats": {
      "power": 48,
      "defense": 65,
      "speed": 82
    },
    "relatedKeywords": [
      "川平湾",
      "石垣牛",
      "シュノーケリング"
    ],
    "dummyKanji": [
      "宮",
      "古",
      "西",
      "表",
      "与",
      "那",
      "国",
      "慶",
      "良"
    ],
    "hiddenFacts": [
      "Lv2: 川平湾（かびらわん）は日本を代表する絶景。グラスボートでの観光が定番",
      "Lv3: 八重山諸島の交通・経済のハブであり、ここから各離島への船が出る",
      "Lv4: 日本有数の星空観測地。全88星座のうち84星座が見られるとされる",
      "Lv5: 高級和牛のルーツとも言われる『石垣牛』などのグルメも人気"
    ]
  },
  {
    "geoId": "park_daisetsuzan",
    "name": "大雪山国立公園",
    "kana": "だいせつざんこくりつこうえん",
    "type": "national_park",
    "charName": "ダイセツ-ピーク",
    "charImage": "assets/avatars/avatar_daisetsuzan_park_ssr_v1.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "『北海道の屋根』。日本最大の面積を誇る山岳公園",
    "stats": {
      "面積": "約2,267km² (日本最大)",
      "山": "旭岳"
    },
    "charStats": {
      "power": 88,
      "defense": 82,
      "speed": 35
    },
    "relatedKeywords": [
      "日本最大",
      "カムイミンタラ",
      "十勝岳"
    ],
    "dummyKanji": [
      "阿",
      "寒",
      "知",
      "床",
      "利",
      "尻",
      "支",
      "笏"
    ],
    "hiddenFacts": [
      "Lv2: アイヌ語で『カムイミンタラ（神々の遊ぶ庭）』と呼ばれる聖域",
      "Lv3: 日本で最も早く紅葉が始まり、最も遅くまで雪が残る極寒の地",
      "Lv4: 旭岳などの火山が連なり、今も噴煙を上げるダイナミックな姿が見られる",
      "Lv5: ギンザンマシコなどの高山植物や希少動物が数多く生息している"
    ]
  },
  {
    "geoId": "park_nikko",
    "name": "日光国立公園",
    "kana": "にっこうこくりつこうえん",
    "type": "national_park",
    "charName": "ニッコウ-レジェンド",
    "charImage": "assets/avatars/avatar_nikko_ssr_v1.png",
    "region": "kanto",
    "rarity": "SSR",
    "flavorText": "歴史と自然の融合、世界遺産の社寺と奥日光の絶景",
    "stats": {
      "指定": "世界遺産 (社寺)",
      "名所": "中禅寺湖・戦場ヶ原"
    },
    "charStats": {
      "power": 72,
      "defense": 85,
      "speed": 55
    },
    "relatedKeywords": [
      "東照宮",
      "華厳の滝",
      "いろは坂"
    ],
    "dummyKanji": [
      "秩",
      "父",
      "尾",
      "瀬",
      "富",
      "士",
      "箱",
      "根"
    ],
    "hiddenFacts": [
      "Lv2: 徳川家康を祀る日光東照宮をはじめ、歴史的な宗教建築が密集している",
      "Lv3: 明治維新後は、外交官や貴族たちの広大な避暑リゾート地として発展した",
      "Lv4: 華厳の滝や戦場ヶ原など、火山活動が生み出した神秘的な自然が広がる",
      "Lv5: 『い・ろ・は』の48カーブがあるいろは坂は、紅葉シーズンに激混みする名所"
    ]
  },
  {
    "geoId": "park_fuji_hakone",
    "name": "富士箱根伊豆国立公園",
    "kana": "ふじはこねいずこくりつこうえん",
    "type": "national_park",
    "charName": "フジ-レジェンド",
    "charImage": "assets/avatars/avatar_fuji_hakone_park_ssr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "日本一の山・富士を筆頭に、温泉と火山が織りなす究極の公園",
    "stats": {
      "利用者数": "日本一",
      "エリア": "富士・箱根・伊豆"
    },
    "charStats": {
      "power": 95,
      "defense": 78,
      "speed": 62
    },
    "relatedKeywords": [
      "富士山",
      "芦ノ湖",
      "城ヶ崎海岸"
    ],
    "dummyKanji": [
      "秩",
      "父",
      "南",
      "アルプス",
      "中",
      "部",
      "山",
      "岳"
    ],
    "hiddenFacts": [
      "Lv2: 富士山だけでなく、箱根のカルデラや伊豆の海岸線までを含む広大な公園",
      "Lv3: 日本を代表する景勝地が詰まっており、年間利用者数は全国の公園でトップ",
      "Lv4: 火山現象のデパートともいわれ、至る所で温泉や噴煙が見られる",
      "Lv5: 海を隔てた伊豆諸島までもがこの公園の範囲に含まれている"
    ]
  },
  {
    "geoId": "park_setonaikai",
    "name": "瀬戸内海国立公園",
    "kana": "せとないかいこくりつこうえん",
    "type": "national_park",
    "charName": "セト-オーシャン",
    "charImage": "assets/avatars/avatar_setonaikai_ssr_v1.png",
    "region": "chugoku",
    "rarity": "SSR",
    "flavorText": "日本最初の国立公園。多島海の美しさは『世界の宝石』",
    "stats": {
      "指定": "日本初 (1934年)",
      "特徴": "大小3,000の島々"
    },
    "charStats": {
      "power": 62,
      "defense": 88,
      "speed": 75
    },
    "relatedKeywords": [
      "多島海",
      "しまなみ海道",
      "厳島"
    ],
    "dummyKanji": [
      "大",
      "山",
      "隠",
      "岐",
      "足",
      "摺",
      "雲",
      "仙"
    ],
    "hiddenFacts": [
      "Lv2: 兵庫から福岡まで、1府10県にまたがる日本一広範囲な国立公園",
      "Lv3: 鏡のような穏やかな海面と、点在する島々が織りなす『多島海』景観",
      "Lv4: 古くから海上交通の動脈として栄え、港町やアートの島など文化も豊か",
      "Lv5: シーボルトなど多くの海外探検家が、その美しさを世界に絶賛した"
    ]
  },
  {
    "geoId": "park_aso_kuju",
    "name": "阿蘇くじゅう国立公園",
    "kana": "あそくじゅうこくりつこうえん",
    "type": "national_park",
    "charName": "アソ-マグマ",
    "charImage": "assets/avatars/avatar_aso_kuju_park_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "世界最大級のカルデラ。火の国のエネルギーが漲る公園",
    "stats": {
      "山": "阿蘇五岳・九重連山",
      "名所": "草千里ヶ浜"
    },
    "charStats": {
      "power": 92,
      "defense": 78,
      "speed": 45
    },
    "relatedKeywords": [
      "カルデラ",
      "草千里",
      "ミルクロード"
    ],
    "dummyKanji": [
      "雲",
      "仙",
      "西",
      "海",
      "霧",
      "島",
      "屋",
      "久"
    ],
    "hiddenFacts": [
      "Lv2: 巨大なカルデラの中に街や田畑、鉄道があり、人々が火山と共生している",
      "Lv3: 九重（くじゅう）連山には九州最高峰の山々があり、高山植物の宝庫",
      "Lv4: どこまでも続く広大な草原は、千年以上前から野焼きで維持されてきた",
      "Lv5: 全国有数の温泉地・黒川温泉や別府・湯布院もこの周辺に位置する"
    ]
  },
  {
    "geoId": "park_ais_shima",
    "name": "伊勢志摩国立公園",
    "kana": "いせしまこくりつこうえん",
    "type": "national_park",
    "charName": "イセ-スピリット",
    "charImage": "assets/avatars/avatar_ise_shima_park_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "伊勢神宮の森とリアス海岸、神話と海の恵みの公園",
    "stats": {
      "拠点": "伊勢神宮",
      "地形": "リアス海岸 (英虞湾)"
    },
    "charStats": {
      "power": 45,
      "defense": 92,
      "speed": 55
    },
    "relatedKeywords": [
      "伊勢神宮",
      "真珠養殖",
      "海女"
    ],
    "dummyKanji": [
      "吉",
      "野",
      "熊",
      "野",
      "三",
      "河",
      "湾",
      "志",
      "摩"
    ],
    "hiddenFacts": [
      "Lv2: 日本人の心の故郷『伊勢神宮』の広大な社叢（森）を中心としている",
      "Lv3: 英虞（あご）湾の入り組んだ海岸線は、世界で初めて真珠養殖に成功した地",
      "Lv4: 海女（あま）漁の伝統が今も息づき、サザエやアワビなどの海の幸が豊富",
      "Lv5: 多くの島々を望む展望台からの景色は、古くから歌に詠まれてきた"
    ]
  },
  {
    "geoId": "island_shikotan",
    "name": "色丹島",
    "kana": "しこたんとう",
    "type": "island",
    "charName": "シコタン-グリーン",
    "charImage": "assets/avatars/avatar_shikotan_island_r_v1.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "北方領土の一つ、なだらかな丘陵と豊かな草原の島",
    "stats": {
      "面積": "約250km²",
      "拠点": "斜古丹"
    },
    "charStats": {
      "power": 38,
      "defense": 72,
      "speed": 45
    },
    "relatedKeywords": [
      "北方領土",
      "穴澗",
      "色丹村"
    ],
    "dummyKanji": [
      "択",
      "捉",
      "国",
      "後",
      "歯",
      "舞",
      "奥",
      "尻"
    ],
    "hiddenFacts": [
      "Lv2: 択捉島や国後島と違い、高い山が少なく、なだらかな地形が特徴",
      "Lv3: かつては捕鯨やサケ・マス漁の拠点として栄え、多くの日本人が住んでいた",
      "Lv4: 映画『ジョバンニの島』の舞台であり、戦後の悲しい歴史も残されている",
      "Lv5: 北方領土の中でも、択捉・国後と並んで返還が議論される主要な島の一つ"
    ]
  },
  {
    "geoId": "basin_yamagata",
    "name": "山形盆地",
    "kana": "やまがたぼんち",
    "type": "basin",
    "charName": "ヤマガタ-サクランボ",
    "charImage": "assets/avatars/avatar_yamagata_basin_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "最上川が流れる果樹王国、日本一のサクランボの産地",
    "stats": {
      "河川": "最上川",
      "特産": "サクランボ・将棋駒"
    },
    "charStats": {
      "power": 32,
      "defense": 65,
      "speed": 48
    },
    "relatedKeywords": [
      "最上川",
      "サクランボ",
      "蔵王"
    ],
    "dummyKanji": [
      "米",
      "沢",
      "会",
      "津",
      "横",
      "手",
      "秋",
      "田"
    ],
    "hiddenFacts": [
      "Lv2: 夏は非常に暑く、1933年には当時の日本最高気温40.8度を記録した",
      "Lv3: サクランボ（佐藤錦）の生産量が日本一で、初夏には赤い宝石で埋め尽くされる",
      "Lv4: 最上川が盆地の中央を貫き、かつては舟運の拠点として栄えた",
      "Lv5: 将棋駒の生産量日本一の天童市も、この盆地の中に位置する"
    ]
  },
  {
    "geoId": "basin_matsumoto",
    "name": "松本盆地",
    "kana": "まつもとぼんち",
    "type": "basin",
    "charName": "マツモト-キャッスル",
    "charImage": "assets/avatars/avatar_matsumoto_basin_r_v1.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "北アルプスの麓、国宝松本城が誇る信州の要衝",
    "stats": {
      "拠点": "松本市",
      "標高": "約600m"
    },
    "charStats": {
      "power": 38,
      "defense": 75,
      "speed": 42
    },
    "relatedKeywords": [
      "松本城",
      "北アルプス",
      "わさび園"
    ],
    "dummyKanji": [
      "長",
      "野",
      "上",
      "田",
      "佐",
      "久",
      "伊",
      "那"
    ],
    "hiddenFacts": [
      "Lv2: 盆地の西側に連なる北アルプスの絶景が、どこからでも見える",
      "Lv3: 国宝松本城は、現存する日本最古の五重六階の木造天守を持つ",
      "Lv4: 盆地北部の大王わさび農場は、アルプスの湧水を利用した日本最大級の農場",
      "Lv5: 内陸性気候のため昼夜の寒暖差が激しく、リンゴや蕎麦の栽培に適している"
    ]
  },
  {
    "geoId": "plateau_makinohara",
    "name": "牧之原",
    "kana": "まきのはら",
    "type": "plateau",
    "charName": "マキノハラ-グリーン",
    "charImage": "assets/avatars/avatar_makinohara_plateau_r_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "日本最大級の茶園、富士山を望む緑の台地",
    "stats": {
      "地目": "茶畑",
      "拠点": "牧之原市"
    },
    "charStats": {
      "power": 35,
      "defense": 78,
      "speed": 52
    },
    "relatedKeywords": [
      "静岡茶",
      "富士山",
      "大井川"
    ],
    "dummyKanji": [
      "三",
      "方",
      "原",
      "富士",
      "裾",
      "野",
      "伊",
      "豆"
    ],
    "hiddenFacts": [
      "Lv2: 明治維新後、職を失った武士たちが開拓した歴史を持つ茶園",
      "Lv3: 静岡茶の主要産地であり、どこまでも続く茶畑の景色は圧巻",
      "Lv4: 富士山静岡空港はこの台地の上にあり、茶畑の間を飛行機が離着陸する",
      "Lv5: 日照時間が長く、水はけの良い地質がおいしいお茶を育む"
    ]
  },
  {
    "geoId": "river_teshio",
    "name": "天塩川",
    "kana": "てしおがわ",
    "type": "river",
    "charName": "テシオ-フリュイド",
    "charImage": "assets/avatars/avatar_teshio_river_r_v1.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "日本屈指の大蛇行、手つかずの自然が残る最北の母なる川",
    "stats": {
      "長さ": "256km (国内4位)",
      "水系": "天塩川水系"
    },
    "charStats": {
      "power": 48,
      "defense": 65,
      "speed": 82
    },
    "relatedKeywords": [
      "大蛇行",
      "最北の大河",
      "イトウ"
    ],
    "dummyKanji": [
      "石",
      "狩",
      "十",
      "勝",
      "釧",
      "路",
      "尻",
      "別"
    ],
    "hiddenFacts": [
      "Lv2: 日本の大きな川の中で唯一、ダムがない本流として知られる",
      "Lv3: 幻の巨大魚『イトウ』が生息する、手つかずの生態系が残る貴重な川",
      "Lv4: 蛇行が激しく、原生林の中をゆったりと流れる姿はカナダの風景のよう",
      "Lv5: 冬には大部分が結氷し、氷が割れて流れる『蓮葉氷』が見られることもある"
    ]
  },
  {
    "geoId": "river_arakawa",
    "name": "荒川",
    "kana": "あらかわ",
    "type": "river",
    "charName": "アラカワ-ゲート",
    "charImage": "assets/avatars/avatar_arakawa_river_sr_v1.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "東京を守る大動脈、荒ぶる川から穏やかな流れへ",
    "stats": {
      "長さ": "173km",
      "水系": "荒川水系"
    },
    "charStats": {
      "power": 62,
      "defense": 85,
      "speed": 55
    },
    "relatedKeywords": [
      "長瀞",
      "荒川放水路",
      "都営新宿線"
    ],
    "dummyKanji": [
      "利",
      "根",
      "多",
      "摩",
      "江戸",
      "隅",
      "田",
      "中"
    ],
    "hiddenFacts": [
      "Lv2: 埼玉県秩父の山奥を源流とし、国の名勝『長瀞』では美しい渓谷美を作る",
      "Lv3: 下流の巨大な人工河川部分は、かつて水害から東京を守るために掘られた『荒川放水路』",
      "Lv4: 昔は『荒ぶる川』の名の通り氾濫を繰り返したため、大規模な治水が行われてきた",
      "Lv5: 広大な河川敷は市民の憩いの場であり、有名なマラソン大会も行われる"
    ]
  },
  {
    "geoId": "river_tamagawa",
    "name": "多摩川",
    "kana": "たまがわ",
    "type": "river",
    "charName": "タマガワ-バウンダリー",
    "charImage": "assets/avatars/avatar_tamagawa_river_sr_v1.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "東京と神奈川の境界を流れる、都会のオアシス",
    "stats": {
      "長さ": "138km",
      "水系": "多摩川水系"
    },
    "charStats": {
      "power": 52,
      "defense": 78,
      "speed": 65
    },
    "relatedKeywords": [
      "二子玉川",
      "奥多摩",
      "タマちゃん"
    ],
    "dummyKanji": [
      "荒",
      "利",
      "根",
      "江戸",
      "相",
      "模",
      "鶴",
      "見"
    ],
    "hiddenFacts": [
      "Lv2: 源流は山梨県にある『笠取山』。東京都の水源の一つでもある",
      "Lv3: 都会の川でありながらアユの遡上が見られるほど、水質が劇的に改善した",
      "Lv4: 2002年にアゴヒゲアザラシの『タマちゃん』が現れ、社会現象となった",
      "Lv5: 上流の奥多摩エリアは、カヌーやキャンプを楽しめる豊かな自然が残る"
    ]
  },
  {
    "geoId": "river_joganji",
    "name": "常願寺川",
    "kana": "じょうがんじがわ",
    "type": "river",
    "charName": "ジョウガンジ-フォール",
    "charImage": "assets/avatars/avatar_joganji_river_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "『これは川ではない、滝だ』と驚かれた、日本屈指の急流",
    "stats": {
      "長さ": "56km",
      "特徴": "世界有数の急勾配"
    },
    "charStats": {
      "power": 88,
      "defense": 42,
      "speed": 98
    },
    "relatedKeywords": [
      "立山連峰",
      "砂防ダム",
      "デ・レイケ"
    ],
    "dummyKanji": [
      "黒",
      "部",
      "神通",
      "庄",
      "川",
      "手",
      "取",
      "九",
      "頭"
    ],
    "hiddenFacts": [
      "Lv2: オランダ人技師デ・レイケが、そのあまりの勢いに『これは滝だ』と漏らしたという伝説がある",
      "Lv3: 標高3,000mの立山連峰から富山湾まで、一気に駆け下りるダイナミックな川",
      "Lv4: 上流の立山カルデラには大量の土砂があり、日本最大級の砂防工事が行われている",
      "Lv5: 大雨が降ると一気に水位が上がるため、古くから暴れ川として恐れられてきた"
    ]
  },
  {
    "geoId": "peninsula_oshima",
    "name": "渡島半島",
    "kana": "おしまはんとう",
    "type": "peninsula",
    "charName": "オシマ-テイル",
    "charImage": "assets/avatars/avatar_oshima_peninsula_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "北海道の南西端、函館を抱く歴史と交易の半島",
    "stats": {
      "拠点": "函館市",
      "火山": "駒ヶ岳"
    },
    "charStats": {
      "power": 55,
      "defense": 78,
      "speed": 42
    },
    "relatedKeywords": [
      "函館",
      "五稜郭",
      "大沼公園"
    ],
    "dummyKanji": [
      "知",
      "床",
      "根",
      "室",
      "積",
      "丹",
      "能",
      "登"
    ],
    "hiddenFacts": [
      "Lv2: 北海道の中でも気候が温暖で、最も古くから和人が住みついた地域",
      "Lv3: 津軽海峡を挟んで東北と向き合い、古くから物流の要所であった",
      "Lv4: 幕末には箱館戦争の舞台となり、五稜郭などの歴史遺産が残る",
      "Lv5: 多くの火山や温泉があり、美しい山容の駒ヶ岳は半島のシンボル"
    ]
  },
  {
    "geoId": "peninsula_shimane",
    "name": "島根半島",
    "kana": "しまねはんとう",
    "type": "peninsula",
    "charName": "シマネ-ゴッド",
    "charImage": "assets/avatars/avatar_shimane_peninsula_sr_v1.png",
    "region": "chugoku",
    "rarity": "SR",
    "flavorText": "神々が宿る地、国引き神話の舞台となった半島",
    "stats": {
      "拠点": "松江市・出雲市",
      "名所": "出雲大社"
    },
    "charStats": {
      "power": 48,
      "defense": 95,
      "speed": 35
    },
    "relatedKeywords": [
      "出雲大社",
      "日御碕",
      "美保関"
    ],
    "dummyKanji": [
      "能",
      "登",
      "紀",
      "伊",
      "三",
      "浦",
      "房",
      "総"
    ],
    "hiddenFacts": [
      "Lv2: 古事記の『国引き神話』にて、神様が他所から引っ張ってきたとされる地",
      "Lv3: 西端には日本を代表する聖地・出雲大社があり、全国から八百万の神が集う",
      "Lv4: 東端の美保関は古い港町で、恵比寿様の総本宮である美保神社がある",
      "Lv5: 北側は険しい断崖が続くリアス式海岸で、美しいジオパークの景観を持つ"
    ]
  },
  {
    "geoId": "peninsula_sadamisaki",
    "name": "佐田岬半島",
    "kana": "さだみさきはんとう",
    "type": "peninsula",
    "charName": "サダミサキ-ランス",
    "charImage": "assets/avatars/avatar_sadamisaki_peninsula_sr_v1.png",
    "region": "shikoku",
    "rarity": "SR",
    "flavorText": "日本一細長い半島。四国の西端から海へ突き出す槍",
    "stats": {
      "長さ": "約40km",
      "幅": "最小約0.8km"
    },
    "charStats": {
      "power": 65,
      "defense": 42,
      "speed": 92
    },
    "relatedKeywords": [
      "宇和海",
      "三崎",
      "メロディーライン"
    ],
    "dummyKanji": [
      "足",
      "摺",
      "室",
      "戸",
      "高",
      "縄",
      "庄",
      "内"
    ],
    "hiddenFacts": [
      "Lv2: 標高の高い尾根を走る『メロディーライン』からは、左右に瀬戸内海と宇和海の両方が見える",
      "Lv3: 先端の佐田岬灯台からは、天気が良ければ九州がすぐそこに見える",
      "Lv4: 半島の斜面は段々畑になっており、温暖な気候を利用したミカン栽培が盛ん",
      "Lv5: 多くの巨大な風車が尾根上に並び、風力発電の拠点としても有名"
    ]
  },
  {
    "geoId": "peninsula_kunisaki",
    "name": "国東半島",
    "kana": "くにさきはんとう",
    "type": "peninsula",
    "charName": "クニサキ-サークル",
    "charImage": "assets/avatars/avatar_kunisaki_peninsula_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "不思議な丸い半島、神と仏が融合した『六郷満山』の里",
    "stats": {
      "拠点": "国東市",
      "山": "両子山"
    },
    "charStats": {
      "power": 52,
      "defense": 88,
      "speed": 38
    },
    "relatedKeywords": [
      "六郷満山",
      "熊野磨崖仏",
      "ハスの花"
    ],
    "dummyKanji": [
      "大",
      "隅",
      "薩",
      "摩",
      "島",
      "原",
      "宇",
      "土"
    ],
    "hiddenFacts": [
      "Lv2: 半島の中央にある両子山から、いくつもの谷が放射状に広がる独特の円形をしている",
      "Lv3: 独自の仏教文化『六郷満山』が栄え、多くの石仏や石塔が山の中に静かに眠る",
      "Lv4: 巨大な『熊野磨崖仏』は、一夜にして鬼が積み上げたという伝説を持つ石段の上にある",
      "Lv5: 里山と信仰が一体となった景観は、『世界農業遺産』にも認定されている"
    ]
  },
  {
    "geoId": "cape_erimo",
    "name": "襟裳岬",
    "kana": "えりもみさき",
    "type": "cape",
    "charName": "エリモ-ウィンド",
    "charImage": "assets/avatars/avatar_erimo_cape_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "日高山脈の終焉、海に消えていく岩礁と強風の岬",
    "stats": {
      "拠点": "えりも町",
      "風速": "年間平均風速10m以上"
    },
    "charStats": {
      "power": 85,
      "defense": 45,
      "speed": 95
    },
    "relatedKeywords": [
      "日高山脈",
      "ゼニガタアザラシ",
      "風の館"
    ],
    "dummyKanji": [
      "宗",
      "谷",
      "納",
      "沙",
      "布",
      "地球",
      "潮",
      "岬"
    ],
    "hiddenFacts": [
      "Lv2: 日高山脈の険しい山並みが、そのまま太平洋へと沈み込んでいくダイナミックな終着点",
      "Lv3: 年間260日以上も風速10mを超える風が吹く、『風の岬』として有名",
      "Lv4: 先端の岩礁には、野生のゼニガタアザラシが500頭以上も生息している",
      "Lv5: 歌にも詠まれた名所であり、深い不霧に包まれることも多い幻想的な地"
    ]
  },
  {
    "geoId": "cape_shionomisaki",
    "name": "潮岬",
    "kana": "しおのみさき",
    "type": "cape",
    "charName": "シオ-オーシャン",
    "charImage": "assets/avatars/avatar_shionomisaki_cape_sr_v1.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "本州最南端。黒潮が押し寄せる白亜の灯台の岬",
    "stats": {
      "位置": "本州最南端",
      "標高": "約30mの断崖"
    },
    "charStats": {
      "power": 55,
      "defense": 82,
      "speed": 62
    },
    "relatedKeywords": [
      "最南端",
      "黒潮",
      "串本"
    ],
    "dummyKanji": [
      "足",
      "摺",
      "室",
      "戸",
      "伊",
      "良",
      "湖",
      "佐",
      "多"
    ],
    "hiddenFacts": [
      "Lv2: 展望台からは、地球が丸く見えるほど水平線が180度以上広がる",
      "Lv3: 黒潮の本流が最も近くを流れるため、冬でも非常に温暖な気候",
      "Lv4: 隣にはトルコとの友好記念館があり、歴史的な絆を今に伝えている",
      "Lv5: 岬の広場はキャンプ場としても人気で、開放感あふれる景色が楽しめる"
    ]
  },
  {
    "geoId": "bay_funka",
    "name": "噴火湾",
    "kana": "ふんかわん",
    "type": "bay",
    "charName": "フンカ-サークル",
    "charImage": "assets/avatars/avatar_funka_bay_r_v1.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "内浦湾の別名。周囲を山に囲まれたホタテの宝庫",
    "stats": {
      "別名": "内浦湾",
      "特産": "ホタテガイ"
    },
    "charStats": {
      "power": 42,
      "defense": 78,
      "speed": 45
    },
    "relatedKeywords": [
      "ホタテ養殖",
      "駒ヶ岳",
      "有珠山"
    ],
    "dummyKanji": [
      "石",
      "狩",
      "仙",
      "台",
      "東",
      "京",
      "伊",
      "勢"
    ],
    "hiddenFacts": [
      "Lv2: 18世紀にイギリスの探検船が訪れた際、周囲に火山が多いため『ヴォルカノ・ベイ』と名付けた",
      "Lv3: 駒ヶ岳や有珠山など、活動的な火山に囲まれた穏やかな円形の湾",
      "Lv4: 栄養豊富な海水が流れ込むため、ホタテ養殖が非常に盛んな『ホタテのふる里』",
      "Lv5: 湾内にはイルカやクジラも姿を見せ、ホエールウォッチングも楽しめる"
    ]
  },
  {
    "geoId": "sea_yatsushiro",
    "name": "八代海",
    "kana": "やつしろかい",
    "type": "bay",
    "charName": "ヤツシロ-ミラー",
    "charImage": "assets/avatars/avatar_yatsushiro_sea_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "別名『不知火海』。多くの島に囲まれた穏やかな内海",
    "stats": {
      "別名": "不知火海",
      "周囲": "天草諸島"
    },
    "charStats": {
      "power": 38,
      "defense": 85,
      "speed": 42
    },
    "relatedKeywords": [
      "不知火",
      "天草",
      "真珠養殖"
    ],
    "dummyKanji": [
      "有",
      "明",
      "土",
      "佐",
      "瀬",
      "戸",
      "内",
      "海"
    ],
    "hiddenFacts": [
      "Lv2: 蜃気楼の一種である『不知火（しらぬい）』が見られることで有名",
      "Lv3: 九州本土、天草諸島、芦北（あしきた）地方に囲まれた、湖のように静かな海",
      "Lv4: リアス式海岸が発達した、真珠や真鯛の養殖に最適な環境を持つ",
      "Lv5: 多くの小島が点在し、夕日に染まる多島海 の景色は絶品"
    ]
  },
  {
    "geoId": "bay_tosa",
    "name": "土佐湾",
    "kana": "とさわん",
    "type": "bay",
    "charName": "トサ-パッション",
    "charImage": "assets/avatars/avatar_tosa_bay_r_v1.png",
    "region": "shikoku",
    "rarity": "R",
    "flavorText": "太平洋を望む雄大な弧。黒潮の恵みと坂本龍馬の海",
    "stats": {
      "拠点": "高知市",
      "特産": "カツオ"
    },
    "charStats": {
      "power": 65,
      "defense": 52,
      "speed": 78
    },
    "relatedKeywords": [
      "桂浜",
      "カツオのたたき",
      "足摺岬"
    ],
    "dummyKanji": [
      "大阪",
      "有",
      "明",
      "別",
      "府",
      "噴",
      "火",
      "仙",
      "台"
    ],
    "hiddenFacts": [
      "Lv2: 弓なりになった広大な海岸線が特徴。桂浜を代表とする美しい浜辺が続く",
      "Lv3: カツオの一本釣りで世界的に有名であり、カツオのたたきは高知自慢の味",
      "Lv4: 黒潮の影響を直接受けるため、サンゴ礁や熱帯魚も見られる温暖な海",
      "Lv5: 坂本龍馬が世界に目を向けた舞台であり、ダイナミックな外海のエネルギーを感じる"
    ]
  },
  {
    "geoId": "lake_kussharo",
    "name": "屈斜路湖",
    "kana": "くっしゃろこ",
    "type": "lake",
    "charName": "クッシャロ-キング",
    "charImage": "assets/avatars/avatar_kussharo_lake_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "日本最大のカルデラ湖、神秘的なコバルトブルー",
    "stats": {
      "面積": "79km²",
      "地質": "カルデラ湖"
    },
    "charStats": {
      "power": 68,
      "defense": 82,
      "speed": 45
    },
    "relatedKeywords": [
      "クッシー",
      "美幌峠",
      "砂湯"
    ],
    "dummyKanji": [
      "摩",
      "周",
      "サ",
      "ロ",
      "マ",
      "洞",
      "爺",
      "支",
      "笏"
    ],
    "hiddenFacts": [
      "Lv2: 周囲57km、日本で最も巨大なカルデラ湖. 中央に浮かぶ中島も日本最大",
      "Lv3: 湖畔の砂浜を掘るとお湯が出る『砂湯』は、冬に白鳥が集まる人気スポット",
      "Lv4: かつて謎の巨大生物『クッシー』の目撃証言が多発し、話題になった",
      "Lv5: 美幌峠（びほろとうげ）からのパノラマは、北海道を代表する絶景の一つ"
    ]
  },
  {
    "geoId": "lake_mashu",
    "name": "摩周湖",
    "kana": "ましゅうこ",
    "type": "lake",
    "charName": "マシュウ-ミステリー",
    "charImage": "assets/avatars/avatar_mashu_lake_ssr_v1.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "『摩周ブルー』。世界屈指の透明度を誇る霧の湖",
    "stats": {
      "透明度": "世界最高クラス",
      "指定": "特別保護地区"
    },
    "charStats": {
      "power": 45,
      "defense": 98,
      "speed": 32
    },
    "relatedKeywords": [
      "霧の摩周湖",
      "摩周ブルー",
      "カムイシュ島"
    ],
    "dummyKanji": [
      "屈",
      "斜",
      "路",
      "サ",
      "ロ",
      "マ",
      "十",
      "和",
      "田"
    ],
    "hiddenFacts": [
      "Lv2: 川の流出入がなく、極めて不純物が少ないため、深い青色（摩周ブルー）に見える",
      "Lv3: 崖に囲まれて水面に降りることができず、神秘を保ち続けている。アイヌ語で『神の湖』",
      "Lv4: 霧が発生しやすく、『霧が晴れた摩周湖を見ると婚期が遅れる』という伝説がある",
      "Lv5: 湖の中央にある小さな島『カムイシュ島』は、湖面に浮いているように見えて幻想的"
    ]
  },
  {
    "geoId": "lake_ikeda",
    "name": "池田湖",
    "kana": "いけだこ",
    "type": "lake",
    "charName": "イケダ-レリーフ",
    "charImage": "assets/avatars/avatar_ikeda_lake_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "九州最大。大ウナギと怪獣イッシーの伝説の湖",
    "stats": {
      "面積": "11km²",
      "深さ": "233m"
    },
    "charStats": {
      "power": 35,
      "defense": 78,
      "speed": 42
    },
    "relatedKeywords": [
      "イッシー",
      "オオウナギ",
      "開聞岳"
    ],
    "dummyKanji": [
      "中",
      "海",
      "宍",
      "道",
      "猪",
      "苗",
      "代",
      "霞",
      "浦"
    ],
    "hiddenFacts": [
      "Lv2: 約5,500年前の火山活動によってできた、ほぼ円形のカルデラ湖",
      "Lv3: 体長2mにもなる巨大な『オオウナギ』が生息し、天然記念物に指定されている",
      "Lv4: 1970年代に謎の巨大生物『イッシー』が目撃され、全国的なブームになった",
      "Lv5: 湖の背後には『薩摩富士』と呼ばれる開聞岳が座り、菜の花の名所としても有名"
    ]
  },
  {
    "geoId": "island_rebun",
    "name": "礼文島",
    "kana": "れぶんとう",
    "type": "island",
    "charName": "レブン-フラワー",
    "charImage": "assets/avatars/avatar_rebun_island_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "『花の浮島』。ここでしか見られない高山植物の楽園",
    "stats": {
      "通称": "花の浮島",
      "山": "礼文岳"
    },
    "charStats": {
      "power": 38,
      "defense": 90,
      "speed": 45
    },
    "relatedKeywords": [
      "レブンウスユキソウ",
      "最北の離島",
      "スカイ岬"
    ],
    "dummyKanji": [
      "利",
      "尻",
      "奥",
      "尻",
      "佐",
      "渡",
      "壱",
      "岐"
    ],
    "hiddenFacts": [
      "Lv2: 標高が低くても冷涼なため、本来は高い山にしか咲かない高山植物が海岸近くまで咲き乱れる",
      "Lv3: 島固有の『レブンアツモリソウ』は、白くて可愛らしい花の姿から非常に人気がある",
      "Lv4: 澄み切った海に白い砂、そして緑の草が生い茂る景色は、海外のような美しさ",
      "Lv5: 島の北端にあるスコトン岬は、日本最北限の地の一つとして多くの旅人が訪れる"
    ]
  },
  {
    "geoId": "island_okushiri",
    "name": "奥尻島",
    "kana": "おくしりとう",
    "type": "island",
    "charName": "オクシリ-ブルー",
    "charImage": "assets/avatars/avatar_okushiri_island_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "復興のシンボル。奥尻ブルーの海と海の幸の島",
    "stats": {
      "拠点": "奥尻町",
      "名所": "なべつる岩"
    },
    "charStats": {
      "power": 45,
      "defense": 82,
      "speed": 55
    },
    "relatedKeywords": [
      "奥尻ブルー",
      "なべつる岩",
      "ウニ・アワビ"
    ],
    "dummyKanji": [
      "利",
      "尻",
      "礼",
      "文",
      "対",
      "馬",
      "五",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 透明度25mを誇る美しい海は『奥尻ブルー』と呼ばれ、シーカヤックなどが人気",
      "Lv3: 島のシンボル『なべつる岩』は、鍋の取っ手のような独特の形をした奇岩",
      "Lv4: ウニやアワビの高級食材が豊富で、かつては『島自体がレストラン』と言われるほどだった",
      "Lv5: 1993年の大地震と津波から立ち上がった、力強い復興の歴史を持つ島"
    ]
  },
  {
    "geoId": "park_akan_mashu",
    "name": "阿寒摩周国立公園",
    "kana": "あかんましゅうこくりつこうえん",
    "type": "national_park",
    "charName": "アカン-ミステリー",
    "charImage": "assets/avatars/avatar_akan_mashu_park_ssr_v1.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "火山の神秘が生んだ、マリモと透明な湖の公園",
    "stats": {
      "湖": "阿寒湖・摩周湖・屈斜路湖",
      "火山": "雄阿寒岳・雌阿寒岳"
    },
    "charStats": {
      "power": 75,
      "defense": 92,
      "speed": 40
    },
    "relatedKeywords": [
      "マリモ",
      "霧の摩周湖",
      "アイヌコタン"
    ],
    "dummyKanji": [
      "知",
      "床",
      "大",
      "雪",
      "山",
      "支",
      "笏",
      "洞",
      "爺"
    ],
    "hiddenFacts": [
      "Lv2: 特別天然記念物のマリモが自生する阿寒湖や、世界有数の透明度を誇る摩周湖を擁する",
      "Lv3: 雌阿寒岳は今も活発に活動しており、登山口からは火山活動の迫力を間近に感じられる",
      "Lv4: 屈斜路湖には温泉が湧き出し、冬には白鳥が暖かい湯溜まりに集まる光景が見られる",
      "Lv5: 阿寒湖畔には北海道最大級のアイヌコタンがあり、アイヌの伝統文化に触れることができる"
    ]
  },
  {
    "geoId": "park_shikotsu_toya",
    "name": "支笏洞爺国立公園",
    "kana": "しこつとうやこくりつこうえん",
    "type": "national_park",
    "charName": "シコツ-ボルケーノ",
    "charImage": "assets/avatars/avatar_shikotsu_toya_park_ssr_v1.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "『生きた火山の博物館』、青い湖と温泉が共鳴する公園",
    "stats": {
      "湖": "支笏湖・洞爺湖",
      "山": "羊蹄山・有珠山"
    },
    "charStats": {
      "power": 88,
      "defense": 75,
      "speed": 52
    },
    "relatedKeywords": [
      "支笏湖ブルー",
      "洞爺湖温泉",
      "昭和新山"
    ],
    "dummyKanji": [
      "阿",
      "寒",
      "摩",
      "周",
      "知",
      "床",
      "大",
      "雪",
      "山"
    ],
    "hiddenFacts": [
      "Lv2: 支笏湖は日本最北の不凍湖であり、その青さは『支笏湖ブルー』と絶賛される",
      "Lv3: 洞爺湖のすぐ隣には、麦畑が突然盛り上がってできたという珍しい火山・昭和新山がある",
      "Lv4: 有珠山は数十年おきに噴火を繰り返す活火山で、その周辺には火口などの遺構が残されている",
      "Lv5: 蝦夷富士と呼ばれる羊蹄山の山容は美しく、真狩村からの眺めは絶品"
    ]
  },
  {
    "geoId": "park_amami",
    "name": "奄美群島国立公園",
    "kana": "あまみぐんとうこくりつこうえん",
    "type": "national_park",
    "charName": "アマミ-レインボー",
    "charImage": "assets/avatars/avatar_amami_park_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "世界遺産の森、亜熱帯の多様な生命が息づく群島の公園",
    "stats": {
      "指定": "世界自然遺産",
      "拠点": "奄美大島・徳之島"
    },
    "charStats": {
      "power": 52,
      "defense": 95,
      "speed": 45
    },
    "relatedKeywords": [
      "世界遺産",
      "マングローブ",
      "アマミノクロウサギ"
    ],
    "dummyKanji": [
      "屋",
      "久",
      "島",
      "霧",
      "島",
      "西",
      "表",
      "石",
      "垣"
    ],
    "hiddenFacts": [
      "Lv2: 2021年に世界自然遺産に登録。大陸から切り離されたことで独自の進化を遂げた生物の宝庫",
      "Lv3: 日本最大級のマングローブ林や、固有種のアマミノクロウサギが生息する奇跡の島々",
      "Lv4: 徳之島の闘牛や、伝統の絹織物・大島紬など、豊かな文化も受け継がれている",
      "Lv5: コーラルブルーの海と、深い原生林が織りなす極彩色のコントラストが美しい"
    ]
  },
  {
    "geoId": "island_habomai",
    "name": "歯舞群島",
    "kana": "はぼまいぐんとう",
    "type": "island",
    "charName": "ハボマイ-フリート",
    "charImage": "assets/avatars/avatar_habomai_islands_r_v1.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "根室の目と鼻の先、多くの小島から成る国境の群島",
    "stats": {
      "拠点": "志発島・多楽島",
      "対岸": "納沙布岬"
    },
    "charStats": {
      "power": 35,
      "defense": 65,
      "speed": 58
    },
    "relatedKeywords": [
      "北方領土",
      "志発島",
      "多楽島",
      "貝殻島"
    ],
    "dummyKanji": [
      "択",
      "捉",
      "国",
      "後",
      "色",
      "丹",
      "礼",
      "文"
    ],
    "hiddenFacts": [
      "Lv2: 納沙布岬からわずか3.7kmの距離にある『貝殻島』もこの群島の一部",
      "Lv3: 昆布やウニ、カニなど極めて豊かな漁場に囲まれている",
      "Lv4: 第二次世界大戦前は根室市の一部として、生活圏が一体化していた",
      "Lv5: 全体として平坦な島が多く、かつては牧場や集落が広がっていた"
    ]
  },
  {
    "geoId": "islands_oki",
    "name": "隠岐諸島",
    "kana": "おきしょとう",
    "type": "island",
    "charName": "オキ-レジェンド",
    "charImage": "assets/avatars/avatar_oki_islands_sr_v1.png",
    "region": "chugoku",
    "rarity": "SR",
    "flavorText": "日本海のジオパーク、絶壁と歴史が息づく島々",
    "stats": {
      "拠点": "島後・島前",
      "指定": "世界ジオパーク"
    },
    "charStats": {
      "power": 58,
      "defense": 82,
      "speed": 32
    },
    "relatedKeywords": [
      "摩天崖",
      "後鳥羽上皇",
      "ローソク島"
    ],
    "dummyKanji": [
      "佐",
      "渡",
      "対",
      "馬",
      "壱",
      "岐",
      "五",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 約600万年前の火山活動によって形成され、他では見られない独自の生態系を持つ",
      "Lv3: 承久の乱で敗れた後鳥羽上皇や、後醍醐天皇が配流された地として有名",
      "Lv4: 高さ257mの垂直の絶壁『摩天崖（まてんがい）』は日本屈指の景勝地",
      "Lv5: 島の北端にある『ローソク島』は、夕陽が重なると火が灯ったように見える"
    ]
  },
  {
    "geoId": "island_iki",
    "name": "壱岐",
    "kana": "いき",
    "type": "island",
    "charName": "イキ-テラス",
    "charImage": "assets/avatars/avatar_iki_island_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "『魏志倭人伝』にも記された古代の要衝、麦焼酎発祥の地",
    "stats": {
      "歴史": "一支国",
      "名産": "麦焼酎・壱岐牛"
    },
    "charStats": {
      "power": 42,
      "defense": 68,
      "speed": 55
    },
    "relatedKeywords": [
      "一支国",
      "麦焼酎",
      "猿岩"
    ],
    "dummyKanji": [
      "対",
      "馬",
      "五",
      "島",
      "隠",
      "岐",
      "佐",
      "渡"
    ],
    "hiddenFacts": [
      "Lv2: 古代から朝鮮半島と九州を結ぶ中継地点として、重要な歴史を刻んできた",
      "Lv3: 日本を代表する麦焼酎の産地であり、WTOにより産地指定を受けている",
      "Lv4: 猿の横顔にそっくりな巨大な岩『猿岩』が島のシンボルの一つ",
      "Lv5: 島の随所に古墳が残り、かつて栄えた『一支国（いきこく）』の威容を伝える"
    ]
  },
  {
    "geoId": "islands_goto",
    "name": "五島列島",
    "kana": "ごとうれっとう",
    "type": "island",
    "charName": "ゴトウ-ブルー",
    "charImage": "assets/avatars/avatar_goto_islands_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "教会群が守る祈りの島、五島うどんと美しい海",
    "stats": {
      "世界遺産": "長崎の教会群",
      "拠点": "福江島"
    },
    "charStats": {
      "power": 48,
      "defense": 85,
      "speed": 42
    },
    "relatedKeywords": [
      "潜伏キリシタン",
      "大瀬崎灯台",
      "五島うどん"
    ],
    "dummyKanji": [
      "対",
      "馬",
      "壱",
      "岐",
      "隠",
      "岐",
      "佐",
      "渡"
    ],
    "hiddenFacts": [
      "Lv2: 潜伏キリシタンの歴史を伝える美しい教会が点在し、世界遺産に登録されている",
      "Lv3: 日本三大うどんの一つとも言われる『五島うどん』は、椿油を使った滑らかな喉越しが特徴",
      "Lv4: 先端にある大瀬崎灯台は、映画のロケ地にもなる断崖絶壁的名所",
      "Lv5: 140以上の島々からなり、その海岸線の美しさは『東洋のナポリ』とも称される"
    ]
  },
  {
    "geoId": "island_tanegashima",
    "name": "種子島",
    "kana": "たねがしま",
    "type": "island",
    "charName": "タネガシマ-ロケット",
    "charImage": "assets/avatars/avatar_tanegashima_island_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "鉄砲伝来の歴史と、宇宙へと繋がるロケットの島",
    "stats": {
      "歴史": "鉄砲伝来 (1543年)",
      "拠点": "種子島宇宙センター"
    },
    "charStats": {
      "power": 65,
      "defense": 52,
      "speed": 88
    },
    "relatedKeywords": [
      "火縄銃",
      "JAXA",
      "安納芋"
    ],
    "dummyKanji": [
      "屋",
      "久",
      "奄",
      "美",
      "徳",
      "之",
      "島",
      "沖",
      "永"
    ],
    "hiddenFacts": [
      "Lv2: 戦国時代、ポルトガル人から日本に初めて鉄砲が伝わった歴史的な地",
      "Lv3: 『世界一美しいロケット発射場』と称される種子島宇宙センターがある",
      "Lv4: 蜜が溢れる甘いサツマイモ『安納芋（あんのういも）』の発祥地",
      "Lv5: 平坦な地形が多く、古くから稲作やサトウキビ栽培などの農業が盛ん"
    ]
  },
  {
    "geoId": "island_amami",
    "name": "奄美大島",
    "kana": "あまみおおしま",
    "type": "island",
    "charName": "アマミ-ネイチャー",
    "charImage": "assets/avatars/avatar_amami_park_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "『東洋のガラパゴス』、世界遺産の深い森とマングローブ",
    "stats": {
      "指定": "世界自然遺産",
      "固有種": "アマミノクロウサギ"
    },
    "charStats": {
      "power": 55,
      "defense": 92,
      "speed": 40
    },
    "relatedKeywords": [
      "世界遺産",
      "大島紬",
      "鶏飯"
    ],
    "dummyKanji": [
      "徳",
      "之",
      "島",
      "沖",
      "永",
      "与",
      "論",
      "屋",
      "久"
    ],
    "hiddenFacts": [
      "Lv2: 2021年に世界自然遺産に登録。アマミノクロウサギなど希少な固有種の宝庫",
      "Lv3: 国内最大級のマングローブ原生林が広がり、カヌーでの探検が人気",
      "Lv4: 独自の技法で作られる『本場大島紬』は、日本を代表する最高級の絹織物",
      "Lv5: 透明度の高い『奄美ブルー』の海では、美しいサンゴ礁やウミガメが見られる"
    ]
  },
  {
    "geoId": "island_okinawa",
    "name": "沖縄本島",
    "kana": "おきなわほんとう",
    "type": "island",
    "charName": "オキナワ-キング",
    "charImage": "assets/avatars/avatar_okinawa_island_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "琉球王国の歴史と青い海、南国の心『ちむぐくる』の島",
    "stats": {
      "拠点": "那覇市",
      "文化": "琉球文化 (首里城など)"
    },
    "charStats": {
      "power": 78,
      "defense": 82,
      "speed": 75
    },
    "relatedKeywords": [
      "首里城",
      "美ら海水族館",
      "国際通り"
    ],
    "dummyKanji": [
      "宮",
      "古",
      "石",
      "垣",
      "与",
      "那",
      "国",
      "西",
      "表"
    ],
    "hiddenFacts": [
      "Lv2: かつて独立した国家『琉球王国』が存在し、独自の言語や文化を育んできた",
      "Lv3: 北部の『やんばる』は世界自然遺産に登録された深い森が広がる",
      "Lv4: 独特の料理（ゴーヤーチャンプルーなど）や伝統芸能、空手の発祥地としても有名",
      "Lv5: 美ら海水族館の巨大水槽を泳ぐジンベエザメは、沖縄観光の不動の人気者"
    ]
  },
  {
    "geoId": "island_miyako",
    "name": "宮古島",
    "kana": "miyakojima",
    "type": "island",
    "charName": "ミヤコ-エメラルド",
    "charImage": "assets/avatars/avatar_miyako_island_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "『宮古ブルー』と呼ばれる奇跡の海、サンゴが作った平坦な島",
    "stats": {
      "地質": "隆起サンゴ礁",
      "名所": "与那覇前浜"
    },
    "charStats": {
      "power": 45,
      "defense": 68,
      "speed": 85
    },
    "relatedKeywords": [
      "宮古ブルー",
      "伊良部大橋",
      "雪塩"
    ],
    "dummyKanji": [
      "石",
      "垣",
      "西",
      "表",
      "与",
      "那",
      "国",
      "久",
      "米"
    ],
    "hiddenFacts": [
      "Lv2: 島の中に山や大きな川がないため、土砂が海に流れないため透明度が極めて高い",
      "Lv3: 与那覇前浜ビーチは『東洋一の美しさ』と絶賛されるホワイトサンド",
      "Lv4: 隣の伊良部島などを結ぶ無料で渡れる長い橋（伊良部大橋）が観光の新名所",
      "Lv5: ミネラル分を豊富に含んだ『雪塩』は、世界的に評価される島の特産品"
    ]
  },
  {
    "geoId": "park_towada_hachimantai",
    "name": "十和田八幡平国立公園",
    "kana": "とわだはちまんたいこくりつこうえん",
    "type": "national_park",
    "charName": "トワダ-ブルー",
    "charImage": "assets/avatars/avatar_towada_hachimantai_ssr_v1.png",
    "region": "tohoku",
    "rarity": "SSR",
    "flavorText": "十和田湖の深い青と、八幡平の雄大な樹氷の公園",
    "stats": {
      "湖": "十和田湖",
      "渓流": "奥入瀬渓流"
    },
    "charStats": {
      "power": 78,
      "defense": 82,
      "speed": 48
    },
    "relatedKeywords": [
      "十和田湖",
      "奥入瀬渓流",
      "八幡平"
    ],
    "dummyKanji": [
      "三",
      "陸",
      "磐",
      "梯",
      "朝",
      "日",
      "日",
      "光"
    ],
    "hiddenFacts": [
      "Lv2: 十和田湖から流れる唯一の川である奥入瀬渓流は、苔むした岩と清流の芸術品",
      "Lv3: 八幡平エリアは、冬の樹氷やドラゴンの瞳のような火口湖が有名",
      "Lv4: 乳頭温泉郷など、全国的に有名な秘湯が密集しているエリアでもある",
      "Lv5: 青森、秋田、岩手の3県にまたがる、北東北の豊かな自然のシンボル"
    ]
  },
  {
    "geoId": "park_bandai_asahi",
    "name": "磐梯朝日国立公園",
    "kana": "ばんだいあさひこくりつこうえん",
    "type": "national_park",
    "charName": "バンダイ-ボルケーノ",
    "charImage": "assets/avatars/avatar_bandai_asahi_ssr_v1.png",
    "region": "tohoku",
    "rarity": "SSR",
    "flavorText": "磐梯山の躍動と、出羽三山の歴史が息づく公園",
    "stats": {
      "山": "磐梯山・月山・朝日連峰",
      "湖": "猪苗代湖"
    },
    "charStats": {
      "power": 85,
      "defense": 78,
      "speed": 42
    },
    "relatedKeywords": [
      "五色沼",
      "出羽三山",
      "猪苗代湖"
    ],
    "dummyKanji": [
      "十",
      "和",
      "田",
      "八",
      "幡",
      "平",
      "日",
      "光"
    ],
    "hiddenFacts": [
      "Lv2: 磐梯山の裏側にある『裏磐梯』は、明治の大噴火によって生まれた色彩豊かな湖沼群",
      "Lv3: 日本で4番目に広い猪苗代湖があり、冬には白鳥が飛来する鏡のような湖面が美しい",
      "Lv4: 山形側の出羽三山（月山・羽黒山・湯殿山）は、古くからの修験道の聖地",
      "Lv5: 山岳、湖沼、信仰の歴史が高度に融合した、東北を代表する多面的な公園"
    ]
  },
  {
    "geoId": "park_chubu_sangaku",
    "name": "中部山岳国立公園",
    "kana": "ちゅうぶさんがくこくりつこうえん",
    "type": "national_park",
    "charName": "チュウブ-アルプス",
    "charImage": "assets/avatars/avatar_chubu_sangaku_ssr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "『北アルプス』。日本屈指の3,000m級が連なる山岳公園",
    "stats": {
      "山": "穂高岳・槍ヶ岳・立山",
      "名所": "上高地"
    },
    "charStats": {
      "power": 98,
      "defense": 85,
      "speed": 32
    },
    "relatedKeywords": [
      "北アルプス",
      "上高地",
      "立山黒部アルペンルート"
    ],
    "dummyKanji": [
      "南",
      "アルプス",
      "妙",
      "高",
      "戸",
      "隠",
      "八",
      "ヶ",
      "岳"
    ],
    "hiddenFacts": [
      "Lv2: 日本最古の国立公園の一つ。槍ヶ岳や穂高岳など、登山家にとっての聖地が並ぶ",
      "Lv3: 上高地は標高1,500mの平坦地に清流と山岳美が広がる、日本最高の山岳景勝地",
      "Lv4: 立山黒部アルペンルートには、高さ20mに達する巨大な雪の壁『雪の大谷』が出現する",
      "Lv5: 万年雪や国内唯一の現存する氷河が見つかるなど、極めて厳しい自然環境にある"
    ]
  },
  {
    "geoId": "park_yoshino_kumano",
    "name": "吉野熊野国立公園",
    "kana": "よしのくまのこくりつこうえん",
    "type": "national_park",
    "charName": "ヨシノ-スピリット",
    "charImage": "assets/avatars/avatar_yoshino_kumano_ssr_v1.png",
    "region": "kinki",
    "rarity": "SSR",
    "flavorText": "世界遺産の霊場と、紀伊半島のダイナミックな海岸線の公園",
    "stats": {
      "指定": "世界遺産 (霊場と参詣道)",
      "エリア": "吉野山・熊野三山"
    },
    "charStats": {
      "power": 65,
      "defense": 90,
      "speed": 48
    },
    "relatedKeywords": [
      "吉野の桜",
      "那智の滝",
      "熊野古道"
    ],
    "dummyKanji": [
      "伊",
      "勢",
      "志",
      "摩",
      "大",
      "山",
      "隠",
      "岐",
      "足",
      "摺"
    ],
    "hiddenFacts": [
      "Lv2: 桜の名所として名高い吉野山から、日本有数の多雨地帯・大台ヶ原まで広い範囲を占める",
      "Lv3: 熊野那智大社の隣にある『那智の滝』は、落差133mで日本一の直失の滝",
      "Lv4: 熊野古道の参詣道そのものが世界遺産であり、歴史と信仰の重みが感じられる",
      "Lv5: 海岸部には橋杭岩など、波の浸食で作られた奇岩が並ぶ絶景が続く"
    ]
  },
  {
    "geoId": "park_daisen_oki",
    "name": "大山隠岐国立公園",
    "kana": "だいせんおきこくりつこうえん",
    "type": "national_park",
    "charName": "ダイセン-ピーク",
    "charImage": "assets/avatars/avatar_daisen_oki_ssr_v1.png",
    "region": "chugoku",
    "rarity": "SSR",
    "flavorText": "山陰のシンボル・大山と、神話の島・隠岐を繋ぐ公園",
    "stats": {
      "山": "大山・三瓶山",
      "エリア": "隠岐諸島・島根半島"
    },
    "charStats": {
      "power": 82,
      "defense": 78,
      "speed": 40
    },
    "relatedKeywords": [
      "伯耆富士",
      "出雲大社",
      "隠岐ジオパーク"
    ],
    "dummyKanji": [
      "山",
      "陰",
      "海",
      "岸",
      "瀬",
      "戸",
      "内",
      "海"
    ],
    "hiddenFacts": [
      "Lv2: 『伯耆富士』と称される大山は、山陰地方の最高峰",
      "Lv3: 出雲大社がある島根半島や、世界ジオパークに認定された隠岐諸島までもを含む",
      "Lv4: 大山の北壁は日本屈指の険しい岩壁であり、四季折々に表情を変える",
      "Lv5: 三瓶山では、火山の巨大な噴出物による埋没林が見られる"
    ]
  },
  {
    "geoId": "park_kirishima_kinkowan",
    "name": "霧島錦江湾国立公園",
    "kana": "きりしまきんこうわんこくりつこうえん",
    "type": "national_park",
    "charName": "キリシマ-レジェンド",
    "charImage": "assets/avatars/avatar_kirishima_kinkowan_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "天孫降臨の山々と、錦江湾に浮かぶ桜島のパワー",
    "stats": {
      "山": "韓国岳・新燃岳・桜島",
      "エリア": "霧島・錦江湾"
    },
    "charStats": {
      "power": 95,
      "defense": 72,
      "speed": 55
    },
    "relatedKeywords": [
      "天孫降臨",
      "桜島",
      "龍馬のハネムーン"
    ],
    "dummyKanji": [
      "阿",
      "蘇",
      "雲",
      "仙",
      "西",
      "海",
      "屋",
      "久",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 日本で最初に指定された3つの国立公園のうちの一つとして、最も歴史が長い",
      "Lv3: 霧島山は建国神話の地であり、坂本龍馬が日本初の新婚旅行で訪れた場所",
      "Lv4: 鹿児島湾エリアには、現役バリバリの活火山・桜島が堂々とそびえ立つ",
      "Lv5: 流域の深い青色の火口湖や温泉、そして砂むし温泉まで、火山の魅力が凝縮されている"
    ]
  },
  {
    "geoId": "park_yakushima",
    "name": "屋久島国立公園",
    "kana": "yakushimakokuritsukouen",
    "type": "national_park",
    "charName": "ヤク-フォレスト",
    "charImage": "assets/avatars/avatar_yakushima_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "樹齢数千年の神木が眠る、世界遺産の神域の公園",
    "stats": {
      "指定": "世界自然遺産",
      "山": "宮之浦岳"
    },
    "charStats": {
      "power": 72,
      "defense": 95,
      "speed": 35
    },
    "relatedKeywords": [
      "縄文杉",
      "宮之浦岳",
      "口永良部島"
    ],
    "dummyKanji": [
      "霧",
      "島",
      "奄",
      "美",
      "雲",
      "仙",
      "阿",
      "蘇"
    ],
    "hiddenFacts": [
      "Lv2: 日本初の世界自然遺産。巨大な屋久杉が自生する森は圧巻",
      "Lv3: 九州最高峰の宮之浦岳を擁し、『海上アルプス』とも称される険峻な地形",
      "Lv4: 近くの活火山の島・口永良部島も公園の一部として含まれる",
      "Lv5: 1つの島内で、亜熱帯から冷温帯までの驚異的な垂直分布の植物群が見られる"
    ]
  },
  {
    "geoId": "peak_miharayama",
    "name": "三原山",
    "kana": "みはらやま",
    "type": "mountain",
    "charName": "ミハラ-コア",
    "charImage": "assets/avatars/avatar_miharayama_mountain_r_v1.png",
    "region": "kanto",
    "rarity": "R",
    "flavorText": "伊豆大島の中央に鎮座する、命の鼓動を刻む活動山",
    "stats": {
      "場所": "伊豆大島",
      "標高": "758m"
    },
    "charStats": {
      "power": 78,
      "defense": 62,
      "speed": 55
    },
    "relatedKeywords": [
      "伊豆大島",
      "カルデラ",
      "砂漠"
    ],
    "dummyKanji": [
      "三",
      "原",
      "富士",
      "箱",
      "根",
      "三",
      "浦"
    ],
    "hiddenFacts": [
      "Lv2: 1986年の全島避難を伴う大噴火は記憶に新しい",
      "Lv3: 日本で唯一の『砂漠』と表記される地名（裏砂漠）がある",
      "Lv4: 映画のロケ地や特撮ヒーローの舞台としても頻繁に使われる",
      "Lv5: カルデラ内には溶岩流の跡が至る所に残されている"
    ]
  },
  {
    "geoId": "peak_daisen",
    "name": "大山",
    "kana": "だいせん",
    "type": "mountain",
    "charName": "ダイセン-アッシュ",
    "charImage": "assets/avatars/avatar_daisen_mountain_sr_v1.png",
    "region": "chugoku",
    "rarity": "SR",
    "flavorText": "『伯耆富士』と呼ばれ、中国地方最高峰の威風",
    "stats": {
      "標高": "1,729m",
      "通称": "伯耆富士"
    },
    "charStats": {
      "power": 82,
      "defense": 88,
      "speed": 32
    },
    "relatedKeywords": [
      "伯耆富士",
      "大山寺",
      "崩落"
    ],
    "dummyKanji": [
      "大",
      "山",
      "石",
      "鎚",
      "剣",
      "山",
      "三",
      "瓶"
    ],
    "hiddenFacts": [
      "Lv2: 中国地方で最も高い山。見る角度によって形が大きく変わる",
      "Lv3: 古くからの修験道の地であり、麓の大山寺は歴史が深い",
      "Lv4: 山頂部の崩落が激しく、最高地点の剣ヶ峰へは現在立ち入り禁止",
      "Lv5: 西日本最大級のブナの原生林が広がっている"
    ]
  },
  {
    "geoId": "peak_ishizuchisan",
    "name": "石鎚山",
    "kana": "いしづちさん",
    "type": "mountain",
    "charName": "イシヅチ-エンシェント",
    "charImage": "assets/avatars/avatar_ishizuchi_mountain_ssr_v1.png",
    "region": "shikoku",
    "rarity": "SSR",
    "flavorText": "西日本最高峰、鎖を伝い登る修行の切り立った崖",
    "stats": {
      "標高": "1,982m",
      "別名": "西日本最高峰"
    },
    "charStats": {
      "power": 98,
      "defense": 90,
      "speed": 40
    },
    "relatedKeywords": [
      "鎖場",
      "四国山脈",
      "西日本一"
    ],
    "dummyKanji": [
      "石",
      "鎚",
      "剣",
      "山",
      "大",
      "山",
      "由",
      "布"
    ],
    "hiddenFacts": [
      "Lv2: 四国を横断する四国山地の最高峰であり、神聖な地とされる",
      "Lv3: 垂直に近い絶壁を『鎖』を頼りに登る修行場が有名",
      "Lv4: 秋の紅葉は西日本屈指の美しさと評される",
      "Lv5: 山頂からは瀬戸内海や九州まで見渡せることもある"
    ]
  },
  {
    "geoId": "peak_asosan",
    "name": "阿蘇山",
    "kana": "あそさん",
    "type": "mountain",
    "charName": "アソ-マグマ",
    "charImage": "assets/avatars/avatar_asosan_mountain_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "世界最大級のカルデラを持つ、九州の象徴的な活火山",
    "stats": {
      "最高峰": "高岳 (1,592m)",
      "特徴": "巨大カルデラ"
    },
    "charStats": {
      "power": 95,
      "defense": 85,
      "speed": 45
    },
    "relatedKeywords": [
      "カルデラ",
      "中岳",
      "草千里ヶ浜"
    ],
    "dummyKanji": [
      "阿",
      "蘇",
      "雲",
      "仙",
      "桜",
      "島",
      "九",
      "重"
    ],
    "hiddenFacts": [
      "Lv2: カルデラ内には町があり、多くの人が生活している",
      "Lv3: 『阿蘇五岳』と呼ばれる5つの中心的な山々からなる",
      "Lv4: 中岳の火口は現在も活発で、エメラルドグリーンの湯だまりが見える",
      "Lv5: 周辺には広大な草原『草千里ヶ浜』があり、放牧が行われている"
    ]
  },
  {
    "geoId": "peak_sakurajima",
    "name": "桜島",
    "kana": "さくらじま",
    "type": "mountain",
    "charName": "サクラ-フレア",
    "charImage": "assets/avatars/avatar_sakurajima_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "鹿児島湾に浮かぶ、日常的に噴火を繰り返す活気に満ちた火山",
    "stats": {
      "最高峰": "御岳 (1,117m)",
      "場所": "鹿児島湾"
    },
    "charStats": {
      "power": 92,
      "defense": 78,
      "speed": 52
    },
    "relatedKeywords": [
      "大正大噴火",
      "火山灰",
      "錦江湾"
    ],
    "dummyKanji": [
      "桜",
      "島",
      "開",
      "聞",
      "雲",
      "仙",
      "阿",
      "蘇"
    ],
    "hiddenFacts": [
      "Lv2: 1914年の『大正大噴火』で流出した溶岩により、大隅半島と陸続きになった",
      "Lv3: 鹿児島市民にとって降灰は日常の一部であり、克灰袋などが配られる",
      "Lv4: 火山灰土壌が生み出す『桜島大根』は世界一大きい大根として有名",
      "Lv5: 北岳・中岳・南岳の3つの主要な火口がある"
    ]
  },
  {
    "geoId": "peak_kaimondake",
    "name": "開聞岳",
    "kana": "かいもんだけ",
    "type": "mountain",
    "charName": "カイモン-ビュー",
    "charImage": "assets/avatars/avatar_kaimondake_mountain_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "『薩摩富士』と呼ばれる、薩摩半島南端の美しい独立峰",
    "stats": {
      "標高": "924m",
      "通称": "薩摩富士"
    },
    "charStats": {
      "power": 65,
      "defense": 58,
      "speed": 62
    },
    "relatedKeywords": [
      "薩摩富士",
      "指宿",
      "螺旋登山"
    ],
    "dummyKanji": [
      "開",
      "聞",
      "桜",
      "島",
      "雲",
      "仙",
      "阿",
      "蘇"
    ],
    "hiddenFacts": [
      "Lv2: 薩摩半島の最南端付近にあり、海に突き出したような姿が美しい",
      "Lv3: 登山道が山を一周するように螺旋状に作られているのが特徴",
      "Lv4: 麓の池田湖や指宿温泉からもその端正な姿が見られる",
      "Lv5: 古くから海上交通の目印として重宝されてきた"
    ]
  },
  {
    "geoId": "river_tokachi",
    "name": "十勝川",
    "kana": "とかちがわ",
    "type": "river",
    "charName": "トカチ-ストリーム",
    "charImage": "assets/avatars/avatar_tokachi_river_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "十勝平野を貫き、太平洋へ注ぐ北海道有数の大河",
    "stats": {
      "長さ": "156km",
      "主要都市": "帯広市"
    },
    "charStats": {
      "power": 62,
      "defense": 45,
      "speed": 78
    },
    "relatedKeywords": [
      "十勝平野",
      "大規模農業",
      "大雪山"
    ],
    "dummyKanji": [
      "十",
      "勝",
      "石",
      "狩",
      "天",
      "塩",
      "釧",
      "路"
    ],
    "hiddenFacts": [
      "Lv2: 大雪山系を源流とし、広大な十勝平野を蛇行しながら流れる",
      "Lv3: 河口付近では、冬に『ジュエリーアイス』と呼ばれる氷の結晶が見られる",
      "Lv4: かつてはサケの遡上が非常に多く、アイヌの人々の生活を支えた",
      "Lv5: 支流の札内川は、日本屈指の清流として何度も日本一に選ばれている"
    ]
  },
  {
    "geoId": "river_omono",
    "name": "雄物川",
    "kana": "おものがわ",
    "type": "river",
    "charName": "オモノ-リバー",
    "charImage": "assets/avatars/avatar_omono_river_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "秋田の穀倉地帯を潤す、奥羽山脈からの恵みの水",
    "stats": {
      "長さ": "133km",
      "流域": "横手盆地・秋田平野"
    },
    "charStats": {
      "power": 52,
      "defense": 48,
      "speed": 65
    },
    "relatedKeywords": [
      "横手盆地",
      "あきたこまち",
      "秋田市"
    ],
    "dummyKanji": [
      "最",
      "上",
      "阿",
      "武",
      "隈",
      "北",
      "上",
      "名",
      "取"
    ],
    "hiddenFacts": [
      "Lv2: 横手盆地と秋田平野を繋ぎ、秋田の米づくりに欠かせない水源",
      "Lv3: かつては物資を運ぶ舟運の要路として、秋田の経済を支えた",
      "Lv4: 川の名は、かつて貢物を運ぶ『御物（おもの）』川だったことに由来するとされる",
      "Lv5: 長い年月をかけて形成された河岸段丘が上流部で見られる"
    ]
  },
  {
    "geoId": "river_agano",
    "name": "阿賀野川",
    "kana": "あがのがわ",
    "type": "river",
    "charName": "アガノ-アビス",
    "charImage": "assets/avatars/avatar_agano_river_ssr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "福島から新潟へと流れる、日本屈指の多水量（豊富さ）を誇る川",
    "stats": {
      "流域面積": "7,710km² (全国8位)",
      "特徴": "水量が非常に豊富"
    },
    "charStats": {
      "power": 78,
      "defense": 55,
      "speed": 82
    },
    "relatedKeywords": [
      "尾瀬",
      "阿賀川",
      "水力発電"
    ],
    "dummyKanji": [
      "信",
      "濃",
      "最",
      "上",
      "荒",
      "川",
      "多",
      "摩"
    ],
    "hiddenFacts": [
      "Lv2: 福島県内では『阿賀川』と呼ばれ、新潟県に入ると『阿賀野川』となる",
      "Lv3: 支流の只見川は日本屈指の電源開発地帯。巨大なダムが連続する",
      "Lv4: 河口付近の流量は信濃川に匹敵するほど多く、迫力がある",
      "Lv5: 歴史的には、新潟水俣病の原因となった悲しい歴史も持つ"
    ]
  },
  {
    "geoId": "river_abukuma",
    "name": "阿武隈川",
    "kana": "あぶくまがわ",
    "type": "river",
    "charName": "アブクマ-テール",
    "charImage": "assets/avatars/avatar_abukuma_river_sr_v1.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "東北第2の大河、郡山や福島、仙台を繋ぐ命の脈",
    "stats": {
      "長さ": "239km (全国6位)",
      "流域": "中通り・仙台平野"
    },
    "charStats": {
      "power": 65,
      "defense": 52,
      "speed": 72
    },
    "relatedKeywords": [
      "中通り",
      "阿武隈高地",
      "福島市"
    ],
    "dummyKanji": [
      "北",
      "上",
      "最",
      "上",
      "雄",
      "物",
      "米",
      "代"
    ],
    "hiddenFacts": [
      "Lv2: 奥羽山脈と阿武隈高地に挟まれた『中通り』を北上して流れる",
      "Lv3: 福島県内を主に流れるが、河口は宮城県（岩沼市・亘理町）にある",
      "Lv4: 勾配が緩やかなため、過去に何度も大規模な氾濫を起こしてきた",
      "Lv5: 支流が多く、福島県を縦横に結ぶ水運のネットワークだった"
    ]
  },
  {
    "geoId": "river_jintsu",
    "name": "神通川",
    "kana": "じんづうがわ",
    "type": "river",
    "charName": "ジンズウ-カレント",
    "charImage": "assets/avatars/avatar_jintsu_river_r_v1.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "飛騨から富山湾へ注ぐ、アルプスの荒ぶる急流",
    "stats": {
      "長さ": "120km",
      "場所": "富山県・岐阜県"
    },
    "charStats": {
      "power": 72,
      "defense": 42,
      "speed": 85
    },
    "relatedKeywords": [
      "富山湾",
      "飛騨山脈",
      "イタイイタイ病"
    ],
    "dummyKanji": [
      "黒",
      "部",
      "常",
      "願",
      "寺",
      "庄",
      "川",
      "手",
      "取"
    ],
    "hiddenFacts": [
      "Lv2: 岐阜県内では『宮川』と呼ばれ、富山県に入ると『神通川』となる",
      "Lv3: 飛騨山脈を源流とし、急峻な地形を一気に駆け下りる急流河川",
      "Lv4: 歴史的には、四大公害病の一つ『イタイイタイ病』の舞台となった",
      "Lv5: 富山平野に広大な扇状地を形成し、豊かな農業と電力を提供している"
    ]
  },
  {
    "geoId": "river_fuji",
    "name": "富士川",
    "kana": "ふじがわ",
    "type": "river",
    "charName": "フジ-バースト",
    "charImage": "assets/avatars/avatar_fuji_river_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "日本三大急流の一つ、富士の勇姿を背に駿河湾へ注ぐ",
    "stats": {
      "長さ": "128km",
      "特徴": "日本三大急流"
    },
    "charStats": {
      "power": 85,
      "defense": 35,
      "speed": 92
    },
    "relatedKeywords": [
      "日本三大急流",
      "駿河湾",
      "甲府盆地"
    ],
    "dummyKanji": [
      "木",
      "曽",
      "大",
      "井",
      "天",
      "竜",
      "相",
      "模"
    ],
    "hiddenFacts": [
      "Lv2: 最上川・球磨川と並ぶ『日本三大急流』の一つとして知られる",
      "Lv3: 甲府盆地を流れ、峻険な巨壁（赤石山脈）の脇を抜けて太平洋へ",
      "Lv4: 日本を南北に分ける地質境界線『糸魚川静岡構造線』に沿って流れる",
      "Lv5: 山梨県内では『釜無川』と『笛吹川』が合流して富士川となる"
    ]
  },
  {
    "geoId": "river_oi",
    "name": "大井川",
    "kana": "おおいがわ",
    "type": "river",
    "charName": "オオイ-ブリッジ",
    "charImage": "assets/avatars/avatar_oi_river_r_v1.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "『越すに越されぬ大井川』、南アルプスから駿河湾への激流",
    "stats": {
      "長さ": "168km",
      "名言": "越すに越されぬ"
    },
    "charStats": {
      "power": 75,
      "defense": 52,
      "speed": 80
    },
    "relatedKeywords": [
      "箱越し",
      "南アルプス",
      "SL"
    ],
    "dummyKanji": [
      "天",
      "竜",
      "富士",
      "安倍",
      "木",
      "曽",
      "長",
      "良"
    ],
    "hiddenFacts": [
      "Lv2: 江戸時代、幕府が江戸防衛のために橋を架けることを禁じた『川越し』の難所",
      "Lv3: 上流部では大井川鐵道のSLが走り、観光名所となっている",
      "Lv4: 水力発電が極めて盛んで、数多くのダムが階段状に設置されている",
      "Lv5: 南アルプスの間を深く切り裂いて流れる V字谷が見事"
    ]
  },
  {
    "geoId": "river_tenryu",
    "name": "天竜川",
    "kana": "てんりゅうがわ",
    "type": "river",
    "charName": "テンリュウ-ドラグーン",
    "charImage": "assets/avatars/avatar_tenryu_river_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "『暴れ天竜』、諏訪湖から遠州灘へ駆け抜ける荒ぶる竜",
    "stats": {
      "長さ": "213km (全国9位)",
      "源流": "諏訪湖"
    },
    "charStats": {
      "power": 88,
      "defense": 45,
      "speed": 85
    },
    "relatedKeywords": [
      "諏訪湖",
      "伊那盆地",
      "暴れ天竜"
    ],
    "dummyKanji": [
      "木",
      "曽",
      "大",
      "井",
      "富士",
      "庄",
      "川",
      "大",
      "和"
    ],
    "hiddenFacts": [
      "Lv2: 諏訪湖を唯一の出口として流れ出し、伊那盆地を縦断する",
      "Lv3: 『暴れ天竜』と恐れられるほど水勢が強く、治水の歴史が長い",
      "Lv4: 天竜峡の切り立った絶壁を抜ける『天竜舟下り』が人気",
      "Lv5: 太平洋へ注ぐ河口付近では、広大な浜松平野を形成している"
    ]
  },
  {
    "geoId": "river_kiso",
    "name": "木曽川",
    "kana": "きそがわ",
    "type": "river",
    "charName": "キソ-ストリーム",
    "charImage": "assets/avatars/avatar_kiso_river_ssr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "『日本ライン』、木曽三川の雄として濃尾平野を育む",
    "stats": {
      "長さ": "229km",
      "通称": "日本ライン"
    },
    "charStats": {
      "power": 78,
      "defense": 58,
      "speed": 75
    },
    "relatedKeywords": [
      "木曽三川",
      "日本ライン",
      "濃尾平野"
    ],
    "dummyKanji": [
      "天",
      "竜",
      "大",
      "井",
      "長",
      "良",
      "揖",
      "斐"
    ],
    "hiddenFacts": [
      "Lv2: 長良川、揖斐川と併せて『木曽三川（きそさんせん）』と呼ばれる",
      "Lv3: 愛知県犬山市付近の景観がドイツのライン川に似ているため『日本ライン』と称される",
      "Lv4: 下流域では輪中（わじゅう）と呼ばれる独特の集落が発達した",
      "Lv5: 犬山城を望む川の流れは、歴史情緒あふれる絶景ポイント"
    ]
  },
  {
    "geoId": "river_gonogawa",
    "name": "江の川",
    "kana": "ごうのかわ",
    "type": "river",
    "charName": "ゴウノ-リバー",
    "charImage": "assets/avatars/avatar_gonogawa_river_r_v1.png",
    "region": "chugoku",
    "rarity": "R",
    "flavorText": "中国地方最大の河川、中国山地を蛇行し日本海へ",
    "stats": {
      "長さ": "194km (中国地方1位)",
      "場所": "広島県・島根県"
    },
    "charStats": {
      "power": 62,
      "defense": 55,
      "speed": 58
    },
    "relatedKeywords": [
      "中国次郎",
      "蛇行",
      "三江線"
    ],
    "dummyKanji": [
      "太",
      "田",
      "芦",
      "田",
      "吉",
      "井",
      "旭",
      "高",
      "梁"
    ],
    "hiddenFacts": [
      "Lv2: 中国地方で最も長い川。『中国次郎（ちゅうごくじろう）』の異名を持つ",
      "Lv3: 中国山地を力強く削りながら流れ、極めて激しい蛇行を繰り返す",
      "Lv4: 広島県三次市で複数の主要支流が合流し、大きな流れとなる",
      "Lv5: 2018年に廃止された JR三江線はこの川に沿って走っていた"
    ]
  },
  {
    "geoId": "river_oyodogawa",
    "name": "大淀川",
    "kana": "おおよどがわ",
    "type": "river",
    "charName": "オオヨド-フロー",
    "charImage": "assets/avatars/avatar_oyodogawa_river_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "宮崎平野を潤す南九州の代表的な河川",
    "stats": {
      "長さ": "107km",
      "場所": "宮崎県・鹿児島県"
    },
    "charStats": {
      "power": 48,
      "defense": 62,
      "speed": 55
    },
    "relatedKeywords": [
      "宮崎平野",
      "都城盆地",
      "日向灘"
    ],
    "dummyKanji": [
      "一",
      "ツ",
      "瀬",
      "川",
      "内",
      "五",
      "ヶ",
      "瀬"
    ],
    "hiddenFacts": [
      "Lv2: 鹿児島県側から流れ出し、都城盆地を経て宮崎平野を横断する",
      "Lv3: 緩やかに流れる下流部は、宮崎市の都市景観の象徴となっている",
      "Lv4: 温暖多雨な気候のため、台風時には急激に水位が上昇しやすい",
      "Lv5: 流域の肥沃な平野では、全国有数の農業生産が行われている"
    ]
  },
  {
    "geoId": "river_yoshinogawa",
    "name": "吉野川",
    "kana": "よしのがわ",
    "type": "river",
    "charName": "ヨシノ-ブレイカー",
    "charImage": "assets/avatars/avatar_yoshino_river_ssr_v1.png",
    "region": "shikoku",
    "rarity": "SSR",
    "flavorText": "『四国三郎』の名を冠する暴れ川、四国を横断する母なる大河",
    "stats": {
      "長さ": "194km (四国1位)",
      "通称": "四国三郎"
    },
    "charStats": {
      "power": 85,
      "defense": 65,
      "speed": 88
    },
    "relatedKeywords": [
      "四国三郎",
      "大歩危・小歩危",
      "徳島平野"
    ],
    "dummyKanji": [
      "四",
      "万",
      "十",
      "仁",
      "淀",
      "物",
      "部",
      "那",
      "賀"
    ],
    "hiddenFacts": [
      "Lv2: 利根川（坂東太郎）、筑後川（筑紫次郎）と並ぶ日本三大暴れ川の一つ",
      "Lv3: 山地を削る『大歩危・小歩危』の渓谷美は四国屈指の景勝地",
      "Lv4: 下流の徳島平野では、豊かな土砂が藍の栽培を支えた",
      "Lv5: 香川県へ水を供給する『香川用水』の取水源でもあり、四国の命の綱"
    ]
  },
  {
    "geoId": "river_kinokawa",
    "name": "紀ノ川",
    "kana": "きのかわ",
    "type": "river",
    "charName": "キノ-サウザンド",
    "charImage": "assets/avatars/avatar_kinokawa_river_sr_v1.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "大台ヶ原の雨を集め、紀伊平野を潤す紀州の清流",
    "stats": {
      "長さ": "136km",
      "場所": "奈良県・和歌山県"
    },
    "charStats": {
      "power": 55,
      "defense": 68,
      "speed": 62
    },
    "relatedKeywords": [
      "大台ヶ原",
      "紀伊平野",
      "和歌山市"
    ],
    "dummyKanji": [
      "紀",
      "の",
      "熊",
      "野",
      "有",
      "田",
      "日",
      "高"
    ],
    "hiddenFacts": [
      "Lv2: 奈良県内では『吉野川』と呼ばれ、和歌山県に入ると『紀ノ川』となる",
      "Lv3: 日本有数の多雨地帯・大台ヶ原を源流とするため、非常に水が豊か",
      "Lv4: 流域では、温暖な気候を活かした果樹栽培（柿や桃）が極めて盛ん",
      "Lv5: 中央構造線という巨大な断層に沿って、真っ直ぐに西へと流れる"
    ]
  },
  {
    "geoId": "river_kumano",
    "name": "熊野川",
    "kana": "くまのがわ",
    "type": "river",
    "charName": "クマノ-エンシェント",
    "charImage": "assets/avatars/avatar_kumano_river_sr_v1.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "世界遺産を巡る『水の参詣道』、紀伊山地の深い聖域を抜けて太平洋へ",
    "stats": {
      "別名": "新宮川",
      "指定": "世界遺産"
    },
    "charStats": {
      "power": 68,
      "defense": 72,
      "speed": 45
    },
    "relatedKeywords": [
      "熊野三山",
      "新宮",
      "瀞峡"
    ],
    "dummyKanji": [
      "紀",
      "の",
      "有",
      "田",
      "由",
      "良",
      "古",
      "座"
    ],
    "hiddenFacts": [
      "Lv2: 日本で唯一『川の参詣道』として世界遺産の一部に登録されている",
      "Lv3: 巨大な柱状節理の絶壁が続く『瀞峡（どろきょう）』は国の特別名勝",
      "Lv4: かつては熊野三山へお参りする人々を乗せた舟が行き交った",
      "Lv5: 多雨地帯を流れるため、一度の大雨で水量が劇的に増えるダイナミックな川"
    ]
  },
  {
    "geoId": "river_kumagawa",
    "name": "球磨川",
    "kana": "くまがわ",
    "type": "river",
    "charName": "クマ-ストーム",
    "charImage": "assets/avatars/avatar_kumagawa_ssr_v1.png",
    "region": "kyushu",
    "rarity": "SSR",
    "flavorText": "日本三大急流の一つ。峻険な九州山地を抜け八代海へ注ぐ",
    "stats": {
      "長さ": "115km",
      "特徴": "日本三大急流"
    },
    "charStats": {
      "power": 92,
      "defense": 45,
      "speed": 95
    },
    "relatedKeywords": [
      "日本三大急流",
      "人吉盆地",
      "ラフティング"
    ],
    "dummyKanji": [
      "筑",
      "後",
      "大",
      "分",
      "五",
      "ヶ",
      "瀬",
      "川",
      "内"
    ],
    "hiddenFacts": [
      "Lv2: 最上川・富士川と並び『日本三大急流』として知られ、水勢が極めて強い",
      "Lv3: 人吉盆地を抜ける渓谷美により、舟下りやラフティングのメッカ",
      "Lv4: 九州最大の川・筑後川と並ぶ、熊本を代表する『暴れ川』でもある",
      "Lv5: 川に住むアユは大きく身が締まっており『尺アユ』としてブランド化されている"
    ]
  },
  {
    "geoId": "peak_unzendake",
    "name": "雲仙岳",
    "kana": "うんぜんだけ",
    "type": "mountain",
    "charName": "ウンゼン-スチーム",
    "charImage": "assets/avatars/avatar_unzendake_mountain_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "雲仙普賢岳を主峰とする、火山と温泉のパラダイス",
    "stats": {
      "最高峰": "平成新山 (1,483m)",
      "場所": "島原半島"
    },
    "charStats": {
      "power": 85,
      "defense": 65,
      "speed": 45
    },
    "relatedKeywords": [
      "平成新山",
      "火砕流",
      "雲仙温泉"
    ],
    "dummyKanji": [
      "雲",
      "仙",
      "阿",
      "蘇",
      "桜",
      "島",
      "九",
      "重"
    ],
    "hiddenFacts": [
      "Lv2: 1990年代の噴火で誕生した山頂部は『平成新山』と名付けられた",
      "Lv3: 日本で最初に国立公園に指定された地域の一つ",
      "Lv4: 麓の雲仙温泉は、硫黄の香りが漂う歴史ある湯治場",
      "Lv5: 火山災害の歴史を伝えるメモリアルパークが整備されている"
    ]
  },
  {
    "geoId": "plain_akita",
    "name": "秋田平野",
    "kana": "あきたへいや",
    "type": "plain",
    "charName": "アキタ-ランド",
    "charImage": "assets/avatars/avatar_akita_plain_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "雄物川の下流に広がる、日本有数の米どころ",
    "stats": {
      "農業": "あきたこまち",
      "河川": "雄物川"
    },
    "charStats": {
      "power": 45,
      "defense": 60,
      "speed": 40
    },
    "relatedKeywords": [
      "あきたこまち",
      "雄物川",
      "八郎潟"
    ],
    "dummyKanji": [
      "庄",
      "内",
      "仙",
      "台",
      "津",
      "軽",
      "越",
      "後"
    ],
    "hiddenFacts": [
      "Lv2: 日本海に面し、冬は季節風の影響で雪が多い",
      "Lv3: 平野の中央を雄物川が流れ、肥沃な土壌を運ぶ",
      "Lv4: かつては日本第2位の広さを誇った八郎潟が隣接していた",
      "Lv5: 秋田市の発展を支えた、奥羽地方有数の食糧基地"
    ]
  },
  {
    "geoId": "plain_sendai",
    "name": "仙台平野",
    "kana": "せんだいへいや",
    "type": "plain",
    "charName": "センダイ-グリッド",
    "charImage": "assets/avatars/avatar_sendai_plain_sr_v1.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "東北最大の都市を抱く、阿武隈川が形成した広大な平野",
    "stats": {
      "主要都市": "仙台市",
      "河川": "名取川・阿武隈川"
    },
    "charStats": {
      "power": 55,
      "defense": 70,
      "speed": 60
    },
    "relatedKeywords": [
      "杜の都",
      "ササニシキ",
      "伊達政宗"
    ],
    "dummyKanji": [
      "秋",
      "田",
      "庄",
      "内",
      "越",
      "後",
      "濃",
      "尾"
    ],
    "hiddenFacts": [
      "Lv2: 阿武隈川や名取川などの堆積作用によって形成された",
      "Lv3: 『杜の都』仙台を中心に、東北の政治・経済の中枢を成す",
      "Lv4: ササニシキやひとめぼれなどの良質な米の産地",
      "Lv5: 沿岸部は2011年の東日本大震災で大きな被害を受けた"
    ]
  },
  {
    "geoId": "plain_shonai",
    "name": "庄内平野",
    "kana": "しょうないへいや",
    "type": "plain",
    "charName": "ショウナイ-アース",
    "charImage": "assets/avatars/avatar_shonai_plain_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "最上川が注ぐ日本海側の穀倉地帯、広大な水田が広がる",
    "stats": {
      "河川": "最上川",
      "農業": "つや姫"
    },
    "charStats": {
      "power": 42,
      "defense": 65,
      "speed": 45
    },
    "relatedKeywords": [
      "最上川",
      "隠田",
      "鳥海山"
    ],
    "dummyKanji": [
      "秋",
      "田",
      "越",
      "後",
      "富",
      "山",
      "越",
      "中"
    ],
    "hiddenFacts": [
      "Lv2: 最上川が運んできた土砂が日本海へと広がる扇状地的な平野",
      "Lv3: 『つや姫』や『雪若丸』などのブランド米の産地として有名",
      "Lv4: 冬には日本海から『最上颪（もがみおろし）』という強風が吹く",
      "Lv5: 北側には鳥海山がそびえ、平野の景色に彩りを添える"
    ]
  },
  {
    "geoId": "plain_echigo",
    "name": "越後平野",
    "kana": "えちごへいや",
    "type": "plain",
    "charName": "エチゴ-ライス",
    "charImage": "assets/avatars/avatar_echigo_plain_ssr_v1.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "日本一の米どころ、信濃川と阿賀野川が作り上げた大平原",
    "stats": {
      "面積": "約2,000km²",
      "河川": "信濃川・阿賀野川"
    },
    "charStats": {
      "power": 65,
      "defense": 82,
      "speed": 40
    },
    "relatedKeywords": [
      "コシヒカリ",
      "信濃川",
      "亀田郷"
    ],
    "dummyKanji": [
      "濃",
      "尾",
      "富",
      "山",
      "関",
      "東",
      "石",
      "狩"
    ],
    "hiddenFacts": [
      "Lv2: かつては『地図にない湖』と呼ばれるほどの湿地帯だった",
      "Lv3: 大河津分水路などの治水事業により、日本屈指の美田地帯に生まれ変わった",
      "Lv4: 魚沼産だけでなく、平野部全体で高品質なコシヒカリが栽培される",
      "Lv5: 新潟市の中心部は、信濃川の河口付近の砂州の上に発達した"
    ]
  },
  {
    "geoId": "plain_toyama",
    "name": "富山平野",
    "kana": "とやまへいや",
    "type": "plain",
    "charName": "トヤマ-テラス",
    "charImage": "assets/avatars/avatar_toyama_plain_r_v1.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "立山連峰からの清流が潤す、扇状地の集合体",
    "stats": {
      "地形": "複合扇状地",
      "河川": "神通川・常願寺川"
    },
    "charStats": {
      "power": 48,
      "defense": 72,
      "speed": 55
    },
    "relatedKeywords": [
      "扇状地",
      "チューリップ",
      "配置薬"
    ],
    "dummyKanji": [
      "越",
      "後",
      "濃",
      "尾",
      "石",
      "川",
      "福",
      "井"
    ],
    "hiddenFacts": [
      "Lv2: 常願寺川などの急流河川が形成した広大な扇状地が重なっている",
      "Lv3: 豊富な水資源を利用した水田稲作と、チューリップの球根栽培が盛ん",
      "Lv4: 冬の積雪は多いが、深い雪が春の豊かな農業用水となる",
      "Lv5: 歴史的には『富山の薬売り』の拠点として全国に知られた"
    ]
  },
  {
    "geoId": "plain_osaka",
    "name": "大阪平野",
    "kana": "おおさかへいや",
    "type": "plain",
    "charName": "オオサカ-ハブ",
    "charImage": "assets/avatars/avatar_osaka_plain_ssr_v1.png",
    "region": "kinki",
    "rarity": "SSR",
    "flavorText": "西日本の経済の中枢、淀川が形成した歴史ある平野",
    "stats": {
      "主要都市": "大阪市・堺市",
      "河川": "淀川・大和川"
    },
    "charStats": {
      "power": 72,
      "defense": 85,
      "speed": 62
    },
    "relatedKeywords": [
      "天下の台所",
      "淀川",
      "百舌鳥・古市古墳群"
    ],
    "dummyKanji": [
      "濃",
      "尾",
      "岡",
      "山",
      "筑",
      "紫",
      "讃",
      "岐"
    ],
    "hiddenFacts": [
      "Lv2: 淀川と大和川の下流域に広がり、かつては河内湖という湖が存在した",
      "Lv3: 海岸線の多くは埋め立てられ、工業地帯や都市機能が集中している",
      "Lv4: 巨大な古墳群（大山古墳など）が点在し、古代からの重要拠点だった",
      "Lv5: 阪神工業地帯の中心として、日本の工業発展を牽引してきた"
    ]
  },
  {
    "geoId": "plain_okayama",
    "name": "岡山平野",
    "kana": "おかやまへいや",
    "type": "plain",
    "charName": "オカヤマ-サニー",
    "charImage": "assets/avatars/avatar_okayama_plain_sr_v1.png",
    "region": "chugoku",
    "rarity": "SR",
    "flavorText": "『晴れの国』の象徴、干拓によって広がった豊かな農地",
    "stats": {
      "特徴": "大規模な干拓地",
      "農業": "マスカット・白桃"
    },
    "charStats": {
      "power": 45,
      "defense": 68,
      "speed": 52
    },
    "relatedKeywords": [
      "干拓",
      "児島湾",
      "瀬戸大橋"
    ],
    "dummyKanji": [
      "広",
      "島",
      "香",
      "川",
      "讃",
      "岐",
      "高",
      "知"
    ],
    "hiddenFacts": [
      "Lv2: 中世以降、児島湾を中心とした大規模な干拓が行われ、面積が拡大した",
      "Lv3: 温暖な瀬戸内式気候を活かし、高級フルーツの栽培が極めて盛ん",
      "Lv4: 平野を流れる旭川、吉井川、高梁川が豊かな土壌を供給した",
      "Lv5: 瀬戸大橋の開通により、四国との玄関口としての役割も担う"
    ]
  },
  {
    "geoId": "plain_sanuki",
    "name": "讃岐平野",
    "kana": "さぬきへいや",
    "type": "plain",
    "charName": "サヌキ-レイク",
    "charImage": "assets/avatars/silhouette_placeholder.png",
    "region": "shikoku",
    "rarity": "SR",
    "flavorText": "ため池が点在する香川の心臓部、山々と丘陵が織りなす景観",
    "stats": {
      "特徴": "ため池が非常に多い",
      "山": "飯野山 (讃岐富士)"
    },
    "charStats": {
      "power": 38,
      "defense": 75,
      "speed": 45
    },
    "relatedKeywords": [
      "満濃池",
      "讃岐うどん",
      "弘法大師"
    ],
    "dummyKanji": [
      "徳",
      "島",
      "高",
      "知",
      "愛",
      "媛",
      "道",
      "後"
    ],
    "hiddenFacts": [
      "Lv2: 雨が少ないため、日本最大の農用ため池『満濃池』など多くの池がある",
      "Lv3: 平野の中に『飯野山』などの独特な円錐形の小山（ビュート）が点在する",
      "Lv4: 温暖な気候を活かした小麦栽培が盛んで、讃岐うどんの文化を育んだ",
      "Lv5: コンパクトな平野に人口が密集しており、利便性が高い"
    ]
  },
  {
    "geoId": "plain_kochi",
    "name": "高知平野",
    "kana": "こうちへいや",
    "type": "plain",
    "charName": "コーチ-サン",
    "charImage": "assets/avatars/silhouette_placeholder.png",
    "region": "shikoku",
    "rarity": "SR",
    "flavorText": "黒潮がもたらす熱気、ナスやピーマンの促成栽培が盛ん",
    "stats": {
      "気候": "温暖多雨",
      "農業": "促成栽培"
    },
    "charStats": {
      "power": 52,
      "defense": 48,
      "speed": 82
    },
    "relatedKeywords": [
      "促成栽培",
      "坂本龍馬",
      "太平洋"
    ],
    "dummyKanji": [
      "徳",
      "島",
      "香",
      "川",
      "愛",
      "媛",
      "西",
      "条"
    ],
    "hiddenFacts": [
      "Lv2: 鏡川や国分川の運んだ土砂によって形成された小規模ながら肥沃な平野",
      "Lv3: 冬でも温暖なため、全国に先駆けてビニールハウスでの促成栽培が行われた",
      "Lv4: 夏から秋にかけては台風の通り道になりやすく、豪雨に見舞われることも",
      "Lv5: 高知市の城下町を中心に、土佐の歴史と文化が息づく"
    ]
  },
  {
    "geoId": "plain_tokushima",
    "name": "徳島平野",
    "kana": "とくしまへいや",
    "type": "plain",
    "charName": "トクシマ-リバー",
    "charImage": "assets/avatars/avatar_tokushima_plain_r_v1.png",
    "region": "shikoku",
    "rarity": "R",
    "flavorText": "吉野川のデルタが生み出した、藍と野菜の産地",
    "stats": {
      "河川": "吉野川",
      "作物": "藍・レンコン"
    },
    "charStats": {
      "power": 45,
      "defense": 58,
      "speed": 55
    },
    "relatedKeywords": [
      "吉野川",
      "阿波踊り",
      "藍染め"
    ],
    "dummyKanji": [
      "香",
      "川",
      "高",
      "知",
      "愛",
      "媛",
      "松",
      "山"
    ],
    "hiddenFacts": [
      "Lv2: 『四国三郎』吉野川の下流域に広がる三角形の平野",
      "Lv3: かつては阿波藍の栽培で栄え、現在はレンコンやサツマイモが有名",
      "Lv4: 吉野川の度重なる洪水が、皮肉にも肥沃な土壌をこの地に残した",
      "Lv5: 徳島市の市街地は、吉野川の分流が作る中州の上に位置している"
    ]
  },
  {
    "geoId": "plain_kumamoto",
    "name": "熊本平野",
    "kana": "くまもとへいや",
    "type": "plain",
    "charName": "クマモト-ランド",
    "charImage": "assets/avatars/avatar_kumamoto_plain_r_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "阿蘇の伏流水が湧き出る、豊かな地下水に支えられた平野",
    "stats": {
      "河川": "白川・緑川",
      "特徴": "地下水が豊富"
    },
    "charStats": {
      "power": 55,
      "defense": 78,
      "speed": 42
    },
    "relatedKeywords": [
      "水の都",
      "加藤清正",
      "阿蘇山"
    ],
    "dummyKanji": [
      "筑",
      "紫",
      "佐",
      "賀",
      "八",
      "代",
      "宮",
      "崎"
    ],
    "hiddenFacts": [
      "Lv2: 白川や緑川が形成し、背後には阿蘇山の火山灰土壌（シラス）が広がる",
      "Lv3: 熊本市民の飲み水は100%地下水。阿蘇山への降雨が時間をかけて湧き出す",
      "Lv4: 加藤清正による大規模な治水と開墾によって、肥後有数のコメの産地となった",
      "Lv5: 温暖な気候を利用したスイカやメロンの栽培も非常に盛ん"
    ]
  },
  {
    "geoId": "plain_yatsushiro",
    "name": "八代平野",
    "kana": "やつしろへいや",
    "type": "plain",
    "charName": "ヤツシロ-リーフ",
    "charImage": "assets/avatars/avatar_yatsushiro_plain_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "球磨川が注ぐ干拓の地、日本一のイグサ生産地",
    "stats": {
      "河川": "球磨川",
      "特産": "イグサ"
    },
    "charStats": {
      "power": 42,
      "defense": 62,
      "speed": 48
    },
    "relatedKeywords": [
      "イグサ",
      "畳",
      "干拓地"
    ],
    "dummyKanji": [
      "熊",
      "本",
      "筑",
      "紫",
      "佐",
      "賀",
      "宮",
      "崎"
    ],
    "hiddenFacts": [
      "Lv2: 熊本県南部にあり、球磨川の運ぶ土砂と大規模な干拓によって形成された",
      "Lv3: 日本の畳表に使われる『イグサ』の生産量が日本一で、圧倒的なシェアを誇る",
      "Lv4: 冬の裏作としてキャベツやトマトの栽培も盛んに行われている",
      "Lv5: 八代港を拠点に、工業や物流も発展しているエリア"
    ]
  },
  {
    "geoId": "basin_kamikawa",
    "name": "上川盆地",
    "kana": "かみかわぼんち",
    "type": "basin",
    "charName": "カミカワ-ベイスン",
    "charImage": "assets/avatars/avatar_kamikawa_basin_r_v1.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "北海道第2の都市・旭川を抱く、石狩川上流の広い盆地",
    "stats": {
      "主要都市": "旭川市",
      "河川": "石狩川"
    },
    "charStats": {
      "power": 45,
      "defense": 58,
      "speed": 40
    },
    "relatedKeywords": [
      "旭川",
      "層雲峡",
      "大雪山"
    ],
    "dummyKanji": [
      "十",
      "勝",
      "富",
      "良",
      "野",
      "北",
      "見"
    ],
    "hiddenFacts": [
      "Lv2: 石狩平野の北東にあり、周囲を大雪山系などの山々に囲まれている",
      "Lv3: 盆地特有の内陸性気候で、夏は暑く冬は極めて厳しい寒さになる",
      "Lv4: かつて日本の最低気温記録（−41.0℃）を観測したのもこの付近",
      "Lv5: 豊かな石狩川の水を利用した上川米の産地として有名"
    ]
  },
  {
    "geoId": "basin_yokote",
    "name": "横手盆地",
    "kana": "よこてぼんち",
    "type": "basin",
    "charName": "ヨコテ-スノー",
    "charImage": "assets/avatars/avatar_yokote_basin_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "秋田県南東部の広大な盆地、日本有数の豪雪地帯",
    "stats": {
      "気候": "豪雪",
      "河川": "雄物川"
    },
    "charStats": {
      "power": 40,
      "defense": 65,
      "speed": 35
    },
    "relatedKeywords": [
      "かまくら",
      "雄物川",
      "秋田米"
    ],
    "dummyKanji": [
      "新",
      "庄",
      "米",
      "沢",
      "福島",
      "山",
      "形"
    ],
    "hiddenFacts": [
      "Lv2: 奥羽山脈と出羽山地の間にある、南北に長い盆地",
      "Lv3: 冬の平均積雪量は非常に高く、『かまくら』の行事が伝統文化として根付く",
      "Lv4: 雄物川の支流などが流れ、肥沃な地。あきたこまちの主要産地",
      "Lv5: 夏場はフェーン現象で気温が上昇し、秋田県内でも暑い地域"
    ]
  },
  {
    "geoId": "basin_shinjo",
    "name": "新庄盆地",
    "kana": "しんじょうぼんち",
    "type": "basin",
    "charName": "シンジョウ-フォレスト",
    "charImage": "assets/avatars/avatar_shinjo_basin_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "山形県北部、最上川が流れる交通の要所の盆地",
    "stats": {
      "河川": "最上川",
      "主要都市": "新庄市"
    },
    "charStats": {
      "power": 38,
      "defense": 62,
      "speed": 45
    },
    "relatedKeywords": [
      "新庄まつり",
      "最上川",
      "豪雪"
    ],
    "dummyKanji": [
      "横",
      "手",
      "米",
      "沢",
      "山",
      "形",
      "天",
      "童"
    ],
    "hiddenFacts": [
      "Lv2: 最上地方の中心地。最上川が盆地内を貫流している",
      "Lv3: 東北地方でも指折りの豪雪地域として知られ、冬の備えが重要",
      "Lv4: 新庄まつりはユネスコ無形文化遺産に登録されている",
      "Lv5: 山形新幹線の終着駅があり、北東北への交通の拠点となっている"
    ]
  },
  {
    "geoId": "basin_yonezawa",
    "name": "米沢盆地",
    "kana": "よねざわぼんち",
    "type": "basin",
    "charName": "ヨネザワ-アース",
    "charImage": "assets/avatars/avatar_yonezawa_basin_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "最上川の源流域、上杉氏ゆかりの城下町が中心の盆地",
    "stats": {
      "河川": "最上川",
      "主要都市": "米沢市"
    },
    "charStats": {
      "power": 42,
      "defense": 68,
      "speed": 32
    },
    "relatedKeywords": [
      "米沢牛",
      "上杉鷹山",
      "最上川"
    ],
    "dummyKanji": [
      "山",
      "形",
      "新",
      "庄",
      "会",
      "津",
      "福",
      "島"
    ],
    "hiddenFacts": [
      "Lv2: 山形県最南部の盆地。周囲を吾妻連峰などの高い山々に囲まれている",
      "Lv3: 最上川はこの盆地から流れ出し、山形県を縦断して日本海へと向かう",
      "Lv4: 江戸時代の名君・上杉鷹山による改革の歴史が今も語り継がれる",
      "Lv5: 米沢牛や館山りんごなど、盆地特有の寒暖差を活かした食文化が豊か"
    ]
  },
  {
    "geoId": "basin_aizu",
    "name": "会津盆地",
    "kana": "あいづぼんち",
    "type": "basin",
    "charName": "アイヅ-ミスト",
    "charImage": "assets/avatars/avatar_aizu_basin_sr_v1.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "福島県西部、磐梯山を望む歴史と勇壮な文化の盆地",
    "stats": {
      "主要都市": "会津若松市",
      "山": "磐梯山"
    },
    "charStats": {
      "power": 52,
      "defense": 75,
      "speed": 35
    },
    "relatedKeywords": [
      "鶴ヶ城",
      "白虎隊",
      "赤べこ"
    ],
    "dummyKanji": [
      "福",
      "島",
      "郡",
      "山",
      "米",
      "沢",
      "中",
      "通"
    ],
    "hiddenFacts": [
      "Lv2: 福島県内では日本海側の気候に属し、冬の積雪が多い",
      "Lv3: 盆地の中央を阿賀川（阿賀野川の上流）が流れている",
      "Lv4: 鶴ヶ城（若松城）を中心に、幕末の歴史を伝える遺構が多数ある",
      "Lv5: 水質の良さと寒暖差を活かした日本酒造りが極めて盛ん"
    ]
  },
  {
    "geoId": "basin_omi",
    "name": "近江盆地",
    "kana": "おうみぼんち",
    "type": "basin",
    "charName": "オウミ-レイク",
    "charImage": "assets/avatars/avatar_omi_basin_sr_v1.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "滋賀県の中心部、琵琶湖を取り囲むように広がる盆地",
    "stats": {
      "湖": "琵琶湖",
      "地形": "湖成平野"
    },
    "charStats": {
      "power": 45,
      "defense": 82,
      "speed": 48
    },
    "relatedKeywords": [
      "琵琶湖",
      "近江商人",
      "近江米"
    ],
    "dummyKanji": [
      "奈",
      "良",
      "京",
      "都",
      "安",
      "土",
      "彦",
      "根"
    ],
    "hiddenFacts": [
      "Lv2: 琵琶湖を囲むように鈴鹿山脈や伊吹山地が連なっている",
      "Lv3: 湖周辺は肥沃な土壌で、古くから稲作が盛んな『近江米』の産地",
      "Lv4: 京都や北陸を結ぶ交通の要衝であり、多くの城下町や宿場町が発達した",
      "Lv5: 比叡山などの山々からの冷たい風が吹き込むことがある"
    ]
  },
  {
    "geoId": "highland_kitakami",
    "name": "北上台地",
    "kana": "きたかみだいち",
    "type": "plateau",
    "charName": "キタカミ-アース",
    "charImage": "assets/avatars/avatar_kitakami_plateau_n_v1.png",
    "region": "tohoku",
    "rarity": "N",
    "flavorText": "北上高地の麓に広がる、なだらかな丘陵地帯",
    "stats": {
      "位置": "岩手県",
      "産業": "酪農"
    },
    "charStats": {
      "power": 35,
      "defense": 62,
      "speed": 40
    },
    "relatedKeywords": [
      "北上川",
      "酪農",
      "冷涼"
    ],
    "dummyKanji": [
      "山",
      "形",
      "武",
      "蔵",
      "野",
      "下",
      "総"
    ],
    "hiddenFacts": [
      "Lv2: 北上高地と北上川の間にあり、主に酪農や畑作が行われている",
      "Lv3: 夏は冷涼な気候を活かした農業が中心",
      "Lv4: 地質学的には非常に古い地層が露出している場所もある",
      "Lv5: 北上川の浸食によって作られた河岸段丘が見られる"
    ]
  },
  {
    "geoId": "plateau_shimosu",
    "name": "下総台地",
    "kana": "しもうさだいち",
    "type": "plateau",
    "charName": "シモウサ-フィールド",
    "charImage": "assets/avatars/avatar_shimosu_plateau_r_v1.png",
    "region": "kanto",
    "rarity": "R",
    "flavorText": "千葉県北部に広がる広大な台地、近郊農業の拠点",
    "stats": {
      "土壌": "関東ローム層",
      "農業": "落花生・梨"
    },
    "charStats": {
      "power": 42,
      "defense": 68,
      "speed": 55
    },
    "relatedKeywords": [
      "落花生",
      "利根川",
      "成田空港"
    ],
    "dummyKanji": [
      "武",
      "蔵",
      "野",
      "北",
      "上",
      "牧",
      "之",
      "原"
    ],
    "hiddenFacts": [
      "Lv2: 関東平野の一部で、利根川の南側に位置する広大な平坦地",
      "Lv3: 千葉県特産の落花生（ピーナッツ）の主要な栽培地域",
      "Lv4: 水はけの良いローム層を活かした畑作が非常に盛ん",
      "Lv5: 台地の上には成田国際空港が建設されている"
    ]
  },
  {
    "geoId": "plateau_musashino",
    "name": "武蔵野",
    "kana": "むさしの",
    "type": "plateau",
    "charName": "ムサシノ-ミスト",
    "charImage": "assets/avatars/avatar_musashino_plateau_sr_v1.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "かつてはカヤの原、現在は首都圏の巨大な住宅・文教エリア",
    "stats": {
      "土壌": "関東ローム層",
      "地形": "広大な扇状地（台地）"
    },
    "charStats": {
      "power": 38,
      "defense": 72,
      "speed": 65
    },
    "relatedKeywords": [
      "玉川上水",
      "雑木林",
      "多摩川"
    ],
    "dummyKanji": [
      "下",
      "総",
      "牧",
      "之",
      "原",
      "多",
      "摩"
    ],
    "hiddenFacts": [
      "Lv2: 多摩川が形成した巨大な扇状地が隆起してできた台地",
      "Lv3: 江戸時代に玉川上水が通るまで、水不足に悩む『不毛の地』だった",
      "Lv4: かつての武蔵野の風情を残す雑木林は保全が進められている",
      "Lv5: 多くの大学や研究機関が集まる文教地区としての側面も持つ"
    ]
  },
  {
    "geoId": "plateau_makinohara",
    "name": "牧ノ原",
    "kana": "まきのはら",
    "type": "plateau",
    "charName": "マキノハラ-グリーン",
    "charImage": "assets/avatars/avatar_makinohara_plateau_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "静岡県を代表する大茶園、大井川の下流域に広がる台地",
    "stats": {
      "特徴": "日本最大級の茶園",
      "河川": "大井川"
    },
    "charStats": {
      "power": 45,
      "defense": 68,
      "speed": 52
    },
    "relatedKeywords": [
      "お茶",
      "大井川",
      "徳川家臣"
    ],
    "dummyKanji": [
      "牧",
      "之",
      "原",
      "笠",
      "野",
      "原",
      "根",
      "釧"
    ],
    "hiddenFacts": [
      "Lv2: 明治維新後、職を失った徳川の家臣たちが開墾して茶園になった",
      "Lv3: 緩やかな傾斜と水はけの良さが、茶の栽培に最適だった",
      "Lv4: 山の上から見渡す一面の茶畑は『緑の絨毯』と称される",
      "Lv5: 近年は静岡空港の建設地となり、交通の拠点にもなっている"
    ]
  },
  {
    "geoId": "plateau_kasanohara",
    "name": "笠野原",
    "kana": "かさのはら",
    "type": "plateau",
    "charName": "カサノハラ-マグマ",
    "charImage": "assets/avatars/avatar_kasanohara_plateau_n_v1.png",
    "region": "kyushu",
    "rarity": "N",
    "flavorText": "シラス台地の一部、南九州の広大な畑作地帯",
    "stats": {
      "場所": "鹿児島県",
      "土壌": "シラス"
    },
    "charStats": {
      "power": 40,
      "defense": 58,
      "speed": 45
    },
    "relatedKeywords": [
      "シラス台地",
      "大隅半島",
      "サツマイモ"
    ],
    "dummyKanji": [
      "笠",
      "野",
      "原",
      "牧",
      "之",
      "原",
      "根",
      "釧"
    ],
    "hiddenFacts": [
      "Lv2: 鹿児島県大隅半島にある、日本屈指の広さを誇る畑作台地",
      "Lv3: かつては水の確保が難しかったが、ダムの完成で農業が飛躍的に発展した",
      "Lv4: サツマイモやダイコン、飼料作物の栽培が極めて盛ん",
      "Lv5: 火山灰土壌（シラス）の厳しい環境を克服した開拓の歴史を持つ"
    ]
  },
  {
    "geoId": "sea_ariake",
    "name": "有明海",
    "kana": "ありあけかい",
    "type": "sea",
    "charName": "アリアケ-タイド",
    "charImage": "assets/avatars/avatar_ariake_sea_r_v1.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "最大6mの干満差、広大な干潟が育む海苔の産地",
    "stats": {
      "特徴": "遠浅の干潟",
      "名産": "有明海苔"
    },
    "charStats": {
      "power": 42,
      "defense": 68,
      "speed": 35
    },
    "relatedKeywords": [
      "干潟",
      "ムツゴロウ",
      "海苔養殖",
      "干満差"
    ],
    "dummyKanji": [
      "八",
      "代",
      "橘",
      "湾",
      "天",
      "草",
      "薩",
      "摩"
    ],
    "hiddenFacts": [
      "Lv2: 日本一の干満の差（最大約6メートル）がある海",
      "Lv3: 引き潮の時には広大な泥の干潟が現れ、ムツゴロウなどの固有種が生息する",
      "Lv4: 日本の海苔生産の中心地であり、品質の高い海苔が全国に出荷される",
      "Lv5: 周囲を複数の県に囲まれ、筑後川などの大河が注ぐ豊かな内海"
    ]
  },
  {
    "geoId": "lake_inawashiro",
    "name": "猪苗代湖",
    "kana": "いなわしろこ",
    "type": "lake",
    "charName": "イナワシロ-ミラー",
    "charImage": "assets/avatars/avatar_inawashiro_lake_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "『天鏡湖』の別名を持つ、磐梯山を映す福島の名湖",
    "stats": {
      "標高": "約514m (高地の湖)",
      "面積": "全国4位"
    },
    "charStats": {
      "power": 38,
      "defense": 75,
      "speed": 42
    },
    "relatedKeywords": [
      "磐梯山",
      "天鏡湖",
      "野口英世"
    ],
    "dummyKanji": [
      "猪",
      "苗",
      "代",
      "十",
      "和田",
      "田",
      "沢",
      "洞",
      "爺"
    ],
    "hiddenFacts": [
      "Lv2: 湖面が鏡のように美しいことから『天鏡湖（てんきょうこ）』とも呼ばれる",
      "Lv3: 日本で4番目に広い面積を持つ、東北屈指の大湖",
      "Lv4: 磐梯（ばんだい）山の麓にあり、四季折々の美しい景色が楽しめる",
      "Lv5: 野口英世の出身地である猪苗代町に隣接している"
    ]
  },
  {
    "geoId": "range_teshio",
    "name": "天塩山地",
    "kana": "てしおさんち",
    "type": "mountain",
    "charName": "テシオ-ガード",
    "charImage": "assets/avatars/avatar_teshio_range_n_v1.png",
    "region": "hokkaido",
    "rarity": "N",
    "flavorText": "北海道北西部、日本海に沿って南北に伸びる山地",
    "stats": {
      "位置": "北海道",
      "特徴": "南北約140km"
    },
    "charStats": {
      "power": 35,
      "defense": 42,
      "speed": 45
    },
    "relatedKeywords": [
      "天塩川",
      "利尻島",
      "日本海"
    ],
    "dummyKanji": [
      "天",
      "塩",
      "北",
      "見",
      "夕",
      "張",
      "日",
      "高"
    ],
    "hiddenFacts": [
      "Lv2: 天塩川の流域を形成する重要な山地",
      "Lv3: 比較的なだらかな山が続き、大規模な林業も行われている",
      "Lv4: サロベツ原野の背後に広がる豊かな自然の宝庫",
      "Lv5: 北部には日本最北の山塊が位置している"
    ]
  },
  {
    "geoId": "range_kitami",
    "name": "北見山地",
    "kana": "きたみさんち",
    "type": "mountain",
    "charName": "キタミ-ウッド",
    "charImage": "assets/avatars/avatar_kitami_range_n_v1.png",
    "region": "hokkaido",
    "rarity": "N",
    "flavorText": "道東と道北を分ける、森林資源豊かな山地",
    "stats": {
      "位置": "北海道",
      "産業": "林業"
    },
    "charStats": {
      "power": 32,
      "defense": 48,
      "speed": 35
    },
    "relatedKeywords": [
      "オホーツク海",
      "林業",
      "石北峠"
    ],
    "dummyKanji": [
      "北",
      "見",
      "天",
      "塩",
      "阿",
      "寒",
      "大",
      "雪"
    ],
    "hiddenFacts": [
      "Lv2: オホーツク海側の気候に大きな影響を与える山地",
      "Lv3: 森林が深く、日本有数の林業地帯として知られる",
      "Lv4: 冬の寒さは非常に厳しく、マイナス30度を下回ることも",
      "Lv5: 多くの峠があり、道内交通の要所となっている"
    ]
  },
  {
    "geoId": "range_yubari",
    "name": "夕張山地",
    "kana": "ゆうばりさんち",
    "type": "mountain",
    "charName": "ユウバリ-ストーン",
    "charImage": "assets/avatars/avatar_yubarisan_sr.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "石狩平野を見下ろす、かつての石炭の山",
    "stats": {
      "最高峰": "夕張岳 (1,668m)",
      "歴史": "石炭産業"
    },
    "charStats": {
      "power": 52,
      "defense": 45,
      "speed": 38
    },
    "relatedKeywords": [
      "夕張岳",
      "石炭",
      "夕張メロン"
    ],
    "dummyKanji": [
      "張",
      "狩",
      "勝",
      "日",
      "高",
      "北",
      "見"
    ],
    "hiddenFacts": [
      "Lv2: 夕張岳は高山植物の宝庫として登山者に人気",
      "Lv3: かつては『石炭の山』として日本の復興を支えた",
      "Lv4: 蛇紋岩という特殊な岩石が多く、貴重な植物が自生する",
      "Lv5: 麓では夕張メロンなどの農業が盛んに行われている"
    ]
  },
  {
    "geoId": "range_hidaka",
    "name": "日高山脈",
    "kana": "ひだかさんみゃく",
    "type": "mountain",
    "charName": "ヒダカ-リッジ",
    "charImage": "assets/avatars/avatar_hidaka_ssr_v1.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "北海道の背骨、氷河地形が残る峻険な山脈",
    "stats": {
      "最高峰": "幌尻岳 (2,052m)",
      "特徴": "国立公園"
    },
    "charStats": {
      "power": 88,
      "defense": 92,
      "speed": 22
    },
    "relatedKeywords": [
      "幌尻岳",
      "氷河地形",
      "日本100名山"
    ],
    "dummyKanji": [
      "高",
      "狩",
      "勝",
      "釧",
      "路",
      "根",
      "室"
    ],
    "hiddenFacts": [
      "Lv2: 2024年に国立公園に指定された、道内屈指の秘境",
      "Lv3: 日本最南端の氷河地形（カール）が確認されている",
      "Lv4: 道路の横断が極めて少なく、手つかずの自然が残る",
      "Lv5: アイヌ語で『チロロポ（小さな山）』などの地名が多く残る"
    ]
  },
  {
    "geoId": "range_shirakami",
    "name": "白神山地",
    "kana": "しらかみさんち",
    "type": "mountain",
    "charName": "シラカミ-ブナ",
    "charImage": "assets/avatars/avatar_shirakami_ssr_v1.png",
    "region": "tohoku",
    "rarity": "SSR",
    "flavorText": "世界最大級のブナの原生林、世界遺産の森",
    "stats": {
      "登録": "世界自然遺産",
      "面積": "約13万ha"
    },
    "charStats": {
      "power": 45,
      "defense": 95,
      "speed": 32
    },
    "relatedKeywords": [
      "世界遺産",
      "ブナ原生林",
      "青池"
    ],
    "dummyKanji": [
      "神",
      "羽",
      "奥",
      "羽",
      "出",
      "北",
      "上"
    ],
    "hiddenFacts": [
      "Lv2: 日本で最初に世界自然遺産に登録された地の一つ",
      "Lv3: 入山が制限された核心地域には、貴重な生態系が守られている",
      "Lv4: 十二湖の『青池』は、神秘的な青さが有名な観光スポット",
      "Lv5: 多種多様な動物（カモシカ、クマゲラ等）が生息している"
    ]
  },
  {
    "geoId": "range_abukuma",
    "name": "阿武隈高地",
    "kana": "あぶくまこうち",
    "type": "mountain",
    "charName": "アブクマ-ヒル",
    "charImage": "assets/avatars/avatar_abukumasan_r.png",
    "region": "tohoku",
    "rarity": "N",
    "flavorText": "福島・茨城に広がるなだらかな隆起準平原",
    "stats": {
      "地形": "隆起準平原",
      "位置": "福島県東部"
    },
    "charStats": {
      "power": 38,
      "defense": 72,
      "speed": 45
    },
    "relatedKeywords": [
      "阿武隈川",
      "隆起準平原",
      "あぶくま洞"
    ],
    "dummyKanji": [
      "阿",
      "武",
      "隈",
      "北",
      "上",
      "奥",
      "羽",
      "出",
      "羽"
    ],
    "hiddenFacts": [
      "Lv2: 非常に古い地層からなる、なだらかな高原状の地形",
      "Lv3: 地下には日本最大級の鍾乳洞『あぶくま洞』がある",
      "Lv4: やませの影響で、夏でも比較的涼しい気候",
      "Lv5: 畜産や高原野菜の栽培が盛んに行われている"
    ]
  },
  {
    "geoId": "lake_toyako",
    "name": "洞爺湖",
    "kana": "とうやこ",
    "type": "lake",
    "charName": "トウヤ-サミット",
    "charImage": "assets/avatars/avatar_toyako_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "不凍湖として知られる円形のカルデラ湖",
    "stats": {
      "種類": "カルデラ湖",
      "特徴": "日本最北の不凍湖"
    },
    "charStats": {
      "power": 45,
      "defense": 68,
      "speed": 52
    },
    "relatedKeywords": [
      "カルデラ湖",
      "サミット",
      "有珠山",
      "中島"
    ],
    "dummyKanji": [
      "洞",
      "爺",
      "支",
      "笏",
      "阿",
      "寒",
      "サ",
      "ロ",
      "マ"
    ],
    "hiddenFacts": [
      "Lv2: 火山活動によってできたカルデラ湖で、中央には『中島』が浮かぶ",
      "Lv3: 2008年に主要国首脳会議（洞爺湖サミット）が開催された地",
      "Lv4: 夏でも冬でも凍らない『不凍湖』として知られる",
      "Lv5: ほとりには有珠山や昭和新山があり、活発な地球の息吹を感じられる"
    ]
  },
  {
    "geoId": "lake_towadako",
    "name": "十和田湖",
    "kana": "とわだこ",
    "type": "lake",
    "charName": "トワダ-ミラー",
    "charImage": "assets/avatars/avatar_towadako_sr_v1.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "二重カルデラの神秘的な青、奥入瀬の源流",
    "stats": {
      "標高": "400m",
      "透明度": "非常に高い"
    },
    "charStats": {
      "power": 48,
      "defense": 72,
      "speed": 45
    },
    "relatedKeywords": [
      "奥入瀬渓流",
      "二重カルデラ",
      "ヒメマス"
    ],
    "dummyKanji": [
      "十",
      "和田",
      "田",
      "沢",
      "猪",
      "苗",
      "代"
    ],
    "hiddenFacts": [
      "Lv2: 火口の中にさらに火口ができた『二重カルデラ』という珍しい構造",
      "Lv3: 湖から流れ出す唯一の出口が、景勝地として有名な『奥入瀬渓流』",
      "Lv4: 非常に深く、最大水深は327mで日本第3位",
      "Lv5: 青森県と秋田県にまたがり、国立公園の中心的な存在"
    ]
  },
  {
    "geoId": "lake_tazawako",
    "name": "田沢湖",
    "kana": "たざわこ",
    "type": "lake",
    "charName": "タザワ-ディープ",
    "charImage": "assets/avatars/avatar_tazawa_lake_r_v1.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "日本一の深さを誇る、辰子伝説が眠る瑠璃色の湖",
    "stats": {
      "最大水深": "423.4m (日本1位)",
      "伝説": "辰子姫伝説"
    },
    "charStats": {
      "power": 35,
      "defense": 82,
      "speed": 48
    },
    "relatedKeywords": [
      "辰子像",
      "カルデラ湖",
      "日本一深い",
      "不凍湖"
    ],
    "dummyKanji": [
      "田",
      "沢",
      "十",
      "和田",
      "猪",
      "苗",
      "代",
      "摩",
      "周"
    ],
    "hiddenFacts": [
      "Lv2: 日本で最も深い湖で、その深さゆえに冬でも凍ることがない",
      "Lv3: 湖畔には、永遠の若さと美しさを願って龍になったという『辰子姫』の黄金像がある",
      "Lv4: 昭和初期まで棲息していた固有種『クニマス』は、ここで一度絶滅したと考えられていた",
      "Lv5: 水深が深いため、光の加減で湖面が美しい瑠璃（るり）色に輝く"
    ]
  },
  {
    "geoId": "range_kanto",
    "name": "関東山地",
    "kana": "かんとうさんち",
    "type": "mountain",
    "charName": "カントウ-ウォール",
    "charImage": "assets/avatars/avatar_kanto_range_sr_v1.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "関東平野の西を固める、険しい山々の障壁",
    "stats": {
      "最高峰": "北奥千丈岳 (2,601m)",
      "国立公園": "秩父多摩甲斐"
    },
    "charStats": {
      "power": 72,
      "defense": 85,
      "speed": 35
    },
    "relatedKeywords": [
      "秩父",
      "多摩",
      "奥多摩",
      "フォッサマグナ"
    ],
    "dummyKanji": [
      "東",
      "西",
      "南",
      "北",
      "奥",
      "多",
      "摩",
      "秩",
      "父"
    ],
    "hiddenFacts": [
      "Lv2: 東京都、埼玉県、山梨県などにまたがる広大な山岳地帯",
      "Lv3: 秩父多摩甲斐国立公園を擁し、都心から一番近い大自然",
      "Lv4: フォッサマグナの東縁に位置し、複雑な地質構造を持つ",
      "Lv5: 多くの渓谷があり、避暑地や登山道として人気"
    ]
  },
  {
    "geoId": "range_kii",
    "name": "紀伊山地",
    "kana": "きいさんち",
    "type": "mountain",
    "charName": "キイ-スピリット",
    "charImage": "assets/avatars/avatar_kii_range_ssr_v1.png",
    "region": "kinki",
    "rarity": "SSR",
    "flavorText": "聖地と参詣道が息づく、深く険しい仏の山々",
    "stats": {
      "世界遺産": "霊場と参詣道",
      "気候": "極めて多雨"
    },
    "charStats": {
      "power": 65,
      "defense": 90,
      "speed": 42
    },
    "relatedKeywords": [
      "紀",
      "伊",
      "和歌山",
      "熊野古道",
      "高野山"
    ],
    "dummyKanji": [
      "紀",
      "伊",
      "鈴",
      "鹿",
      "中",
      "国",
      "四",
      "国",
      "九",
      "州"
    ],
    "hiddenFacts": [
      "Lv2: 2004年に世界文化遺産に登録された、精神文明の地",
      "Lv3: 標高1,000m〜2,000m級の険しい山が連なる",
      "Lv4: 日本屈指の多雨地帯であり、豊かな森林と水資源を育む",
      "Lv5: 熊野三山や高野山などの霊場、それらを結ぶ参詣道が有名"
    ]
  },
  {
    "geoId": "range_tsukushi",
    "name": "筑紫山地",
    "kana": "つくしさんち",
    "type": "mountain",
    "charName": "ツクシ-ヒルス",
    "charImage": "assets/avatars/avatar_tsukushisan_r.png",
    "region": "kyushu",
    "rarity": "R",
    "flavorText": "福岡から佐賀へ広がる、九州北部の穏やかな山々",
    "stats": {
      "最高峰": "脊振山 (1,055m)",
      "位置": "福岡・佐賀"
    },
    "charStats": {
      "power": 45,
      "defense": 58,
      "speed": 52
    },
    "relatedKeywords": [
      "筑紫平野",
      "脊振山",
      "九州北部"
    ],
    "dummyKanji": [
      "紫",
      "佐",
      "賀",
      "熊",
      "本",
      "大",
      "分",
      "宮",
      "崎"
    ],
    "hiddenFacts": [
      "Lv2: 福岡県と佐賀県の県境をなす脊振山地などからなる",
      "Lv3: 筑紫平野の北側に位置し、豊かな水を提供している",
      "Lv4: 山間部には古くからの宿場町や城下町が残っている",
      "Lv5: 北側は玄界灘に面し、美しい海岸線を見下ろせる"
    ]
  },
  {
    "geoId": "range_suzuka",
    "name": "鈴鹿山脈",
    "kana": "すずかさんみゃく",
    "type": "mountain",
    "charName": "スズカ-ピーク",
    "charImage": "assets/avatars/avatar_suzuka_range_sr_v1.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "伊勢湾の西を走る、三重と滋賀の物理的境界",
    "stats": {
      "最高峰": "御池岳 (1,247m)",
      "位置": "滋賀・三重"
    },
    "charStats": {
      "power": 55,
      "defense": 72,
      "speed": 58
    },
    "relatedKeywords": [
      "鈴鹿峠",
      "伊勢湾",
      "琵琶湖"
    ],
    "dummyKanji": [
      "鹿",
      "伊",
      "勢",
      "琵",
      "琶",
      "濃",
      "尾"
    ],
    "hiddenFacts": [
      "Lv2: 伊勢湾側と琵琶湖側の気候を分ける壁となっている",
      "Lv3: 鈴鹿峠は古くからの交通の難所として『東海道』の要所だった",
      "Lv4: 石灰岩質の地質が多く、ドリーネ等の穴が見られることもある",
      "Lv5: 冬は『鈴鹿おろし』と呼ばれる強い冷風が濃尾平野へ吹く"
    ]
  },
  {
    "geoId": "range_tanba",
    "name": "丹波高地",
    "kana": "たんばこうち",
    "type": "mountain",
    "charName": "タンバ-ミスト",
    "charImage": "assets/avatars/avatar_tanbasan_sr.png",
    "region": "kinki",
    "rarity": "N",
    "flavorText": "京都・兵庫にまたがる、霧深い高原地帯",
    "stats": {
      "位置": "京都・兵庫",
      "名産": "丹波栗・丹波黒豆"
    },
    "charStats": {
      "power": 42,
      "defense": 65,
      "speed": 35
    },
    "relatedKeywords": [
      "丹波霧",
      "黒豆",
      "亀岡盆地"
    ],
    "dummyKanji": [
      "丹",
      "波",
      "京",
      "都",
      "播",
      "磨",
      "摂",
      "津"
    ],
    "hiddenFacts": [
      "Lv2: 晩秋から冬にかけて、深い『丹波霧』が発生することで有名",
      "Lv3: 丹波栗、丹波黒豆、マツタケなど高級食材の産地",
      "Lv4: 盆地や高原が組み合わさった複雑な地形を持つ",
      "Lv5: 由良川や淀川水系の分水嶺が走っている"
    ]
  },
  {
    "geoId": "peak_yoteizan",
    "name": "羊蹄山",
    "kana": "ようていざん",
    "type": "mountain",
    "charName": "ヨウテイ-エゾフジ",
    "charImage": "assets/avatars/avatar_yoteizan_ssr.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "『蝦夷富士』と称えられる、完璧な円錐形の山",
    "stats": {
      "標高": "1,898m",
      "別名": "蝦夷富士"
    },
    "charStats": {
      "power": 65,
      "defense": 55,
      "speed": 48
    },
    "relatedKeywords": [
      "蝦夷富士",
      "成層火山",
      "ニセコ"
    ],
    "dummyKanji": [
      "羊",
      "蹄",
      "富士",
      "大",
      "雪",
      "旭",
      "岳"
    ],
    "hiddenFacts": [
      "Lv2: 形が富士山に非常に似ていることから『郷土富士』の筆頭格",
      "Lv3: 麓の湧水口『ふきだし公園』は名水100選にも選ばれている",
      "Lv4: ニセコなどのリゾート地から仰ぎ見る美しい姿が特徴",
      "Lv5: アイヌ語では『マッカリヌプリ』と呼ばれていた"
    ]
  },
  {
    "geoId": "peak_daisetsuzan",
    "name": "大雪山",
    "kana": "だいせつざん",
    "type": "mountain",
    "charName": "ダイセツ-ピーク",
    "charImage": "assets/avatars/avatar_daisetsuzan_ssr_v1.png",
    "region": "hokkaido",
    "rarity": "SSR",
    "flavorText": "『神々の遊ぶ庭』、北海道最高峰の旭岳を含む巨大山塊",
    "stats": {
      "最高峰": "旭岳 (2,291m)",
      "特徴": "日本最大の国立公園"
    },
    "charStats": {
      "power": 92,
      "defense": 85,
      "speed": 15
    },
    "relatedKeywords": [
      "旭岳",
      "神々の遊ぶ庭",
      "日本一早い紅葉"
    ],
    "dummyKanji": [
      "雪",
      "氷",
      "寒",
      "北",
      "見",
      "日",
      "高"
    ],
    "hiddenFacts": [
      "Lv2: 北海道で最も高い山、旭岳を主峰とする日本最大の山塊",
      "Lv3: 9月中旬には日本で最も早く紅葉が始まる場所としても有名",
      "Lv4: アイヌ語で『カムイミンタラ（神々の遊ぶ庭）』と呼ばれる",
      "Lv5: 広大な高山植物帯と、夏でも残る万年雪が特徴"
    ]
  },
  {
    "geoId": "peak_usuzan",
    "name": "有珠山",
    "kana": "うすざん",
    "type": "mountain",
    "charName": "ウス-ボルケーノ",
    "charImage": "assets/avatars/avatar_usuzan_sr.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "20世紀に4回も噴火した、今もなお活動的な活火山",
    "stats": {
      "位置": "洞爺湖サミット開催地付近",
      "状態": "活火山"
    },
    "charStats": {
      "power": 75,
      "defense": 35,
      "speed": 62
    },
    "relatedKeywords": [
      "洞爺湖",
      "昭和新山",
      "噴火"
    ],
    "dummyKanji": [
      "有",
      "珠",
      "大",
      "雪",
      "駒",
      "ケ",
      "岳"
    ],
    "hiddenFacts": [
      "Lv2: 噴火のたびに地形が大きく変わる、世界でも有数の活発な火山",
      "Lv3: 麓には噴火の隆起によってできた『昭和新山』が隣接している",
      "Lv4: 2000年の噴火では事前避難が成功し、一人の犠牲者も出さなかった",
      "Lv5: 洞爺湖の南岸に位置し、ロープウェイで火口付近まで行ける"
    ]
  },
  {
    "geoId": "peak_iwakisan",
    "name": "岩木山",
    "kana": "いわきさん",
    "type": "mountain",
    "charName": "イワキ-ツガルフジ",
    "charImage": "assets/avatars/avatar_iwakisan_sr.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "『津軽富士』と呼ばれる、津軽平野のどこからでも見える名峰",
    "stats": {
      "標高": "1,625m",
      "別名": "津軽富士"
    },
    "charStats": {
      "power": 58,
      "defense": 48,
      "speed": 52
    },
    "relatedKeywords": [
      "津軽富士",
      "リンゴ",
      "津軽平野"
    ],
    "dummyKanji": [
      "岩",
      "木",
      "富士",
      "鳥",
      "海",
      "磐",
      "梯"
    ],
    "hiddenFacts": [
      "Lv2: 青森県最高峰であり、古くから信仰の対象とされてきた",
      "Lv3: 山麓には広大なリンゴ園が広がり、秋には赤い実が彩る",
      "Lv4: 山頂からは八甲田山や北海道の松前半島まで見渡せる",
      "Lv5: 春の残雪が馬の形に見える『駒止』が農業の目安とされる"
    ]
  },
  {
    "geoId": "plain_tokachi",
    "name": "十勝平野",
    "kana": "とかちへいや",
    "type": "plain",
    "charName": "トカチ-ファーム",
    "charImage": "assets/avatars/avatar_tokachi_plain_sr.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "日本最大の畑作・酪農地帯、『日本の食糧基地』",
    "stats": {
      "主要作物": "小麦・豆・砂糖大根",
      "農業形態": "大規模機械化"
    },
    "charStats": {
      "power": 55,
      "defense": 82,
      "speed": 35
    },
    "relatedKeywords": [
      "フードバレー",
      "酪農",
      "大規模農業"
    ],
    "dummyKanji": [
      "勝",
      "狩",
      "根",
      "釧",
      "筑",
      "紫",
      "佐",
      "賀"
    ],
    "hiddenFacts": [
      "Lv2: 1戸あたりの耕地面積が非常に広く、大規模な機械化農業が行われている",
      "Lv3: 小麦、アズキ、バレイショ、テンサイの生産が非常に盛ん",
      "Lv4: チーズやバターなどの乳製品の製造拠点も多い",
      "Lv5: 日高山脈の東側に広がる、十勝川の恵みを受けた平野"
    ]
  },
  {
    "geoId": "plain_tsugaru",
    "name": "津軽平野",
    "kana": "つがるへいや",
    "type": "plain",
    "charName": "ツガル-アップル",
    "charImage": "assets/avatars/avatar_tsugaru_plain_r.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "岩木山の麓に広がる、コメとリンゴの大地",
    "stats": {
      "農業": "稲作・果樹(リンゴ)",
      "位置": "青森県西部"
    },
    "charStats": {
      "power": 42,
      "defense": 65,
      "speed": 48
    },
    "relatedKeywords": [
      "リンゴ",
      "岩木山",
      "岩木川"
    ],
    "dummyKanji": [
      "軽",
      "秋",
      "田",
      "仙",
      "台",
      "庄",
      "内"
    ],
    "hiddenFacts": [
      "Lv2: 日本一のリンゴ生産量を誇る弘前市周辺を含む平野",
      "Lv3: 岩木川の下流に位置し、広大な水田地帯も広がっている",
      "Lv4: 冬には強い季節風が吹き、『地吹雪（じふぶき）』が発生することも",
      "Lv5: かつては十三湖を通じた舟運も盛んであった"
    ]
  },
  {
    "geoId": "plain_noubi",
    "name": "濃尾平野",
    "kana": "のうびへいや",
    "type": "plain",
    "charName": "ノウビ-リバー",
    "charImage": "assets/avatars/avatar_noubisan_r.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "木曽三川がつくる広大な平野、輪中の知恵が息づく",
    "stats": {
      "河川": "木曽三川",
      "特徴": "輪中（わじゅう）"
    },
    "charStats": {
      "power": 48,
      "defense": 75,
      "speed": 42
    },
    "relatedKeywords": [
      "木曽三川",
      "輪中",
      "伊勢湾",
      "名古屋"
    ],
    "dummyKanji": [
      "濃",
      "尾",
      "関東",
      "越",
      "後",
      "富",
      "山"
    ],
    "hiddenFacts": [
      "Lv2: 木曽川、長良川、揖斐川の『木曽三川』が流れ込む日本有数の平野",
      "Lv3: 低湿地を洪水から守るため、集落を堤防で囲んだ『輪中』が作られた",
      "Lv4: 中京工業地帯の中心地であり、名古屋市などの大都市が位置する",
      "Lv5: 平野の西端は養老断層によって急峻な山々に接している"
    ]
  },
  {
    "geoId": "plain_chikushi",
    "name": "筑紫平野",
    "kana": "つくしへいや",
    "type": "plain",
    "charName": "ツクシ-ライス",
    "charImage": "assets/avatars/avatar_tsukushi_plain_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "九州最大級の穀倉地帯、筑後川が潤す水田地帯",
    "stats": {
      "河川": "筑後川",
      "農業": "稲作・麦の二毛作"
    },
    "charStats": {
      "power": 45,
      "defense": 62,
      "speed": 55
    },
    "relatedKeywords": [
      "筑後川",
      "二毛作",
      "有明海",
      "クリーク"
    ],
    "dummyKanji": [
      "紫",
      "佐",
      "賀",
      "熊",
      "本",
      "八",
      "代"
    ],
    "hiddenFacts": [
      "Lv2: 筑後川の下流に広がる、福岡県と佐賀県にまたがる広大な平野",
      "Lv3: かつては『クリーク』と呼ばれる網の目のような水路が発達していた",
      "Lv4: 米と麦の二毛作が盛んで、九州随一の穀倉地帯",
      "Lv5: 有明海に面しており、大規模な干拓が行われてきた歴史がある"
    ]
  },
  {
    "geoId": "basin_nagano",
    "name": "長野盆地",
    "kana": "ながのぼんち",
    "type": "basin",
    "charName": "ナガノ-アップル",
    "charImage": "assets/avatars/avatar_nagano_basin_r.png",
    "region": "chubu",
    "rarity": "R",
    "flavorText": "善光寺平とも呼ばれる、千曲川沿いの豊かな盆地",
    "stats": {
      "別称": "善光寺平",
      "収穫": "リンゴ・モモ"
    },
    "charStats": {
      "power": 38,
      "defense": 65,
      "speed": 42
    },
    "relatedKeywords": [
      "千曲川",
      "善光寺",
      "リンゴ",
      "北信"
    ],
    "dummyKanji": [
      "長",
      "野",
      "甲",
      "府",
      "京",
      "都",
      "奈",
      "良"
    ],
    "hiddenFacts": [
      "Lv2: 千曲川（しなのがわ）の中流に広がる、長野県北部の中心的な盆地",
      "Lv3: 古くからの名刹『善光寺』があり、門前町として栄えてきた",
      "Lv4: リンゴの栽培が極めて盛んで、収穫期には盆地が赤く染まるほど",
      "Lv5: 周囲を標高の高い山々に囲まれ、典型的な盆地気候（寒暖差）を持つ"
    ]
  },
  {
    "geoId": "plateau_konsen",
    "name": "根釧台地",
    "kana": "こんせんだいち",
    "type": "plateau",
    "charName": "コンセン-ミルク",
    "charImage": "assets/avatars/avatar_konsensan_sr.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "霧に包まれる広大な牧草地、大規模酪農の聖地",
    "stats": {
      "農業": "酪農",
      "気候": "夏に濃霧が発生"
    },
    "charStats": {
      "power": 38,
      "defense": 78,
      "speed": 25
    },
    "relatedKeywords": [
      "酪農",
      "格子状防風林",
      "濃霧"
    ],
    "dummyKanji": [
      "根",
      "釧",
      "十",
      "勝",
      "牧",
      "ノ",
      "原",
      "笠",
      "野"
    ],
    "hiddenFacts": [
      "Lv2: 日本最大級の酪農地帯で、牛の数が人口よりも多い",
      "Lv3: 夏に発生する冷たい霧（海霧）のため、稲作が難しく酪農が発達した",
      "Lv4: 土地を風から守るための巨大な『格子状防風林』が景観を特徴づける",
      "Lv5: 火山灰が厚く積もった台地であり、大規模な農地開発が行われた"
    ]
  },
  {
    "geoId": "plateau_musashino",
    "name": "武蔵野台地",
    "kana": "むさしのだいち",
    "type": "plateau",
    "charName": "ムサシノ-アーバン",
    "charImage": "assets/avatars/avatar_musashinosan_r.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "関東ローム層が厚く積もる、首都東京の西側土台",
    "stats": {
      "土壌": "関東ローム層",
      "河川": "多摩川・荒川"
    },
    "charStats": {
      "power": 35,
      "defense": 82,
      "speed": 62
    },
    "relatedKeywords": [
      "関東ローム層",
      "玉川上水",
      "都心の高台"
    ],
    "dummyKanji": [
      "下",
      "総",
      "牧",
      "ノ",
      "原",
      "根",
      "釧"
    ],
    "hiddenFacts": [
      "Lv2: 富士山などの火山灰が積もった『関東ローム層』で覆われている",
      "Lv3: かつては水を得るのが難しかったが、玉川上水の完成で開拓が進んだ",
      "Lv4: 現在は、東京都区部から多摩地域にかけて広大な市街地となっている",
      "Lv5: 台地の端には『国分寺崖線』などの段丘崖が複雑に走っている"
    ]
  },
  {
    "geoId": "river_ishikarigawa",
    "name": "石狩川",
    "kana": "いしかりがわ",
    "type": "river",
    "charName": "イシカリ-フロー",
    "charImage": "assets/avatars/avatar_ishikarigawa_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "かつては日本一の長さを誇った、石狩平野を蛇行する大河",
    "stats": {
      "長さ": "268km (全国3位)",
      "流域面積": "14,330km² (全国2位)"
    },
    "charStats": {
      "power": 62,
      "defense": 55,
      "speed": 78
    },
    "relatedKeywords": [
      "石狩平野",
      "三日月湖",
      "蛇行"
    ],
    "dummyKanji": [
      "石",
      "狩",
      "十",
      "勝",
      "利",
      "別",
      "天",
      "塩"
    ],
    "hiddenFacts": [
      "Lv2: もともとは非常に激しく蛇行していたが、治水工事で直線化された",
      "Lv3: 直線化された跡には、数多くの『三日月湖』が今も点在している",
      "Lv4: かつてはサケが大量に遡上し、アイヌの人々の生活を支えた",
      "Lv5: 北海道最大の都市、札幌市の北側を流れて日本海に注ぐ"
    ]
  },
  {
    "geoId": "river_kitakamigawa",
    "name": "北上川",
    "kana": "きたかみがわ",
    "type": "river",
    "charName": "キタカミ-ストリーム",
    "charImage": "assets/avatars/avatar_tone_stream_1773578026547.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "東北最大の河川、北上平野を縦断する『母なる川』",
    "stats": {
      "長さ": "249km (東北1位)",
      "流域面積": "10,150km²"
    },
    "charStats": {
      "power": 58,
      "defense": 62,
      "speed": 72
    },
    "relatedKeywords": [
      "北上平野",
      "盛岡",
      "石巻"
    ],
    "dummyKanji": [
      "北",
      "上",
      "阿",
      "武",
      "隈",
      "最",
      "上",
      "雄",
      "物"
    ],
    "hiddenFacts": [
      "Lv2: 北上山地と奥羽山脈の間を南北に悠々と流れる",
      "Lv3: 河口付近（石巻市）には、かつて北上川を太平洋に逃がす大規模な放水路が作られた",
      "Lv4: 周辺の北上平野は、東北有数の穀倉地帯となっている",
      "Lv5: 盛岡市をはじめとする、岩手県の中心都市を結ぶ重要な水源"
    ]
  },
  {
    "geoId": "river_yodogawa",
    "name": "淀川",
    "kana": "よどがわ",
    "type": "river",
    "charName": "ヨドガワ-ハブ",
    "charImage": "assets/avatars/avatar_cyan_stream_shinano_1773577952223.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "近畿の水を支える大動脈、琵琶湖から大阪湾へと続く大河",
    "stats": {
      "水源": "琵琶湖 (瀬田川)",
      "流域": "滋賀・京都・大阪"
    },
    "charStats": {
      "power": 45,
      "defense": 82,
      "speed": 62
    },
    "relatedKeywords": [
      "琵琶湖",
      "大阪湾",
      "水の都",
      "毛馬洗堰"
    ],
    "dummyKanji": [
      "淀",
      "川",
      "最",
      "上",
      "利",
      "根",
      "木",
      "曽"
    ],
    "hiddenFacts": [
      "Lv2: 琵琶湖から流れ出る唯一の河川で、流路により名前が変わる（瀬田川→宇治川→淀川）",
      "Lv3: 桂川、宇治川、木津川の3つの大きな川が合流して『淀川』となる",
      "Lv4: 大阪市の発展を支えた『水の都』のシンボル的存在",
      "Lv5: 生活用水や工業用水として、近畿地方の約1,400万人の命を支えている"
    ]
  },
  {
    "geoId": "river_chikugogawa",
    "name": "筑後川",
    "kana": "ちくごがわ",
    "type": "river",
    "charName": "チクゴ-タイド",
    "charImage": "assets/avatars/avatar_chikugogawa_sr_v1.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "『筑紫三郎』の異名を持つ九州最大の河川",
    "stats": {
      "長さ": "143km",
      "愛称": "筑紫三郎"
    },
    "charStats": {
      "power": 62,
      "defense": 55,
      "speed": 82
    },
    "relatedKeywords": [
      "筑紫三郎",
      "筑紫平野",
      "アツシマ"
    ],
    "dummyKanji": [
      "筑",
      "後",
      "坂",
      "東",
      "四",
      "国",
      "球",
      "磨"
    ],
    "hiddenFacts": [
      "Lv2: 利根川の『坂東太郎』、吉野川の『四国三郎』と並び『筑後川』は三郎と呼ばれる",
      "Lv3: 有明海へと注ぎ、筑紫平野に肥沃な土壌をもたらした",
      "Lv4: 日本でも珍しい昇降式鉄橋『筑後川昇開橋』が遺産として残る",
      "Lv5: 下流域ではクリークと呼ばれる緻密な灌漑水路が発達した"
    ]
  },
  {
    "geoId": "river_shimantogawa",
    "name": "四万十川",
    "kana": "しまんとがわ",
    "type": "river",
    "charName": "シマント-クリア",
    "charImage": "assets/avatars/avatar_aqua_biwa_1773577999233.png",
    "region": "shikoku",
    "rarity": "SSR",
    "flavorText": "『日本最後の清流』、沈下橋が描き出す日本の原風景",
    "stats": {
      "特徴": "日本最後の清流",
      "景観": "沈下橋"
    },
    "charStats": {
      "power": 35,
      "defense": 45,
      "speed": 95
    },
    "relatedKeywords": [
      "清流",
      "沈下橋",
      "アユ釣り"
    ],
    "dummyKanji": [
      "四",
      "万",
      "十",
      "吉",
      "野",
      "仁",
      "淀"
    ],
    "hiddenFacts": [
      "Lv2: 大規模なダムがないことから『日本最後の清流』と称される",
      "Lv3: 増水時に水中に沈むように設計された『沈下橋（ちんかばし）』が有名",
      "Lv4: 伝統的なアユの火振り漁など、豊かな自然と調和した営みが残る",
      "Lv5: 四国の険しい山々を縫うように流れ、土佐湾へと注ぐ"
    ]
  },
  {
    "geoId": "lake_toyako",
    "name": "洞爺湖",
    "kana": "とうやこ",
    "type": "lake",
    "charName": "トウヤ-サミット",
    "charImage": "assets/avatars/avatar_toyako_sr_v1.png",
    "region": "hokkaido",
    "rarity": "SR",
    "flavorText": "不凍湖として知られる円形のカルデラ湖",
    "stats": {
      "種類": "カルデラ湖",
      "特徴": "日本最北の不凍湖"
    },
    "charStats": {
      "power": 45,
      "defense": 68,
      "speed": 52
    },
    "relatedKeywords": [
      "カルデラ湖",
      "サミット",
      "有珠山",
      "中島"
    ],
    "dummyKanji": [
      "洞",
      "爺",
      "支",
      "笏",
      "阿",
      "寒",
      "サ",
      "ロ",
      "マ"
    ],
    "hiddenFacts": [
      "Lv2: 火山活動によってできたカルデラ湖で、中央には『中島』が浮かぶ",
      "Lv3: 2008年に主要国首脳会議（洞爺湖サミット）が開催された地",
      "Lv4: 夏でも冬でも凍らない『不凍湖』として知られる",
      "Lv5: ほとりには有珠山や昭和新山があり、活発な地球の息吹を感じられる"
    ]
  },
];

function getGeographyById(id) {
  return geographyMaster.find(g => g.geoId === id);
}

function getRandomGeography() {
  const index = Math.floor(Math.random() * geographyMaster.length);
  return geographyMaster[index];
}

// --- store.js ---
const STORAGE_KEYS = {
  PROGRESS: 'hq_progress',
  CARDS: 'hq_cards',
  MISTAKES: 'hq_mistakes',
  GACHA_POINTS: 'hq_gacha_points',
  SILVER_TICKETS: 'hq_silver_tickets',
  SSR_TICKETS: 'hq_ssr_tickets',
  PLAYER_EXP: 'hq_player_exp',
  PLAYER_LEVEL: 'hq_player_level',
  BGM_ENABLED: 'hq_bgm_enabled',
  SFX_ENABLED: 'hq_sfx_enabled'
};

const state = {
  progress: {},
  cards: {},
  mistakes: [],
  gachaPoints: 0,
  silverTickets: 0,
  ssrTickets: 0,
  playerExp: 0,
  playerLevel: 1,
  bgmEnabled: true,
  sfxEnabled: true
};

function getProfileKey(baseKey) {
  const profile = (window.geoFirebase && typeof window.geoFirebase.getSelectedProfile === 'function') 
    ? window.geoFirebase.getSelectedProfile() 
    : (localStorage.getItem('geoquiz_profile') || null);
  return profile ? `${baseKey}_${profile}` : baseKey;
}

function loadState() {
  try {
    const pKey = getProfileKey(STORAGE_KEYS.PROGRESS);
    const savedProg = localStorage.getItem(pKey);
    if (savedProg) state.progress = JSON.parse(savedProg);
    else state.progress = {};

    const cKey = getProfileKey(STORAGE_KEYS.CARDS);
    const savedCards = localStorage.getItem(cKey);
    if (savedCards) state.cards = JSON.parse(savedCards);
    else state.cards = {};

    const mKey = getProfileKey(STORAGE_KEYS.MISTAKES);
    const savedMistakes = localStorage.getItem(mKey);
    if (savedMistakes) state.mistakes = JSON.parse(savedMistakes);
    else state.mistakes = [];

    state.gachaPoints = parseInt(localStorage.getItem(getProfileKey(STORAGE_KEYS.GACHA_POINTS)) || '0');
    state.silverTickets = parseInt(localStorage.getItem(getProfileKey(STORAGE_KEYS.SILVER_TICKETS)) || '0');
    state.ssrTickets = parseInt(localStorage.getItem(getProfileKey(STORAGE_KEYS.SSR_TICKETS)) || '0');
    state.playerExp = parseInt(localStorage.getItem(getProfileKey(STORAGE_KEYS.PLAYER_EXP)) || '0');
    state.playerLevel = parseInt(localStorage.getItem(getProfileKey(STORAGE_KEYS.PLAYER_LEVEL)) || '1');
    state.bgmEnabled = localStorage.getItem(STORAGE_KEYS.BGM_ENABLED) !== 'false'; // BGM/SFX can stay global
    state.sfxEnabled = localStorage.getItem(STORAGE_KEYS.SFX_ENABLED) !== 'false';
  } catch (e) {
    console.error('Failed to load state', e);
  }
}

function saveGachaState() {
  localStorage.setItem(getProfileKey(STORAGE_KEYS.GACHA_POINTS), String(state.gachaPoints));
  localStorage.setItem(getProfileKey(STORAGE_KEYS.SILVER_TICKETS), String(state.silverTickets));
  localStorage.setItem(getProfileKey(STORAGE_KEYS.SSR_TICKETS), String(state.ssrTickets));
  localStorage.setItem(getProfileKey(STORAGE_KEYS.PLAYER_EXP), String(state.playerExp));
  localStorage.setItem(getProfileKey(STORAGE_KEYS.PLAYER_LEVEL), String(state.playerLevel));
  localStorage.setItem(STORAGE_KEYS.BGM_ENABLED, String(state.bgmEnabled));
  localStorage.setItem(STORAGE_KEYS.SFX_ENABLED, String(state.sfxEnabled));
}

function getState() {
  return state;
}

function saveProgress(geoId, masteryLevel) {
  state.progress[geoId] = {
    geoId,
    masteryLevel,
    lastClearedAt: Date.now()
  };
  localStorage.setItem(getProfileKey(STORAGE_KEYS.PROGRESS), JSON.stringify(state.progress));
  // クラウド同期
  if (window.geoFirebase) window.geoFirebase.syncProgressToCloud(geoId, masteryLevel);
}

function logMistake(geoId, tappedDummy) {
  state.mistakes.push({
    geoId,
    tappedDummy,
    timestamp: Date.now()
  });
  localStorage.setItem(getProfileKey(STORAGE_KEYS.MISTAKES), JSON.stringify(state.mistakes));
  // クラウド同期
  if (window.geoFirebase) window.geoFirebase.syncMistakeToCloud(geoId, tappedDummy);
}

function addCard(cardId) {
  const current = state.cards[cardId];
  if (current) {
    // 限界突破: レベルを上げる（最大5）
    if (!current.level) current.level = 1;
    if (current.level < 5) {
      current.level += 1;
      console.log(`Limit Break! ${cardId} is now Level ${current.level}`);
    }
    current.quantity += 1;
  } else {
    state.cards[cardId] = { cardId, quantity: 1, level: 1 };
  }
  localStorage.setItem(getProfileKey(STORAGE_KEYS.CARDS), JSON.stringify(state.cards));
  // クラウド同期
  if (window.geoFirebase) window.geoFirebase.syncCardToCloud(cardId, state.cards[cardId].level, state.cards[cardId].quantity);
}

function persistAllState() {
  saveGachaState();
  localStorage.setItem(getProfileKey(STORAGE_KEYS.PROGRESS), JSON.stringify(state.progress));
  localStorage.setItem(getProfileKey(STORAGE_KEYS.CARDS), JSON.stringify(state.cards));
  localStorage.setItem(getProfileKey(STORAGE_KEYS.MISTAKES), JSON.stringify(state.mistakes));
}

// --- progression.js ---
function addExp(amount) {
  state.playerExp += amount;
  const nextLevelExp = state.playerLevel * 1000;

  if (state.playerExp >= nextLevelExp) {
    state.playerLevel++;
    state.playerExp -= nextLevelExp;
    showLevelUpNotification(state.playerLevel);
  }
  saveGachaState();
  updateProgressionUI();

  // クラウド同期
  if (window.geoFirebase) {
    window.geoFirebase.syncStatsToCloud(state.playerLevel, state.playerExp);
  }
}

function stopAllBGM() {
  if (bgm.menu) bgm.menu.stop();
  if (bgm.category) bgm.category.stop();
  if (bgm.others) bgm.others.stop();
  if (bgm.boss) bgm.boss.stop();
  if (bgm.bossTracks) bgm.bossTracks.forEach(t => t.stop());
  if (bgm.normalTracks) bgm.normalTracks.forEach(t => t.stop());
  if (bgm.current) bgm.current.stop();
  bgm.current = null;
}

function playBGM(type) {
  let target = null;
  if (type === 'boss') {
    if (bgm.bossTracks && bgm.bossTracks.length > 0) {
      const idx = Math.floor(Math.random() * bgm.bossTracks.length);
      target = bgm.bossTracks[idx];
    } else {
      target = bgm.boss;
    }
  } else if (type === 'normal') {
    if (bgm.current && bgm.normalTracks.includes(bgm.current) && bgm.current.playing()) return;
    const idx = Math.floor(Math.random() * bgm.normalTracks.length);
    target = bgm.normalTracks[idx];
  } else if (type === 'menu') {
    target = bgm.menu;
  } else if (type === 'category') {
    target = bgm.category;
  } else if (type === 'others') {
    target = bgm.others;
  }

  if (!target) return;

  // Stop everything else before playing the new target
  if (bgm.current !== target || !target.playing()) {
    stopAllBGM();
    bgm.current = target;
    if (state.bgmEnabled) {
      bgm.current.play();
    }
  }
}

function stopBGM() {
  if (bgm.current) bgm.current.stop();
  bgm.current = null;
}

function updateAudioToggles() {
  const bgmBtns = document.querySelectorAll('.toggle-bgm');
  const bgmKnobs = document.querySelectorAll('.toggle-bgm-knob');
  const sfxBtns = document.querySelectorAll('.toggle-sfx');
  const sfxKnobs = document.querySelectorAll('.toggle-sfx-knob');

  bgmBtns.forEach(btn => {
    if (state.bgmEnabled) {
      btn.classList.remove('bg-slate-700');
      btn.classList.add('bg-cyber-neonBlue/40', 'shadow-neon-blue');
    } else {
      btn.classList.add('bg-slate-700');
      btn.classList.remove('bg-cyber-neonBlue/40', 'shadow-neon-blue');
    }
  });
  
  bgmKnobs.forEach(knob => {
    if (state.bgmEnabled) {
      knob.classList.remove('left-0.5', 'bg-slate-400');
      knob.classList.add('right-0.5', 'bg-cyber-neonBlue');
    } else {
      knob.classList.add('left-0.5', 'bg-slate-400');
      knob.classList.remove('right-0.5', 'bg-cyber-neonBlue');
    }
  });

  sfxBtns.forEach(btn => {
    if (state.sfxEnabled) {
      btn.classList.remove('bg-slate-700');
      btn.classList.add('bg-cyber-neonBlue/40', 'shadow-neon-blue');
    } else {
      btn.classList.add('bg-slate-700');
      btn.classList.remove('bg-cyber-neonBlue/40', 'shadow-neon-blue');
    }
  });
  
  sfxKnobs.forEach(knob => {
    if (state.sfxEnabled) {
      knob.classList.remove('left-0.5', 'bg-slate-400');
      knob.classList.add('right-0.5', 'bg-cyber-neonBlue');
    } else {
      knob.classList.add('left-0.5', 'bg-slate-400');
      knob.classList.remove('right-0.5', 'bg-cyber-neonBlue');
    }
  });
}

function getPlayerTitle(level) {
  if (level >= 50) return "地理の覇者";
  if (level >= 40) return "日本地図の達人";
  if (level >= 30) return "地理の専門家";
  if (level >= 20) return "地理の探究者";
  if (level >= 10) return "見習い案内人";
  return "新米旅行者";
}

function updateProgressionUI() {
  const levelEl = document.getElementById('player-level');
  const xpCurrentEl = document.getElementById('player-xp-current');
  const xpNextEl = document.getElementById('player-xp-next');
  const xpBarEl = document.getElementById('player-xp-bar');
  const titleEl = document.getElementById('player-title');

  if (levelEl) levelEl.innerText = `LEVEL ${state.playerLevel}`;
  const headerLevelEl = document.getElementById('player-level-header');
  if (headerLevelEl) headerLevelEl.innerText = state.playerLevel;
  if (xpCurrentEl) xpCurrentEl.innerText = state.playerExp;
  
  const nextLevelExp = state.playerLevel * 1000;
  if (xpNextEl) xpNextEl.innerText = nextLevelExp;
  
  if (xpBarEl) {
    const percent = (state.playerExp / nextLevelExp) * 100;
    xpBarEl.style.width = `${percent}%`;
  }
  
  if (titleEl) titleEl.innerText = `称号: ${getPlayerTitle(state.playerLevel)}`;
}

function showLevelUpNotification(level) {
  const toast = document.createElement('div');
  toast.className = 'fixed top-24 left-1/2 -translate-x-1/2 z-[200] bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(255,215,0,0.5)] border-2 border-white/20 animate-bounce';
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-2xl">UP!</span>
      <div>
        <div class="text-[10px] opacity-80 uppercase tracking-widest font-orbitron">Level Up</div>
        <div class="text-xl font-orbitron">LEVEL ${level} REACHED</div>
      </div>
    </div>
  `;
  document.body.appendChild(toast);
  if (sounds.unlock && state.sfxEnabled) sounds.unlock.play();
  setTimeout(() => toast.remove(), 4000);
}

// --- ui.js ---
const geoToPrefecture = {
  "hokkaido_region": ["Hokkai Do"],
  "west_japan": ["Osaka Fu", "Hyogo Ken", "Kyoto Fu", "Nara Ken", "Wakayama Ken"],
  "kyushu": ["Fukuoka Ken", "Saga Ken", "Nagasaki Ken", "Kumamoto Ken", "Oita Ken", "Miyazaki Ken", "Kagoshima Ken"],
  "lake_biwa": ["Shiga Ken"],
  "lake_suwa": ["Nagano Ken"],
  "lake_shinji": ["Shimane Ken"],
  "lake_akan": ["Hokkai Do"],
  "lake_inawashiro": ["Fukushima Ken"],
  "lake_nakaumi": ["Shimane Ken", "Tottori Ken"],
  "lake_saroma": ["Hokkai Do"],
  "lake_shikotsu": ["Hokkai Do"],
  "lake_ikeda": ["Kagoshima Ken"],
  "lake_kussharo": ["Hokkai Do"],
  "lake_mashu": ["Hokkai Do"],
  "lake_chuzenji": ["Tochigi Ken"],
  "lake_hamana": ["Shizuoka Ken"],
  "lake_kasumigaura": ["Ibaraki Ken"],
  "lake_toyako": ["Hokkai Do"],
  "lake_towadako": ["Aomori Ken", "Akita Ken"],
  "lake_tazawako": ["Akita Ken"],
  "plain_kanto": ["Tokyo To", "Kanagawa Ken", "Saitama Ken", "Chiba Ken", "Ibaraki Ken", "Tochigi Ken", "Gunma Ken"],
  "plain_ishikari": ["Hokkai Do"],
  "plain_tokachi": ["Hokkai Do"],
  "plain_tsugaru": ["Aomori Ken"],
  "plain_akita": ["Akita Ken"],
  "plain_sendai": ["Miyagi Ken"],
  "plain_shonai": ["Yamagata Ken"],
  "plain_echigo": ["Niigata Ken"],
  "plain_toyama": ["Toyama Ken"],
  "plain_noubi": ["Gifu Ken", "Aichi Ken", "Mie Ken"],
  "plain_osaka": ["Osaka Fu", "Hyogo Ken"],
  "plain_okayama": ["Okayama Ken"],
  "plain_sanuki": ["Kagawa Ken"],
  "plain_kochi": ["Kochi Ken"],
  "plain_tokushima": ["Tokushima Ken"],
  "plain_chikushi": ["Fukuoka Ken", "Saga Ken"],
  "plain_kumamoto": ["Kumamoto Ken"],
  "plain_yatsushiro": ["Kumamoto Ken"],
  "plain_miyazaki": ["Miyazaki Ken"],
  "river_mogami": ["Yamagata Ken"],
  "basin_kofu": ["Yamanashi Ken"],
  "basin_kyoto": ["Kyoto Fu"],
  "basin_nara": ["Nara Ken"],
  "basin_nagano": ["Nagano Ken"],
  "basin_kamikawa": ["Hokkai Do"],
  "basin_yonezawa": ["Yamagata Ken"],
  "basin_yamagata": ["Yamagata Ken"],
  "basin_aizu": ["Fukushima Ken"],
  "basin_suwa": ["Nagano Ken"],
  "basin_matsumoto": ["Nagano Ken"],
  "basin_omi": ["Shiga Ken"],
  "basin_tsuyama": ["Okayama Ken"],
  "basin_miyoshi": ["Hiroshima Ken"],
  "peninsula_shima": ["Mie Ken"],
  "peninsula_kii": ["Wakayama Ken", "Mie Ken", "Nara Ken"],
  "peninsula_shimabara": ["Nagasaki Ken"],
  "peninsula_shiretoko": ["Hokkai Do"],
  "peninsula_shakotan": ["Hokkai Do"],
  "peninsula_oshika": ["Miyagi Ken"],
  "peninsula_tsugaru": ["Aomori Ken"],
  "peninsula_shimokita": ["Aomori Ken"],
  "peninsula_noto": ["Ishikawa Ken"],
  "peninsula_izu": ["Shizuoka Ken"],
  "peninsula_miura": ["Kanagawa Ken"],
  "peninsula_atsumi": ["Aichi Ken"],
  "peninsula_chita": ["Aichi Ken"],
  "peninsula_sadamisaki": ["Ehime Ken"],
  "peninsula_takanawa": ["Ehime Ken"],
  "peninsula_kunisaki": ["Oita Ken"],
  "peninsula_osumi": ["Kagoshima Ken"],
  "peninsula_satsuma": ["Kagoshima Ken"],
  "bay_wakasa": ["Fukui Ken", "Kyoto Fu"],
  "bay_mutsu": ["Aomori Ken"],
  "bay_tokyo": ["Tokyo To", "Chiba Ken", "Kanagawa Ken"],
  "bay_sagami": ["Kanagawa Ken"],
  "bay_suruga": ["Shizuoka Ken"],
  "bay_ise": ["Aichi Ken", "Mie Ken"],
  "bay_osaka": ["Osaka Fu", "Hyogo Ken"],
  "bay_kojima": ["Okayama Ken"],
  "bay_hakata": ["Fukuoka Ken"],
  "bay_beppu": ["Oita Ken"],
  "bay_kagoshima": ["Kagoshima Ken"],
  "bay_ariake": ["Fukuoka Ken", "Saga Ken", "Nagasaki Ken", "Kumamoto Ken"],
  "plateau_shirasu": ["Kagoshima Ken", "Miyazaki Ken"],
  "plateau_konsen": ["Hokkai Do"],
  "plateau_maki-no-hara": ["Shizuoka Ken"],
  "plateau_musashino": ["Tokyo To", "Saitama Ken"],
  "range_abukuma": ["Fukushima Ken", "Ibaraki Ken"],
  "range_kitami": ["Hokkai Do"],
  "range_teshio": ["Hokkai Do"],
  "range_yubari": ["Hokkai Do"],
  "range_hidaka": ["Hokkai Do"],
  "range_shirakami": ["Aomori Ken", "Akita Ken"],
  "range_kanto": ["Gunma Ken", "Saitama Ken", "Tokyo To", "Kanagawa Ken", "Yamanashi Ken", "Nagano Ken"],
  "range_kii": ["Wakayama Ken", "Nara Ken", "Mie Ken"],
  "range_tsukushi": ["Fukuoka Ken"],
  "range_suzuka": ["Shiga Ken", "Mie Ken", "Gifu Ken"],
  "range_tanba": ["Kyoto Fu", "Hyogo Ken"],
  "park_shiretoko": ["Hokkai Do"],
  "park_daisetsuzan": ["Hokkai Do"],
  "park_sanrikufukko": ["Aomori Ken", "Iwate Ken", "Miyagi Ken"],
  "park_nikko": ["Tochigi Ken", "Gunma Ken", "Fukushima Ken"],
  "park_setonaikai": ["Hyogo Ken", "Okayama Ken", "Hiroshima Ken", "Yamaguchi Ken", "Tokushima Ken", "Kagawa Ken", "Ehime Ken", "Fukuoka Ken", "Oita Ken"],
  "island_sadogashima": ["Niigata Ken"],
  "island_awajishima": ["Hyogo Ken"],
  "island_shodoshima": ["Kagawa Ken"],
  "island_yakushima": ["Kagoshima Ken"],
  "island_tsushima": ["Nagasaki Ken"],
  "island_iki": ["Nagasaki Ken"],
  "island_goto": ["Nagasaki Ken"],
  "strait_soya": ["Hokkai Do"],
  "strait_tsugaru": ["Hokkai Do", "Aomori Ken"],
  "strait_naruto": ["Hyogo Ken", "Tokushima Ken"],
  "strait_kanmon": ["Yamaguchi Ken", "Fukuoka Ken"],
  "cape_soya": ["Hokkai Do"],
  "cape_erimo": ["Hokkai Do"],
  "cape_shirakami": ["Hokkai Do"],
  "cape_tappi": ["Aomori Ken"],
  "cape_shio-no-misaki": ["Wakayama Ken"],
  "cape_ashizuri": ["Kochi Ken"],
  "cape_muroto": ["Kochi Ken"],
  "cape_sata": ["Kagoshima Ken"]
};

// \u5ddd\u3084\u5c71\u8108\u306a\u3069\u306e\u30ab\u30b3\u30bf\u30e0\u5730\u5f62\u30c7\u30fc\u30bf (GeoJSON LineString)
const customLandmarks = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { id: "river_ishikarigawa", type: "river" },
      geometry: { type: "LineString", coordinates: [[142.3, 43.7], [141.5, 43.2], [141.4, 43.3]] }
    },
    {
      type: "Feature",
      properties: { id: "river_kitakamigawa", type: "river" },
      geometry: { type: "LineString", coordinates: [[141.2, 39.8], [141.1, 39.3], [141.3, 38.4]] }
    },
    {
      type: "Feature",
      properties: { id: "river_shinano", type: "river" },
      geometry: { type: "LineString", coordinates: [[138.4, 35.9], [138.8, 37.3], [139.1, 37.9]] }
    },
    {
      type: "Feature",
      properties: { id: "river_tone", type: "river" },
      geometry: { type: "LineString", coordinates: [[138.8, 36.8], [139.3, 36.2], [140.0, 35.8], [140.8, 35.7]] }
    },
    {
      type: "Feature",
      properties: { id: "river_yodogawa", type: "river" },
      geometry: { type: "LineString", coordinates: [[135.9, 34.9], [135.6, 34.8], [135.4, 34.6]] }
    },
    {
      type: "Feature",
      properties: { id: "river_chikugogawa", type: "river" },
      geometry: { type: "LineString", coordinates: [[131.0, 33.3], [130.4, 33.3], [130.3, 33.1]] }
    },
    {
      type: "Feature",
      properties: { id: "river_shimantogawa", type: "river" },
      geometry: { type: "LineString", coordinates: [[133.0, 33.5], [132.8, 33.0], [132.9, 32.9]] }
    },
    {
      type: "Feature",
      properties: { id: "range_hida", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[137.6, 36.2], [137.7, 36.5], [137.6, 36.8]] }
    },
    {
      type: "Feature",
      properties: { id: "range_ou", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[140.8, 37.5], [141.0, 38.5], [140.9, 39.5], [140.8, 40.8]] }
    },
    {
      type: "Feature",
      properties: { id: "range_kiso", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[137.7, 35.6], [137.8, 36.0]] }
    },
    {
      type: "Feature",
      properties: { id: "range_akaishi", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[138.1, 35.2], [138.2, 35.7]] }
    },
    {
      type: "Feature",
      properties: { id: "range_echigo", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[139.0, 36.8], [139.2, 37.2]] }
    },
    {
      type: "Feature",
      properties: { id: "range_chugoku", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[132.5, 34.5], [133.5, 35.0], [134.5, 35.2]] }
    },
    {
      type: "Feature",
      properties: { id: "range_shikoku", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[133.0, 33.7], [134.0, 33.8]] }
    },
    {
      type: "Feature",
      properties: { id: "range_kyushu", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[130.8, 32.2], [131.2, 33.0]] }
    },
    {
      type: "Feature",
      properties: { id: "range_kitakami", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[141.4, 39.0], [141.6, 40.0]] }
    },
    {
      type: "Feature",
      properties: { id: "range_dewa", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[140.0, 38.2], [140.2, 39.0]] }
    },
    {
      type: "Feature",
      properties: { id: "range_kitami", type: "point" },
      geometry: { type: "Point", coordinates: [143.0, 44.4] }
    },
    {
      type: "Feature",
      properties: { id: "range_teshio", type: "point" },
      geometry: { type: "Point", coordinates: [142.0, 44.6] }
    },
    {
      type: "Feature",
      properties: { id: "range_yubari", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[142.1, 42.8], [142.3, 43.4]] }
    },
    {
      type: "Feature",
      properties: { id: "range_hidaka", type: "mountain" },
      geometry: { type: "LineString", coordinates: [[142.6, 42.0], [143.0, 43.0]] }
    },
    {
      type: "Feature",
      properties: { id: "park_shiretoko", type: "point" },
      geometry: { type: "Point", coordinates: [145.1, 44.1] }
    },
    {
      type: "Feature",
      properties: { id: "park_daisetsuzan", type: "point" },
      geometry: { type: "Point", coordinates: [142.8, 43.6] }
    },
    {
      type: "Feature",
      properties: { id: "park_nikko", type: "point" },
      geometry: { type: "Point", coordinates: [139.5, 36.9] }
    },
    {
      type: "Feature",
      properties: { id: "park_fuji_hakone", type: "point" },
      geometry: { type: "Point", coordinates: [138.8, 35.1] }
    },
    {
      type: "Feature",
      properties: { id: "park_setonaikai", type: "point" },
      geometry: { type: "Point", coordinates: [133.5, 34.3] }
    },
    {
      type: "Feature",
      properties: { id: "park_aso_kuju", type: "point" },
      geometry: { type: "Point", coordinates: [131.2, 33.1] }
    },
    {
      type: "Feature",
      properties: { id: "park_ais_shima", type: "point" },
      geometry: { type: "Point", coordinates: [136.8, 34.4] }
    },
    {
      type: "Feature",
      properties: { id: "park_akan_mashu", type: "point" },
      geometry: { type: "Point", coordinates: [144.2, 43.5] }
    },
    {
      type: "Feature",
      properties: { id: "park_shikotsu_toya", type: "point" },
      geometry: { type: "Point", coordinates: [141.1, 42.6] }
    },
    {
      type: "Feature",
      properties: { id: "park_amami", type: "point" },
      geometry: { type: "Point", coordinates: [129.3, 28.2] }
    },
    {
      type: "Feature",
      properties: { id: "park_towada_hachimantai", type: "point" },
      geometry: { type: "Point", coordinates: [140.9, 40.5] }
    },
    {
      type: "Feature",
      properties: { id: "park_bandai_asahi", type: "point" },
      geometry: { type: "Point", coordinates: [139.9, 37.8] }
    },
    {
      type: "Feature",
      properties: { id: "park_chubu_sangaku", type: "point" },
      geometry: { type: "Point", coordinates: [137.6, 36.4] }
    },
    {
      type: "Feature",
      properties: { id: "park_yoshino_kumano", type: "point" },
      geometry: { type: "Point", coordinates: [135.9, 34.0] }
    },
    {
      type: "Feature",
      properties: { id: "park_daisen_oki", type: "point" },
      geometry: { type: "Point", coordinates: [133.4, 35.4] }
    },
    {
      type: "Feature",
      properties: { id: "park_kirishima_kinkowan", type: "point" },
      geometry: { type: "Point", coordinates: [130.8, 31.8] }
    },
    {
      type: "Feature",
      properties: { id: "park_yakushima", type: "point" },
      geometry: { type: "Point", coordinates: [130.5, 30.3] }
    },
    {
      type: "Feature",
      properties: { id: "peak_fuji", type: "point" },
      geometry: { type: "Point", coordinates: [138.73, 35.36] }
    },
    {
      type: "Feature",
      properties: { id: "peak_daisetsuzan", type: "point" },
      geometry: { type: "Point", coordinates: [142.85, 43.66] }
    },
    {
      type: "Feature",
      properties: { id: "peak_yoteizan", type: "point" },
      geometry: { type: "Point", coordinates: [140.81, 42.90] }
    },
    {
      type: "Feature",
      properties: { id: "peak_usuzan", type: "point" },
      geometry: { type: "Point", coordinates: [140.84, 42.54] }
    },
    {
      type: "Feature",
      properties: { id: "peak_iwakisan", type: "point" },
      geometry: { type: "Point", coordinates: [140.31, 40.65] }
    },
    {
      type: "Feature",
      properties: { id: "peak_chokaisan", type: "point" },
      geometry: { type: "Point", coordinates: [140.05, 39.10] }
    },
    {
      type: "Feature",
      properties: { id: "peak_bandaisan", type: "point" },
      geometry: { type: "Point", coordinates: [140.08, 37.60] }
    },
    {
      type: "Feature",
      properties: { id: "peak_hakusan", type: "point" },
      geometry: { type: "Point", coordinates: [136.77, 36.15] }
    },
    {
      type: "Feature",
      properties: { id: "peak_asamanoyama", type: "point" },
      geometry: { type: "Point", coordinates: [138.52, 36.40] }
    },
    {
      type: "Feature",
      properties: { id: "peak_yatsugatake", type: "point" },
      geometry: { type: "Point", coordinates: [138.30, 35.97] }
    },
    {
      type: "Feature",
      properties: { id: "peak_ontake-san", type: "point" },
      geometry: { type: "Point", coordinates: [137.48, 35.89] }
    },
    {
      type: "Feature",
      properties: { id: "peak_miharayama", type: "point" },
      geometry: { type: "Point", coordinates: [139.40, 34.72] }
    },
    {
      type: "Feature",
      properties: { id: "peak_daisen", type: "point" },
      geometry: { type: "Point", coordinates: [133.54, 35.37] }
    },
    {
      type: "Feature",
      properties: { id: "peak_ishizuchisan", type: "point" },
      geometry: { type: "Point", coordinates: [133.12, 33.77] }
    },
    {
      type: "Feature",
      properties: { id: "peak_asosan", type: "point" },
      geometry: { type: "Point", coordinates: [131.10, 32.88] }
    },
    {
      type: "Feature",
      properties: { id: "peak_sakurajima", type: "point" },
      geometry: { type: "Point", coordinates: [130.65, 31.59] }
    },
    {
      type: "Feature",
      properties: { id: "peak_kaimondake", type: "point" },
      geometry: { type: "Point", coordinates: [130.53, 31.18] }
    },
    {
      type: "Feature",
      properties: { id: "peak_unzendake", type: "point" },
      geometry: { type: "Point", coordinates: [130.29, 32.76] }
    },
    {
      type: "Feature",
      properties: { id: "lake_toyako", type: "point" },
      geometry: { type: "Point", coordinates: [140.85, 42.59] }
    },
    {
      type: "Feature",
      properties: { id: "lake_towadako", type: "point" },
      geometry: { type: "Point", coordinates: [140.88, 40.46] }
    },
    {
      type: "Feature",
      properties: { id: "lake_tazawako", type: "point" },
      geometry: { type: "Point", coordinates: [140.65, 39.73] }
    },
    {
      type: "Feature",
      properties: { id: "lake_suwa", type: "point" },
      geometry: { type: "Point", coordinates: [138.10, 36.05] }
    },
    {
      type: "Feature",
      properties: { id: "lake_kasumigaura", type: "point" },
      geometry: { type: "Point", coordinates: [140.4, 36.0] }
    },
    {
      type: "Feature",
      properties: { id: "lake_biwako", type: "point" },
      geometry: { type: "Point", coordinates: [136.0, 35.3] }
    },
    {
      type: "Feature",
      properties: { id: "cape_soya", type: "point" },
      geometry: { type: "Point", coordinates: [141.65, 45.52] }
    },
    {
      type: "Feature",
      properties: { id: "cape_erimo", type: "point" },
      geometry: { type: "Point", coordinates: [143.25, 41.93] }
    },
    {
      type: "Feature",
      properties: { id: "cape_shirakami", type: "point" },
      geometry: { type: "Point", coordinates: [140.0, 41.4] }
    },
    {
      type: "Feature",
      properties: { id: "cape_shio-no-misaki", type: "point" },
      geometry: { type: "Point", coordinates: [135.76, 33.43] }
    },
    {
      type: "Feature",
      properties: { id: "cape_ashizuri", type: "point" },
      geometry: { type: "Point", coordinates: [133.02, 32.72] }
    },
    {
      type: "Feature",
      properties: { id: "cape_muroto", type: "point" },
      geometry: { type: "Point", coordinates: [134.18, 33.25] }
    },
    {
      type: "Feature",
      properties: { id: "cape_sata", type: "point" },
      geometry: { type: "Point", coordinates: [130.66, 30.99] }
    },
    {
      type: "Feature",
      properties: { id: "strait_soya", type: "point" },
      geometry: { type: "Point", coordinates: [141.8, 45.7] }
    },
    {
      type: "Feature",
      properties: { id: "strait_tsugaru", type: "point" },
      geometry: { type: "Point", coordinates: [140.5, 41.3] }
    },
    {
      type: "Feature",
      properties: { id: "strait_naruto", type: "point" },
      geometry: { type: "Point", coordinates: [134.65, 34.23] }
    },
    {
      type: "Feature",
      properties: { id: "strait_kanmon", type: "point" },
      geometry: { type: "Point", coordinates: [130.95, 33.95] }
    },
    {
      type: "Feature",
      properties: { id: "plain_kanto", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[139.3, 35.5], [140.5, 35.5], [140.5, 36.5], [139.3, 36.5], [139.3, 35.5]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_ishikari", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[141.2, 42.9], [142.1, 42.9], [142.1, 43.5], [141.2, 43.5], [141.2, 42.9]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_noubi", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[136.5, 35.0], [137.0, 35.0], [137.0, 35.5], [136.5, 35.5], [136.5, 35.0]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_chikushi", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[130.3, 33.1], [130.7, 33.1], [130.7, 33.4], [130.3, 33.4], [130.3, 33.1]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_osaka", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[135.3, 34.5], [135.7, 34.5], [135.7, 34.8], [135.3, 34.8], [135.3, 34.5]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_echigo", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[138.8, 37.4], [139.3, 37.4], [139.3, 38.0], [138.8, 38.0], [138.8, 37.4]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_sendai", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[140.8, 38.0], [141.2, 38.0], [141.2, 38.5], [140.8, 38.5], [140.8, 38.0]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_miyazaki", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[131.3, 31.8], [131.6, 31.8], [131.6, 32.3], [131.3, 32.3], [131.3, 31.8]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_akita", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[140.0, 39.5], [140.3, 39.5], [140.3, 39.9], [140.0, 39.9], [140.0, 39.5]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_shonai", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[139.7, 38.7], [140.0, 38.7], [140.0, 39.1], [139.7, 39.1], [139.7, 38.7]]] }
    },
    {
      type: "Feature",
      properties: { id: "basin_kyoto", type: "point" },
      geometry: { type: "Point", coordinates: [135.7, 35.0] }
    },
    {
      type: "Feature",
      properties: { id: "basin_nara", type: "point" },
      geometry: { type: "Point", coordinates: [135.8, 34.6] }
    },
    {
      type: "Feature",
      properties: { id: "basin_kofu", type: "point" },
      geometry: { type: "Point", coordinates: [138.6, 35.6] }
    },
    {
      type: "Feature",
      properties: { id: "range_hidaka", type: "point" },
      geometry: { type: "Point", coordinates: [142.8, 42.5] }
    },
    {
      type: "Feature",
      properties: { id: "range_yubari", type: "point" },
      geometry: { type: "Point", coordinates: [142.2, 43.1] }
    },
    {
      type: "Feature",
      properties: { id: "basin_nagano", type: "point" },
      geometry: { type: "Point", coordinates: [138.2, 36.6] }
    },
    {
      type: "Feature",
      properties: { id: "basin_matsumoto", type: "point" },
      geometry: { type: "Point", coordinates: [137.9, 36.2] }
    },
    {
      type: "Feature",
      properties: { id: "basin_aizu", type: "point" },
      geometry: { type: "Point", coordinates: [139.9, 37.5] }
    },
    {
      type: "Feature",
      properties: { id: "basin_yamagata", type: "point" },
      geometry: { type: "Point", coordinates: [140.3, 38.3] }
    },
    {
      type: "Feature",
      properties: { id: "plain_toyama", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[137.0, 36.6], [137.4, 36.6], [137.4, 36.9], [137.0, 36.9], [137.0, 36.6]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_okayama", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[133.7, 34.5], [134.1, 34.5], [134.1, 34.8], [133.7, 34.8], [133.7, 34.5]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_sanuki", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[133.8, 34.2], [134.4, 34.2], [134.4, 34.5], [133.8, 34.5], [133.8, 34.2]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_kochi", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[133.4, 33.5], [133.8, 33.5], [133.8, 33.7], [133.4, 33.7], [133.4, 33.5]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_tokushima", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[134.4, 34.0], [134.8, 34.0], [134.8, 34.2], [134.4, 34.2], [134.4, 34.0]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_kumamoto", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[130.6, 32.7], [130.9, 32.7], [130.9, 33.0], [130.6, 33.0], [130.6, 32.7]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_yatsushiro", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[130.5, 32.4], [130.7, 32.4], [130.7, 32.6], [130.5, 32.6], [130.5, 32.4]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_tokachi", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[143.0, 42.6], [143.8, 42.6], [143.8, 43.2], [143.0, 43.2], [143.0, 42.6]]] }
    },
    {
      type: "Feature",
      properties: { id: "plain_tsugaru", type: "area" },
      geometry: { type: "Polygon", coordinates: [[[140.3, 40.6], [140.6, 40.6], [140.6, 41.0], [140.3, 41.0], [140.3, 40.6]]] }
    },
    {
      type: "Feature",
      properties: { id: "bay_tokyo", type: "point" },
      geometry: { type: "Point", coordinates: [139.8, 35.5] }
    },
    {
      type: "Feature",
      properties: { id: "bay_osaka", type: "point" },
      geometry: { type: "Point", coordinates: [135.3, 34.6] }
    },
    {
      type: "Feature",
      properties: { id: "basin_kamikawa", type: "point" },
      geometry: { type: "Point", coordinates: [142.4, 43.8] }
    },
    {
      type: "Feature",
      properties: { id: "lake_shinji", type: "point" },
      geometry: { type: "Point", coordinates: [133.0, 35.4] }
    },
    {
      type: "Feature",
      properties: { id: "lake_akan", type: "point" },
      geometry: { type: "Point", coordinates: [144.1, 43.4] }
    },
    {
      type: "Feature",
      properties: { id: "lake_tazawako", type: "point" },
      geometry: { type: "Point", coordinates: [140.66, 39.72] }
    },
    {
      type: "Feature",
      properties: { id: "lake_towadako", type: "point" },
      geometry: { type: "Point", coordinates: [140.9, 40.46] }
    },
    {
      type: "Feature",
      properties: { id: "lake_hamana", type: "point" },
      geometry: { type: "Point", coordinates: [137.6, 34.7] }
    },
    {
      type: "Feature",
      properties: { id: "lake_inawashiro", type: "point" },
      geometry: { type: "Point", coordinates: [140.1, 37.5] }
    },
    {
      type: "Feature",
      properties: { id: "lake_saroma", type: "point" },
      geometry: { type: "Point", coordinates: [143.8, 44.1] }
    },
    {
      type: "Feature",
      properties: { id: "lake_kussharo", type: "point" },
      geometry: { type: "Point", coordinates: [144.3, 43.6] }
    },
    {
      type: "Feature",
      properties: { id: "lake_mashu", type: "point" },
      geometry: { type: "Point", coordinates: [144.5, 43.5] }
    },
    {
      type: "Feature",
      properties: { id: "lake_shikotsu", type: "point" },
      geometry: { type: "Point", coordinates: [141.3, 42.7] }
    },
    {
      type: "Feature",
      properties: { id: "lake_nakaumi", type: "point" },
      geometry: { type: "Point", coordinates: [133.2, 35.5] }
    },
    {
      type: "Feature",
      properties: { id: "lake_biwa", type: "point" },
      geometry: { type: "Point", coordinates: [136.0, 35.3] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_shima", type: "point" },
      geometry: { type: "Point", coordinates: [136.8, 34.3] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_oshika", type: "point" },
      geometry: { type: "Point", coordinates: [141.5, 38.3] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_shimane", type: "point" },
      geometry: { type: "Point", coordinates: [133.0, 35.5] }
    },
    {
      type: "Feature",
      properties: { id: "cape_inuwasaki", type: "point" },
      geometry: { type: "Point", coordinates: [140.8, 35.7] }
    },
    {
      type: "Feature",
      properties: { id: "cape_shionomisaki", type: "point" },
      geometry: { type: "Point", coordinates: [135.7, 33.4] }
    },
    {
      type: "Feature",
      properties: { id: "river_tokachi", type: "point" },
      geometry: { type: "Point", coordinates: [143.3, 42.9] }
    },
    {
      type: "Feature",
      properties: { id: "river_teshio", type: "point" },
      geometry: { type: "Point", coordinates: [141.8, 44.9] }
    },
    {
      type: "Feature",
      properties: { id: "river_omono", type: "point" },
      geometry: { type: "Point", coordinates: [140.1, 39.7] }
    },
    {
      type: "Feature",
      properties: { id: "river_mogami", type: "point" },
      geometry: { type: "Point", coordinates: [139.8, 38.9] }
    },
    {
      type: "Feature",
      properties: { id: "river_agano", type: "point" },
      geometry: { type: "Point", coordinates: [139.1, 37.9] }
    },
    {
      type: "Feature",
      properties: { id: "river_arakawa", type: "point" },
      geometry: { type: "Point", coordinates: [139.8, 35.6] }
    },
    {
      type: "Feature",
      properties: { id: "river_tamagawa", type: "point" },
      geometry: { type: "Point", coordinates: [139.7, 35.5] }
    },
    {
      type: "Feature",
      properties: { id: "river_fuji", type: "point" },
      geometry: { type: "Point", coordinates: [138.6, 35.1] }
    },
    {
      type: "Feature",
      properties: { id: "river_tenryu", type: "point" },
      geometry: { type: "Point", coordinates: [137.8, 34.6] }
    },
    {
      type: "Feature",
      properties: { id: "river_oi", type: "point" },
      geometry: { type: "Point", coordinates: [138.2, 34.8] }
    },
    {
      type: "Feature",
      properties: { id: "river_jintsu", type: "point" },
      geometry: { type: "Point", coordinates: [137.2, 36.7] }
    },
    {
      type: "Feature",
      properties: { id: "river_joganji", type: "point" },
      geometry: { type: "Point", coordinates: [137.2, 36.7] }
    },
    {
      type: "Feature",
      properties: { id: "river_kinokawa", type: "point" },
      geometry: { type: "Point", coordinates: [135.1, 34.2] }
    },
    {
      type: "Feature",
      properties: { id: "river_kumano", type: "point" },
      geometry: { type: "Point", coordinates: [136.0, 33.7] }
    },
    {
      type: "Feature",
      properties: { id: "river_gonogawa", type: "point" },
      geometry: { type: "Point", coordinates: [132.4, 35.0] }
    },
    {
      type: "Feature",
      properties: { id: "river_yoshinogawa", type: "point" },
      geometry: { type: "Point", coordinates: [134.6, 34.1] }
    },
    {
      type: "Feature",
      properties: { id: "river_kumagawa", type: "point" },
      geometry: { type: "Point", coordinates: [130.5, 32.5] }
    },
    {
      type: "Feature",
      properties: { id: "river_oyodogawa", type: "point" },
      geometry: { type: "Point", coordinates: [131.4, 31.9] }
    },
    {
      type: "Feature",
      properties: { id: "basin_omi", type: "point" },
      geometry: { type: "Point", coordinates: [136.2, 35.3] }
    },
    {
      type: "Feature",
      properties: { id: "basin_shinjo", type: "point" },
      geometry: { type: "Point", coordinates: [140.2, 38.8] }
    },
    {
      type: "Feature",
      properties: { id: "basin_yokote", type: "point" },
      geometry: { type: "Point", coordinates: [140.5, 39.3] }
    },
    {
      type: "Feature",
      properties: { id: "basin_yonezawa", type: "point" },
      geometry: { type: "Point", coordinates: [140.1, 37.9] }
    },
    {
      type: "Feature",
      properties: { id: "bay_funka", type: "point" },
      geometry: { type: "Point", coordinates: [140.6, 42.3] }
    },
    {
      type: "Feature",
      properties: { id: "bay_hiroshima", type: "point" },
      geometry: { type: "Point", coordinates: [132.4, 34.3] }
    },
    {
      type: "Feature",
      properties: { id: "bay_ise", type: "point" },
      geometry: { type: "Point", coordinates: [136.7, 34.8] }
    },
    {
      type: "Feature",
      properties: { id: "bay_kagoshima", type: "point" },
      geometry: { type: "Point", coordinates: [130.6, 31.5] }
    },
    {
      type: "Feature",
      properties: { id: "bay_mikawa", type: "point" },
      geometry: { type: "Point", coordinates: [137.1, 34.7] }
    },
    {
      type: "Feature",
      properties: { id: "bay_mutsu", type: "point" },
      geometry: { type: "Point", coordinates: [140.9, 41.1] }
    },
    {
      type: "Feature",
      properties: { id: "bay_omura", type: "point" },
      geometry: { type: "Point", coordinates: [129.9, 32.9] }
    },
    {
      type: "Feature",
      properties: { id: "bay_sagami", type: "point" },
      geometry: { type: "Point", coordinates: [139.3, 35.2] }
    },
    {
      type: "Feature",
      properties: { id: "bay_sendai", type: "point" },
      geometry: { type: "Point", coordinates: [141.0, 38.2] }
    },
    {
      type: "Feature",
      properties: { id: "bay_suruga", type: "point" },
      geometry: { type: "Point", coordinates: [138.6, 34.9] }
    },
    {
      type: "Feature",
      properties: { id: "bay_tosa", type: "point" },
      geometry: { type: "Point", coordinates: [133.5, 33.4] }
    },
    {
      type: "Feature",
      properties: { id: "bay_toyama", type: "point" },
      geometry: { type: "Point", coordinates: [137.2, 36.8] }
    },
    {
      type: "Feature",
      properties: { id: "bay_wakasa", type: "point" },
      geometry: { type: "Point", coordinates: [135.6, 35.5] }
    },
    {
      type: "Feature",
      properties: { id: "channel_bungosuido", type: "point" },
      geometry: { type: "Point", coordinates: [132.3, 33.0] }
    },
    {
      type: "Feature",
      properties: { id: "channel_kiisuido", type: "point" },
      geometry: { type: "Point", coordinates: [134.9, 34.0] }
    },
    {
      type: "Feature",
      properties: { id: "coast_sanriku", type: "point" },
      geometry: { type: "Point", coordinates: [141.6, 39.5] }
    },
    {
      type: "Feature",
      properties: { id: "highland_kitakami", type: "point" },
      geometry: { type: "Point", coordinates: [141.3, 39.5] }
    },
    {
      type: "Feature",
      properties: { id: "island_amami", type: "point" },
      geometry: { type: "Point", coordinates: [129.5, 28.3] }
    },
    {
      type: "Feature",
      properties: { id: "island_etorofu", type: "point" },
      geometry: { type: "Point", coordinates: [148.0, 45.0] }
    },
    {
      type: "Feature",
      properties: { id: "island_habomai", type: "point" },
      geometry: { type: "Point", coordinates: [145.8, 43.4] }
    },
    {
      type: "Feature",
      properties: { id: "island_iki", type: "point" },
      geometry: { type: "Point", coordinates: [129.7, 33.8] }
    },
    {
      type: "Feature",
      properties: { id: "island_ishigaki", type: "point" },
      geometry: { type: "Point", coordinates: [124.2, 24.4] }
    },
    {
      type: "Feature",
      properties: { id: "island_kunashiri", type: "point" },
      geometry: { type: "Point", coordinates: [145.9, 44.0] }
    },
    {
      type: "Feature",
      properties: { id: "island_miyako", type: "point" },
      geometry: { type: "Point", coordinates: [125.3, 24.8] }
    },
    {
      type: "Feature",
      properties: { id: "island_okinawa", type: "point" },
      geometry: { type: "Point", coordinates: [127.9, 26.5] }
    },
    {
      type: "Feature",
      properties: { id: "island_okushiri", type: "point" },
      geometry: { type: "Point", coordinates: [139.5, 42.1] }
    },
    {
      type: "Feature",
      properties: { id: "island_rebun", type: "point" },
      geometry: { type: "Point", coordinates: [141.0, 45.4] }
    },
    {
      type: "Feature",
      properties: { id: "island_rishiri", type: "point" },
      geometry: { type: "Point", coordinates: [141.2, 45.2] }
    },
    {
      type: "Feature",
      properties: { id: "island_sado", type: "point" },
      geometry: { type: "Point", coordinates: [138.4, 38.0] }
    },
    {
      type: "Feature",
      properties: { id: "island_shikotan", type: "point" },
      geometry: { type: "Point", coordinates: [146.8, 43.8] }
    },
    {
      type: "Feature",
      properties: { id: "island_shodoshima", type: "point" },
      geometry: { type: "Point", coordinates: [134.3, 34.5] }
    },
    {
      type: "Feature",
      properties: { id: "island_tanegashima", type: "point" },
      geometry: { type: "Point", coordinates: [130.9, 30.6] }
    },
    {
      type: "Feature",
      properties: { id: "island_tsushima", type: "point" },
      geometry: { type: "Point", coordinates: [129.3, 34.4] }
    },
    {
      type: "Feature",
      properties: { id: "island_yakushima", type: "point" },
      geometry: { type: "Point", coordinates: [130.5, 30.3] }
    },
    {
      type: "Feature",
      properties: { id: "islands_goto", type: "point" },
      geometry: { type: "Point", coordinates: [128.8, 32.7] }
    },
    {
      type: "Feature",
      properties: { id: "islands_oki", type: "point" },
      geometry: { type: "Point", coordinates: [133.2, 36.1] }
    },
    {
      type: "Feature",
      properties: { id: "lake_chuzenji", type: "point" },
      geometry: { type: "Point", coordinates: [139.4, 36.7] }
    },
    {
      type: "Feature",
      properties: { id: "lake_ikeda", type: "point" },
      geometry: { type: "Point", coordinates: [130.5, 31.2] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_atsumi", type: "point" },
      geometry: { type: "Point", coordinates: [137.1, 34.6] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_boso", type: "point" },
      geometry: { type: "Point", coordinates: [140.1, 35.3] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_chita", type: "point" },
      geometry: { type: "Point", coordinates: [136.9, 34.9] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_izu", type: "point" },
      geometry: { type: "Point", coordinates: [138.9, 34.9] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_kii", type: "point" },
      geometry: { type: "Point", coordinates: [135.5, 34.1] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_kunisaki", type: "point" },
      geometry: { type: "Point", coordinates: [131.6, 33.6] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_miura", type: "point" },
      geometry: { type: "Point", coordinates: [139.6, 35.2] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_nemuro", type: "point" },
      geometry: { type: "Point", coordinates: [145.8, 43.3] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_noto", type: "point" },
      geometry: { type: "Point", coordinates: [137.0, 37.2] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_oga", type: "point" },
      geometry: { type: "Point", coordinates: [139.8, 39.9] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_oshima", type: "point" },
      geometry: { type: "Point", coordinates: [140.5, 42.0] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_osumi", type: "point" },
      geometry: { type: "Point", coordinates: [130.8, 31.3] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_sadamisaki", type: "point" },
      geometry: { type: "Point", coordinates: [132.2, 33.4] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_satsuma", type: "point" },
      geometry: { type: "Point", coordinates: [130.4, 31.4] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_shimabara", type: "point" },
      geometry: { type: "Point", coordinates: [130.3, 32.8] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_shimokita", type: "point" },
      geometry: { type: "Point", coordinates: [141.2, 41.3] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_shiretoko", type: "point" },
      geometry: { type: "Point", coordinates: [145.1, 44.1] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_tango", type: "point" },
      geometry: { type: "Point", coordinates: [135.2, 35.6] }
    },
    {
      type: "Feature",
      properties: { id: "peninsula_tsugaru", type: "point" },
      geometry: { type: "Point", coordinates: [140.4, 41.1] }
    },
    {
      type: "Feature",
      properties: { id: "plateau_kasanohara", type: "point" },
      geometry: { type: "Point", coordinates: [130.9, 31.4] }
    },
    {
      type: "Feature",
      properties: { id: "plateau_konsen", type: "point" },
      geometry: { type: "Point", coordinates: [144.8, 43.4] }
    },
    {
      type: "Feature",
      properties: { id: "plateau_makinohara", type: "point" },
      geometry: { type: "Point", coordinates: [138.2, 34.7] }
    },
    {
      type: "Feature",
      properties: { id: "plateau_musashino", type: "point" },
      geometry: { type: "Point", coordinates: [139.5, 35.7] }
    },
    {
      type: "Feature",
      properties: { id: "plateau_shimosu", type: "point" },
      geometry: { type: "Point", coordinates: [130.3, 32.1] }
    },
    {
      type: "Feature",
      properties: { id: "plateau_shirasu", type: "point" },
      geometry: { type: "Point", coordinates: [130.7, 31.7] }
    },
    {
      type: "Feature",
      properties: { id: "range_abukuma", type: "point" },
      geometry: { type: "Point", coordinates: [140.8, 37.3] }
    },
    {
      type: "Feature",
      properties: { id: "range_kanto", type: "point" },
      geometry: { type: "Point", coordinates: [138.8, 35.8] }
    },
    {
      type: "Feature",
      properties: { id: "range_kii", type: "point" },
      geometry: { type: "Point", coordinates: [135.8, 34.1] }
    },
    {
      type: "Feature",
      properties: { id: "range_shirakami", type: "point" },
      geometry: { type: "Point", coordinates: [140.2, 40.4] }
    },
    {
      type: "Feature",
      properties: { id: "range_suzuka", type: "point" },
      geometry: { type: "Point", coordinates: [136.4, 35.1] }
    },
    {
      type: "Feature",
      properties: { id: "range_tanba", type: "point" },
      geometry: { type: "Point", coordinates: [135.4, 35.3] }
    },
    {
      type: "Feature",
      properties: { id: "range_tsukushi", type: "point" },
      geometry: { type: "Point", coordinates: [130.7, 33.5] }
    },
    {
      type: "Feature",
      properties: { id: "river_abukuma", type: "point" },
      geometry: { type: "Point", coordinates: [140.7, 37.6] }
    },
    {
      type: "Feature",
      properties: { id: "river_kiso", type: "point" },
      geometry: { type: "Point", coordinates: [136.8, 35.3] }
    },
    {
      type: "Feature",
      properties: { id: "sea_ariake", type: "point" },
      geometry: { type: "Point", coordinates: [130.3, 33.0] }
    },
    {
      type: "Feature",
      properties: { id: "sea_yatsushiro", type: "point" },
      geometry: { type: "Point", coordinates: [130.4, 32.3] }
    },
    {
      type: "Feature",
      properties: { id: "park_sanrikufukko", type: "point" },
      geometry: { type: "Point", coordinates: [141.6, 39.5] }
    }

  ]
};

// Fix D3 geo path spherical winding polygon fill rendering bug
customLandmarks.features.forEach(f => {
  if (f.geometry && f.geometry.type === 'Polygon' && f.geometry.coordinates[0]) {
    f.geometry.type = 'LineString';
    f.geometry.coordinates = f.geometry.coordinates[0];
  }
});

const isLandmark = (geoId) => customLandmarks.features.some(f => f.properties.id === geoId);

// --- ui.js ---
function navigateTo(screenId) {
  document.querySelectorAll('.screen-view').forEach(el => {
    const targetId = `screen-${screenId}`;
    if (el.id === targetId) {
      // Restore the correct display mode
      el.classList.remove('hidden');
      el.classList.add('active');
      // Determine flex direction from static classes
      if (el.classList.contains('flex-col')) {
        el.style.display = 'flex';
        el.style.flexDirection = 'column';
      } else {
        el.style.display = 'flex';
        el.style.flexDirection = '';
      }
    } else {
      el.classList.remove('active');
      el.classList.add('hidden');
      el.style.display = '';
    }
  });

  const header = document.getElementById('global-header');
  if (header) {
    if (screenId === 'login') {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
      // In Boss Battle, hide Title and EXP to maximize map area
      if (screenId === 'boss') {
        header.classList.add('header-compact');
        const centerInfo = document.getElementById('header-center-info');
        const rightInfo = document.getElementById('header-right-info');
        const bossTitle = document.getElementById('header-boss-title');
        if (centerInfo) centerInfo.classList.add('hidden');
        if (rightInfo) rightInfo.classList.add('hidden');
        if (bossTitle) bossTitle.classList.remove('hidden');
      } else {
        header.classList.remove('header-compact');
        const centerInfo = document.getElementById('header-center-info');
        const rightInfo = document.getElementById('header-right-info');
        const bossTitle = document.getElementById('header-boss-title');
        if (centerInfo) centerInfo.classList.remove('hidden');
        if (rightInfo) rightInfo.classList.remove('hidden');
        if (bossTitle) bossTitle.classList.add('hidden');
      }
    }
  }

  // Screen-specific BGM transitions
  if (screenId === 'login') {
    stopAllBGM();
    bgm.current = null;
  } else if (screenId === 'home') {
    playBGM('menu');
  } else if (screenId === 'category') {
    playBGM('category');
  } else if (['survey', 'collection', 'ranking'].includes(screenId)) {
    playBGM('others');
  } else if (screenId === 'boss') {
    playBGM('boss');
  }
}

function updateProgressUI() {
  const state = getState();
  const ownedCardsCount = Object.keys(state.cards).length;
  const headerCount = document.getElementById('header-collection-count');
  if (headerCount) headerCount.innerText = `${ownedCardsCount}/${geographyMaster.length}`;

  const progressCount = Object.keys(state.progress).length;
  const totalGeo = geographyMaster.length;
  const pct = totalGeo > 0 ? Math.round((progressCount / totalGeo) * 100) : 0;

  const pctEl = document.getElementById('total-mastery-pct');
  const barEl = document.getElementById('total-mastery-bar');
  if (pctEl) pctEl.innerText = pct;
  if (barEl) barEl.style.width = pct + '%';

  const regionNames = {
    hokkaido: '北海道', tohoku: '東北', kanto: '関東', chubu: '中部',
    kinki: '近畿', chugoku: '中国', shikoku: '四国', kyushu: '九州'
  };

  let rHtml = '';
  Object.entries(regionNames).forEach(([key, name]) => {
    let c = 0; let t = 0;
    geographyMaster.forEach(g => {
      if (g.region === key) {
        t++;
        if (state.progress[g.geoId]) c++;
      }
    });
    const rp = t > 0 ? Math.round((c / t) * 100) : 0;
    rHtml += `
     <div class="flex items-center gap-2 w-full">
        <span class="w-10 shrink-0 mx-2">${name}</span>
        <div class="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700"><div class="h-full bg-cyan-400 rounded-full shadow-[0_0_5px_cyan]" style="width: ${rp}%"></div></div>
        <span class="w-8 shrink-0 text-right font-orbitron mr-2">${rp}%</span>
     </div>`;
  });

  const rGrid = document.getElementById('regional-progress-grid');
  if (rGrid) rGrid.innerHTML = rHtml;
}

// TopoJSON Data Cache
let japanGeoData = null;

function renderMap(containerId, currentGeoId, isHistoryMode = false) {
  const container = d3.select('#' + containerId);
  if (container.empty()) return;
  container.selectAll('*').remove(); // Clear previous map

  const progress = getState().progress;
  const width = 800;
  const height = 600;

  const svg = container.append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("class", `w-full h-full ${isHistoryMode ? 'drop-shadow-[0_0_10px_rgba(0,243,255,0.15)]' : 'drop-shadow-[0_0_15px_rgba(0,255,255,0.1)]'} overflow-visible`);

  // Zoom Behavior Implementation
  const g = svg.append("g");
  const zoom = d3.zoom()
    .scaleExtent([1, 15]) // Max zoom 15x
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

  svg.call(zoom);

  // ネオングローフィルター定義
  const defs = svg.append('defs');
  const filter = defs.append('filter').attr('id', 'neon-glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
  filter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur');
  const feMerge = filter.append('feMerge');
  feMerge.append('feMergeNode').attr('in', 'blur');
  feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

  const getStyleForPrefecture = (feature) => {
    const prefName = feature.properties.nam;

    let isTarget = false;
    if (currentGeoId && !isLandmark(currentGeoId) && geoToPrefecture[currentGeoId] && geoToPrefecture[currentGeoId].includes(prefName)) {
      isTarget = true;
    }

    if (isTarget && !isHistoryMode) {
      return 'fill-cyan-900/40 stroke-cyan-400 stroke-[1.5px] drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] outline-none';
    }

    // Quest\u30e2\u30fc\u30c9: \u3053\u306e\u90fd\u9053\u5e9c\u770c\u306b\u7d10\u3065\u304f\u5168\u30a2\u30a4\u30c6\u30e0\u304c\u6c38\u4e45\u8a18\u61b6(lv4)\u306b\u9054\u3057\u305f\u304b\u30c1\u30a7\u30c3\u30af
    if (!isHistoryMode) {
      const linkedItems = geographyMaster.filter(g =>
        !isLandmark(g.geoId) && geoToPrefecture[g.geoId] && geoToPrefecture[g.geoId].includes(prefName)
      );
      if (linkedItems.length > 0) {
        const allMastered = linkedItems.every(g => (progress[g.geoId]?.masteryLevel || 0) >= 4);
        if (allMastered) {
          return 'fill-emerald-800/50 stroke-emerald-400 stroke-[1.5px] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] outline-none pointer-events-auto';
        }
      }
    }

    let achievedLevel = 0;
    let daysPassed = 999;

    if (isHistoryMode) {
      Object.keys(progress).forEach(progGeoId => {
        const userProg = progress[progGeoId];
        if (!isLandmark(progGeoId) && geoToPrefecture[progGeoId] && geoToPrefecture[progGeoId].includes(prefName)) {
          achievedLevel = Math.max(achievedLevel, userProg.masteryLevel);
          daysPassed = Math.min(daysPassed, (Date.now() - userProg.lastClearedAt) / (1000 * 60 * 60 * 24));
        }
      });
    }

    let baseClass = isHistoryMode
      ? 'fill-[#1e293b] stroke-slate-500 stroke-[0.3px] outline-none transition-all duration-500 hover:fill-slate-700/50 pointer-events-auto'
      : 'fill-slate-700/60 stroke-slate-400 stroke-[1px] outline-none transition-all duration-300 hover:fill-slate-600/80 pointer-events-auto';

    if (achievedLevel > 0) {
      let isActive = true;
      if (achievedLevel === 1 && daysPassed > 3) isActive = false;
      if (achievedLevel === 2 && daysPassed > 7) isActive = false;
      if (achievedLevel === 3 && daysPassed > 30) isActive = false;

      if (!isActive) return `fill-slate-800 stroke-slate-600 stroke-[0.5px] grayscale outline-none`;

      switch (achievedLevel) {
        case 1: baseClass = `fill-cyan-900/20 stroke-cyan-800 stroke-[0.8px] outline-none pointer-events-auto hover:fill-cyan-900/40 transition-opacity`; break;
        case 2: baseClass = `fill-green-900/20 stroke-green-800 stroke-[0.8px] outline-none pointer-events-auto hover:fill-green-900/40 transition-opacity`; break;
        case 3: baseClass = `fill-purple-900/20 stroke-purple-700 stroke-[0.8px] outline-none pointer-events-auto hover:fill-purple-900/40 transition-opacity`; break;
        case 4: baseClass = `fill-yellow-900/20 stroke-yellow-700 stroke-[0.8px] outline-none pointer-events-auto hover:fill-yellow-900/40 transition-opacity`; break;
      }
    }
    return baseClass;
  };

  const getStyleForLandmark = (feature) => {
    const featureId = feature.properties.id;
    const isPoint = feature.properties.type === 'point';
    const isArea = feature.properties.type === 'area';
    let isTarget = (currentGeoId === featureId);

    if (isTarget && !isHistoryMode) {
      const fillClass = isPoint ? 'fill-cyan-400 ' : (isArea ? 'fill-cyan-400/40 ' : 'fill-none ');
      return fillClass + 'stroke-cyan-400 stroke-[5px] drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] outline-none animate-quest-pulse';
    }

    let achievedLevel = 0;
    let daysPassed = 999;

    if (isHistoryMode && progress[featureId]) {
      achievedLevel = progress[featureId].masteryLevel;
      daysPassed = (Date.now() - progress[featureId].lastClearedAt) / (1000 * 60 * 60 * 24);
    }

    // デフォルトは見えないか、うっすら表示
    const defaultFill = isPoint ? 'fill-slate-500 ' : (isArea ? 'fill-slate-500/20 ' : 'fill-none ');
    let baseClass = defaultFill + 'stroke-slate-500 stroke-[2px] opacity-0 outline-none transition-all duration-500 pointer-events-auto';

    if (achievedLevel > 0) {
      let isActive = true;
      if (achievedLevel === 1 && daysPassed > 3) isActive = false;
      if (achievedLevel === 2 && daysPassed > 7) isActive = false;
      if (achievedLevel === 3 && daysPassed > 30) isActive = false;

      if (!isActive) {
        const inactiveFill = isPoint ? 'fill-slate-500 ' : (isArea ? 'fill-slate-500/10 ' : 'fill-none ');
        return inactiveFill + `stroke-slate-500 stroke-[3px] grayscale outline-none transition-opacity opacity-50`;
      }

      switch (achievedLevel) {
        case 1: baseClass = (isPoint ? 'fill-cyan-400 ' : (isArea ? 'fill-cyan-400/30 ' : 'fill-none ')) + `stroke-cyan-500 stroke-[2px] outline-none pointer-events-auto transition-opacity`; break;
        case 2: baseClass = (isPoint ? 'fill-green-400 ' : (isArea ? 'fill-green-400/30 ' : 'fill-none ')) + `stroke-green-500 stroke-[2px] outline-none pointer-events-auto transition-opacity`; break;
        case 3: baseClass = (isPoint ? 'fill-purple-400 ' : (isArea ? 'fill-purple-400/30 ' : 'fill-none ')) + `stroke-purple-500 stroke-[2px] outline-none pointer-events-auto transition-opacity`; break;
        case 4: baseClass = (isPoint ? 'fill-yellow-400 ' : (isArea ? 'fill-yellow-400/30 ' : 'fill-none ')) + `stroke-yellow-500 stroke-[2px] outline-none pointer-events-auto transition-opacity`; break;
      }
    }
    return baseClass;
  };

  const drawFeatures = (topo) => {
    const geojson = topojson.feature(topo, topo.objects.japan);

    const projection = d3.geoMercator();
    if (isHistoryMode) {
      projection.fitExtent([[10, 10], [width - 50, height - 10]], geojson);
    } else {
      // BOSS戦と同じ固定センター・高倍率設定を適用
      projection.center([136.5, 35.5]).scale(1750).translate([width / 2, height / 2]);
    }

    const path = d3.geoPath().projection(projection);

    // 1. 都道府県を描画
    g.selectAll('.pref')
      .data(geojson.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('class', d => getStyleForPrefecture(d))
      .on('mouseover', function (e, d) {
        d3.select(this).style('opacity', 0.8);
      })
      .on('mouseout', function (e, d) {
        d3.select(this).style('opacity', 1);
      });
    // titleタグは削除（ホバー時に答えが表示されないようにするため）

    // 2. 川・山・海岸線などの地形データを上に重ねて描画
    g.selectAll('.landmark')
      .data(customLandmarks.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('class', d => getStyleForLandmark(d));
    // titleタグは削除（ホバー時に答えが表示されないようにするため）

    // 3. ターゲットの中心に強調マーカーを描画 (Questモードのみ)
    const addMarker = (feature) => {
      let center = path.centroid(feature);
      if (center && !isNaN(center[0])) {
        const cx = center[0], cy = center[1];

        // 波紋1（即時開始）
        const ripple1 = g.append('circle')
          .attr('cx', cx).attr('cy', cy).attr('r', 4)
          .attr('fill', 'none')
          .attr('stroke', 'rgba(0,243,255,0.9)')
          .attr('stroke-width', 2)
          .attr('pointer-events', 'none');
        ripple1.node().innerHTML = `
          <animate attributeName="r" from="4" to="40" dur="2s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" from="0.9" to="0" dur="2s" repeatCount="indefinite" />
        `;

        // 波紋2（1秒遅延）
        const ripple2 = g.append('circle')
          .attr('cx', cx).attr('cy', cy).attr('r', 4)
          .attr('fill', 'none')
          .attr('stroke', 'rgba(0,243,255,0.7)')
          .attr('stroke-width', 1.5)
          .attr('pointer-events', 'none');
        ripple2.node().innerHTML = `
          <animate attributeName="r" from="4" to="40" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" from="0.7" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
        `;

        // 中心の光点
        g.append('circle')
          .attr('cx', cx).attr('cy', cy).attr('r', 5)
          .attr('fill', 'rgba(0,243,255,1)')
          .attr('filter', 'url(#neon-glow)')
          .attr('pointer-events', 'none');
      }
    };

    if (currentGeoId && !isHistoryMode) {
      if (isLandmark(currentGeoId)) {
        const feat = customLandmarks.features.find(f => f.properties.id === currentGeoId);
        if (feat) addMarker(feat);
      } else {
        const feat = geojson.features.find(f => {
          return geoToPrefecture[currentGeoId] && geoToPrefecture[currentGeoId].includes(f.properties.nam);
        });
        if (feat) addMarker(feat);
      }
    }
  };

  if (typeof JAPAN_TOPOJSON !== 'undefined') {
    drawFeatures(JAPAN_TOPOJSON);
  } else {
    console.error("JAPAN_TOPOJSON is not defined. Ensure js/japan.topojson.js is loaded correctly.");
    container.html('<div class="text-red-500">地図データの読み込みに失敗しました (JAPAN_TOPOJSON not found)</div>');
  }
}

function renderKanjiPanel(options, onSelect) {
  const panel = document.getElementById('kanji-panel');
  panel.innerHTML = '';

  const difficulty = currentSession?.difficulty || 'advanced';
  panel.classList.toggle('beginner-mode', difficulty === 'beginner');
  if (difficulty === 'beginner') {
    panel.classList.remove('grid-cols-3');
    panel.classList.add('grid-cols-2', 'grid-rows-2');
  } else {
    panel.classList.remove('grid-cols-2', 'grid-rows-2');
    panel.classList.add('grid-cols-3');
  }

  options.forEach((char, i) => {
    const btn = document.createElement('button');
    btn.className = `
      w-full h-full
      bg-[#0a0f1d]/80 border-2 border-slate-600 rounded-[8px]
      ${difficulty === 'beginner' ? 'text-3xl md:text-4xl lg:text-4xl' : 'text-xl md:text-3xl lg:text-5xl'} font-bold font-noto outline-none text-slate-300 leading-none
      flex items-center justify-center shadow-inner relative overflow-hidden group
      hover:border-cyber-neonBlue hover:text-white hover:shadow-neon-blue focus:border-cyan-400 focus:text-white focus:shadow-neon-blue
      transition-all duration-200 transform hover:scale-105 active:scale-95
    `;
    btn.innerHTML = `<span class="relative z-10 leading-none">${char}</span><div class="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>`;

    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';

    btn.onclick = () => onSelect(char);
    panel.appendChild(btn);

    setTimeout(() => {
      btn.style.transition = 'opacity 0.2s, transform 0.2s';
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
      setTimeout(() => { btn.style.transition = ''; }, 200);
    }, i * 30);
  });

  if (difficulty === 'beginner') return;

  // アクションボタン行 (DELETE + SUBMIT)
  const actionRow = document.createElement('div');
  actionRow.className = 'kanji-action-row flex gap-2 mt-1';

  const delBtn = document.createElement('button');
  delBtn.id = 'kanji-delete-btn';
  delBtn.className = `
    flex-1 bg-red-900/40 border-2 border-red-700/60 rounded-[8px]
    text-base font-bold font-orbitron outline-none text-red-400 leading-none
    flex items-center justify-center gap-2
    hover:border-red-400 hover:text-red-200 hover:bg-red-900/70
    transition-all duration-200 transform hover:scale-105 active:scale-95 tracking-wider
  `;
  delBtn.innerHTML = `<span>⌫ DEL</span>`;
  delBtn.onclick = () => handleDeleteChar();
  actionRow.appendChild(delBtn);

  const submitBtn = document.createElement('button');
  submitBtn.id = 'kanji-submit-btn';
  submitBtn.className = `
    flex-[2] bg-cyan-900/40 border-2 border-cyan-500/60 rounded-[8px]
    text-base font-bold font-orbitron outline-none text-cyan-300 leading-none
    flex items-center justify-center gap-2
    hover:border-cyan-300 hover:text-white hover:bg-cyan-900/70 hover:shadow-neon-blue
    transition-all duration-200 transform hover:scale-105 active:scale-95 tracking-widest
  `;
  submitBtn.innerHTML = `<span>▷ SUBMIT</span>`;
  submitBtn.onclick = () => handleSubmitAnswer();
  actionRow.appendChild(submitBtn);

  panel.appendChild(actionRow);
}

function setKanjiPanelDisabled(disabled) {
  const buttons = document.querySelectorAll('#kanji-panel button');
  buttons.forEach(b => {
    b.disabled = disabled;
    if (disabled) {
      b.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
    } else {
      b.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
    }
  });
}

// Card display revision v1.1
function generateCardHTML(geoData) {
  const rarity = geoData.rarity || 'N';
  const stats = geoData.charStats || { power: 30, defense: 30, speed: 30 };
  
  const getRarityClass = (r) => {
    switch (r) {
      case 'SSR': return 'card-frame-ssr card-hologram premium-glint';
      case 'SR': return 'card-frame-sr premium-glint';
      case 'R': return 'card-frame-r';
      default: return 'card-frame-n';
    }
  };

  const getRarityColors = (r) => {
    switch (r) {
      case 'N': return 'from-slate-500 to-slate-700 shadow-slate-500/50';
      case 'R': return 'from-teal-400 to-emerald-600 shadow-emerald-500/50';
      case 'SR': return 'from-purple-400 to-fuchsia-600 shadow-purple-500/50';
      case 'SSR': return 'from-yellow-300 via-amber-400 to-orange-500 shadow-yellow-500/80';
      default: return 'from-slate-500 to-slate-700 shadow-slate-500/50';
    }
  };

  const statItem = (label, value, color) => `
    <div class="flex items-center gap-1.5 w-full">
      <span class="text-[8px] font-rpg text-slate-400 w-4">${label}</span>
      <div class="stat-bar-container">
        <div class="stat-bar-fill ${color}" style="width: ${value}%"></div>
      </div>
    </div>
  `;

  const statsHtml = Object.entries(geoData.stats).map(([k, v]) => `
    <li class="flex justify-between border-b border-slate-700/50 pb-1">
      <span class="text-slate-400">${k}:</span>
      <span class="font-bold text-slate-200 text-right text-[10px] sm:text-xs">${v}</span>
    </li>
  `).join('');

  const kwHtml = geoData.relatedKeywords.map(k => `
    <span class="px-1.5 py-0.5 bg-slate-700 rounded text-[9px] text-slate-200 border border-slate-600">${k}</span>
  `).join('');

  return `
    <div class="perspective-1000 w-full card-aspect-ratio cursor-pointer" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')">
      <div class="flip-card-inner w-full h-full relative preserve-3d">
        
        <!-- Front -->
        <div class="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br ${getRarityColors(rarity)} p-1 shadow-lg pointer-events-none">
          <div class="w-full h-full bg-slate-900 rounded-lg relative ${getRarityClass(rarity)}">
            <div class="card-content-wrapper p-2 overflow-hidden">
              
              <!-- Header: Rarity & Name -->
              <div class="flex justify-between items-start mb-1 overflow-visible">
                 <span class="px-2 py-0.5 bg-black/80 rounded text-[9px] font-bold font-orbitron text-white border border-white/20 z-10 shadow-lg">${rarity}</span>
                 <div class="text-right z-10">
                   <div class="text-[8px] font-orbitron text-cyan-400 tracking-tighter opacity-70">${geoData.type.toUpperCase()}</div>
                   <div class="text-[10px] font-noto text-white font-bold leading-none">${geoData.name}</div>
                 </div>
              </div>

              <!-- Character Avatar Background -->
              <div class="flex-1 relative mb-2 flex items-center justify-center min-h-0">
                <img src="${geoData.charImage || 'assets/avatars/avatar_sky_1773059837567.png'}" 
                     class="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
                     alt="${geoData.charName}">
              </div>

              <!-- Footer: Char Name & RPG Stats -->
              <div class="bg-black/60 backdrop-blur-sm p-2 rounded-lg border border-white/10 mt-auto mb-1">
                 <div class="text-[11px] font-bold text-white font-orbitron text-center mb-1.5 truncate text-cyber-neonGold drop-shadow-sm">
                   ${geoData.charName || 'Guardian'}
                 </div>
                 <div class="space-y-1">
                   ${statItem('POW', stats.power, 'bg-red-500 shadow-red-500/50')}
                   ${statItem('DEF', stats.defense, 'bg-blue-500 shadow-blue-500/50')}
                   ${statItem('SPD', stats.speed, 'bg-green-500 shadow-green-500/50')}
                 </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Back -->
        <div class="flip-card-back absolute w-full h-full backface-hidden rounded-xl bg-slate-800 border-2 border-slate-600 p-3 overflow-y-auto pointer-events-none">
           <div class="flex flex-col h-full">
            <h4 class="text-sm font-bold border-b border-slate-600 pb-1.5 mb-2 text-cyber-neonBlue truncate">${geoData.name} Details</h4>
            <p class="text-[10px] leading-tight text-slate-300 italic mb-3">"${geoData.flavorText}"</p>
            <div class="mb-3">
              <span class="text-[9px] text-cyber-neonGreen font-orbitron block mb-1">GEOGRAPHY DATA</span>
              <ul class="text-[10px] space-y-1">${statsHtml}</ul>
            </div>
            <div>
              <span class="text-[9px] text-cyber-neonPurple font-orbitron block mb-1">KEYWORDS</span>
              <div class="flex flex-wrap gap-1">${kwHtml}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderCollection() {
  const container = document.getElementById('collection-grid');
  if (!container) return;
  container.innerHTML = '';

  const state = getState();
  const ownedCardsCount = Object.keys(state.cards).length;
  const totalCards = geographyMaster.length;

  const statsEl = document.getElementById('collection-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="flex justify-between items-center mb-6">
        <div>
          <div class="text-slate-400 text-xs font-orbitron tracking-widest uppercase mb-1">Total Assets</div>
          <div class="text-white text-3xl font-bold font-orbitron">${ownedCardsCount} <span class="text-slate-500 text-sm">/ ${totalCards}</span></div>
        </div>
        <div class="text-right">
          <div class="text-slate-400 text-xs font-orbitron tracking-widest uppercase mb-1">Pity Progress</div>
          <div class="w-48 h-2 bg-slate-800 rounded-full border border-slate-700 overflow-hidden relative inline-block">
              <div class="h-full bg-cyan-400 shadow-[0_0_8px_cyan]" style="width: ${state.gachaPoints}%"></div>
          </div>
          <div class="text-[10px] text-cyan-400 font-orbitron mt-1">${state.gachaPoints} / 100 pt</div>
        </div>
      </div>
      <div class="flex gap-4 mb-8">
          <div class="bg-slate-900/50 border border-slate-800 px-4 py-3 rounded-xl flex-1 backdrop-blur-sm">
              <div class="text-[9px] text-slate-500 font-orbitron tracking-widest mb-1">SILVER TICKETS</div>
              <div class="text-slate-100 font-bold font-orbitron text-lg">${state.silverTickets}</div>
          </div>
          <div class="bg-yellow-900/10 border border-yellow-800/40 px-4 py-3 rounded-xl flex-1 backdrop-blur-sm">
              <div class="text-[9px] text-yellow-600 font-orbitron tracking-widest mb-1">SSR TICKETS</div>
              <div class="text-yellow-400 font-bold font-orbitron text-lg">${state.ssrTickets}</div>
          </div>
      </div>
    `;
  }

  geographyMaster.forEach(geo => {
    const cardData = state.cards[geo.geoId];
    const card = document.createElement('div');
    card.className = `relative group cursor-pointer transition-all duration-300 hover:scale-105 ${!cardData ? 'opacity-30 grayscale' : ''}`;

    const level = cardData?.level || 1;
    let lvLabel = '';
    if (cardData) {
      lvLabel = `<div class="absolute top-2 right-2 px-2 py-0.5 bg-yellow-500 text-black text-[10px] font-bold rounded z-20 shadow-sm border border-black/10">Lv.${level}</div>`;
    }

    card.innerHTML = `
      ${lvLabel}
      ${generateCardHTML(geo)}
    `;

    if (cardData) {
      card.onclick = () => showCardDetail(geo, cardData);
    }

    container.appendChild(card);
  });
}

function showCardDetail(geo, cardData) {
  const detailPanel = document.createElement('div');
  detailPanel.id = 'card-detail-modal';
  detailPanel.className = 'fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-300';

  const level = cardData.level || 1;
  const facts = geo.hiddenFacts || [];

  detailPanel.innerHTML = `
    <div class="bg-cyber-bg border border-slate-800 rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl animate-in zoom-in slide-in-from-bottom-4 duration-500">
        <button onclick="document.getElementById('card-detail-modal').remove()" class="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors bg-slate-900/80 rounded-full p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div class="flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-5/12 flex justify-center items-start">
                <div class="w-full max-w-[240px] transform hover:rotate-1 transition-transform duration-500">
                    ${generateCardHTML(geo)}
                </div>
            </div>
            <div class="w-full md:w-7/12 flex flex-col pt-2">
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-orbitron text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/30 uppercase tracking-widest">${geo.rarity}</span>
                    <span class="text-[10px] font-orbitron text-slate-500 tracking-widest uppercase">${geo.type}</span>
                </div>
                <h3 class="text-3xl font-bold text-white font-noto mb-4">${geo.name}</h3>
                <div class="flex items-center gap-2 mb-4 text-xs font-orbitron">
                    <span class="text-slate-400">STATUS:</span>
                    <span class="text-white px-2 py-0.5 bg-slate-800 rounded-full border border-slate-700">LEVEL ${level} / 5</span>
                </div>

                <!-- RPG Stats Detail -->
                <div class="grid grid-cols-3 gap-2 mb-6">
                  <div class="bg-slate-900/80 border border-red-900/30 p-2 rounded-xl text-center">
                    <div class="text-[8px] text-red-400 font-orbitron mb-1">POWER</div>
                    <div class="text-lg font-bold text-white font-orbitron">${geo.charStats?.power || 30}</div>
                  </div>
                  <div class="bg-slate-900/80 border border-blue-900/30 p-2 rounded-xl text-center">
                    <div class="text-[8px] text-blue-400 font-orbitron mb-1">DEFENSE</div>
                    <div class="text-lg font-bold text-white font-orbitron">${geo.charStats?.defense || 30}</div>
                  </div>
                  <div class="bg-slate-900/80 border border-green-900/30 p-2 rounded-xl text-center">
                    <div class="text-[8px] text-green-400 font-orbitron mb-1">SPEED</div>
                    <div class="text-lg font-bold text-white font-orbitron">${geo.charStats?.speed || 30}</div>
                  </div>
                </div>
                
                <div class="flex-1 space-y-4">
                    <div>
                        <div class="text-[10px] font-orbitron text-slate-500 tracking-widest mb-3 uppercase flex justify-between items-center">
                            <span>Hidden Facts</span>
                            <span>${Math.min(level - 1, facts.length)} / ${facts.length} Unlocked</span>
                        </div>
                        <div class="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                            ${facts.map((f, i) => {
    const unlocked = level > (i + 1);
    return `
                                <div class="p-3 rounded-xl border ${unlocked ? 'bg-slate-900 border-slate-700/50 text-slate-200 shadow-inner' : 'bg-slate-950/50 border-slate-900 border-dashed text-slate-600'} text-xs leading-relaxed font-noto">
                                  ${unlocked ? `<span class="text-cyan-400 font-bold mr-1">✦</span> ${f}` : `<span class="flex items-center gap-2 text-[10px]"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg> Locked (Unlock at Lv.${i + 2})</span>`}
                                </div>
                              `;
  }).join('')}
                            ${facts.length === 0 ? '<div class="text-slate-600 italic text-xs">No hidden facts available yet.</div>' : ''}
                        </div>
                    </div>
                </div>
                
                <div class="mt-6 pt-4 border-t border-slate-800/80 text-[10px] text-slate-600 font-noto leading-tight italic">
                    Same cards increase level and unlock professional geographical facts useful for high-level exams.
                </div>
            </div>
        </div>
    </div>
  `;
  document.body.appendChild(detailPanel);
}

function renderAnalytics() {
  const state = getState();

  const heatmap = document.getElementById('heatmap-container');
  let heatmapHTML = '';
  for (let i = 0; i < 30; i++) {
    const count = Math.floor(Math.random() * 5);
    const cClass = count > 3 ? 'bg-cyber-neonBlue shadow-neon-blue' :
      count > 1 ? 'bg-cyber-neonBlue/50' : 'bg-slate-800';
    heatmapHTML += `<div class="w-4 h-4 md:w-6 md:h-6 rounded-sm ${cClass}"></div>`;
  }
  heatmap.innerHTML = heatmapHTML;

  const trapList = document.getElementById('trap-list');
  const trapCounts = {};
  state.mistakes.forEach(m => {
    const key = m.tappedDummy;
    trapCounts[key] = (trapCounts[key] || 0) + 1;
  });

  const sortedTraps = Object.entries(trapCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  if (sortedTraps.length === 0) {
    trapList.innerHTML = '<p class="text-slate-500 text-sm">データがありません</p>';
  } else {
    trapList.innerHTML = sortedTraps.map(([char, count]) => `
      <div class="flex flex-col space-y-1">
        <div class="flex justify-between text-sm">
          <span class="text-slate-300 font-bold">${char}</span>
          <span class="text-cyber-danger font-orbitron">${count} MISS</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-2">
          <div class="bg-gradient-to-r from-red-600 to-cyber-danger h-2 rounded-full" style="width: ${Math.min(count * 10, 100)}%"></div>
        </div>
      </div>
    `).join('');
  }

  const ctx = document.getElementById('radarChart');
  if (window.radarChartInstance) {
    window.radarChartInstance.destroy();
  }

  window.radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['北海道', '東北', '関東', '中部', '近畿', '中四国', '九州'],
      datasets: [{
        label: 'Mastery Level (%)',
        data: [20, 40, 60, 100, 30, 10, 50],
        backgroundColor: 'rgba(0, 255, 136, 0.2)',
        borderColor: '#00ff88',
        pointBackgroundColor: '#00ff88',
        borderWidth: 2,
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          pointLabels: { color: '#94a3b8', font: { family: '"Orbitron", sans-serif' } },
          ticks: { display: false, max: 100, min: 0 }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// --- app.js ---
let currentQuestion = null;
let combo = 0;
let answeredStr = '';
let questStartTime = 0;
let questMissed = false;
let currentDynamicRate = 3;
let gachaResult = null; // Store the drawn card for showGacha

const sounds = {
  tap: null, correct: null, error: null, unlock: null, gacha: null,
  key: null, delete: null, submit: null
};

const bgm = {
  normalTracks: [],
  bossTracks: [],
  menu: null,
  category: null,
  others: null,
  boss: null,
  current: null
};

function initApp() {
  loadState();

  // Safely initialize sounds
  try {
    sounds.tap = new Howl({ src: ['assets/sounds/kettei.wav'], volume: 0.5 });
    sounds.key = new Howl({ src: ['assets/sounds/key.wav'], volume: 0.3 });
    sounds.delete = new Howl({ src: ['assets/sounds/delete.wav'], volume: 0.4 });
    sounds.submit = new Howl({ src: ['assets/sounds/submit.wav'], volume: 0.5 });
    sounds.correct = new Howl({ src: ['assets/sounds/seikai.wav'], volume: 0.5 });
    sounds.error = new Howl({ src: ['assets/sounds/fuseikai.wav'], volume: 0.4 });
    sounds.unlock = new Howl({ src: ['assets/sounds/seikai.wav'], volume: 0.5 }); // Fallback or reuse
    sounds.gacha = new Howl({ src: ['https://actions.google.com/sounds/v1/magic/magical_sweep.ogg'], volume: 1.0 });

    // Load 9 random Quest tracks
    for (let i = 1; i <= 9; i++) {
      bgm.normalTracks.push(new Howl({ src: [`assets/bgm/BGM${i}.mp3`], loop: true, volume: 0.4, html5: true }));
    }
    
    // Boss Tracks
    bgm.boss = new Howl({ src: ['assets/bgm/BossBGM.mp3'], loop: true, volume: 0.5, html5: true });
    bgm.bossTracks.push(bgm.boss);
    bgm.bossTracks.push(new Howl({ src: ['assets/bgm/BossBGM2.mp3'], loop: true, volume: 0.5, html5: true }));
    
    // Screen specific tracks
    bgm.menu = new Howl({ src: ['assets/bgm/MenuBGM.mp3'], loop: true, volume: 0.5, html5: true });
    bgm.category = new Howl({ src: ['assets/bgm/CategoryBGM.mp3'], loop: true, volume: 0.5, html5: true });
    bgm.others = new Howl({ src: ['assets/bgm/others.mp3'], loop: true, volume: 0.5, html5: true });

    // Initialize Firebase session
    if (window.geoFirebase) {
      window.geoFirebase.initFirebase((user) => {
        const statusEl = document.getElementById('firebase-status-text');
        if (statusEl) {
          statusEl.innerText = user ? 'CONNECTED' : 'OFFLINE';
          if (user) {
            const wrap = document.getElementById('firebase-status');
            if (wrap) wrap.className = 'text-[9px] font-orbitron px-2 py-1 rounded border border-cyan-700 text-cyan-400 tracking-widest flex items-center gap-1.5';
          }
        }
      });
    }
  } catch (e) { console.log('Audio init failed', e); }

  updateAudioToggles();

  updateProgressionUI();

  // Visibility API for background audio
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (bgm.current && bgm.current.playing()) {
        bgm.current.pause();
        bgm.pausedByVisibility = true;
      }
    } else {
      if (bgm.pausedByVisibility && state.bgmEnabled) {
        if (bgm.current) bgm.current.play();
        bgm.pausedByVisibility = false;
      }
    }
  });

  window.app = {
    triggerHaptic: triggerHaptic,
    startSession: startSession,
    showDifficultySelection: showDifficultySelection,
    startSessionWithDifficulty: startSessionWithDifficulty,
    navigate: (screen) => {
      if (sounds.tap && state.sfxEnabled) sounds.tap.play();
      if (screen === 'home') {
        currentSession = null;
      }

      // Ensure header is visible on all screens (except maybe home if previously hidden)
      const header = document.getElementById('global-header');
      if (header) {
        header.classList.remove('hidden');
        header.style.display = 'flex';
      }

      if (screen === 'quest' && !currentSession) {
        navigateTo('category');
      } else {
        navigateTo(screen);
      }
      updateProgressUI();
      updateProgressionUI(); // Always update RPG UI on navigation
      if (header) updateAudioToggles(); // Sync toggles

      if (screen === 'collection') renderCollection();
      if (screen === 'survey') renderMap('survey-map-container', null, true);
      if (screen === 'boss') startBossBattle();
      if (screen === 'ranking') fetchAndShowRanking();
    },
    toggleBGM: () => {
      state.bgmEnabled = !state.bgmEnabled;
      saveGachaState();
      updateAudioToggles();
      if (state.bgmEnabled) {
        if (bgm.current) bgm.current.play();
      } else {
        if (bgm.current) bgm.current.pause();
      }
    },
    toggleSFX: () => {
      state.sfxEnabled = !state.sfxEnabled;
      saveGachaState();
      updateAudioToggles();
      Howler.mute(!state.sfxEnabled && !state.bgmEnabled); // Global mute if both off, but Howler.mute affects all. 
      // Better: we just check state.sfxEnabled before .play()
      if (state.sfxEnabled && sounds.tap) sounds.tap.play();
    },
    syncManually: () => {
      const p = window.geoFirebase.getSelectedProfile();
      if (p) {
        window.app.selectProfile(p);
      } else {
        alert('プロフィールが選択されていません。');
      }
    },
    closeGacha: () => {
      if (sounds.tap && state.sfxEnabled) sounds.tap.play();
      document.getElementById('gacha-modal').classList.add('opacity-0');
      setTimeout(() => {
        document.getElementById('gacha-modal').classList.add('hidden');
        if (currentSession) {
          currentSession.currentIndex++;
          if (currentSession.currentIndex < 10) nextQuest();
          else showSessionResult();
        } else {
          window.app.navigate('home');
        }
      }, 500);
    },
    submitBossScore: () => {
      const nickname = document.getElementById('boss-nickname')?.value.trim() || 'Anonymous';
      const areaName = document.getElementById('boss-area-name')?.innerText || 'General';
      const score = parseInt(document.getElementById('boss-final-score')?.innerText || '0');
      if (window.geoFirebase) {
        window.geoFirebase.submitBossScore(score, areaName, nickname).then(() => {
          window.app.navigate('ranking');
        });
      }
    }
  };

  // Profile Select Function
  window.app.selectProfile = async (name) => {
    if (sounds.tap && state.sfxEnabled) sounds.tap.play(); // Use tap instead of confirm if confirm is missing
    console.log(`[GeoQuiz] --- Starting Sync for Profile: ${name} ---`);
    window.geoFirebase.setProfile(name);
    
    // Load local data for this profile first
    loadState();

    const statusEl = document.getElementById('firebase-status');
    if (statusEl) {
      statusEl.innerText = 'SYNCING...';
      statusEl.className = 'text-[9px] font-orbitron px-2 py-1 rounded border border-yellow-700 text-yellow-400 tracking-widest animate-pulse';
    }

    try {
      // Ensure we are authenticated before fetching
      await window.geoFirebase.waitForAuth();

      // Fetch all data in parallel for speed
      const [cloudProgress, cloudCards, cloudMistakes, cloudStats] = await Promise.all([
        window.geoFirebase.fetchProgressFromCloud(),
        window.geoFirebase.fetchCardsFromCloud(),
        window.geoFirebase.fetchMistakesFromCloud(),
        window.geoFirebase.fetchStatsFromCloud()
      ]);

      // Merge Progress (Mastery Levels)
      const fetchFailed = (
          (cloudProgress && cloudProgress._error === true) || 
          (cloudCards && cloudCards._error === true) || 
          (cloudStats && cloudStats._error === true)
      );
      
      const mistakesFailed = cloudMistakes && cloudMistakes._error === true;
      
      if (fetchFailed) {
          console.warn('[GeoQuiz] Cloud fetch failed. Skipping destructive cloud sync/merge.');
          if (statusEl) {
            statusEl.innerText = 'SYNC ERROR (AUTH/PERMISSION)';
            statusEl.className = 'text-[9px] font-orbitron px-2 py-1 rounded border border-red-700 text-red-500 tracking-widest';
          }
      }

      if (!fetchFailed && cloudProgress && Object.keys(cloudProgress).length > 0) {
        for (const geoId in cloudProgress) {
          if (geoId === '_error') continue; // Skip poison pill
          const cloudItem = cloudProgress[geoId];
          const localItem = state.progress[geoId];
          // Take the one with higher mastery or newer date
          if (!localItem || cloudItem.masteryLevel > localItem.masteryLevel) {
            state.progress[geoId] = cloudItem;
          }
        }
      }

      // Merge Cards
      if (cloudCards && Object.keys(cloudCards).length > 0) {
        for (const cardId in cloudCards) {
          if (cardId === '_error') continue; // Skip poison pill
          const cloudCard = cloudCards[cardId];
          const localCard = state.cards[cardId];
          // Support both 'level' and 'cardLevel' (from cloud)
          const cloudLevel = cloudCard.level || cloudCard.cardLevel || 1;
          const localLevel = localCard ? (localCard.level || 1) : 0;
          
          if (!localCard || cloudLevel > localLevel || cloudCard.quantity > (localCard.quantity || 0)) {
             state.cards[cardId] = {
               cardId: cardId,
               level: cloudLevel,
               quantity: Math.max(cloudCard.quantity || 1, localCard ? localCard.quantity : 0)
             };
          }
        }
      }

      // Merge Mistakes
      if (cloudMistakes && cloudMistakes.length > 0) {
        state.mistakes = cloudMistakes; // Take cloud as primary for history
      }
      
      // Merge Stats
      if (cloudStats) {
        if (cloudStats.level > state.playerLevel || (cloudStats.level === state.playerLevel && cloudStats.exp > state.playerExp)) {
          state.playerLevel = cloudStats.level;
          state.playerExp = cloudStats.exp;
        }
      }

      updateProgressUI();
      updateProgressionUI();
      
      // Persist the merged state back to local storage
      persistAllState();
      
      // BIDIRECTIONAL SYNC: 
      // Only push back to cloud if we successfully fetched. 
      // This prevents overwriting cloud data with defaults if the API call failed.
      if (!fetchFailed && window.geoFirebase.syncFullProfileToCloud) {
          console.log('[GeoQuiz] Pushing merged state back to cloud...');
          await window.geoFirebase.syncFullProfileToCloud(state);
      }

      if (!fetchFailed) {
          if (statusEl) {
            statusEl.innerText = 'ONLINE';
            statusEl.className = 'text-[9px] font-orbitron px-2 py-1 rounded border border-cyan-700 text-cyan-400 tracking-widest';
          }
      }

      console.log('[GeoQuiz] --- Sync Success ---');
      navigateTo('home');
    } catch (err) {
      console.error('[GeoQuiz] Sync Process Failed:', err);
      if (statusEl) {
        statusEl.innerText = 'SYNC ERROR';
        statusEl.className = 'text-[9px] font-orbitron px-2 py-1 rounded border border-red-700 text-red-500 tracking-widest';
      }
      // Still go home but with local data
      navigateTo('home');
    }
  };

  // Logout / Switch User
  window.app.logout = () => {
    if (sounds.confirm && state.sfxEnabled) sounds.confirm.play();
    if (window.geoFirebase) window.geoFirebase.setProfile(null);
    
    // Reset state to defaults
    state.progress = {};
    state.cards = {};
    state.mistakes = [];
    state.playerExp = 0;
    state.playerLevel = 1;
    
    updateProgressUI();
    updateProgressionUI();
    
    const statusEl = document.getElementById('firebase-status');
    if (statusEl) {
      statusEl.innerText = 'OFFLINE';
      statusEl.className = 'text-[9px] font-orbitron px-2 py-1 rounded border border-slate-700 text-slate-400 tracking-widest';
    }

    navigateTo('login');
  };

  // Check if profile already selected
  const savedProfile = window.geoFirebase.getSelectedProfile();
  if (savedProfile) {
    console.log(`[GeoQuiz] Saved profile found: ${savedProfile}`);
    // We no longer auto-autoload to ensure the user can switch if they want.
    // They must explicitly click or we stay on login.
    navigateTo('login');
  } else {
    navigateTo('login');
  }

  updateProgressUI();
}

function triggerHaptic(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

let currentSession = null; // { category: string, questions: [], currentIndex: 0, results: [] }


function handleSelectChar(char) {
  if (!currentQuestion) return;

  if (currentSession.difficulty === 'beginner') {
    // 初級モード: 直接回答
    answeredStr = char;
    document.getElementById('quest-answer-box').innerText = answeredStr;
    handleSubmitAnswer();
    return;
  }

  if (answeredStr.length >= currentQuestion.name.length) return;

  triggerHaptic(10);
  answeredStr += char;
  document.getElementById('quest-answer-box').innerText = answeredStr;

  if (sounds.key && state.sfxEnabled) {
    sounds.key.rate(0.9 + Math.random() * 0.2); // Variable pitch for better feel
    sounds.key.play();
  }
}

function handleDeleteChar() {
  if (!currentQuestion || answeredStr.length === 0) return;
  triggerHaptic(15);
  answeredStr = answeredStr.slice(0, -1);
  document.getElementById('quest-answer-box').innerText = answeredStr;
  if (sounds.delete && state.sfxEnabled) sounds.delete.play();
}

function flashMap(color, durationMs = 400) {
  const overlay = document.getElementById('map-flash-overlay');
  if (!overlay) return;
  overlay.style.backgroundColor = color;
  overlay.style.opacity = '0.55';
  setTimeout(() => {
    overlay.style.transition = 'opacity 0.35s ease-out';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.transition = ''; }, 400);
  }, durationMs * 0.4);
}

function showAnswerReveal(correctName, durationMs = 1500) {
  const overlay = document.getElementById('answer-reveal-overlay');
  const textEl = document.getElementById('answer-reveal-text');
  if (!overlay || !textEl) return;
  textEl.innerText = correctName;
  overlay.style.display = 'flex';
  overlay.classList.remove('hidden');
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.add('hidden');
  }, durationMs);
}

function handleSubmitAnswer() {
  if (!currentQuestion) return;
  if (sounds.submit && state.sfxEnabled) sounds.submit.play();

  if (answeredStr === currentQuestion.name) {
    // 正解
    triggerHaptic(30);
    flashMap('rgba(0, 243, 255, 1)', 500); // 青く光る
    combo++;
    const expGain = (currentSession?.difficulty === 'beginner') ? 20 : 100;
    addExp(expGain); // RPG EXP gain
    const comboEl = document.getElementById('quest-combo');
    if (comboEl) comboEl.innerText = combo;

    const ind = document.getElementById('combo-indicator');
    if (ind) {
      ind.className = 'w-4 h-4 rounded-sm animate-pulse shadow-neon-green bg-cyber-neonGreen';
      if (combo > 2) ind.className = 'w-4 h-4 rounded-sm animate-pulse shadow-neon-blue bg-cyber-neonBlue';
      if (combo > 4) ind.className = 'w-4 h-4 rounded-sm animate-pulse shadow-neon-gold bg-cyber-neonGold';
    }

    if (sounds.unlock && state.sfxEnabled) sounds.unlock.play();
    setKanjiPanelDisabled(true);

    // セッション結果の記録
    if (currentSession) {
      currentSession.results.push(true);
    }

    setTimeout(() => {
      handleClear(true);
      if (currentSession) {
        currentSession.currentIndex++;
        if (currentSession.currentIndex < 10) {
          nextQuest();
        } else {
          showSessionResult();
        }
      }
    }, 600);
  } else {
    // 不正解
    triggerHaptic([50, 100, 50]);
    flashMap('rgba(255, 40, 40, 1)', 600); // 赤く光る
    showAnswerReveal(currentQuestion.name, 1400); // 正解を大きく表示
    combo = 0;
    answeredStr = '';
    document.getElementById('quest-answer-box').innerText = '';
    const comboEl = document.getElementById('quest-combo');
    if (comboEl) comboEl.innerText = combo;
    const ind = document.getElementById('combo-indicator');
    if (ind) ind.className = 'w-4 h-4 rounded-sm bg-slate-700';
    if (sounds.error && state.sfxEnabled) sounds.error.play();
    questMissed = true;
    logMistake(currentQuestion.geoId, answeredStr);

    const box = document.getElementById('quest-answer-box');
    if (box) {
      box.classList.add('animate-shake');
      setTimeout(() => box.classList.remove('animate-shake'), 400);
    }

    // 10問制の場合は、不正解でもセッション結果を記録して次へ進むように変更（仕様に合わせて調整可能）
    if (currentSession) {
      currentSession.results.push(false);
      setKanjiPanelDisabled(true);
      setTimeout(() => {
        handleClear(false);
        currentSession.currentIndex++;
        if (currentSession.currentIndex < 10) {
          nextQuest();
        } else {
          showSessionResult();
        }
      }, 800);
    }
  }
}

function handleClear(isCorrect = false) {
  setKanjiPanelDisabled(true);
  
  // Only record to Map (Survey Dept) if it's a correct answer in Advanced mode
  const difficulty = currentSession?.difficulty || 'advanced';
  if (isCorrect && difficulty === 'advanced') {
    const currentState = getState();
    const currentMastery = currentState.progress[currentQuestion.geoId]?.masteryLevel || 0;
    saveProgress(currentQuestion.geoId, Math.min(currentMastery + 1, 4));
  }
  
  renderMap('quest-map-container', null, false);
  updateProgressUI();
}

let pendingCategory = null;

function showDifficultySelection(category) {
  if (sounds.tap && state.sfxEnabled) sounds.tap.play();
  pendingCategory = category;
  navigateTo('difficulty');
}

function startSessionWithDifficulty(difficulty) {
  if (sounds.tap && state.sfxEnabled) sounds.tap.play();
  startSession(pendingCategory, difficulty);
}

function startSession(category, difficulty = 'advanced') {
  if (sounds.tap && state.sfxEnabled) sounds.tap.play();
  console.log('[GeoQuiz] startSession called with:', category);

  // --- Build question list ---
  let filtered = geographyMaster;
  if (category !== 'all') {
    filtered = geographyMaster.filter(g => {
      if (category === 'strait') return ['strait', 'bay', 'cape', 'channel', 'sea'].includes(g.type);
      if (category === 'mountain') return ['mountain', 'mountain_range', 'highland'].includes(g.type);
      if (category === 'plain') return ['plain', 'basin', 'plateau'].includes(g.type);
      if (category === 'peninsula') return ['peninsula', 'island'].includes(g.type);
      return g.type === category;
    });
  }

  let sessionQuestions = [...filtered].sort(() => 0.5 - Math.random());
  if (sessionQuestions.length < 10) {
    const ids = new Set(sessionQuestions.map(f => f.geoId));
    const others = geographyMaster.filter(g => !ids.has(g.geoId));
    const filler = others.sort(() => 0.5 - Math.random()).slice(0, 10 - sessionQuestions.length);
    sessionQuestions = [...sessionQuestions, ...filler];
  } else {
    sessionQuestions = sessionQuestions.slice(0, 10);
  }

  currentSession = {
    category,
    difficulty,
    questions: sessionQuestions,
    currentIndex: 0,
    results: []
  };

  // --- Directly show quest screen, hide everything else ---
  document.querySelectorAll('.screen-view').forEach(el => {
    el.style.display = 'none';
    el.classList.add('hidden');
    el.classList.remove('active');
  });

  const questScreen = document.getElementById('screen-quest');
  if (questScreen) {
    questScreen.style.display = 'flex';
    questScreen.style.flexDirection = 'column';
    questScreen.classList.remove('hidden');
    questScreen.classList.add('active');
  } else {
    console.error('[GeoQuiz] #screen-quest not found!');
  }

  updateProgressUI();
  updateProgressionUI();

  // --- Start first question ---
  playBGM('normal');
  nextQuest();
}

function nextQuest() {
  if (!currentSession) return;
  currentQuestion = currentSession.questions[currentSession.currentIndex];

  // UI初期化
  answeredStr = '';
  document.getElementById('quest-answer-box').innerText = '';
  const info = document.getElementById('session-info');
  if (info) info.innerText = `Q ${currentSession.currentIndex + 1} / 10`;

  startQuest();
}

function startQuest() {
  combo = 0;
  questStartTime = Date.now();
  questMissed = false;
  currentDynamicRate = 3;

  document.getElementById('quest-flavor').innerText = currentQuestion.flavorText;
  renderMap('quest-map-container', currentQuestion.geoId, false);

  let allChars = [];
  let shuffled = [];

  if (currentSession.difficulty === 'beginner') {
    // 初級モード: 4択。正解とランダムな3つの誤答を選択。
    const others = geographyMaster
      .filter(g => g.geoId !== currentQuestion.geoId && g.type === currentQuestion.type)
      .map(g => g.name);
    
    // 足りない場合は他のタイプからも持ってくる
    if (others.length < 3) {
      const extra = geographyMaster
        .filter(g => g.geoId !== currentQuestion.geoId && !others.includes(g.name))
        .map(g => g.name);
      others.push(...extra.slice(0, 3 - others.length));
    }
    
    const choices = [currentQuestion.name, ...others.sort(() => 0.5 - Math.random()).slice(0, 3)];
    shuffled = choices.sort(() => 0.5 - Math.random());
    
    // パネルラベル固定
    const panelLabel = document.querySelector('#combo-container')?.previousElementSibling;
    if (panelLabel) panelLabel.innerHTML = `4択問題 (初級)`;
  } else {
    const targetChars = currentQuestion.name.split('');
    const allMistakes = getState().mistakes;
    const mistakeCharsForThis = allMistakes
      .filter(m => m.geoId === currentQuestion.geoId)
      .flatMap(m => (m.tappedDummy || '').split(''))
      .filter(c => !targetChars.includes(c) && c.trim() !== '');

    const mistakeCount = {};
    mistakeCharsForThis.forEach(c => { mistakeCount[c] = (mistakeCount[c] || 0) + 1; });
    const sortedMistakeChars = [...new Set(mistakeCharsForThis)]
      .sort((a, b) => mistakeCount[b] - mistakeCount[a])
      .slice(0, 4);

    const usedChars = new Set([...targetChars, ...sortedMistakeChars]);
    const remainingDummies = currentQuestion.dummyKanji.filter(c => !usedChars.has(c));
    const fillerDummies = remainingDummies.slice(0, Math.max(0, 12 - usedChars.size));

    allChars = [...targetChars, ...sortedMistakeChars, ...fillerDummies];
    shuffled = [...new Set(allChars)].slice(0, 12).sort(() => Math.random() - 0.5);

    const panelLabel = document.querySelector('#combo-container')?.previousElementSibling;
    if (panelLabel) {
      if (sortedMistakeChars.length > 0) {
        panelLabel.innerHTML = `解答パネル <span class="text-red-400 font-orbitron text-[10px] tracking-wider animate-pulse">⚠ 弱点特訓</span>`;
      } else {
        panelLabel.innerHTML = `解答パネル`;
      }
    }
  }

  renderKanjiPanel(shuffled, handleSelectChar);
  setKanjiPanelDisabled(false);
}

function showSessionResult() {
  const correctCount = currentSession.results.filter(r => r).length;
  const score = Math.round((correctCount / 10) * 100);

  let rewardText = "残念！8問以上正解でカード獲得です。";
  let gachaTriggered = false;

  if (correctCount >= 8) {
    rewardText = "合格！トレーディングカードを獲得しました！";
    // 正解率が高いほどSSR率アップ
    let rate = 3;
    if (correctCount === 10) rate = 15;
    else if (correctCount === 9) rate = 8;

    // 難易度による調整
    if (currentSession.difficulty === 'beginner') {
      rate = Math.max(1, Math.floor(rate * 0.5)); // 初級は確率半分
    } else if (currentSession.difficulty === 'advanced') {
      rate = Math.round(rate * 1.5); // 上級は確率1.5倍
    }

    currentDynamicRate = rate;
    const result = drawGacha();
    addCard(result.geoId);
    gachaResult = result;
    gachaTriggered = true;
  }

  // Use the new custom UI instead of alert
  renderSessionResult(correctCount, score, rewardText, gachaTriggered);
}

function renderSessionResult(count, score, rewardText, gachaTriggered) {
  const modal = document.getElementById('screen-result');
  const scorePercent = document.getElementById('result-score-percent');
  const correctCount = document.getElementById('result-correct-count');
  const rewardMsg = document.getElementById('result-reward-text');
  const circle = document.getElementById('result-progress-circle');
  const actionBtn = document.getElementById('result-action-btn');

  scorePercent.innerText = `${score}%`;
  correctCount.innerText = count;
  rewardMsg.innerText = rewardText;

  // Update progress circle (stroke-dasharray="364.4")
  const offset = 364.4 - (364.4 * score / 100);
  circle.style.strokeDashoffset = offset;

  // Set action button behavior
  if (gachaTriggered) {
    actionBtn.innerText = "GET REWARD";
    actionBtn.onclick = () => {
      closeResult();
      showGacha();
    };
  } else {
    actionBtn.innerText = "CLOSE";
    actionBtn.onclick = () => {
      closeResult();
      navigateTo('home');
    };
  }

  modal.classList.remove('hidden');
  void modal.offsetWidth; // Force reflow
  modal.classList.add('active'); // In case we use active class
  modal.classList.remove('opacity-0');
  
  if (sounds.confirm && state.sfxEnabled) sounds.confirm.play();
  currentSession = null;
}

function closeResult() {
  const modal = document.getElementById('screen-result');
  modal.classList.add('opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('active');
  }, 500);
}

function drawGacha() {
  // SSR確定チケットがあれば使用
  if (state.ssrTickets > 0) {
    state.ssrTickets--;
    saveGachaState();
    const ssrPool = geographyMaster.filter(g => g.rarity === 'SSR');
    return ssrPool[Math.floor(Math.random() * ssrPool.length)];
  }

  // 1. SSR当選判定
  const roll = Math.random() * 100;
  let drawnRarity = 'N';

  if (roll < currentDynamicRate) drawnRarity = 'SSR';
  else if (roll < 10 + currentDynamicRate) drawnRarity = 'SR';
  else if (roll < 35 + currentDynamicRate) drawnRarity = 'R';
  else drawnRarity = 'N';

  // 当該レアリティのプールを取得
  let pool = geographyMaster.filter(g => g.rarity === drawnRarity);
  if (pool.length === 0) pool = geographyMaster.filter(g => g.rarity === 'N');
  if (pool.length === 0) pool = geographyMaster;

  return pool[Math.floor(Math.random() * pool.length)];
}

function showGacha() {
  const modal = document.getElementById('gacha-modal');
  const container = document.getElementById('gacha-card-container');
  const glow = document.getElementById('gacha-ssr-glow');
  const btn = document.getElementById('gacha-close-btn');

  modal.classList.remove('hidden');
  void modal.offsetWidth;
  modal.classList.remove('opacity-0');

  // ガチャ結果を表示
  if (!gachaResult) gachaResult = currentQuestion; // フォールバック
  container.innerHTML = generateCardHTML(gachaResult);

  if (sounds.gacha && state.sfxEnabled) sounds.gacha.play();

  if (gachaResult.rarity === 'SSR') {
    glow.classList.remove('hidden', 'scale-0');
    glow.classList.add('ssr-glow-pulse', 'scale-100');
  } else {
    glow.classList.add('hidden');
  }

  setTimeout(() => {
    container.classList.remove('translate-y-20', 'opacity-0');
    btn.classList.remove('opacity-0');
  }, 100);
}

document.addEventListener('DOMContentLoaded', initApp);

// ============================================================
// BOSS BATTLE
// ============================================================
let bossTimerInterval = null;
let bossTimeLeft = 60;
let bossScore = 0;
let bossQueue = [];
let bossCurrentQ = null;
let bossAnsweredStr = '';

function startBossBattle() {
  bossScore = 0;
  bossAnsweredStr = '';
  bossTimeLeft = 60;

  document.getElementById('boss-score').innerText = '0';
  document.getElementById('boss-timer').innerText = '60';
  document.getElementById('boss-result').classList.add('hidden');
  document.getElementById('boss-answer-box').innerText = '';

  // \u5168\u554f\u984c\u3092\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u3066\u30ad\u30e5\u30fc\u306b
  bossQueue = [...geographyMaster].sort(() => Math.random() - 0.5);

  if (bossTimerInterval) clearInterval(bossTimerInterval);
  bossTimerInterval = setInterval(() => {
    bossTimeLeft--;
    const timerEl = document.getElementById('boss-timer');
    if (timerEl) {
      timerEl.innerText = bossTimeLeft;
      if (bossTimeLeft <= 10) timerEl.classList.add('text-red-400', 'animate-pulse');
      else timerEl.classList.remove('text-red-400', 'animate-pulse');
    }
    if (bossTimeLeft <= 0) {
      clearInterval(bossTimerInterval);
      endBossBattle();
    }
  }, 1000);

  playBGM('boss');
  nextBossQuestion();
}

function nextBossQuestion() {
  if (bossQueue.length === 0) {
    bossQueue = [...geographyMaster].sort(() => Math.random() - 0.5);
  }
  bossCurrentQ = bossQueue.shift();
  bossAnsweredStr = '';

  const flavorEl = document.getElementById('boss-flavor');
  if (flavorEl) flavorEl.innerText = bossCurrentQ.flavorText;
  renderBossMap();

  // \u30ab\u30f3\u30b8\u30d1\u30cd\u30eb\u751f\u6210
  const targetChars = bossCurrentQ.name.split('');
  const combined = [...new Set([...targetChars, ...bossCurrentQ.dummyKanji])].slice(0, 12);
  const shuffled = combined.sort(() => Math.random() - 0.5);
  renderBossKanjiPanel(shuffled);
  document.getElementById('boss-answer-box').innerText = '';
}

function renderBossMap() {
  if (typeof JAPAN_TOPOJSON === 'undefined') return;
  const container = d3.select('#boss-map-container');
  container.selectAll('*').remove();

  const width = 800, height = 600;
  const svg = container.append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('class', 'w-full h-full overflow-visible');

  // Zoom Behavior Implementation
  const g = svg.append("g");
  const zoom = d3.zoom()
    .scaleExtent([1, 15])
    .on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

  svg.call(zoom);

  // Higher scale for more detailed view
  const projection = d3.geoMercator().center([136.5, 35.5]).scale(1750).translate([width / 2, height / 2]);
  const path = d3.geoPath().projection(projection);
  const topoData = topojson.feature(JAPAN_TOPOJSON, JAPAN_TOPOJSON.objects.japan);

  g.selectAll('path').data(topoData.features).enter().append('path')
    .attr('d', path)
    .attr('fill', '#0f172a')
    .attr('stroke', '#ff2855')
    .attr('stroke-width', 1.2)
    .attr('stroke-linecap', 'round')
    .attr('stroke-linejoin', 'round')
    .attr('class', 'transition-colors duration-500');

  if (!bossCurrentQ) return;

  let center = null;
  // mapping follows...
  const feature = customLandmarks.features.find(f => f.properties.id === bossCurrentQ.geoId);
  
  if (feature) {
    center = path.centroid(feature);
  } 
  
  // 2. Fallback to Prefecture mapping
  if (!center || isNaN(center[0])) {
    const prefs = geoToPrefecture[bossCurrentQ.geoId];
    if (prefs && prefs.length > 0) {
      // Find the first matching prefecture in topoData
      const feat = topoData.features.find(f => prefs.includes(f.properties.nam));
      if (feat) center = path.centroid(feat);
    }
  }

  if (center && !isNaN(center[0])) {
    const r1 = g.append('circle').attr('cx', center[0]).attr('cy', center[1]).attr('r', 4)
      .attr('fill', 'none').attr('stroke', 'rgba(0,255,255,0.9)').attr('stroke-width', 2).attr('pointer-events', 'none');
    r1.node().innerHTML = `<animate attributeName="r" from="4" to="50" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" from="0.9" to="0" dur="1.5s" repeatCount="indefinite"/>`;
    const r2 = g.append('circle').attr('cx', center[0]).attr('cy', center[1]).attr('r', 4)
      .attr('fill', 'none').attr('stroke', 'rgba(0,200,255,0.7)').attr('stroke-width', 1.5).attr('pointer-events', 'none');
    r2.node().innerHTML = `<animate attributeName="r" from="4" to="50" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" from="0.7" to="0" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>`;
    g.append('circle').attr('cx', center[0]).attr('cy', center[1]).attr('r', 6)
      .attr('fill', 'rgba(0,255,255,1)').attr('pointer-events', 'none');
  }
}

function renderBossKanjiPanel(options) {
  const panel = document.getElementById('boss-kanji-panel');
  if (!panel) return;
  panel.innerHTML = '';
  options.forEach(char => {
    const btn = document.createElement('button');
      btn.className = `w-full h-12 md:h-14 bg-red-950/40 border-2 border-red-800/60 rounded-lg
        text-2xl font-bold font-noto text-red-200 leading-none
        flex items-center justify-center
        hover:border-red-400 hover:bg-red-900/60 hover:text-white
        transition-all duration-150 transform hover:scale-105 active:scale-95`;
      btn.innerHTML = `<span>${char}</span>`;
      btn.onclick = () => handleBossSelect(char);
      panel.appendChild(btn);
    });

  // DEL + SUBMITボタン
  const row = document.createElement('div');
  row.className = 'col-span-full flex gap-2 mt-0.5';
  row.innerHTML = `
    <button onclick="handleBossDelete()" class="flex-1 h-10 bg-slate-900/60 border border-slate-600 rounded-lg font-orbitron text-[10px] text-slate-400 hover:text-white hover:border-slate-400 transition-all uppercase tracking-tighter">&#x232B; DEL</button>
    <button onclick="handleBossSubmit()" class="flex-[2] h-10 bg-red-900/60 border-2 border-red-500/70 rounded-lg font-orbitron text-xs font-bold text-red-300 hover:border-red-300 hover:text-white hover:bg-red-800/60 transition-all tracking-widest uppercase">&#x25B7; SUBMIT</button>
  `;
  panel.appendChild(row);
}

function handleBossSelect(char) {
  if (!bossCurrentQ || bossAnsweredStr.length >= bossCurrentQ.name.length) return;
  triggerHaptic(10);
  bossAnsweredStr += char;
  document.getElementById('boss-answer-box').innerText = bossAnsweredStr;

  if (sounds.key && state.sfxEnabled) {
    sounds.key.rate(0.85 + Math.random() * 0.2); // Slower/deeper pitch for Boss
    sounds.key.play();
  }
}

function handleBossDelete() {
  if (bossAnsweredStr.length === 0) return;
  triggerHaptic(15);
  bossAnsweredStr = bossAnsweredStr.slice(0, -1);
  document.getElementById('boss-answer-box').innerText = bossAnsweredStr;
  if (sounds.delete && state.sfxEnabled) sounds.delete.play();
}

function handleBossSubmit() {
  if (!bossCurrentQ) return;
  
  if (sounds.submit && state.sfxEnabled) sounds.submit.play();

  if (bossAnsweredStr === bossCurrentQ.name) {
    // 正解: 時間ボーナス + コンボ
    const basePoints = 100;
    const timeBonus = bossTimeLeft * 2;
    bossScore += basePoints + timeBonus;
    document.getElementById('boss-score').innerText = bossScore;
    if (sounds?.unlock && state.sfxEnabled) sounds.unlock.play();
    nextBossQuestion();
  } else {
    // 不正解
    document.getElementById('boss-answer-box').innerText = '';
    if (sounds?.error && state.sfxEnabled) sounds.error.play();
    // ペナルティ: 5秒差し引き
    bossTimeLeft = Math.max(0, bossTimeLeft - 5);
    document.getElementById('boss-timer').innerText = bossTimeLeft;
    bossAnsweredStr = '';
  }
}

function endBossBattle() {
  document.getElementById('boss-final-score').innerText = bossScore;
  document.getElementById('boss-result').classList.remove('hidden');
}

// ============================================================
// RANKING
// ============================================================
async function fetchAndShowRanking() {
  const listEl = document.getElementById('ranking-list');
  if (!listEl) return;
  listEl.innerHTML = '<div class="text-slate-500 text-center font-noto py-12">\u8aad\u307f\u8fbc\u307f\u4e2d...</div>';

  const ranks = window.geoFirebase ? await window.geoFirebase.fetchRanking(null, 20) : [];

  if (ranks.length === 0) {
    listEl.innerHTML = '<div class="text-slate-500 text-center font-noto py-12">\u307e\u3060\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093\u3002<br>\u30dc\u30b9\u6226\u306b\u6311\u6226\u3057\u3066\u30c8\u30c3\u30d7\u306b\u7acb\u3068\u3046\uff01</div>';
    return;
  }

  const medalColors = ['text-yellow-400', 'text-slate-300', 'text-amber-600'];
  listEl.innerHTML = ranks.map((r, i) => `
    <div class="flex items-center gap-4 px-4 py-3 rounded-xl border ${i < 3 ? 'border-yellow-700/40 bg-yellow-900/10' : 'border-slate-700/40 bg-slate-900/30'}">
      <span class="font-orbitron font-bold text-2xl w-8 text-center ${medalColors[i] || 'text-slate-500'}">${r.rank}</span>
      <div class="flex-1">
        <span class="text-white font-bold font-noto">${r.nickname}</span>
        ${r.areaName ? `<span class="text-slate-500 text-xs ml-2">${r.areaName}</span>` : ''}
      </div>
      <div class="text-right">
        <div class="text-cyber-neonGold font-orbitron font-bold text-xl">${r.score.toLocaleString()}</div>
        <div class="text-slate-600 text-xs">${r.timestamp}</div>
      </div>
    </div>
  `).join('');
}


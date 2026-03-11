// --- data.js ---
const geographyMaster = [
  {
    "geoId": "river_shinano",
    "name": "信濃川",
    "kana": "しなのがわ",
    "type": "river",
    "charName": "シアン・ストリーム",
    "charImage": "assets/avatars/avatar_water_1773059849617.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "日本最長の大動脈、越後平野を潤す恵みの水",
    "stats": { "長さ": "367km (全国1位)", "流域面積": "11,900km² (全国3位)" },
    "relatedKeywords": ["越後平野", "稲作", "大河津分水路"],
    "dummyKanji": ["農", "阿", "賀", "木", "曽", "天", "竜", "黒", "部"],
    "hiddenFacts": [
      "Lv2: 大河津分水路は1922年完成。越後平野を洪水から守った",
      "Lv3: 河口の港町は新潟市。日本海側に注ぐ",
      "Lv4: 元は山梨県長野市内が発源。信濃国(長野県)から名前がつく",
      "Lv5: 中流部の新潟平野仙田市付近では「姫川」と呼ばれる"
    ]
  },
  {
    "geoId": "mount_hida",
    "name": "飛騨山脈",
    "kana": "ひださんみゃく",
    "type": "mountain",
    "charName": "ハイダ・ピーク",
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "『北アルプス』の別名を持つ、3000m級の巨峰群",
    "stats": { "最高峰": "穂高岳 (3,190m)", "通称": "北アルプス" },
    "relatedKeywords": ["氷河地形", "中部山岳国立公園"],
    "dummyKanji": ["弾", "木", "曽", "赤", "石", "白", "山", "御", "嶽"],
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
    "stats": { "地形": "リアス海岸", "海流": "親潮と黒潮の潮目" },
    "relatedKeywords": ["養殖業", "東日本大震災", "津波"],
    "dummyKanji": ["三", "陸", "志", "摩", "若", "狭", "九", "十", "九", "島"],
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
    "charImage": "assets/avatars/avatar_city_1773059899618.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "日本最大の湖、近畿の水瓶として40万人の命を支える",
    "stats": { "面積": "670km² (全国1位)", "貯水量": "275億m³" },
    "relatedKeywords": ["近畿の水瓶", "固有種", "琵琶湖疏水"],
    "dummyKanji": ["霞", "ヶ", "浦", "サ", "ロ", "マ", "摩", "周", "猪", "苗", "代"],
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
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "日本一の広さを誇る平野、首都圏の基盤",
    "stats": { "面積": "17,000km² (全国1位)", "土壌": "関東ローム層" },
    "relatedKeywords": ["利根川", "近郊農業", "ヒートアイランド現象"],
    "dummyKanji": ["濃", "尾", "石", "狩", "越", "後", "筑", "紫", "十", "勝"],
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
    "charImage": "assets/avatars/avatar_water_1773059849617.png",
    "region": "kanto",
    "rarity": "SSR",
    "flavorText": "『坂東太郎』との異名を持つ、日本最大の流域面積を誇る川",
    "stats": { "長さ": "322km (全国2位)", "流域面積": "16,840km² (全国1位)" },
    "relatedKeywords": ["坂東太郎", "関東平野", "水郷"],
    "dummyKanji": ["信", "濃", "阿", "賀", "木", "曽", "筑", "後", "淀"],
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
    "charName": "モガミ・フロウ",
    "charImage": "assets/avatars/avatar_water_1773059849617.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "山形県を縦断し日本海へ注ぐ、日本三大急流の一つ",
    "stats": { "長さ": "229km", "通称": "日本三大急流" },
    "relatedKeywords": ["山形県", "庄内平野", "松尾芭蕉"],
    "dummyKanji": ["球", "磨", "富士", "信", "濃", "阿", "賀"],
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
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "hokkaido",
    "rarity": "R",
    "flavorText": "北海道西部に広がる広大な平野、大規模な稲作が行われる",
    "stats": { "面積": "約3,800km²", "主要都市": "札幌市" },
    "relatedKeywords": ["泥炭地", "客土", "石狩川"],
    "dummyKanji": ["十", "勝", "根", "釧", "筑", "紫", "佐", "賀"],
    "hiddenFacts": [
      "Lv2: もともとは泥炭地という湿地で農業に不向きだった",
      "Lv3: 他の土地から土を持ってくる『客土』によって豊かな農地になった",
      "Lv4: 石狩川の三日月湖が多く残っている",
      "Lv5: 札幌・千歳・小樽などの主要都市が集中している"
    ]
  },
  {
    "geoId": "mount_fuji",
    "name": "富士山",
    "kana": "ふじさん",
    "type": "mountain",
    "charName": "マウント・フジ",
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "chubu",
    "rarity": "SSR",
    "flavorText": "日本の象徴、標高3776mの独立最高峰",
    "stats": { "標高": "3,776m (日本一)", "山容": "成層火山" },
    "relatedKeywords": ["世界遺産", "独立峰", "フォッサマグナ"],
    "dummyKanji": ["剣", "北", "南", "中", "阿", "蘇", "白", "山", "立", "山"],
    "hiddenFacts": [
      "Lv2: 山頂は静岡県と山梨県のどちらにも属さない境界未定地がある",
      "Lv3: 数百年前には大きな噴火（宝永噴火）があった",
      "Lv4: 豊富な伏流水があり、麓では湧水が有名",
      "Lv5: 日本の三名山の一つでもある"
    ]
  },
  {
    "geoId": "mount_ou",
    "name": "奥羽山脈",
    "kana": "おううさんみゃく",
    "type": "mountain",
    "charName": "オウウ・スパイン",
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "tohoku",
    "rarity": "SSR",
    "flavorText": "東北の背骨、冷たい『やませ』をせき止める壁",
    "stats": { "延長": "約500km (日本最長)", "最高峰": "岩手山 (2,038m)" },
    "relatedKeywords": ["背骨", "やませ", "気候の境界", "分水嶺"],
    "dummyKanji": ["羽", "出", "北", "上", "阿", "武", "隈", "白", "神"],
    "hiddenFacts": [
      "Lv2: 東日本の太平洋側と日本海側の気候を分ける重要な境界線",
      "Lv3: 火山が多く、温泉地も多数存在する",
      "Lv4: かつては交通の難所だったが、現在はトンネルが貫通している",
      "Lv5: 日本最大の延長を誇る陸上の山脈"
    ]
  },
  {
    "geoId": "mount_kiso",
    "name": "木曽山脈",
    "kana": "きそさんみゃく",
    "type": "mountain",
    "charName": "キソ・リッジ",
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "中央アルプス、伊那盆地を眼下に見下ろす連峰",
    "stats": { "最高峰": "木曽駒ヶ岳 (2,956m)", "通称": "中央アルプス" },
    "relatedKeywords": ["中央アルプス", "伊那盆地", "天竜川"],
    "dummyKanji": ["曾", "飛", "騨", "赤", "石", "南", "北", "中", "央"],
    "hiddenFacts": [
      "Lv2: 天竜川と木曽川に挟まれた険しい山脈",
      "Lv3: 駒ヶ岳ロープウェイで一気に2,600m超まで登れる",
      "Lv4: 日本アルプスの一つとして数えられる",
      "Lv5: 花崗岩が多く、白い岩肌が特徴的"
    ]
  },
  {
    "geoId": "mount_akaishi",
    "name": "赤石山脈",
    "kana": "あかいしさんみゃく",
    "type": "mountain",
    "charName": "アカイシ・ウォール",
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "南アルプス、鋭くそびえる『南の巨壁』",
    "stats": { "最高峰": "北岳 (3,193m)", "通称": "南アルプス" },
    "relatedKeywords": ["南アルプス", "北岳", "大井川"],
    "dummyKanji": ["飛", "騨", "木", "曽", "中央", "富士", "箱", "根", "伊", "豆"],
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
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "扇状地が広がる果実の王国、武田信玄の故郷",
    "stats": { "特色": "ぶどう・桃の生産日本一", "地形": "扇状地が発達" },
    "relatedKeywords": ["扇状地", "果樹栽培", "ぶどう", "甲州"],
    "dummyKanji": ["府", "神", "戸", "福", "島", "山", "形", "長", "野"],
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
    "charImage": "assets/avatars/avatar_city_1773059899618.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "三方を山に囲まれた古都、夏は蒸し暑く冬は冷え込む",
    "stats": { "特色": "盆地特有の気候", "河川": "淀川水系" },
    "relatedKeywords": ["古都", "盆地特有の気候", "内陸性気候"],
    "dummyKanji": ["奈", "良", "近", "江", "滋", "賀", "都", "京", "阪"],
    "hiddenFacts": [
      "Lv2: 古都京都の街並みを守るため、景観条例が厳しい",
      "Lv3: 夏の『京の底冷え』と呼ばれる独特の寒さがある",
      "Lv4: 鴨川や桂川が流れ、豊かな水資源に恵まれている",
      "Lv5: 伝統工緯や茶道などの文化が今も色濃く残る"
    ]
  },
  {
    "geoId": "highland_kitakami",
    "name": "北上高地",
    "kana": "きたかみこうち",
    "type": "highland",
    "charName": "キタカミ-プラトー",
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "tohoku",
    "rarity": "SR",
    "flavorText": "東北東部の古い隆起準平原、リアス海岸の背後に連なる",
    "stats": { "地形": "隆起準平原", "気候": "冷涼 (やませの影響)" },
    "relatedKeywords": ["隆起準平原", "リアス海岸", "三陸"],
    "dummyKanji": ["山", "脈", "奥", "羽", "出", "下", "上", "南", "西"],
    "hiddenFacts": [
      "Lv2: 古い地層が隆起してできた、なだらかな地形が特徴",
      "Lv3: リアス海岸が発達した三陸海岸の背後に位置する",
      "Lv4: 酪農や林業が盛んなエリアでもある",
      "Lv5: 地質学的に非常に古い岩石が見られる"
    ]
  },
  {
    "geoId": "mount_dewa",
    "name": "出羽山地",
    "kana": "でわさんち",
    "type": "mountain",
    "charName": "デワ-フォレスト",
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "tohoku",
    "rarity": "R",
    "flavorText": "山形県を南北に走る山地、日本海からの風を遮る",
    "stats": { "位置": "山形県中央部", "信仰": "出羽三山" },
    "relatedKeywords": ["日本海側", "最上川", "庄内平野"],
    "dummyKanji": ["羽", "奥", "羽", "阿", "武", "隈", "北", "上"],
    "hiddenFacts": [
      "Lv2: 庄内平野を冬の強い季節風から守る役割がある",
      "Lv3: 出羽三山（月山・羽黒山・湯殿山）の信仰と深い関わりがある",
      "Lv4: 最上川が山地を切り裂いて日本海へと注ぐ",
      "Lv5: ブナの原生林が多く残されている"
    ]
  },
  {
    "geoId": "mount_echigo",
    "name": "越後山脈",
    "kana": "えちごさんみゃく",
    "type": "mountain",
    "charName": "エチゴ-スノー",
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "日本有数の豪雪地帯、信濃川の源流域の一つ",
    "stats": { "気候": "日本有数の豪雪", "用途": "水力発電" },
    "relatedKeywords": ["雪解け水", "水力発電", "信濃川"],
    "dummyKanji": ["超", "後", "期", "飛", "騨", "木", "曽", "赤", "石"],
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
    "charName": "シマ-パール",
    "charImage": "assets/avatars/avatar_ice_1773059882411.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "複雑なリアス海岸が続く、真珠養殖の発祥地",
    "stats": { "地形": "リアス海岸", "産業": "真珠養殖" },
    "relatedKeywords": ["真珠養殖", "英虞湾", "リアス海岸"],
    "dummyKanji": ["島", "摩", "紀", "伊", "知", "多", "渥", "美", "能", "登"],
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
    "charName": "キイ・ジャイアント",
    "charImage": "assets/avatars/avatar_ice_1773059882411.png",
    "region": "kinki",
    "rarity": "SSR",
    "flavorText": "日本最大、黒潮、林業、尾鷲",
    "stats": { "規模": "日本最大級の半島", "気候": "多雨地域" },
    "relatedKeywords": ["日本最大", "黒潮", "林業", "尾鷲"],
    "dummyKanji": ["記", "伊", "志", "摩", "佐", "多", "岬", "室", "戸"],
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
    "charImage": "assets/avatars/avatar_water_1773059849617.png",
    "region": "kinki",
    "rarity": "R",
    "flavorText": "紀伊半島と四国の間の海域、鳴門の渦潮の近く",
    "stats": { "接続": "大阪湾と太平洋", "特徴": "豊かな漁場" },
    "relatedKeywords": ["徳島県", "和歌山県", "鳴門海峡"],
    "dummyKanji": ["豊", "後", "鳴", "門", "明", "石", "海", "峡", "路"],
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
    "charImage": "assets/avatars/avatar_water_1773059849617.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "日本海側最大のリアス海岸、古くは『御食国』",
    "stats": { "地形": "リアス海岸", "主要都市": "敦賀市" },
    "relatedKeywords": ["リアス海岸", "原子力発電所", "敦賀"],
    "dummyKanji": ["伊", "勢", "富", "山", "大", "阪", "三", "河", "狭"],
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
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "黒潮の影響で温暖な平野、冬の促成栽培が盛ん",
    "stats": { "農業": "促成栽培 (ピーマン等)", "気候": "温暖多雨" },
    "relatedKeywords": ["促成栽培", "ピーマン", "黒潮"],
    "dummyKanji": ["筑", "紫", "佐", "賀", "八", "代", "熊", "本", "薩", "摩"],
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
    "charName": "シラス-ダスト",
    "charImage": "assets/avatars/avatar_earth_1773059868884.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "南九州の火山灰地、サツマイモや畜産が盛ん",
    "stats": { "土壌": "シラス (火山砕屑物)", "名産": "サツマイモ" },
    "relatedKeywords": ["火山灰", "サツマイモ", "桜島"],
    "dummyKanji": ["白", "洲", "笠", "野", "原", "牧", "之", "原", "根"],
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
    "charImage": "assets/avatars/avatar_city_1773059899618.png",
    "region": "kinki",
    "rarity": "SR",
    "flavorText": "古称は大和盆地、水不足を補う『ため池』が点在する",
    "stats": { "別名": "大和盆地", "特徴": "ため池の多さ" },
    "relatedKeywords": ["大和盆地", "ため池", "金魚養殖"],
    "dummyKanji": ["京", "都", "近", "江", "上", "野", "伊", "勢", "志"],
    "hiddenFacts": [
      "Lv2: 水資源が乏しかったため、数多くの『ため池』が作られた",
      "Lv3: 大和郡山市を中心に金魚の養殖が全国的に有名",
      "Lv4: 歴史の舞台となった古墳や寺社が数多く点在する",
      "Lv5: 周囲を山に囲まれ、冬は非常に冷え込む気候"
    ]
  },
  {
    "geoId": "mount_chugoku",
    "name": "中国山地",
    "kana": "ちゅうごくさんち",
    "type": "mountain",
    "charName": "チュウゴク-テール",
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "chugoku",
    "rarity": "SSR",
    "flavorText": "標高は低いがなだらかに連なる、かつての鉄の産地",
    "stats": { "形状": "隆起準平原", "歴史": "たたら製鉄" },
    "relatedKeywords": ["なだらか", "豪雪地帯", "冬の季節風"],
    "dummyKanji": ["四", "国", "讃", "岐", "石", "鎚", "剣", "山", "脈"],
    "hiddenFacts": [
      "Lv2: 標高はそれほど高くないが、冬の日本海側（山陰）は豪雪地帯になる",
      "Lv3: 古くから『たたら製鉄』という伝統的な製鉄が行われていた",
      "Lv4: 山地内には多くのカルスト地形（鍾乳洞など）が見られる",
      "Lv5: 瀬戸内側と日本海側の交通・文化を繋ぐ多くの峠がある"
    ]
  },
  {
    "geoId": "mount_shikoku",
    "name": "四国山脈",
    "kana": "しこくさんみゃく",
    "type": "mountain",
    "charName": "シコク-ピーク",
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "shikoku",
    "rarity": "SSR",
    "flavorText": "鋭く険しい石鎚山を擁する、四国の険しい分水嶺",
    "stats": { "最高峰": "石鎚山 (1,982m)", "気候": "太平洋側多雨" },
    "relatedKeywords": ["険しい", "石鎚山", "剣山", "太平洋側"],
    "dummyKanji": ["中", "国", "讃", "岐", "阿", "讃", "山", "地", "高"],
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
    "charImage": "assets/avatars/avatar_city_1773059899618.png",
    "region": "chubu",
    "rarity": "SR",
    "flavorText": "長野県最大の湖、精密機械工業の拠点に囲まれる",
    "stats": { "現象": "御神渡り", "流出": "天竜川" },
    "relatedKeywords": ["天竜川", "精密機械工業", "断層"],
    "dummyKanji": ["諏", "訪", "河", "口", "浜", "名", "中", "禅", "寺"],
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
    "charName": "カスミ-ミス",
    "charImage": "assets/avatars/avatar_city_1773059899618.png",
    "region": "kanto",
    "rarity": "SR",
    "flavorText": "日本第2位の面積、利根川の下流域に広がる巨大な湖",
    "stats": { "面積": "約220km² (全国2位)", "名産": "ワカサギ・レンコン" },
    "relatedKeywords": ["日本第2位", "干拓", "利根川"],
    "dummyKanji": ["琵", "琶", "中", "海", "北", "浦", "印", "旛", "沼"],
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
    "charImage": "assets/avatars/avatar_sky_1773059837567.png",
    "region": "kyushu",
    "rarity": "SR",
    "flavorText": "中央に雲仙岳がそびえる、火山の恵みと歴史の地",
    "stats": { "主峰": "雲仙岳", "歴史": "島原の乱" },
    "relatedKeywords": ["雲仙岳", "有明海", "火砕流"],
    "dummyKanji": ["大", "隅", "薩", "摩", "国", "東", "北", "松", "浦"],
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
    "charName": "カンモン-リンク",
    "charImage": "assets/avatars/avatar_water_1773059849617.png",
    "region": "chugoku",
    "rarity": "SR",
    "flavorText": "本州と九州を隔てる狭い海域、壇ノ浦の舞台",
    "stats": { "接続": "日本海と瀬戸内海", "特徴": "非常に複雑で速い潮流" },
    "relatedKeywords": ["下関", "門司", "本州と九州", "壇ノ浦"],
    "dummyKanji": ["明", "石", "鳴", "門", "津", "軽", "宗", "谷", "紀"],
    "hiddenFacts": [
      "Lv2: 本州最西端の下関市と九州最北端の北九州市を隔てる狭い海峡",
      "Lv3: 世界に類を見ない『海底を歩ける人道トンネル』がある",
      "Lv4: 源平合戦の最終決戦場、壇ノ浦（だんのうら）の舞台",
      "Lv5: 非常に複雑で速い潮流があり、1日約700隻の船が行き交う"
    ]
  }
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
  SSR_TICKETS: 'hq_ssr_tickets'
};

const state = {
  progress: {},
  cards: {},
  mistakes: [],
  gachaPoints: 0,
  silverTickets: 0,
  ssrTickets: 0
};

function loadState() {
  try {
    const savedProg = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (savedProg) state.progress = JSON.parse(savedProg);

    const savedCards = localStorage.getItem(STORAGE_KEYS.CARDS);
    if (savedCards) state.cards = JSON.parse(savedCards);

    const savedMistakes = localStorage.getItem(STORAGE_KEYS.MISTAKES);
    if (savedMistakes) state.mistakes = JSON.parse(savedMistakes);

    state.gachaPoints = parseInt(localStorage.getItem(STORAGE_KEYS.GACHA_POINTS) || '0');
    state.silverTickets = parseInt(localStorage.getItem(STORAGE_KEYS.SILVER_TICKETS) || '0');
    state.ssrTickets = parseInt(localStorage.getItem(STORAGE_KEYS.SSR_TICKETS) || '0');
  } catch (e) {
    console.error('Failed to load state', e);
  }
}

function saveGachaState() {
  localStorage.setItem(STORAGE_KEYS.GACHA_POINTS, String(state.gachaPoints));
  localStorage.setItem(STORAGE_KEYS.SILVER_TICKETS, String(state.silverTickets));
  localStorage.setItem(STORAGE_KEYS.SSR_TICKETS, String(state.ssrTickets));
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
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.progress));
  // クラウド同期
  if (window.geoFirebase) window.geoFirebase.syncProgressToCloud(geoId, masteryLevel);
}

function logMistake(geoId, tappedDummy) {
  state.mistakes.push({
    geoId,
    tappedDummy,
    timestamp: Date.now()
  });
  localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(state.mistakes));
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
  localStorage.setItem(STORAGE_KEYS.CARDS, JSON.stringify(state.cards));
  // クラウド同期
  if (window.geoFirebase) window.geoFirebase.syncCardToCloud(cardId, state.cards[cardId].level, state.cards[cardId].quantity);
}

// --- ui.js ---
function navigateTo(screenId) {
  document.querySelectorAll('.screen-view').forEach(el => el.classList.remove('active', 'hidden'));
  document.querySelectorAll('.screen-view').forEach(el => {
    if (el.id === `screen-${screenId}`) {
      el.classList.add('active', 'flex');
    } else {
      el.classList.add('hidden');
      el.classList.remove('flex', 'active');
    }
  });

  const header = document.getElementById('global-header');
  if (header) {
    if (screenId === 'home') {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
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
    .attr("class", `w-full h-full ${isHistoryMode ? 'drop-shadow-neon-blue max-h-[70vh]' : 'drop-shadow-[0_0_15px_rgba(0,255,255,0.1)] max-h-[60vh]'} overflow-visible`);

  // ネオングローフィルター定義
  const defs = svg.append('defs');
  const filter = defs.append('filter').attr('id', 'neon-glow').attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
  filter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'blur');
  const feMerge = filter.append('feMerge');
  feMerge.append('feMergeNode').attr('in', 'blur');
  feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

  // 都道府県単位の紐付け (地方系の問題対応)
  const geoToPrefecture = {
    "hokkaido_region": ["Hokkaido"],
    "west_japan": ["Osaka Fu", "Hyogo Ken", "Kyoto Fu", "Nara Ken", "Wakayama Ken"],
    "kyushu": ["Fukuoka Ken", "Saga Ken", "Nagasaki Ken", "Kumamoto Ken", "Oita Ken", "Miyazaki Ken", "Kagoshima Ken"],
    "lake_biwa": ["Shiga Ken"],
    "lake_suwa": ["Nagano Ken"],
    "lake_kasumigaura": ["Ibaraki Ken"],
    "plain_kanto": ["Tokyo To", "Kanagawa Ken", "Saitama Ken", "Chiba Ken", "Ibaraki Ken", "Tochigi Ken", "Gunma Ken"],
    "plain_ishikari": ["Hokkaido"],
    "river_mogami": ["Yamagata Ken"],
    "basin_kofu": ["Yamanashi Ken"],
    "basin_kyoto": ["Kyoto Fu"],
    "basin_nara": ["Nara Ken"],
    "peninsula_shima": ["Mie Ken"],
    "peninsula_kii": ["Wakayama Ken", "Mie Ken", "Nara Ken"],
    "peninsula_shimabara": ["Nagasaki Ken"],
    "bay_wakasa": ["Fukui Ken", "Kyoto Fu"],
    "plain_miyazaki": ["Miyazaki Ken"],
    "plateau_shirasu": ["Kagoshima Ken", "Miyazaki Ken"]
  };

  // 川や山脈などのカスタム地形データ (GeoJSON LineString)
  const customLandmarks = {
    type: "FeatureCollection",
    features: [
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
        properties: { id: "mount_hida", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[137.6, 36.2], [137.7, 36.5], [137.6, 36.8]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_ou", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[140.8, 37.5], [141.0, 38.5], [140.9, 39.5], [140.8, 40.8]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_kiso", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[137.7, 35.6], [137.8, 36.0]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_akaishi", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[138.1, 35.2], [138.2, 35.7]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_echigo", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[139.0, 36.8], [139.2, 37.2]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_chugoku", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[132.5, 34.5], [133.5, 35.0], [134.5, 35.2]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_shikoku", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[133.0, 33.7], [134.0, 33.8]] }
      },
      {
        type: "Feature",
        properties: { id: "highland_kitakami", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[141.4, 39.0], [141.6, 40.0]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_dewa", type: "mountain" },
        geometry: { type: "LineString", coordinates: [[140.0, 38.2], [140.2, 39.0]] }
      },
      {
        type: "Feature",
        properties: { id: "coast_sanriku", type: "coast" },
        geometry: { type: "LineString", coordinates: [[141.6, 38.8], [142.0, 39.6], [141.9, 40.1]] }
      },
      {
        type: "Feature",
        properties: { id: "mount_fuji", type: "point" },
        geometry: { type: "Point", coordinates: [138.73, 35.36] }
      },
      {
        type: "Feature",
        properties: { id: "strait_kanmon", type: "point" },
        geometry: { type: "Point", coordinates: [130.95, 33.95] }
      }
    ]
  };

  const isLandmark = (geoId) => [
    "river_shinano", "river_tone", "mount_hida", "mount_ou", "mount_kiso", "mount_akaishi",
    "mount_echigo", "mount_chugoku", "mount_shikoku", "highland_kitakami", "mount_dewa",
    "coast_sanriku", "mount_fuji", "strait_kanmon"
  ].includes(geoId);

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
      ? 'fill-[#0f172a] stroke-slate-700 stroke-[0.5px] outline-none transition-all duration-500 hover:fill-slate-800 pointer-events-auto'
      : 'fill-slate-700/60 stroke-slate-400 stroke-[1px] outline-none transition-all duration-300 hover:fill-slate-600/80 pointer-events-auto';

    if (achievedLevel > 0) {
      let isActive = true;
      if (achievedLevel === 1 && daysPassed > 3) isActive = false;
      if (achievedLevel === 2 && daysPassed > 7) isActive = false;
      if (achievedLevel === 3 && daysPassed > 30) isActive = false;

      if (!isActive) return `fill-slate-800 stroke-slate-600 stroke-[0.5px] grayscale outline-none`;

      switch (achievedLevel) {
        case 1: baseClass = `fill-cyan-900/30 stroke-cyber-neonBlue stroke-1 drop-shadow-neon-blue outline-none pointer-events-auto hover:fill-cyber-neonBlue/20 transition-opacity`; break;
        case 2: baseClass = `fill-green-900/30 stroke-cyber-neonGreen stroke-1 drop-shadow-neon-green outline-none pointer-events-auto hover:fill-cyber-neonGreen/20 transition-opacity`; break;
        case 3: baseClass = `fill-purple-900/30 stroke-cyber-neonPurple stroke-1 drop-shadow-neon-purple outline-none pointer-events-auto hover:fill-cyber-neonPurple/20 transition-opacity`; break;
        case 4: baseClass = `fill-yellow-900/30 stroke-cyber-neonGold stroke-1 drop-shadow-neon-gold outline-none pointer-events-auto hover:fill-yellow-600/30 transition-opacity`; break;
      }
    }
    return baseClass;
  };

  const getStyleForLandmark = (feature) => {
    const featureId = feature.properties.id;
    let isTarget = (currentGeoId === featureId);

    if (isTarget && !isHistoryMode) {
      return 'fill-none stroke-cyan-400 stroke-[6px] drop-shadow-[0_0_10px_rgba(0,243,255,0.8)] outline-none animate-map-pulse';
    }

    let achievedLevel = 0;
    let daysPassed = 999;

    if (isHistoryMode && progress[featureId]) {
      achievedLevel = progress[featureId].masteryLevel;
      daysPassed = (Date.now() - progress[featureId].lastClearedAt) / (1000 * 60 * 60 * 24);
    }

    // デフォルトは見えないか、うっすら表示
    let baseClass = 'fill-none stroke-slate-500 stroke-[2px] opacity-0 outline-none transition-all duration-500 pointer-events-auto';

    if (achievedLevel > 0) {
      let isActive = true;
      if (achievedLevel === 1 && daysPassed > 3) isActive = false;
      if (achievedLevel === 2 && daysPassed > 7) isActive = false;
      if (achievedLevel === 3 && daysPassed > 30) isActive = false;

      if (!isActive) return `fill-none stroke-slate-500 stroke-[3px] grayscale outline-none transition-opacity opacity-50`;

      switch (achievedLevel) {
        case 1: baseClass = `fill-none stroke-cyan-400 stroke-[4px] drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] outline-none pointer-events-auto transition-opacity`; break;
        case 2: baseClass = `fill-none stroke-green-400 stroke-[4px] drop-shadow-[0_0_8px_rgba(74,222,128,0.6)] outline-none pointer-events-auto transition-opacity`; break;
        case 3: baseClass = `fill-none stroke-purple-400 stroke-[4px] drop-shadow-[0_0_8px_rgba(192,132,252,0.6)] outline-none pointer-events-auto transition-opacity`; break;
        case 4: baseClass = `fill-none stroke-yellow-400 stroke-[4px] drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] outline-none pointer-events-auto transition-opacity`; break;
      }
    }
    return baseClass;
  };

  const drawFeatures = (topo) => {
    const geojson = topojson.feature(topo, topo.objects.japan);

    const projection = d3.geoMercator()
      .fitExtent([[10, 10], [width - 50, height - 10]], geojson);

    const path = d3.geoPath().projection(projection);

    // 1. 都道府県を描画
    svg.selectAll('.pref')
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
    svg.selectAll('.landmark')
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
        const ripple1 = svg.append('circle')
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
        const ripple2 = svg.append('circle')
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
        svg.append('circle')
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

  options.forEach((char, i) => {
    const btn = document.createElement('button');
    btn.className = `
      w-full h-full min-h-[3rem]
      bg-[#0a0f1d]/80 border-2 border-slate-600 rounded-[8px]
      text-2xl md:text-4xl lg:text-5xl font-bold font-noto outline-none text-slate-300 leading-none
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

  // アクションボタン行 (DELETE + SUBMIT)
  const actionRow = document.createElement('div');
  actionRow.className = 'col-span-3 flex gap-3 mt-2';

  const delBtn = document.createElement('button');
  delBtn.id = 'kanji-delete-btn';
  delBtn.className = `
    flex-1 min-h-[3.5rem] bg-red-900/40 border-2 border-red-700/60 rounded-[8px]
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
    flex-[2] min-h-[3.5rem] bg-cyan-900/40 border-2 border-cyan-500/60 rounded-[8px]
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

function generateCardHTML(geoData) {
  const getRarityColors = (r) => {
    switch (r) {
      case 'N': return 'from-slate-500 to-slate-700 shadow-slate-500/50';
      case 'R': return 'from-blue-400 to-blue-600 shadow-blue-500/50';
      case 'SR': return 'from-purple-400 to-purple-600 shadow-purple-500/50';
      case 'SSR': return 'from-yellow-300 via-amber-500 to-yellow-600 shadow-yellow-500/80';
      default: return 'from-slate-500 to-slate-700 shadow-slate-500/50';
    }
  };

  const statsHtml = Object.entries(geoData.stats).map(([k, v]) => `
    <li class="flex justify-between border-b border-slate-700/50 pb-1">
      <span class="text-slate-400">${k}:</span>
      <span class="font-bold text-slate-200 text-right">${v}</span>
    </li>
  `).join('');

  const kwHtml = geoData.relatedKeywords.map(k => `
    <span class="px-2 py-1 bg-slate-700 rounded text-xs text-slate-200 border border-slate-600">${k}</span>
  `).join('');

  return `
    <div class="perspective-1000 w-full aspect-[3/4] cursor-pointer" onclick="this.querySelector('.flip-card-inner').classList.toggle('flipped')">
      <div class="flip-card-inner w-full h-full relative preserve-3d">
        
        <!-- Front -->
        <div class="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br ${getRarityColors(geoData.rarity)} p-1 shadow-lg pointer-events-none">
          <div class="w-full h-full bg-slate-900 rounded-lg flex flex-col items-center justify-center p-4 relative overflow-hidden bg-[url('data:image/svg+xml;base64,...')]">
            <span class="absolute top-2 left-2 px-2 py-1 bg-black/60 rounded text-xs font-bold font-orbitron text-white border border-white/20">${geoData.rarity}</span>
             <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/20 flex items-center justify-center mb-4 bg-slate-800 shadow-inner">
               <span class="text-4xl text-slate-600 opacity-50 bg-clip-text">🗺️</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-bold text-center text-white drop-shadow-md">${geoData.name}</h3>
            <p class="text-sm text-slate-300 mt-2 text-center">${geoData.type}</p>
          </div>
        </div>

        <!-- Back -->
        <div class="flip-card-back absolute w-full h-full backface-hidden rounded-xl bg-slate-800 border-2 border-slate-600 p-4 overflow-y-auto pointer-events-none">
           <div class="flex flex-col h-full">
            <h4 class="text-lg font-bold border-b border-slate-600 pb-2 mb-3 text-cyber-neonBlue">${geoData.name} - 詳細</h4>
            <p class="text-sm text-slate-300 italic mb-4">"${geoData.flavorText}"</p>
            <div class="mb-4">
              <span class="text-xs text-cyber-neonGreen font-orbitron block mb-1">DATA</span>
              <ul class="text-sm space-y-1">${statsHtml}</ul>
            </div>
            <div>
              <span class="text-xs text-cyber-neonPurple font-orbitron block mb-1">KEYWORDS</span>
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
                <div class="w-full max-w-[240px] aspect-[2/3] transform hover:rotate-1 transition-transform duration-500">
                    ${generateCardHTML(geo)}
                </div>
            </div>
            <div class="w-full md:w-7/12 flex flex-col pt-2">
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-orbitron text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/30 uppercase tracking-widest">${geo.rarity}</span>
                    <span class="text-[10px] font-orbitron text-slate-500 tracking-widest uppercase">${geo.type}</span>
                </div>
                <h3 class="text-3xl font-bold text-white font-noto mb-4">${geo.name}</h3>
                <div class="flex items-center gap-2 mb-6 text-sm font-orbitron">
                    <span class="text-slate-400">STATUS:</span>
                    <span class="text-white px-3 py-1 bg-slate-800 rounded-full border border-slate-700">LEVEL ${level} / 5</span>
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
  tap: null, correct: null, error: null, unlock: null, gacha: null
};

function initApp() {
  loadState();

  // Safely initialize sounds
  try {
    sounds.tap = new Howl({ src: ['https://actions.google.com/sounds/v1/water/wood_block_drop.ogg'], volume: 0.5 });
    sounds.correct = new Howl({ src: ['https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg'], volume: 0.5 });
    sounds.error = new Howl({ src: ['https://actions.google.com/sounds/v1/alarms/beep_short.ogg'], volume: 0.4 });
    sounds.unlock = new Howl({ src: ['https://actions.google.com/sounds/v1/science_fiction/robot_startup.ogg'], volume: 0.8 });
    sounds.gacha = new Howl({ src: ['https://actions.google.com/sounds/v1/magic/magical_sweep.ogg'], volume: 1.0 });
  } catch (e) { console.log('Audio init failed', e); }

  window.app = {
    navigate: (screen) => {
      if (sounds.tap && screen !== 'home') sounds.tap.play();
      navigateTo(screen);
      updateProgressUI();
      if (screen === 'collection') renderCollection();
      if (screen === 'survey') renderMap('survey-map-container', null, true);
      if (screen === 'quest') startQuest();
      if (screen === 'boss') startBossBattle();
      if (screen === 'ranking') fetchAndShowRanking();
    },
    closeGacha: () => {
      document.getElementById('gacha-modal').classList.add('opacity-0');
      setTimeout(() => {
        document.getElementById('gacha-modal').classList.add('hidden');
        startQuest();
      }, 500);
    },
    submitBossScore: () => {
      const nickname = document.getElementById('boss-nickname')?.value.trim() || 'Anonymous';
      const areaName = document.getElementById('boss-area-name')?.innerText || 'General';
      const score = parseInt(document.getElementById('boss-final-score')?.innerText || '0');
      if (window.geoFirebase) {
        window.geoFirebase.submitBossScore(score, areaName, nickname).then(() => {
          app.navigate('ranking');
        });
      }
    }
  };

  // Firebase初期化
  if (window.geoFirebase) {
    window.geoFirebase.initFirebase(async (user) => {
      const statusEl = document.getElementById('firebase-status');
      if (user) {
        if (statusEl) {
          statusEl.innerText = 'ONLINE';
          statusEl.className = 'text-[9px] font-orbitron px-2 py-1 rounded border border-cyan-700 text-cyan-400 tracking-widest';
        }
        // クラウドから進捗を取得してマージ
        const cloudProgress = await window.geoFirebase.fetchProgressFromCloud();
        Object.assign(state.progress, cloudProgress);
        const cloudMistakes = await window.geoFirebase.fetchMistakesFromCloud();
        if (cloudMistakes.length > 0) state.mistakes = cloudMistakes;
        updateProgressUI();
      } else {
        if (statusEl) statusEl.innerText = 'OFFLINE';
      }
    });
  }

  navigateTo('home');
  updateProgressUI();
}

function startQuest() {
  currentQuestion = getRandomGeography();
  combo = 0;
  answeredStr = '';
  questStartTime = Date.now();
  questMissed = false;
  currentDynamicRate = 3; // Reset rate

  document.getElementById('quest-flavor').innerText = currentQuestion.flavorText;

  const comboEl = document.getElementById('quest-combo');
  if (comboEl) {
    comboEl.innerText = combo;
    comboEl.classList.remove('hidden');
    document.getElementById('combo-indicator').classList.remove('bg-cyber-neonBlue', 'bg-cyber-neonPurple', 'bg-cyber-neonGold');
    document.getElementById('combo-indicator').classList.add('bg-slate-700');
  }
  document.getElementById('quest-answer-box').innerText = '';

  renderMap('quest-map-container', currentQuestion.geoId, false);

  const targetChars = currentQuestion.name.split('');

  // \u5f31\u70b9\u7279\u8a13: \u904e\u53bb\u306b\u3053\u306e\u554f\u984c\u3067\u5f15\u3063\u304b\u304b\u3063\u305f\u30c0\u30df\u30fc\u6587\u5b57\u3092\u62bd\u51fa
  const allMistakes = getState().mistakes;
  const mistakeCharsForThis = allMistakes
    .filter(m => m.geoId === currentQuestion.geoId)
    .flatMap(m => (m.tappedDummy || '').split(''))
    .filter(c => !targetChars.includes(c) && c.trim() !== '');

  // \u9593\u9055\u3048\u56de\u6570\u9806\u306b\u30bd\u30fc\u30c8\u3057\u3001\u4e0a\u4f4d\u3092\u512a\u5148\u4f7f\u7528
  const mistakeCount = {};
  mistakeCharsForThis.forEach(c => { mistakeCount[c] = (mistakeCount[c] || 0) + 1; });
  const sortedMistakeChars = [...new Set(mistakeCharsForThis)]
    .sort((a, b) => mistakeCount[b] - mistakeCount[a])
    .slice(0, 4); // \u6700\u592460\u5b57\u307e\u3067\u5f31\u70b9\u6587\u5b57\u3092\u4f7f\u7528

  // \u5f31\u70b9\u6587\u5b57\u3092\u512a\u5148\u3057\u3066\u30d1\u30cd\u30eb\u3092\u69cb\u7bc9
  const usedChars = new Set([...targetChars, ...sortedMistakeChars]);
  const remainingDummies = currentQuestion.dummyKanji.filter(c => !usedChars.has(c));
  const slotsLeft = Math.max(0, 12 - targetChars.length - sortedMistakeChars.length);
  const fillerDummies = remainingDummies.slice(0, slotsLeft);

  const allChars = [...targetChars, ...sortedMistakeChars, ...fillerDummies];
  const shuffled = [...new Set(allChars)].slice(0, 12).sort(() => Math.random() - 0.5);

  // \u5f31\u70b9\u30d0\u30c3\u30b8\u306e\u8868\u793a\u5207\u308a\u66ff\u3048
  const panelLabel = document.querySelector('#combo-container')?.previousElementSibling;
  if (panelLabel) {
    if (sortedMistakeChars.length > 0) {
      panelLabel.innerHTML = `\u89e3\u7b54\u30d1\u30cd\u30eb <span class="text-red-400 font-orbitron text-[10px] tracking-wider animate-pulse">\u26a0 \u5f31\u70b9\u7279\u8a13</span>`;
    } else {
      panelLabel.innerHTML = `\u89e3\u7b54\u30d1\u30cd\u30eb`;
    }
  }

  renderKanjiPanel(shuffled, handleSelectChar);
  setKanjiPanelDisabled(false);
}

function handleSelectChar(char) {
  if (!currentQuestion) return;

  // 讬wordを蹏積するのみ。正誤判定はSUBMIT時に行う。
  if (answeredStr.length >= currentQuestion.name.length) return; // 必要文字数以上は入力不可

  answeredStr += char;
  document.getElementById('quest-answer-box').innerText = answeredStr;

  if (sounds.correct) {
    sounds.correct.rate(1.0);
    sounds.correct.play();
  }
}

function handleDeleteChar() {
  if (!currentQuestion || answeredStr.length === 0) return;
  answeredStr = answeredStr.slice(0, -1);
  document.getElementById('quest-answer-box').innerText = answeredStr;
}

function handleSubmitAnswer() {
  if (!currentQuestion) return;

  if (answeredStr === currentQuestion.name) {
    // 正解
    combo++;
    const comboEl = document.getElementById('quest-combo');
    if (comboEl) comboEl.innerText = combo;

    const ind = document.getElementById('combo-indicator');
    if (ind) {
      ind.className = 'w-4 h-4 rounded-sm animate-pulse shadow-neon-green bg-cyber-neonGreen';
      if (combo > 2) ind.className = 'w-4 h-4 rounded-sm animate-pulse shadow-neon-blue bg-cyber-neonBlue';
      if (combo > 4) ind.className = 'w-4 h-4 rounded-sm animate-pulse shadow-neon-gold bg-cyber-neonGold';
    }

    if (sounds.unlock) sounds.unlock.play();
    setKanjiPanelDisabled(true);
    setTimeout(() => handleClear(), 300);
  } else {
    // 不正解
    combo = 0;
    answeredStr = '';
    document.getElementById('quest-answer-box').innerText = '';
    const comboEl = document.getElementById('quest-combo');
    if (comboEl) comboEl.innerText = combo;
    const ind = document.getElementById('combo-indicator');
    if (ind) ind.className = 'w-4 h-4 rounded-sm bg-slate-700';
    if (sounds.error) sounds.error.play();
    questMissed = true; // Mark that a mistake was made in this quest
    logMistake(currentQuestion.geoId, answeredStr);

    // シェイクエフェクト
    const box = document.getElementById('quest-answer-box');
    if (box) {
      box.classList.add('animate-shake');
      setTimeout(() => box.classList.remove('animate-shake'), 400);
    }
  }
}

function handleClear() {
  setKanjiPanelDisabled(true);
  if (sounds.unlock) sounds.unlock.play();

  const currentState = getState();
  const currentMastery = currentState.progress[currentQuestion.geoId]?.masteryLevel || 0;
  saveProgress(currentQuestion.geoId, Math.min(currentMastery + 1, 4));

  renderMap('quest-map-container', null, false);
  updateProgressUI();

  // --- ダイナミック・レート計算 ---
  let rate = 3; // デフォルト 3%
  const questDuration = (Date.now() - questStartTime) / 1000;

  // 1. フルコンボボーナス (ミスなし & combo>0)
  if (!questMissed && combo > 0) {
    rate = 5;
    console.log('Full Combo Bonus! Rate: 5%');
  }

  // 2. 防衛クエスト（復習）特効
  // masteryLevel 4 未満 かつ nextReviewDate が過去なら復習クエスト扱い
  const isDefense = currentMastery < 4 &&
    currentState.progress[currentQuestion.geoId]?.nextReviewDate &&
    currentState.progress[currentQuestion.geoId].nextReviewDate < Date.now();

  if (isDefense) {
    rate = 10;
    if (!questMissed) rate = 12; // 重複
    console.log('Defense Quest Bonus! Rate:', rate);
  }

  currentDynamicRate = rate;

  // 3. スピードスターボーナス (5秒以内)
  if (questDuration < 5 && !questMissed) {
    state.silverTickets += 1;
    console.log('Speed Star! Silver Ticket awarded!');
  }

  // 4. 天井システム (開拓ポイント)
  state.gachaPoints += 1;
  if (state.gachaPoints >= 100) {
    state.gachaPoints = 0;
    state.ssrTickets += 1;
    console.log('PityReached! SSR Ticket awarded!');
  }
  saveGachaState();

  // --- ガチャ実行 ---
  gachaResult = drawGacha();
  addCard(gachaResult.geoId);

  setTimeout(showGacha, 1000);
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

  if (sounds.gacha) sounds.gacha.play();

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

  // \u30dc\u30b9\u30de\u30c3\u30d7: \u8b66\u6212\u8272\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3
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

  const projection = d3.geoMercator().center([136.5, 35.5]).scale(1750).translate([width / 2, height / 2]);
  const path = d3.geoPath().projection(projection);
  const topoData = topojson.feature(JAPAN_TOPOJSON, JAPAN_TOPOJSON.objects.japan);

  svg.selectAll('path').data(topoData.features).enter().append('path')
    .attr('d', path)
    .attr('fill', '#1a0a0a').attr('stroke', '#7f1d1d').attr('stroke-width', 1);

  // \u4e2d\u5fc3\u306b\u8b66\u6212\u8272\u6ce2\u7d0b
  const isLandmarkQ = ['river_shinano', 'mount_hida', 'coast_sanriku'].includes(bossCurrentQ.geoId);
  let center = null;
  if (isLandmarkQ) {
    // landmark centroid from custom coords
    const coordMap = {
      river_shinano: [138.5, 37.0], mount_hida: [137.2, 36.4], coast_sanriku: [141.8, 39.5]
    };
    if (coordMap[bossCurrentQ.geoId]) {
      center = projection(coordMap[bossCurrentQ.geoId]);
    }
  }
  if (!center) {
    const geoToPref = { hokkaido_region: ['Hokkaido'] };
    const feat = topoData.features.find(f => geoToPref[bossCurrentQ.geoId]?.includes(f.properties.nam));
    if (feat) center = path.centroid(feat);
  }

  if (center && !isNaN(center[0])) {
    const r1 = svg.append('circle').attr('cx', center[0]).attr('cy', center[1]).attr('r', 4)
      .attr('fill', 'none').attr('stroke', 'rgba(255,80,80,0.9)').attr('stroke-width', 2).attr('pointer-events', 'none');
    r1.node().innerHTML = `<animate attributeName="r" from="4" to="50" dur="1.5s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" from="0.9" to="0" dur="1.5s" repeatCount="indefinite"/>`;
    const r2 = svg.append('circle').attr('cx', center[0]).attr('cy', center[1]).attr('r', 4)
      .attr('fill', 'none').attr('stroke', 'rgba(255,150,50,0.7)').attr('stroke-width', 1.5).attr('pointer-events', 'none');
    r2.node().innerHTML = `<animate attributeName="r" from="4" to="50" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" from="0.7" to="0" dur="1.5s" begin="0.75s" repeatCount="indefinite"/>`;
    svg.append('circle').attr('cx', center[0]).attr('cy', center[1]).attr('r', 6)
      .attr('fill', 'rgba(255,80,80,1)').attr('pointer-events', 'none');
  }
}

function renderBossKanjiPanel(options) {
  const panel = document.getElementById('boss-kanji-panel');
  if (!panel) return;
  panel.innerHTML = '';
  options.forEach(char => {
    const btn = document.createElement('button');
    btn.className = `w-full h-16 bg-red-950/40 border-2 border-red-800/60 rounded-lg
      text-3xl font-bold font-noto text-red-200 leading-none
      flex items-center justify-center
      hover:border-red-400 hover:bg-red-900/60 hover:text-white
      transition-all duration-150 transform hover:scale-105 active:scale-95`;
    btn.innerHTML = `<span>${char}</span>`;
    btn.onclick = () => handleBossSelect(char);
    panel.appendChild(btn);
  });

  // DEL + SUBMIT\u30dc\u30bf\u30f3
  const row = document.createElement('div');
  row.className = 'col-span-3 flex gap-2 mt-1';
  row.innerHTML = `
    <button onclick="handleBossDelete()" class="flex-1 h-12 bg-slate-900/60 border border-slate-600 rounded-lg font-orbitron text-sm text-slate-400 hover:text-white hover:border-slate-400 transition-all">&#x232B; DEL</button>
    <button onclick="handleBossSubmit()" class="flex-[2] h-12 bg-red-900/60 border-2 border-red-500/70 rounded-lg font-orbitron text-sm font-bold text-red-300 hover:border-red-300 hover:text-white hover:bg-red-800/60 transition-all tracking-widest">&#x25B7; SUBMIT</button>
  `;
  panel.appendChild(row);
}

function handleBossSelect(char) {
  if (!bossCurrentQ || bossAnsweredStr.length >= bossCurrentQ.name.length) return;
  bossAnsweredStr += char;
  document.getElementById('boss-answer-box').innerText = bossAnsweredStr;
}

function handleBossDelete() {
  if (bossAnsweredStr.length === 0) return;
  bossAnsweredStr = bossAnsweredStr.slice(0, -1);
  document.getElementById('boss-answer-box').innerText = bossAnsweredStr;
}

function handleBossSubmit() {
  if (!bossCurrentQ) return;
  if (bossAnsweredStr === bossCurrentQ.name) {
    // \u6b63\u89e3: \u6642\u9593\u30dc\u30fc\u30ca\u30b9 + \u30b3\u30f3\u30dc
    const basePoints = 100;
    const timeBonus = bossTimeLeft * 2;
    bossScore += basePoints + timeBonus;
    document.getElementById('boss-score').innerText = bossScore;
    if (sounds?.unlock) sounds.unlock.play();
    nextBossQuestion();
  } else {
    // \u4e0d\u6b63\u89e3\n    bossAnsweredStr = '';
    document.getElementById('boss-answer-box').innerText = '';
    if (sounds?.error) sounds.error.play();
    // \u30da\u30ca\u30eb\u30c6\u30a3: 5\u79d2\u899a\u5f15
    bossTimeLeft = Math.max(0, bossTimeLeft - 5);
    document.getElementById('boss-timer').innerText = bossTimeLeft;
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



import re
import sys

# Define the expected items from categories 11-20
expected_items = [
    # 11. Mountains/Ranges/Highlands
    "天塩山地", "北見山地", "夕張山地", "日高山脈",
    "白神山地", "出羽山地", "奥羽山脈", "北上高地", "阿武隈高地",
    "越後山脈", "飛騨山脈", "木曽山脈", "赤石山脈", "関東山地",
    "紀伊山地", "中国山地", "四国山地", "九州山地", "筑紫山地", "鈴鹿山脈", "丹波高地",
    
    # 12. Mountains
    "羊蹄山", "大雪山", "有珠山",
    "岩木山", "鳥海山", "磐梯山",
    "白山", "富士山", "浅間山", "八ヶ岳", "御嶽山", "三原山",
    "大山", "石鎚山", "阿蘇山", "桜島", "開聞岳", "雲仙岳",
    
    # 13. Plains
    "石狩平野", "十勝平野", "津軽平野", "秋田平野", "仙台平野", "庄内平野",
    "越後平野", "富山平野", "関東平野", "濃尾平野",
    "大阪平野", "岡山平野", "讃岐平野", "高知平野", "徳島平野", "筑紫平野", "熊本平野", "八代平野", "宮崎平野",
    
    # 14. Basins/Plateaus
    "上川盆地", "山形盆地", "甲府盆地", "長野盆地", "松本盆地", "京都盆地", "奈良盆地",
    "根釧台地", "牧之原", "シラス台地",
    
    # 15. Rivers
    "石狩川", "天塩川", "北上川", "最上川", "阿武隈川",
    "信濃川", "利根川", "荒川", "多摩川", "天竜川", "木曽川", "常願寺川",
    "淀川", "吉野川", "四万十川", "筑後川", "球磨川",
    
    # 16. Peninsulas/Capes
    "知床半島", "渡島半島", "下北半島", "津軽半島", "男鹿半島",
    "房総半島", "三浦半島", "伊豆半島", "能登半島",
    "紀伊半島", "島根半島", "佐田岬半島", "大隅半島", "薩摩半島", "国東半島",
    "宗谷岬", "襟裳岬", "潮岬", "足摺岬", "室戸岬",
    
    # 17. Bays/Seas
    "噴火湾", "仙台湾", "東京湾", "相模湾", "駿河湾", "伊勢湾", "三河湾", "若狭湾",
    "大阪湾", "有明海", "八代海", "土佐湾",
    
    # 18. Lakes
    "サロマ湖", "洞爺湖", "屈斜路湖", "摩周湖", "支笏湖",
    "十和田湖", "田沢湖", "猪苗代湖", "霞ヶ浦", "諏訪湖", "浜名湖",
    "琵琶湖", "中海", "宍道湖", "池田湖",
    
    # 19. Islands
    "択捉島", "国後島", "色丹島", "歯舞群島", "利尻島", "礼文島", "奥尻島",
    "佐渡島", "淡路島", "隠岐諸島", "対馬", "壱岐", "五島列島", "小豆島",
    "種子島", "屋久島", "奄美大島", "沖縄本島", "宮古島", "石垣島",
    
    # 20. National Parks
    "大雪山国立公園", "知床国立公園", "阿寒摩周国立公園", "支笏洞爺国立公園",
    "十和田八幡平国立公園", "三陸復興国立公園", "磐梯朝日国立公園", "日光国立公園",
    "中部山岳国立公園", "伊勢志摩国立公園", "吉野熊野国立公園", "大山隠岐国立公園",
    "霧島錦江湾国立公園", "屋久島国立公園", "奄美群島国立公園"
]

def verify(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    missing = []
    found_count = 0
    for item in expected_items:
        # Search for exact name in the geographyMaster array
        # e.g. "name": "天塩山地"
        pattern = rf'"name":\s*"{re.escape(item)}"'
        if re.search(pattern, content):
            found_count += 1
        else:
            missing.append(item)
    
    print(f"Total expected: {len(expected_items)}")
    print(f"Found: {found_count}")
    print(f"Missing: {len(missing)}")
    
    if missing:
        print("\nMissing items:")
        for m in missing:
            print(f"- {m}")
    else:
        print("\nAll items found!")

if __name__ == "__main__":
    verify("/Users/kazumatanaka/Downloads/historybeta-main/js/bundle.js")

import re
import json

with open('cards.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract objects that look like character cards
pattern = re.compile(r'\{\s*"id":\s*"(c\d+)".*?"name":\s*"([^"]+)".*?"img":\s*"\./assets/images/([^"]+)\.png".*?"group":\s*"([^"]+)"', re.DOTALL)
matches = pattern.findall(text)

# We want to skip generation if it's already in the generated map (from generation 1)
try:
    with open('image_map.json', 'r') as f:
        image_map = json.load(f)
except FileNotFoundError:
    image_map = {}

out = []
for m in matches:
    c_id, name, base_img, group = m
    base_img_path = f"./assets/images/{base_img}.png"
    
    # check if 'up' exists
    if not (base_img_path in image_map and 'up' in image_map[base_img_path]):
        out.append(f'<call:default_api:generate_image>{{"ImageName":"{base_img}_up","Prompt":"Anime style, gorgeous japanese fantasy art. {name} ({group} era). Huge aura, extremely energetic, confident, happy, dynamic pose, smiling, brightly glowing. High quality, masterpiece, detailed.","waitForPreviousTools":false}}</call:default_api:generate_image>')
    
    # check if 'down' exists
    if not (base_img_path in image_map and 'down' in image_map[base_img_path]):
        out.append(f'<call:default_api:generate_image>{{"ImageName":"{base_img}_down","Prompt":"Anime style, japanese fantasy art. {name} ({group} era). Sad, exhausted, depressed, looking down, gloomy atmosphere, pale face, tattered clothes, dark aura. High quality, masterpiece, detailed.","waitForPreviousTools":false}}</call:default_api:generate_image>')

with open('missing_tools.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
    
print(f"Found {len(matches)} characters. Generated {len(out)} tool calls for missing images.")

import re
import json

with open('cards.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract objects that look like character cards
pattern = re.compile(r'\{\s*"id":\s*"(c\d+)".*?"name":\s*"([^"]+)".*?"img":\s*"\./assets/images/([^"]+)\.png".*?"group":\s*"([^"]+)"', re.DOTALL)
matches = pattern.findall(text)

out = []
for m in matches:
    c_id, name, base_img, group = m
    out.append(f'<call:default_api:generate_image>{{"ImageName":"{base_img}_up","Prompt":"Anime style, gorgeous japanese fantasy art. {name} ({group} era). Huge aura, extremely energetic, confident, happy, dynamic pose, smiling, brightly glowing. High quality, masterpiece, detailed.","waitForPreviousTools":false}}</call:default_api:generate_image>')
    out.append(f'<call:default_api:generate_image>{{"ImageName":"{base_img}_down","Prompt":"Anime style, japanese fantasy art. {name} ({group} era). Sad, exhausted, depressed, looking down, gloomy atmosphere, pale face, tattered clothes, dark aura. High quality, masterpiece, detailed.","waitForPreviousTools":false}}</call:default_api:generate_image>')

with open('output_tools.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))
    
print(f"Found {len(matches)} characters. Generated {len(out)} tool calls total")

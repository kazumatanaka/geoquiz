import json
import os

files = [f for f in os.listdir("assets/images") if "up_" in f or "down_" in f and f.endswith(".png")]

mapping = {}
for file in files:
    parts = file.split('_')
    if 'up' in parts:
        idx = parts.index('up')
        type_str = 'up'
    elif 'down' in parts:
        idx = parts.index('down')
        type_str = 'down'
    else:
        continue
        
    base = "./assets/images/" + "_".join(parts[:idx]) + ".png"
    if base not in mapping:
        mapping[base] = {}
    mapping[base][type_str] = "./assets/images/" + file

with open("image_map.json", "w") as f:
    json.dump(mapping, f, indent=2)
    
print("Updated image_map.json")

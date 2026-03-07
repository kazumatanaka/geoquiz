import re
import json

with open('questions.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the JSON array from the JS file
data_match = re.search(r'const\s+masterData\s*=\s*(\[.*?\]);', content, re.DOTALL)
if not data_match:
    print("Could not find masterData array")
    exit(1)

data_str = data_match.group(1)
try:
    # Use ast.literal_eval if standard json fails due to trailing commas or keys without quotes
    import ast
    data = ast.literal_eval(data_str)
except Exception as e:
    print(f"Failed to parse JS object: {e}")
    exit(1)

# Regex to find [Kanji|Furigana]
ruby_pattern = re.compile(r'\[([^\|]+)\|([^\]]+)\]')

for item in data:
    if 'h' in item:
        original_h = item['h']
        
        # Check if the text actually has ruby tags
        if ruby_pattern.search(original_h):
            # 1. Create the base hint without any brackets or furigana
            clean_h = ruby_pattern.sub(r'\1', original_h)
            
            # 2. To get the reading for the whole sentence, we need an approximation. 
            # The ruby system in Japanese usually just has kana for the specific kanji.
            # But the user asked for sentence-level furigana 'f'. 
            # If the user wants sentence-level furigana, we could build it by replacing the kanji with furigana, 
            # but that overrides the kana in the rest of the sentence. 
            # Let's create the full reading by substituting the kanji with its readings.
            full_reading = ruby_pattern.sub(r'\2', original_h)
            
            item['h'] = clean_h
            if 'f' not in item:
                item['f'] = full_reading

# We also need to get the user's manual change for q001 so we don't overwrite it.
# The `f` key handles that if it's already present.

# Re-serialize
new_data_str = json.dumps(data, ensure_ascii=False, indent=4)
new_content = content[:data_match.start(1)] + new_data_str + content[data_match.end(1):]

with open('questions.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("questions.js processed successfully.")

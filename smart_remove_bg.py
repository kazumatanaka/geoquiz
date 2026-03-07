import sys
from rembg import remove
from PIL import Image
import os

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        with open(input_path, 'rb') as i:
            input_data = i.read()
        
        # Remove background
        output_data = remove(input_data)
        
        # Open the result with PIL and resize
        # Save output data to a temp file or use BytesIO
        import io
        img = Image.open(io.BytesIO(output_data)).convert("RGBA")
        
        # Crop the transparent borders tightly
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
        
        # Resize to fit within 500x500 to keep it lightweight, preserving aspect ratio
        img.thumbnail((300, 300), Image.Resampling.LANCZOS)
        
        img.save(output_path, "PNG")
        print(f"Successfully saved {output_path}")
    except Exception as e:
        print(f"Failed to process {input_path}: {e}")

if __name__ == '__main__':
    images = [
        "kimoneko.jpg",
        "kyoshinneko.jpg",
        "inuyasha.jpg",
        "sesshomaru.jpg"
    ]
    
    out_dir = "assets/images"
    os.makedirs(out_dir, exist_ok=True)
    
    for img_name in images:
        if os.path.exists(img_name):
            out_name = os.path.splitext(img_name)[0] + ".png"
            out_path = os.path.join(out_dir, "enemy_" + out_name)
            process_image(img_name, out_path)
        else:
            print(f"File {img_name} not found.")

import io, os
from rembg import remove
from PIL import Image

def main():
    input_path = 'nekogamisama.png'
    out_path = 'assets/images/enemy_nekogamisama.png'

    if not os.path.exists(input_path):
        print("File", input_path, "not found")
        return

    print("Processing", input_path)
    with open(input_path, 'rb') as i:
        output_data = remove(i.read())

    img = Image.open(io.BytesIO(output_data)).convert('RGBA')
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.thumbnail((300, 300), Image.Resampling.LANCZOS)
    img.save(out_path, 'PNG')
    print('Processed and saved', out_path)

if __name__ == '__main__':
    main()

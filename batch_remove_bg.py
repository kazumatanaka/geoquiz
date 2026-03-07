import sys
from PIL import Image, ImageDraw

def process(f):
    try:
        img = Image.open(f).convert("RGBA")
        # floodfill from top-left
        ImageDraw.floodfill(img, (0, 0), (255, 255, 255, 0), thresh=40)
        
        # also top-right
        w, h = img.size
        ImageDraw.floodfill(img, (w-1, 0), (255, 255, 255, 0), thresh=40)

        # also bottom-left and bottom-right to be safe
        ImageDraw.floodfill(img, (0, h-1), (255, 255, 255, 0), thresh=40)
        ImageDraw.floodfill(img, (w-1, h-1), (255, 255, 255, 0), thresh=40)

        img.save(f)
        print("Processed", f)
    except Exception as e:
        print("Error processing", f, e)

if __name__ == "__main__":
    for f in sys.argv[1:]:
        process(f)

from PIL import Image
import os

src = 'icon-1024.png'
icon_dir = 'ios/App/App/Assets.xcassets/AppIcon.appiconset'

sizes = [
  ('Icon-20@2x.png', 40), ('Icon-20@3x.png', 60),
  ('Icon-29@2x.png', 58), ('Icon-29@3x.png', 87),
  ('Icon-40@2x.png', 80), ('Icon-40@3x.png', 120),
  ('Icon-60@2x.png', 120), ('Icon-60@3x.png', 180),
  ('Icon-76.png', 76), ('Icon-76@2x.png', 152),
  ('Icon-83.5@2x.png', 167), ('Icon-1024.png', 1024),
]

img = Image.open(src).convert('RGBA')
bg = Image.new('RGBA', img.size, (255,255,255,255))
bg.paste(img, mask=img.split()[3])
img = bg.convert('RGB')

os.makedirs(icon_dir, exist_ok=True)
for name, size in sizes:
    img.resize((size, size), Image.LANCZOS).save(f'{icon_dir}/{name}')
    print(f'Created {name} {size}x{size}')

#!/usr/bin/env python3
"""Generates the PWA icons, favicon set and social-preview image into icons/.
Original artwork (an open book under a star on a night sky); no third-party imagery.
Usage: python3 scripts/make-icons.py   (needs Pillow; fonts: DejaVu Sans)"""
import math, os, random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'icons'); os.makedirs(OUT, exist_ok=True)
SS = 4  # supersampling factor
NAVY, DEEP, PAGE, GOLD, INK = (10, 20, 80), (5, 10, 49), (244, 241, 230), (255, 216, 107), (24, 36, 90)
BOLD = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
REG = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'

def sky(w, h, seed=7, stars=True):
    """Radial night-sky gradient with a few stars."""
    img = Image.new('RGB', (w, h), DEEP)
    px = img.load(); cx, cy, r = w * .5, h * .42, math.hypot(w, h) * .6
    for y in range(h):
        for x in range(w):
            t = min(1, math.hypot(x - cx, y - cy) / r)
            px[x, y] = tuple(int(NAVY[i] * (1 - t) + DEEP[i] * t + (26 if i == 2 else 0) * (1 - t)) for i in range(3))
    if stars:
        d = ImageDraw.Draw(img); rnd = random.Random(seed)
        for _ in range(max(12, w * h // 9000)):
            x, y, s = rnd.randrange(w), rnd.randrange(h), rnd.choice((1, 1, 2, 3)) * max(1, w // 600)
            d.ellipse([x - s, y - s, x + s, y + s], fill=(210, 224, 255))
    return img

def star(d, cx, cy, r, fill):
    for rot in (0, 60):
        pts = [(cx + r * math.cos(math.radians(a + rot - 90)), cy + r * math.sin(math.radians(a + rot - 90))) for a in (0, 120, 240)]
        d.polygon(pts, fill=fill)

def book(d, cx, cy, w, fill=PAGE, line=INK):
    h = w * .62; gap = w * .02; lift = w * .07
    left = [(cx - w / 2, cy - h / 2), (cx - gap, cy - h / 2 + lift), (cx - gap, cy + h / 2 + lift), (cx - w / 2, cy + h / 2)]
    right = [(cx + w / 2, cy - h / 2), (cx + gap, cy - h / 2 + lift), (cx + gap, cy + h / 2 + lift), (cx + w / 2, cy + h / 2)]
    d.polygon(left, fill=fill); d.polygon(right, fill=fill)
    for side in (-1, 1):
        for i in range(1, 6):
            t = i / 6.4; y0 = cy - h / 2 + h * t
            x0 = cx + side * (w / 2 - w * .06); x1 = cx + side * (gap + w * .07)
            d.line([(x0, y0), (x1, y0 + lift * (1 - abs(x0 - cx) / (w / 2)) * .0 + lift * .85)], fill=line, width=max(1, int(w * .012)))

def icon(size, maskable=False, rounded=True):
    S = size * SS
    img = sky(S // 2, S // 2, stars=False).resize((S, S), Image.BILINEAR)
    d = ImageDraw.Draw(img)
    scale = .6 if maskable else .82           # maskable icons keep content inside the safe zone
    cx, cy = S / 2, S * (.56 if not maskable else .55)
    star(d, cx, S * (.22 if not maskable else .25), S * .075 * scale / .82, GOLD)
    book(d, cx, cy, S * .56 * scale / .82)
    if rounded and not maskable:
        mask = Image.new('L', (S, S), 0); ImageDraw.Draw(mask).rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * .22), fill=255)
        bg = Image.new('RGBA', (S, S), (0, 0, 0, 0)); bg.paste(img.convert('RGBA'), (0, 0), mask); img = bg
    return img.resize((size, size), Image.LANCZOS)

for name, size, kw in (('icon-192.png', 192, {}), ('icon-512.png', 512, {}), ('icon-maskable-512.png', 512, {'maskable': True}),
                       ('apple-touch-icon.png', 180, {'rounded': False}), ('favicon-32.png', 32, {})):
    icon(size, **kw).save(os.path.join(OUT, name), optimize=True)

# favicon.svg (same motif as simple vector shapes)
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><radialGradient id="g" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#1a2a9a"/><stop offset="1" stop-color="#050a31"/></radialGradient></defs><rect width="64" height="64" rx="14" fill="url(#g)"/><path d="M32 9l3.2 5.6L41.5 14l-3.1 5.5 3.1 5.5-6.3-.6L32 30.4 28.8 24.4 22.5 25l3.1-5.5L22.5 14l6.3.6z" fill="#ffd86b" transform="translate(0 -3) scale(.95) translate(1.7 0)"/><path d="M9 28l22 3v24L9 51z M55 28l-22 3v24l22-4z" fill="#f4f1e6"/><path d="M13 35l14 2M13 41l14 2M51 35l-14 2M51 41l-14 2" stroke="#18245a" stroke-width="1.4" fill="none"/></svg>'''
open(os.path.join(OUT, 'favicon.svg'), 'w').write(svg)

# Social preview 1200x630
W, H = 1200, 630
og = sky(W, H, seed=11)
d = ImageDraw.Draw(og)
book(d, 270, 330, 330)
star(d, 270, 120, 46, GOLD)
def fit(txt, path, max_w, start):
    size = start
    while size > 14 and ImageFont.truetype(path, size).getlength(txt) > max_w: size -= 2
    return ImageFont.truetype(path, size)
X, MAXW = 520, W - 520 - 60
for txt, path, y, start, col in (('Iyun', BOLD, 140, 112, (255, 255, 255)),
                                 ('Tanakh · Mishnah · Talmud and more', REG, 262, 36, (205, 218, 255)),
                                 ('Hebrew texts with open-licensed translations,', REG, 322, 28, (160, 180, 235)),
                                 ('commentary, the Vilna daf layout, notes and groups.', REG, 362, 28, (160, 180, 235)),
                                 ('Iyun · free and open source · GPL-3.0', REG, 505, 26, (127, 150, 215))):
    d.text((X, y), txt, font=fit(txt, path, MAXW, start), fill=col)
hf = ImageFont.truetype(BOLD, 110)
d.text((W - 60 - hf.getlength('תורה'), 40), 'תורה', font=hf, fill=(30, 50, 140), direction='rtl', language='he')
og.save(os.path.join(OUT, 'og-image.png'), optimize=True)
print('icons written to', OUT, sorted(os.listdir(OUT)))

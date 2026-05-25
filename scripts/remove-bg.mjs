import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputPath = join(__dirname, '../public/logo.webp');
const outputPath = join(__dirname, '../public/logo.png');

// Threshold: pixels with R,G,B all below this value are considered background
const BG_THRESHOLD = 30;

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels = 4 (RGBA)
const pixels = new Uint8ClampedArray(data);

for (let i = 0; i < pixels.length; i += channels) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];

  if (r < BG_THRESHOLD && g < BG_THRESHOLD && b < BG_THRESHOLD) {
    pixels[i + 3] = 0; // set alpha to transparent
  }
}

await sharp(Buffer.from(pixels), { raw: { width, height, channels } })
  .png()
  .toFile(outputPath);

console.log(`Done → public/logo.png (${width}x${height})`);

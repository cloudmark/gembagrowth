// Run from the project root: node scripts/generate-brand-icons.mjs
// Export the existing vector mark in the approved 40px badge proportions.
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const source = await readFile('src/components/brand-mark.tsx', 'utf8');
const paths = [...source.matchAll(/<path\b[\s\S]*?\/>/g)].map(([path]) => {
  const d = path.match(/\sd="([^"]+)"/)[1];
  return `<path d="${d}"/>`;
}).join('');
if (!paths) throw new Error('No vector paths found in BrandMark');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#234b35"/><svg x="8.5" y="7" width="23" height="26" viewBox="8 2 87 96" fill="#faf9ed">${paths}</svg></svg>`;
await writeFile('public/brand-icon.svg', svg + '\n');

// PNG-compressed ICO entries retain crisp alpha edges at each native tab-icon size.
const sizes = [16, 32, 48, 64, 128, 256];
const images = await Promise.all(sizes.map(size => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer()));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
images.forEach((png, i) => {
  const entry = 6 + i * 16;
  directory[entry] = directory[entry + 1] = sizes[i] === 256 ? 0 : sizes[i];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(png.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
await writeFile('src/app/favicon.ico', Buffer.concat([directory, ...images]));
console.log('Generated SVG and 16–256px ICO badge icons from BrandMark.');

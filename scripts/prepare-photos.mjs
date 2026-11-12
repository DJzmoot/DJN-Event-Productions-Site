// Prepares web-ready master photos from the untouched originals.
//
//   node scripts/prepare-photos.mjs
//
// Originals live in /static (kept out of git, never modified). This script
// writes resized masters (max 2560px on the long edge) into src/assets/photos,
// where Astro's image pipeline generates responsive AVIF/WebP variants at
// build time. All metadata is stripped from the masters so GPS coordinates
// embedded by phones are never published; the originals keep their metadata.
//
// To add a photo: drop the original in /static, add a line to PHOTOS below,
// run the script, then reference the new file from a project in
// src/content/projects.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const SRC = path.join(root, 'static');
const OUT = path.join(root, 'src/assets/photos');
const MAX = 2560;

/** original filename in /static  ->  master filename in src/assets/photos */
const PHOTOS = {
  // Relay For Life — LIU Post (April 2019)
  '2019-04-04 18.31.08.jpg': 'relay-liu-truss-overview.jpg',
  '2019-04-04 19.36.39.jpg': 'relay-liu-stage-magenta.jpg',
  '2019-04-04 20.36.23.jpg': 'relay-liu-gym-violet.jpg',
  '2019-04-04 20.39.02.jpg': 'relay-liu-balcony.jpg',
  '2019-04-13 19.10.54.jpg': 'relay-liu-arch-stage.jpg',
  '2019-04-13 19.11.03.jpg': 'relay-liu-chess-bw.jpg',
  '2019-04-13 19.11.10.jpg': 'relay-liu-hope-luminarias.jpg',
  '2019-04-13 19.11.41.jpg': 'relay-liu-audience.jpg',
  '2019-04-13 19.12.26.jpg': 'relay-liu-speaker.jpg',
  '2019-04-13 19.13.20.jpg': 'relay-liu-dancers-panorama.jpg',
  '2019-04-13 19.13.42.jpg': 'relay-liu-dancers-blue.jpg',
  '2019-04-13 19.14.07.jpg': 'relay-liu-participants.jpg',
  // Gymnasium event — truss, moving heads, colour wash
  '37965982_10217016386344178_2331370211761979392_n.jpg': 'gym-truss-green-wash.jpg',
  '2019-03-21 23.39.20-1.jpg': 'gym-blue-wash-console.jpg',
  // Ballroom — projection screens and uplighting
  '38173168_10217041856140907_8073820591221637120_n.jpg': 'ballroom-projection.jpg',
  // Huntington Lighthouse Festival (August 2024)
  // Not published: load-in-truck.jpeg (readable licence plate), kayaks-beach.jpeg.
  'lighthouse-night.jpeg': 'huntington-lighthouse-night.jpg',
  'dusk-wash.jpeg': 'huntington-lighthouse-dusk.jpg',
  'lighting-console.jpeg': 'huntington-lighthouse-control.jpg',
  'line-arrays-barge.jpeg': 'huntington-lighthouse-line-arrays.jpg',
  'power-distro.jpeg': 'huntington-lighthouse-power.jpg',
  'dock-load-in.jpeg': 'huntington-lighthouse-load-in.jpg',
  // Suffolk Theater, Riverhead NY — concert lighting (2023–2026)
  '863029C7-A3B8-4B04-8E2D-0723CE66C11F_1_102_a.jpeg': 'suffolk-theater-concert.jpg',
  '7A08C83B-E68E-40DB-995A-FB6C008501E7_1_102_o.jpeg': 'suffolk-theater-beams.jpg',
  '71005C35-6450-4DFD-89CE-6213A94DA215_1_105_c.jpeg': 'suffolk-theater-orchestra.jpg',
  // Long Island Aquarium, Riverhead NY — wedding (November 2025)
  'A3D87452-9AC7-47AF-AEBE-31E961F4B747_1_102_a.jpeg': 'long-island-aquarium-wedding.jpg',
  // Nick at a production position
  'C81DC429-8502-48E6-B4DC-5B024911CCBB_1_105_c.jpeg': 'nick-manganiello-production.jpg',
};

fs.mkdirSync(OUT, { recursive: true });

for (const [src, dest] of Object.entries(PHOTOS)) {
  const input = path.join(SRC, src);
  if (!fs.existsSync(input)) {
    console.warn(`skip (missing original): ${src}`);
    continue;
  }
  await sharp(input)
    .rotate()
    .resize(MAX, MAX, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(OUT, dest));
  console.log(`${src}  ->  ${dest}`);
}

// Riverhead Merry Market: the original is an animated GIF from the previous
// site. Export representative stills plus a lightweight animated WebP.
const gif = path.join(SRC, 'RiverheadMerryMarket1.gif');
if (fs.existsSync(gif)) {
  const { pages = 1 } = await sharp(gif, { animated: true }).metadata();
  const frames = [0, Math.floor(pages / 3), Math.floor((2 * pages) / 3)];
  for (const [i, page] of frames.entries()) {
    await sharp(gif, { page })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(path.join(OUT, `riverhead-merry-market-${i + 1}.jpg`));
  }
  fs.mkdirSync(path.join(root, 'public/media'), { recursive: true });
  await sharp(gif, { animated: true })
    .resize(1280)
    .webp({ quality: 70, effort: 5 })
    .toFile(path.join(root, 'public/media/riverhead-merry-market.webp'));
  console.log(`riverhead gif -> ${frames.length} stills + animated webp (${pages} frames)`);
}

// Lights on Marquette: web-sized image from the previous site, copied as-is.
const marquette = path.join(SRC, 'LightsonMarquetteChristmas1.jpg');
if (fs.existsSync(marquette)) {
  fs.copyFileSync(marquette, path.join(OUT, 'lights-on-marquette.jpg'));
  console.log('LightsonMarquetteChristmas1.jpg  ->  lights-on-marquette.jpg');
}

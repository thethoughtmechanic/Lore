/**
 * Generates minimal solid-color PNG icons for the PWA manifest.
 * Uses only Node.js built-in modules.
 */
import { deflateSync } from 'zlib'
import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

function uint32BE(n) {
  const buf = Buffer.alloc(4)
  buf.writeUInt32BE(n, 0)
  return buf
}

function crc32(buf) {
  let crc = 0xffffffff
  const table = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1)
    table[i] = c
  }
  for (const byte of buf) crc = table[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii')
  const len = uint32BE(data.length)
  const crcInput = Buffer.concat([typeBytes, data])
  const crcBytes = uint32BE(crc32(crcInput))
  return Buffer.concat([len, typeBytes, data, crcBytes])
}

function createPNG(size, bg, fg) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

  // IHDR: width, height, bit depth=8, color type=2 (RGB), compression=0, filter=0, interlace=0
  const ihdr = chunk('IHDR', Buffer.concat([
    uint32BE(size), uint32BE(size), Buffer.from([8, 2, 0, 0, 0])
  ]))

  // Raw image data: filter byte (0) + RGB per row
  const bytesPerRow = size * 3
  const raw = Buffer.alloc((1 + bytesPerRow) * size)
  for (let y = 0; y < size; y++) {
    raw[y * (1 + bytesPerRow)] = 0 // filter: None
    for (let x = 0; x < size; x++) {
      const center = size / 2
      const radius = size * 0.35
      // Draw a circle in the foreground color
      const dx = x - center
      const dy = y - center
      const inCircle = Math.sqrt(dx * dx + dy * dy) < radius
      const color = inCircle ? fg : bg
      const off = y * (1 + bytesPerRow) + 1 + x * 3
      raw[off] = color[0]
      raw[off + 1] = color[1]
      raw[off + 2] = color[2]
    }
  }

  const idat = chunk('IDAT', deflateSync(raw))
  const iend = chunk('IEND', Buffer.alloc(0))

  return Buffer.concat([sig, ihdr, idat, iend])
}

mkdirSync(publicDir, { recursive: true })

const bg = [10, 10, 10]  // #0a0a0a
const fg = [255, 255, 255]  // white

writeFileSync(join(publicDir, 'icon-192.png'), createPNG(192, bg, fg))
writeFileSync(join(publicDir, 'icon-512.png'), createPNG(512, bg, fg))

console.log('Icons generated: public/icon-192.png, public/icon-512.png')

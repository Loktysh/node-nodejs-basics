import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import zlib from 'zlib';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const inputFilePath = path.join(__dirname, 'files', 'archive.gz');
const outputFilePath = path.join(__dirname, 'files', 'fileToCompress1.txt');
export const decompress = async () => {
  const gzip = zlib.Gunzip();
  const r = fs.createReadStream(inputFilePath);
  const w = fs.createWriteStream(outputFilePath);
  r.pipe(gzip).pipe(w);
};
decompress();

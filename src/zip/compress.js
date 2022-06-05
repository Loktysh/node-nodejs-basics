import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import zlib from 'zlib';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const inputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const outputFilePath = path.join(__dirname, 'files', 'archive.gz');
export const compress = async () => {
  const gzip = zlib.createGzip();
  const r = fs.createReadStream(inputFilePath);
  const w = fs.createWriteStream(outputFilePath);
  r.pipe(gzip).pipe(w);
};
compress();

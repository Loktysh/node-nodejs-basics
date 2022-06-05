import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { Transform } from 'node:stream';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

export const transform = async () => {
  const r = process.stdin;
  const w = process.stdout;
  const t = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('')+'\n');
    },
  });
  r.pipe(t).pipe(w);
};
transform();

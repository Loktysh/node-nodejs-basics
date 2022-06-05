import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  const r = fs.createReadStream(filePath);
  const w = process.stdout;
  r.pipe(w);
};
read();

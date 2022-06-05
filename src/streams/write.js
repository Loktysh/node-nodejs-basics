import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

export const write = async () => {
  const r = fs.createWriteStream(filePath);
  const w = process.stdin;
  w.pipe(r);
};
write();

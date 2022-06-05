import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
export const read = async () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    console.log(data)
  });
};
read();

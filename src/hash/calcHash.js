import crypto from 'crypto';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
const secret = 'secret';
export const calculateHash = async () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    const hash = crypto.createHmac('sha256', secret)
      .update(data)
      .digest('hex');
    console.log(hash);
  })
};
calculateHash();
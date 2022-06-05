import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFileName = path.join(__dirname, 'files', 'properFilename.md');
export const rename = async () => {
  try {
    await fs.promises.rename(fileName, newFileName);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};
rename();

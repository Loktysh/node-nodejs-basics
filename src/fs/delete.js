import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');
export const remove = async () => {
  try {
    await fs.promises.rm(fileToRemove);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};
remove();

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = path.join(__dirname, 'files');
const copyFolderPath = path.join(__dirname, 'files_copy');
export const copy = async () => {
  fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    fs.mkdir(copyFolderPath, err => {
      if (err) {
        throw new Error('FS operation failed');
      }
    });
    files.forEach(file => {
      fs.promises.copyFile(path.join(folderPath, file.name), path.join(copyFolderPath, file.name));
    });
  });
};
copy();

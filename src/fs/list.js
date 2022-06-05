import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = path.join(__dirname, 'files');
export const list = async () => {
  fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    }
    let filesName = files.map(file => {
        return file.isFile() && file.name;
      }
    );
    console.log(filesName);
  });
};
list();

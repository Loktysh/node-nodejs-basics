import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const filePath = path.join(__dirname, 'files','fresh.txt')
export const create = async () => {
  try {
    fs.writeFile(filePath, 'Hello World', { encoding: 'utf8', flag: 'wx' }, (err) => {
      if (err) {
        throw new Error('FS operation failed') 
    }})
  } catch (error) {
    console.log(error.message)
  }
};
create();
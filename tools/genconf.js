import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFileName = path.join(__dirname, '../config/default.json.example');
const destinationFileName = path.join(__dirname, '../config/default.json');

fs.copyFile(sourceFileName, destinationFileName)
    .catch(error => console.log(error));


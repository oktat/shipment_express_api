import fs from 'fs/promises'
import { generateApiKey } from 'generate-api-key'
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = path.join(__dirname, '../config/default.json');

function generateKey(size = 32, format = 'base64') {
    const buffer = crypto.randomBytes(size);
    return buffer.toString(format);
}

fs.readFile(fileName)
    .then(body => JSON.parse(body))
    .then(json => {
        json.app.key = generateApiKey({method: 'bytes', length: 32})
        return json
    })
    .then(json => JSON.stringify(json, null, 4))
    .then(body => fs.writeFile(fileName, body, 'utf8'))
    .catch(error => console.log(error))

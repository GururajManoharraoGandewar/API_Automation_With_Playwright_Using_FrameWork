import fs from 'fs';
import path from 'path';

export class JsonReader
{
    static async readJsonReader(fileName)
    {
        const filePath = path.join(__dirname, `../testdata/${fileName}.json`);

        const rawFileData = fs.readFileSync(filePath);

        return JSON.parse(rawFileData);
    }
}
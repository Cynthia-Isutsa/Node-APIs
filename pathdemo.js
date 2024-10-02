import path from 'path';
import url from 'url';

const filename ="/Users/sachin/Desktop/nodejs/pathdemo.js";

//basename()
const basename = path.basename(filename);
console.log(basename);

//dirname()
const dirname = path.dirname(filename);
console.log(dirname);

//extname()
const extname = path.extname(filename);
console.log(extname);

//parse()
const parsed = path.parse(filename);
console.log(parsed);

//__filename
const __filename = url.fileURLToPath(import.meta.url);
console.log(__filename);
//__dirname
const __dirname = path.dirname(__filename);
console.log(__dirname);

//join()
const joined = path.join(__dirname, 'text.txt');
console.log(joined);


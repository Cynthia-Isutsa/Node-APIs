//import fs from 'fs';
import fs from 'fs/promises';

// //readFile() - callback
// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//         console.error(data);
//         return;   
// })

// //readFileSync() - synchronous
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);

//readFile() - Promise.then
fs.readFile('./text.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//readFile() - async/await
async function readFile() {
    try {
        const data = await fs.readFile('./text.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}



//writeFile() - async/await
async function writeFile() {
    try {
        await fs.writeFile('./text.txt', 'Hello World again', 'utf8');
        console.log('File written successfully');
    } catch {
        console.log(error);
    }
}

//appendFile() - async/await

async function appendFile() {
    try {
        await fs.appendFile('./text.txt', 'This is appended Text', 'utf8');
        console.log('File appended successfully');
    } catch(error) {
        console.log(error);
    }
}

writeFile()
appendFile()
readFile()
import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT || 3000;
//Get Current Path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname, 'dirname');
console.log(__filename, 'filename');
const server = http.createServer(async(req, res) => {
try {
    if(req.method === 'GET') {
        let filePath
        if (req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html');
            // res.writeHead(200, { 'Content-Type': 'text/html' });
            //  res.end('<h1>HomoPage</h1>');
         } else if (req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html');
            //  res.writeHead(200, { 'Content-Type': 'text/html' });
            //  res.end('<h1>About</h1>');
         }else {
            throw new Error('Page Not Found');
            //  res.writeHead(404, { 'Content-Type': 'text/html' });
            //  res.end('<h1>404 Page Not Found</h1>');
         }

         const data = await fs.readFile(filePath);
         res.setHeader('content-type', 'text/html');
         res.write(data);
         res.end();
    }else{
        throw new Error('Method Not Allowed');
        // res.writeHead(500, { 'Content-Type': 'text/plain' });
        //      res.end('Server Error')
    }

    
} catch (error) {
    console.log(error);
}

});

server.listen(PORT, () => console.log(`Server is running on port ${PORT} `));
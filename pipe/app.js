import http from "http";
import fs from "fs";
import { fileURLToPath } from "url";

const inputPath = fileURLToPath(new URL('./input.txt', import.meta.url));

const server = http.createServer((req, res)=> {
     const readStream = fs.createReadStream(inputPath, 'utf-8');
     readStream.pipe(res);
});




// Web server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server port is ${PORT}`);
});
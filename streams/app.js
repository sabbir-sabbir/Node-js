import http from "http";
import {createReadStream, createWriteStream} from 'fs';
import path from 'path';

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.write('<html><head><title>Form</title></head>');
//         res.write('<body><form method="post" action="/process"> <input name="message" > </form></body>');
//         res.end();
//     }

//     if (req.url === '/process' && req.method === 'POST') {
//         req.on("data", (chunk)=> {
//           console.log(chunk.toString());
          
//         })
//         res.setHeader("Content-Type", "text/plain")
//         res.write("Thanks for submitting");
//         res.end();
//     }
// });



// // Web server
// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`The server port is ${PORT}`);
// });



















const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readStream = createReadStream(inputFilePath, {encoding: 'utf-8', highWaterMark: 16});
const writeStream = createWriteStream(outputFilePath);


// Listen for data chunks
readStream.on("data", (chunk)=> {
    console.log("Buffer (chunk):", Buffer.from(chunk));
    console.log(("Received chunk: ", chunk));
    writeStream.write(chunk);
    
    
});

// Handle stream end
readStream.on("end", ()=> {
    console.log("Our Work is done here!");
    console.log("Closing the write stream...");
    console.log("-----------------------------------------------------------------------");
    writeStream.end(); // close the write stream
});




// readStream.pipe(writeStream);

// handle eror
readStream.on("error", (err)=> console.error("Error:", err));
writeStream.on("error", (err)=> console.error("Error:", err));
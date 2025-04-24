import {createReadStream, createWriteStream} from 'fs';
import path from 'path';

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
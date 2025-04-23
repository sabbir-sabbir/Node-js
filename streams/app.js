import {createReadStream, createWriteStream} from 'fs';
import path from 'path';

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readStream = createReadStream(inputFilePath, {encoding: 'utf-8', highWaterMark: 16});
const writeStream = createWriteStream(outputFilePath);
readStream.pipe(writeStream);

// handle eror
readStream.on("error", (err)=> console.error("Error:", err));
writeStream.on("error", (err)=> console.error("Error:", err));
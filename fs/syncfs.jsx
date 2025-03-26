// Syncronouse way to   work with   the current                                     
const fs = require("fs");
const path = require("path");

let content = 'how are you ! Im SquidX';
const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);
// const writeFile = fs.writeFileSync(fileName, content, "utf-8");
// console.log(writeFile);
// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile);
// const appendFile = fs.appendFileSync(
//     filePath,
//     content,
//     "utf-8"
// )
// const fileDelete = fs.unlinkSync(filePath);
// console.log(fileDelete);
let newFilename = "newFile.txt";
const newFilePath = path.join(__dirname, newFilename);
const renameFile = fs.renameSync(filePath, newFilePath);
const fs = require("fs");
const path = require("path");

const fileName = "fsPromise.txt";
const filePath = path.join(__dirname, fileName);
let content = 'Hello im, SquidXX';
let contentTwoLine = '\n' + 'random text here as well';
let contentThreeLine = '\n' + 'This is line three 3';


// fs.promises.writeFile(filePath, content, 'utf-8').then(console.log("File created successfully")).catch((err)=> console.log(err));
// fs.promises.readFile(filePath, 'utf-8').then((data)=> console.log(data)).catch((err)=> console.log(err));



// const appendFileAgain = () => {
//     return fs.promises.appendFile(filePath, contentThreeLine, 'utf-8')
//         .then(() => console.log("Updated successfully"))
//         .catch((err) => console.error("Error:", err));
// };

// let count = 0; 
// const intervalId = setInterval(() => {
//     if (count >= 5) {
//         clearInterval(intervalId); 
//         console.log("Stopped after 5 updates.");
//         return;
//     }
//     appendFileAgain();
//     count++; 
// }, 100);

// fs.promises.unlink(filePath).then(()=> console.log("deleted successfuly")).catch((err)=> console.log(err));
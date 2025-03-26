const fs = require("fs");
const path = require("path");

let content = "hi, there im SquidXXXX"
let contentOne = '\n' + 'Hi there im Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube Cube'
const nameOfFile = "asyncFile.txt";
const filePath = path.join(__dirname, nameOfFile);

// const writeFile = fs.writeFile(filePath, content, "utf8", (err)=> {
//       if (err) {
//         console.error(`Error writing file: ${err}`);
//         return;
//       }
//       console.log(`Successfully wrote file: ${filePath}`);
    
// });
// const readFile = fs.readFile(filePath,"utf8", (err, data)=> {
//       if (err) {
//         console.error(`Error writing file: ${err}`);
//         return;
//       }
//       console.log(data);
    
// });
// const appendFile = fs.appendFile(filePath, contentOne, "utf8", (err)=> {
//       if (err) {node asyncfs.js 
//         console.error(`Error writing file: ${err}`);
//         return;
//       }
//       console.log("appending successfully");
    
// });
const deleteFile = fs.unlink(filePath, (err)=> {
      if (err) {
        console.error(`Error writing file: ${err}`);
        return;
      }
      console.log("deleteing successfully");
    
});
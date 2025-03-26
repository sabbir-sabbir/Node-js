const fs = require("fs/promises");
const path = require("path");

const filename = "aa.txt";
let content = "hello world!";
const filePath = path.join(__dirname, filename);


// const readFolder = async ()=> {
//      try {
//         const res = await fs.promises.readdir(__dirname);
//         console.log(res);
        
//      } catch (error) {
//          console.error(error);
//      }
// }

// readFolder();

// const writeFileEx = async ()=> {
//     try {
//        await fs.writeFile(filePath, content, 'utf-8' );
//        console.log("file written");
       
//     } catch (error) {
//         console.error(error);
//     }
// };


// const writeFileEx = async ()=> {
//     try {
//        const res = await fs.readFile(filePath, 'utf-8' );
//        console.log(res);
       
//     } catch (error) {
//         console.error(error);
//     }
// };
// writeFileEx();

// let dataTwo = "This is new data";
// const writeFileEx = async ()=> {
//     try {
//        await fs.appendFile(filePath, dataTwo, 'utf-8' );
//        console.log("updaed successfuly");
       
//     } catch (error) {
//         console.error(error);
//     }
// };
// writeFileEx();
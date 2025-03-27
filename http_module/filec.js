import fs from "fs";
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const fileCreation = ()=> {
    rl.question("Enter The File Name: - - (*__*) - - ", (filename)=> {
        rl.question("Enter Your Content Now: - - (*__*) - - ", (content)=> {
            fs.writeFile(`${filename}.txt`, content,  (err)=> {
                if(err) {
                    console.log("Error in writing file", err);
                    
                } else {
                    console.log(` Your File : - - - "${filename}.txt"  (*__*)  - - created successfully`);
                    
                }
                rl.close();
            })
        })
    })
}

fileCreation()
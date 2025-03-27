import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [];

const showMenu=()=> {
    console.log("\n Add a task");
    console.log("2: View Task");
    console.log("3: Exit");
    
    
    
}

showMenu()
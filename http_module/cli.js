import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [];

const showMenu=()=> {
    console.log("\n 1: Add a task");
    console.log(" 2: View Task");
    console.log(" 3: Exit");
    rl.question("Choose an option:  ", handleInput )
    
    
    
}

const handleInput = (option)=> {
    if(option === "1"){
        rl.question("Enter the task: - - "   , (task)=> {
            todos.push(task);
            console.log("Task added successfully ------ (*_*) (*_*) (*_*) (*_*) (*_*) (*_*) (*_*) (*_*) (*_*) (*_*) (*_*) (*_*)");
            showMenu()
        })
    } else if (option === "2"){
        console.log("\n Your Todo list");
        todos.forEach((task, index)=> {
          console.log(`${index + 1}. ${task}`);
        })
        showMenu()
    } else if(option === "3"){
        console.log("GOOD BYE");
        
        rl.close()
    } else {
        console.log("Invalid  Input Please try again");
        showMenu()
        
    }
    
}

showMenu()
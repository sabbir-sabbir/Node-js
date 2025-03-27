

import https from 'https';
import  chalk from 'chalk';


const getJoke=()=> {
   const url = 'https://official-joke-api.appspot.com/random_joke';
   https.get(url, (response)=> {
    let data = "";
        response.on('data', (chunk)=> {
            data += chunk;

        })
        response.on('end', ()=> {
            const joke = JSON.parse(data);
            console.log(`HERE IS AN RANDOM JOKE ABOUT: - - (** -- ${joke.type} -- **) `);
            console.log("\n\n" + chalk.bgMagenta.red(` 🃏 ${joke.setup} `) + "\n");
            console.log(chalk.bgCyan.bold.white(` 🤣 ${joke.punchline} \n`));
            console.log(chalk.dim("---------------------------------------------------"));

            
            
            

        })

        response.on('error', (err)=> {
            console.error(`Error: ${err}`);
        })
   })
}

getJoke();
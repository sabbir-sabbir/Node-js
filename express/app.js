import express from 'express';
import { PORT } from './env.js';
import path from 'path';

// instantiate express app
const app = express();
const staticPath = path.join(import.meta.dirname, "public");
app.use( express.static(staticPath));

app.get("/", (req, res)=> {
    
    const forHomePage = path.join(import.meta.dirname, "public", "index.html");
   
    res.sendFile(forHomePage, (err)=> {
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        } else {
            console.log("File sent successfully");
        }
    });
})


app.listen(PORT, ()=> {
    console.log(`Server is running on -- (*_*) --- -- port ${PORT}`);
    
})
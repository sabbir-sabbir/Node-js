import express from 'express';
import { PORT } from './env.js';

// instantiate express app
const app = express();

app.get("/", (req, res)=> {

    const __filename = new URL(import.meta.url).pathname;
    console.log(__filename);
    
    
    res.send("Hello World!");
})


app.listen(PORT, ()=> {
    console.log(`Server is running on -- --- -- port ${PORT}`);
    
})
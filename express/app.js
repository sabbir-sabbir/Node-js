import express from 'express';
import { PORT } from './env.js';
import path from 'path';

// instantiate express app
const app = express();
const staticPath = path.join(import.meta.dirname, "public");
app.use( express.static(staticPath));

app.get("/profile/:username", (req, res)=> {
   
})


app.listen(PORT, ()=> {
    console.log(`Server is running on -- (*_*) --- -- port ${PORT}`);
    
})
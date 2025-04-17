import express from 'express';
import { PORT } from './env.js';
import path from 'path';

// instantiate express app
const app = express();
const staticPath = path.join(import.meta.dirname, "public");
app.use( express.static(staticPath));

app.get("/profile/:username", (req, res)=> {
    console.log(req.params);
    res.send("Hello " + req.params.username);
    
   
})


app.get("/profile/:username/article/:slug", (req, res)=> {
    console.log(req.params);
    const formattedSlug = req.params.slug.replace(/-/g, " ");
    res.send("Hello " + req.params.username + " and your article is " + formattedSlug);
    
   
})

app.get("/product", (req, res)=> {
    console.log(req.query);
    res.send("HELLO THIS IS PRODUCT" + " " + req.query.search + " " +  req.query.id);
    
     
    
 })


app.listen(PORT, ()=> {
    console.log(`Server is running on -- (*_*) --- -- port ${PORT}`);
    
})
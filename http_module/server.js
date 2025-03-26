const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("welcome to my website");
        res.end();
    }

    if (req.url === "/about") {
        res.setHeader("Content-Type", "text/plain")
        res.write("This mail.com");
        res.end();
    }
});



// Web server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server port is ${PORT}`);
});

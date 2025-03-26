const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("welcome to my website");
        res.end();
    }

    if (req.url === "/about") {
        res.setHeader("Content-Type", "text/plain")
        res.write("This is my about page as yo hehehhehehhehhehehheheu kno hello howa rey this is my email address: iosabbir7890@gmail.com");
        res.end();
    }
});



// Web server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server port is ${PORT}`);
});

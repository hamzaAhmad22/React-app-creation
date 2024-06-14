const http = require("http");
const port = 4000;

const server = http.createServer((req, res) => {
        res.write("hamza");
        res.end();
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

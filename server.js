const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Nairobi');
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('My server is running.');
});

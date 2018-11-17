const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
 res.end('EKSDEE\n');
});

server.listen(port, hostname, () => {
  console.log(`Working at  http://${hostname}:${port}/`);
});

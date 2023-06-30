const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hey, this app is working fine!!!!');
});

// Start the server on the default IP address (0.0.0.0) and port
const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});

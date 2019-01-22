const http = require('http');
const { PORT, IP } = require('../config/web');
const apiRouter = require('./routes/api/index');

const server = http.createServer((request, response) => {
  const { method, url } = request;
  console.log(`${method} request to ${url}`);
  if (url === '/api/messages') {
    apiRouter(method)(request, response);
  } else {
    response.writeHead(404, writeHeadersJSON);
    response.end({ message: 'Resource not found!', status: 404 });
  }
});

console.log(`Listening on ${IP}:${PORT}...`);
server.listen(PORT, IP);

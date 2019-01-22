const { getMessages } = require('./handlers');

const defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
};

const writeHeadersJSON = Object.assign(defaultCorsHeaders, {
  'Content-Type': 'application/json',
});

module.exports = method =>
  ({
    GET: (request, response) => {
      getMessages()
        .then(messages => {
          response.writeHead(200, writeHeadersJSON);
          response.end(JSON.stringify({ results: messages, status: 200 }));
        })
        .catch(e => {
          response.writeHead(500, writeHeadersJSON);
          response.end(
            JSON.stringify({ message: 'Failed to retrieve data!', status: 500 })
          );
        });
    },
  }[method]);

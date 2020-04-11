const http = require("http");
const put_handler = require('./handlers/put_handler');
const delete_handler = require('./handlers/delete_handler');
const get_handler = require('./handlers/get_handler');
const post_handler = require('./handlers/post_handler');

let request_handler = (req, res) => {
  switch(req.method) {
      case 'GET': get_handler(req, res); break;
      case 'POST': post_handler(req, res); break;
      case 'PUT': put_handler(req, res); break;
      case 'DELETE': delete_handler(req, res); break;
  }
};

const PORT = 5000;
let server = http.createServer();
server.on('request', request_handler);
server.listen(PORT);
console.info(`Server listen on port ${PORT}`);
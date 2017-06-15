const restify = require('restify');
const config = require('./config.json');
const server = restify.createServer({
  name: config.name,
  version: config.version
});
module.exports = server;
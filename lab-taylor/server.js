'use strict';

const http = require('http');
const Router = require('./lib/router.js');
const beerRouter = require('./route/beer-route.js');
const PORT = process.env.PORT || 3000;
const router = new Router();

beerRouter(router);
const server = http.createServer(router.route());

server.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});




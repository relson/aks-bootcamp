#!/usr/bin/env node
const http = require('http');

http.createServer((req, res) => {
	res.write('Hello World!');
	res.end();
}).listen(8088);

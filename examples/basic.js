"use strict";

var config = require('./..')(); 

http.createServer(function(req, res) {
	console.log(req, res);
}).listen(config.ip, config.port);
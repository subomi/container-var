"use strict";

var config = require('./..')();

// Setting defaults if you're working on localhost or environment does not provide information

config.port = config.port === undefined ? 9090 : config.port;
config.ip = config.ip === undefined ? "localhost" : config.ip;
config.logdir = config.logdir === undefined ? "./log" : config.logdir;


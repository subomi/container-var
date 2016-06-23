"use strict";
/*
	Main and Only module
*/

/*

Matches different parameters, using the expected behaviour of container structures e.g ip etc.

	Matches:
1. parameter
2. _parameter
3. _parameter_
4. parameter_
5. -parameter
6. -parameter-
7. parameter-

*/ 

var tests_pattern = {
	"ip": /[^a-zA-Z]*(IPADDRESS|IP)[^a-zA-Z]*/i, // Matches ip and ipaddress
	"port": /[^a-zA-Z]*(PORTNUMBER|PORT)[^a-zA-Z]*/i, // Matches port and portnumber
	"log": /[^a-zA-Z]*LOG[^a-zA-Z]*/i, // Log directory 
	"data": /[^a-zA-Z]*DATA[^a-zA-Z]*/i, // For consistent data storage
	"repository": /[^a-zA-Z]*(REPOSITORY|REPO)[^a-zA-Z]*/i, // For your application repository
	"temp": /[^a-zA-Z]*TEMP[^a-zA-Z]*/i, // For temporary data storage  
}

// Exported Object
var env = {};

exports = module.exports = resolute;

function match(test, array) {
	var result
	if(!test) {
		return "No test pattern";
	}  

	if(array) {
		// Check if array is a string or an actual array
		if(array.constructor.name === "String") {
			result = test.exec(array); 
			console.log("error");
			return result === true ? array : -1;
		}
	}

	for(var i=0; i<=array.length-1; i++) {
		result = test.exec(array[i]);
		if(result !== null) {
			return array[i] ;
		}
	}
	return -1;
}

function resolute() {
	var patterns, pattern_length, pattern_keys, environment, envkeys, output, result, key, test;

	patterns = tests_pattern;
	environment = process.env;
	envkeys = Object.keys(environment);
	pattern_keys = Object.keys(patterns);

	for(var i=0; i<=pattern_keys.length-1; i++) {
		key = pattern_keys[i];
		test = patterns[key];
		result = match(test, envkeys);

		env[key] = result === -1 ? undefined : environment[result];
	}

	return env;
}

resolute.makeTest = function(name, string) {
	if(!name) {
		throw new TypeError("No name supplied");
	}

	tests_pattern[name] = string || undefined; 
}
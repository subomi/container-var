/*
	Main and Only module

*/

var env = {};

// Tests
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

// Tests implicitly against process.env
var test = (function(test) {
	var processEnv = process.env;
	
	return function test(key, test) {
		var EnvKeys = Object.keys(processEnv);

		// Keys do the matching on all process.env variables
		EnvKeys.forEach(function(item, index, array) {
			var result = test.exec(item);
			if(result === null) {
				env[key] = undefined;
				return;
			}
			// pass in value, if key matched!
			env[key] = processEnv[item];
		});
		
	}
	
})() // <- prepares test for testing!

/*
Receives test object like above
*/
function resolution(tests_pat) {
	
	if(!tests_pat) {
		throw new TypeError('Wrong type of test object passed!')
	}
	
	// keys of tests_object
	var keys = Object.keys(tests_pat);
	
	keys.forEach(function(item, index, array) {
		test(item, tests_pat[item]); 
	});

}

exports = module.exports = resolution;


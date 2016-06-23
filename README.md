# container-var
To normalize the environment variable differences that cloud containers provide to a nodejs environment
# Purpose
To be able to write the same app and it would work without breaking on different cloud container environments like Openshit, Amazon Web Service, Heroku etc.
# How to

'''js
	// returns a function
	var config = require('./container-var');
'''

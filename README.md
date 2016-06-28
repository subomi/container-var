## Container-var
To normalize the environment variable differences that cloud containers provide to a nodejs environment
## Purpose
To be able to write the same app and it would work without breaking on different cloud container environments like Openshit, Amazon Web Service, Heroku etc.
## Philosophy
When a web application is built, it makes use of the environment provided to do adequate logging and other stuffs. Cloud containers provides this basic properties with but with different namings in their environment. Therefore, container variables is job is to allow an application to be portable across different container environment variables, parsing them and retriving necessary content without altering the process.env object

## How to

```bash 
$ npm install container-var 
```

```js
// returns a function
var config = require('./container-var');
```



# node.js-practice
learning node.js for future projects

## Note
* use your own MongoDB key

## Dependencies
* npm
* Node.js
* Express
* path
* ejs - for easy templating
* Bootstrap
* MongoDB
* Mongoose

## creating first app
installing all dependencies
```
$ mkdir nodejs-practice
$ cd nodejs-practice
$ npm init
$ npm install express --save
$ npm install path --save
$ npm install ejs --save
```
then open your text editor (vscode, sublime, etc.)

create a new file app.js

## testing server
in app.js
```
var express = require("express");
var path = require("path");
 
var app = express();

app.set("port",process.env.PORT || 3000);

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
});
```
save it and open your terminal type:
```
$ npm start
```
it should display 
```
Server started on port 3000
```
if not, check all dependcies are installed.

/* function sayHello(name){
    console.log('Hello '+name);
}

sayHello('Ian'); */

var express = require("express");
var path = require("path");
var app = express();
const mongoose = require('mongoose');

//mongodb config
const db = require('./config/keys').MongoURI;

//connect to mongodb
mongoose.connect(db,{ useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes
app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));

//
app.set("port",process.env.PORT || 3000);

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
});
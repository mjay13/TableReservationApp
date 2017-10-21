var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var path = require("path");


app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// method and route

app.get("/", function(req, res){
	res.send("some text");
});


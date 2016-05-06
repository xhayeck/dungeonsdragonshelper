var express = require('express');
var app = express();

module.exports = app;

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/node_modules'));

app.listen(1337, function() {
  console.log("We're up and running!");
});

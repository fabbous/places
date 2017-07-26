
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var IP = process.env.IP || 'localhost';
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));


app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, function () {
  console.log('listening right now on port', PORT);
});

console.log('listening on', IP, PORT);

module.exports.app = app;
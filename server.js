// set up a basic server service
var express = require('express');

// create express app to serve application
var app = express();
app.use(express.static(__dirname + '/webapp'));
app.listen(process.env.PORT || 4000);

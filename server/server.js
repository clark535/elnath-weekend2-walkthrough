var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var math = require('./routes/math');

var port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', math);

app.listen(port, function() {
    console.log('listening on port', port);
});
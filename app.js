
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//  middleware bodyParser()
//  POST
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var port = process.env.PORT || 8888;

//路由
require('./routes/users.routes.js')(app);

//开启server
app.listen(port);
console.log('server start on port ' + port);


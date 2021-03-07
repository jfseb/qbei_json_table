/**
 * A simple webserver serving the interface
 */
/*global __dirname:true*/
var process = require('process');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var compression = require('compression');

//#####################################
var fs = require('fs');

//#####################################

var app = express();
var port = process.env.PORT || 42022;
app.locals.pretty = true;
app.set('port', port);
//app.set('views', [__dirname + '/app/server/views', modelPath + '/views']);
//app.set('view engine', 'pug');
//app.use(cookieParser());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('*',function(req,res,next){
  if((req.headers['x-forwarded-proto'] !='https') && process.env.PORT && process.env.WOSAP_SERVER)
    res.redirect(process.env.WOSAP_SERVER + req.url);
  else
    next(); /* Continue to other routes if we're not redirecting */
});

var oneDay = 86400000; // in milliseconds
app.use(express.static(__dirname + '/app/public',{
  maxage: oneDay
}));

//require('./app/server/routes')(app, modelPath, modelNames);

var server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
  //res.sendfile(__dirname + '/public/index.html');
});

console.log(' server running on ' + port);

server.listen(port);

// heroku requires the socket to be taken within 60 seconds,
// so we start the server early even if the bot initialization blocks

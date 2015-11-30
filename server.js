var express = require('express');
var _ = require('lodash');
var port = process.env.PORT || 3000
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal= require('passport-local');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./model/db');
var blogModel = require('./model/post');
var blogRoutes = require('./routes/post');
var Twit = require('twit');
var commentModel = require('./model/comment');
var githubRoutes = require('./routes/github');
var prettydate = require("pretty-date");

require('dotenv').load();


var mongoose = require('mongoose');


var app = express();

var router = express.Router(); 


app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({secret:'ilovegoats'}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());

require('./routes/userRoutes.js')(app, passport);

require('./config/passport')(passport);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.options("*", function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
});

var T = new Twit({
  consumer_key:process.env.CONSUMER_KEY,
  consumer_secret:process.env.CONSUMER_SECRET,
  access_token:process.env.ACCESS_TOKEN,
  access_token_secret:process.env.ACCESS_TOKEN_SECRET
});

var fetchTweets = function(req, res){

  var twitterHandle = req.params.twitterHandle;
  
  T.get('statuses/user_timeline', { screen_name: twitterHandle, count: 1 },
    function(err, data, response){
      
      var justTweets = [];
      
      data.forEach(function(obj){
        justTweets.push(obj.text);
        });
      
      res.send(data);
    });
  
}; 


app.set('port', (process.env.PORT || 3000));

app.use('/api', router);


if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}


app.use(express.static('public'));

app.use('/api/blog', blogRoutes);
app.use('/api/handle/:twitterHandle', fetchTweets);

app.use('/api/blogPost', blogRoutes);
app.use('/api/github', githubRoutes);

app.get('/', function(req, res){
    res.readFile('index.html')
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

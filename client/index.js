var React = require('react');
var Github = require('./Github');
var Twitter = require('./twitterList');
var ReactDOM = require('react-dom');


ReactDOM.render(<Github url="/api/github" />, document.getElementById('github'));
ReactDOM.render(<Twitter url="/api/twitter" />, document.getElementById('twitter'));

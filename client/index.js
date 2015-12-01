var React = require('react');
var App = require('./newJoke');
var magic = require('./magic')


React.render(<App/>, document.getElementById('newJokes'));
React.render(<magic/>, document.getElementById('ball'));
var React = require('react');
var App = require('./newJoke');
var Joke = require('./magic')


React.render(<App/>, document.getElementById('newJokes'));
React.render(<Joke/>, document.getElementById('ball'));
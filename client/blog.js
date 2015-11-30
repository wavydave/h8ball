var React = require('react');
var ReactDOM = require('react-dom');

var BlogList = require('./BlogList');
var BlogBox = require('./BlogBox');

ReactDOM.render(<BlogBox url="/api/blog" />, document.getElementById('blogBody'));
var React = require('react');

var InsultList = React.createClass({
	render: function() {
	var magicList = [
		"Don't even try",
		"No",
		"You are a mistake",
		"Fuck you",
		"Your Mom told me you were a mistake",
		"Try again",
		"Just stop",
		"Forget it"
	];
	var magicBall = function(){
	var x = magicList[Math.floor(Math.random() *(magicList.length - 1))];
	console.log(x);}

	return (
		<div>
		<h1>Hello</h1>
		<p>{InsultList}</p>
		</div>
		)
	}
)};



module.exports = InsultList;








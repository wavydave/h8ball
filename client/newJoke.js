var React = require("react");

var App = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

			var body = React.findDOMNode(this.refs.body).value.trim();

			if(!title){
				return;
			}
			var data = ({body: body});

			$.ajax({
				url:"/api/jokes",
				dataType: 'json',
				data: data,
				type: 'POST',
					success:function(response){
					console.log("Posting data", data, response)
					document.location='/index.html'
					}.bind(this),
					error: function(xhr,status, err){
						console.log("NOT POSTING DATA")
						console.log(data)
						console.error(this.props.url, status, err.toString());
					}.bind(this)
			})
	},
    render: function() {
        return (
				<div id="answerSubmit">
					<form method="POST">
						<h1 id="formHead">Make your own Magic Ballz</h1>
						<textarea type="text" ref="body" className="form-control" placeholder="Spit yo hot fire"/>
						<button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
        );
    }
});

module.exports = App;
	













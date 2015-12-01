var React = require("react");

var App = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();

			var title = React.findDOMNode(this.refs.title).value.trim();
			var cat = React.findDOMNode(this.refs.cat).value.trim();
			var body = React.findDOMNode(this.refs.body).value.trim();

			if(!title){
				return;
			}
			var data = ({title: title, cat: cat, body: body});

			$.ajax({
				url: App,
				dataType: 'json',
				data: data,
				type: 'POST',
					success:function(response){
					console.log("Posting data", data, response)
					document.location='/blog.html'
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
				<div>
					<form method="POST">
						<h1 id="formHead">Make your own Magic Ballz</h1>
    					
						<input type="text" ref="title" className="form-control" placeholder="Title Your Ballz"/>
						<input type="text" ref="cat" className="form-control" placeholder="Category Please"/>
						<textarea type="text" ref="body" className="form-control" placeholder="Spit yo hot fire"/>
						<button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
        );
    }
});

module.exports = App;
	













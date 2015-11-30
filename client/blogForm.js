var React = require('react');
var ReactDOM = require('react-dom');

var BlogForm = React.createClass({

	handleSubmit: function(e){
		
		e.preventDefault();
		
		var title =ReactDOM.findDOMNode(this.refs.title).value.trim();
		var name =ReactDOM.findDOMNode(this.refs.name).value.trim();
		var body =ReactDOM.findDOMNode(this.refs.body).value.trim();

		if(!title){
			return;
		}
		var data = ({title: title, name: name, body: body});

		console.log(data, "before ajax");

		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: data,
			success: function(data){
				console.log("inside success");
				document.location = "/blog.html"
			}.bind(this),
			error: function(xhr, status, err) {
				console.log("It is Pucked Up!" + this.props.url)
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render: function(){
		return (
			<div>
		        <form>		        
		            <div className="form-group">
		                <label htmlFor="">Blog Entry Title</label>
		                <input type="text" className="form-control" ref="title" placeholder="Input field"/>
		            </div>

		            <div className="form-group">
		                <label htmlFor="">Name it!</label>
		                <input type="text" className="form-control" ref="name" placeholder="Input field"/>
		            </div>

		            <div className="form-group">
		                <label htmlFor="">Type it!</label>
		                <input type="textarea" className="form-control" ref="body" placeholder="Input field"/>
		            </div>

		            <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
		        </form>
			</div>
			);
	}
});


ReactDOM.render(<BlogForm url="/api/blog"/>, document.getElementById('blogForm'));
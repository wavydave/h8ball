var React = require('react');

var Github = React.createClass ({
	
	getInitialState: function(){
		return{data: []};
	},

	loadGitsFromServer: function(){
		var url = "/api/github";
		$.ajax({
			url: url,
			dataType: 'json',
			data:'data',
			cache: false,
			success: function(data){
				console.log("inside success")
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.log("You done Messed up, Boy " + this.props.url)
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount: function(){
		this.loadGitsFromServer();
	},	
	render: function(){
		var gitstuff = this.state.data.map(function(c){	
			return(
				<div className="col-md-4">
					<div className="panel panel-default box">    			
   			 			<div className="panel-body">
   			 				<li>{c.repo.name}</li>
   			 				<li>{c.type}</li>
   			 				<li>{c.id}</li>
   			 			</div>   			
					</div>
				</div>
			)
	});
		return (
			<div>
			{gitstuff}
			</div>			
		);
	}
});
module.exports = Github;

var React = require('react');
var TweetList = React.createClass({
	render: function() {

		var tweetData = this.props.data.map(function(tweet){
			return <li> {tweet.text} </li>
		});

		return (
			<div>
				<h1> List of Tweets </h1>
				<ul>
					{tweetData}
				</ul>
			</div>
		);
	}
});

var TweetBox = React.createClass({

    getInitialState: function(){
      return {data: []};
    },

    loadTweetsFromServer: function() {
      var handle="Wavydav"
      $.ajax({
        url: this.props.url + handle,
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log("inside success")
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.log("broken url is " + this.props.url)
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },

  componentDidMount: function(){
    this.loadTweetsFromServer();
  },

  

    render: function() {
        return (
        <div className="col-md-4">
					<div className="panel panel-default box">    			
   			 			<div className="panel-body">
   			 				<li></li>
   			 				
   			 			</div>   			
					</div>
				</div>
          );
    }
});



module.exports = TweetList;
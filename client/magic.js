var React = require("react");


var Joke  = React.createClass ({
  getInitialState: function() {
    return {liked: false, joke: []};
  },

    loadJokesFromServer: function() {

		$.ajax({
          url: "/api/jokes/justOne",
          dataType: 'json',
          cache: false,

          success:function(data){
            console.log("joke success");
            this.setState({joke:data});
            this.setState({liked: !this.state.liked});
          }.bind(this),

          error: function(xhr, status, err){
            console.log("broken ")
            console.error(status, err.toString());
          }.bind(this)
        });
    },
    
  render: function() {
    var text = this.state.liked ? 'Hide Jokes' : 'Show Jokes';
    console.log(text);
    return (
     
      <div id="bigBall" onClick= {this.loadJokesFromServer}>Ballz
      <MainJoke joke={this.state.joke} jokeDisplay={this.state.liked}/>
          <div id="joke">
            <input type="text" name="Y/N Question"/>
          <div id="showJoke">
          </div>
        </div>
           
        
      </div>
    );
  }
})

var MainJoke = React.createClass({
	
  render: function() {
    var jokeList = this.props.joke;

    return !this.props.jokeDisplay ? <div/> : (
      <div className="col-sm-12"id="mainJoke">
        <h3 className="returnTitles">{jokeList}</h3>
          
      </div>
    );
  }
});

module.exports = Joke;
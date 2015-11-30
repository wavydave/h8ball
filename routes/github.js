var express = require('express');
var bodyParser = require('body-parser');
var axios = require('axios');

var url = "https://api.github.com/users/wavydave/events";

fetchGithubEvents = function(req, res){
	// Make a request for a user with a given ID
	axios.get(url)
  		.then(function (response) {
  			var myEvents = response.data.slice(0, 2).map(function(g){
  				return{
  					"id": g.id, 
            "type": g.type, 
  					"repo":g.repo
  				}
  			}
      );
    		res.json(myEvents);
  		})
  		.catch(function (response) {
    		console.log(response.data);
  		});
}


module.exports = fetchGithubEvents;
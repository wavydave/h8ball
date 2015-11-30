var React = require('react');
var BlogComment = require('./BlogComment');
var prettydate = require('pretty-date');
var md5 = require('md5');


var BlogList = React.createClass({

	render: function(){
		var self = this;
		var blogData = this.props.data.map(function(blog){
			if(blog.comments.length > 0){
				var comments = blog.comments.map(function(comment){
					console.log(comment)
					if(comment.user){
						console.log("************", comment.user)
						var grav = "http://gravatar.com/avatar/" + md5(comment.user.local.email); 
						var gravy = <img src={grav}/>
						var guy = {comment.user.local.handle}
					}
					
					var newDate = prettydate.format(new Date(comment.date))
				return (
					<figure className={comment}>
						{gravy}
					<p><strong>{comment.body}</strong> <strong>{newDate}</strong> <strong>guy</strong></p>
					</figure>
						)

				}).reverse();
			} else {
				var comments = "Nothing to be said"
			}
			return (
				<div>
						<h3> {blog.title} </h3>
						<p> <strong>{blog.body}</strong> </p>
						<p> {blog.date} </p>
							{comments}					
						<BlogComment blogId={blog._id} onPost={self.props.newData}/>
				</div>
				)
		}).reverse();

		return (
			<div>
				<h1> Blogs </h1>
				<ul>
					{blogData}
				</ul>
			</div>
			)
	}
	
});

module.exports = BlogList;
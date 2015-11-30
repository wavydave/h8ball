var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
	body: String,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	date: { type: Date, default: Date.now },
	blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
});

mongoose.model('Comment', commentSchema);

module.exports = commentSchema;
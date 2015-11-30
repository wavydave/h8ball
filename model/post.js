var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var postSchema   = new Schema({
    title: String,
    name: String,
    body: String,
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    date : {type: Date, default: Date.now}

    
});

module.exports = mongoose.model('Post', postSchema);
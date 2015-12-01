var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JokeSchema = new Schema ({

    title: String,
    cat: String,
    body: String
   
});

module.exports = mongoose.model('Joke', JokeSchema);


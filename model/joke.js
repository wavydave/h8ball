var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JokeSchema = new Schema ({

    body: String
   
});

module.exports = mongoose.model('Joke', JokeSchema);


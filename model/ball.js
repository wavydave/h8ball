
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BallSchema = new Schema ({

    category: [
    cat: Array,
   joke: String,

        ]
  
});

module.exports = mongoose.model('Joke', JokeSchema);
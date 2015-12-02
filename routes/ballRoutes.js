var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }))

router.use(function(req, res, next) {
  console.log('At least something is happening');
  next();
})

router.route('/')
    .post(function(req, res){
        console.log("Ball not created")
        mongoose.model('Ball').create({
            cat: req.body.cat,
            joke: req.body.joke
        }, function(err, ball){
            console.log("ball", ball);
            if(err)
                res.send(err)

            res.json(ball)
        })
    })
router.route('/allCats')
 .get(function(req, res){
   mongoose.model('Joke').find({}, function(err, joke){
     if(err){
       res.send("You got Problemas Hombre");
     } else {
       var justFilter = joke.cat(function(j){
         return j.cat 
       });
   
     }
   })
 })
 .delete(function(req, res) {
      mongoose.model("Ball").remove({
          _id: req.params.joke_id
      }, function(err, joke) {
          if (err)
              res.send(err);
          res.json({ message: 'Deleted' });
      });
  });

module.exports = router;
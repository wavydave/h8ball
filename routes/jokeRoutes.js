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
// POST NEW JOKE
  .post(function(req, res){
    console.log("joke not created")
    mongoose.model('Joke').create({
      title: req.body.title,
      cat: req.body.cat,
      body: req.body.body
    }, function(err, joke){
      console.log("joke",joke);
      if(err)
        res.send(err)
      
      res.json(joke)
    })
  })


// GET All JOKES
 .get(function(req, res) {
   mongoose.model('Joke').find({}, function(err, joke){
     if(err){
       res.send("You got Problems bro");
     } else {
       console.log("You are getting Jokes")
       res.json(joke);
     }
   });
 })
// GET ONE RANDOM JOKE
// .get(function(req, res) {
//    mongoose.model('Joke').find({}, function(err, joke){
//      if(err){
//        res.send("You got Problems bro");
//      } else {
//        console.log("You are getting Jokes")
//        res.json(joke);
//      }
//    });
//  })


router.route('/joke/:joke_id')
// GET VENDOR BY ID
   .get(function(req, res){
       mongoose.model("Joke").findById(req.params.joke_id, function(err, joke){
           if(err){
               res.send("You didn't get all of the jokes");
           } else{
               console.log("You are getting the jokes by ID");
               res.json(joke);
           }
       })
   })

   .delete(function(req, res) {
       mongoose.model("Joke").remove({
           _id: req.params.joke_id
       }, function(err, joke) {
           if (err)
               res.send(err);
           res.json({ message: 'Deleted' });
       });
   });

module.exports = router;
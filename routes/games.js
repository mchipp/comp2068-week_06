// Created by Mark Chipp 200180985 <mark.chipp@live.ca, mark.chipp@mygeorgian.ca>
// Created on 06-Oct-2016

var express = require('express');
var router = express.Router();

// reference the Game model
var Game = require('../models/game');

// GET handler for /games
router.get('/', function(req, res, next) {

  // use Game model to run a query
  Game.find(function(err, games) {
    if (err) {
      console.log(err);
      res.render('error');
    }
    else {
      // load the games view
      res.render('games', {
        title: 'Video Games',
        games: games
      });
    }
  });
});

/* GET /games/add - display empty Game form */
router.get('/add', function(req, res, next) {

  // load the blank game form
  res.render('add-game', {
    title: 'Add a New Game'
  });
});

/* POST /games/add - proecess form submission */
router.post('/add', function(req, res, next) {

  // use the game model and call the mongoose create function
  Game.create( {
    title: req.body.title,
    publisher: req.body.publisher,
    genre: req.body.genre,
    year: req.body.year
  }, function(err, Game) {
    if(err) {
      console.log(err);
      res.render('error');
    }
    else {
      res.redirect('/games');
    }
  });
});

/* GET /games/delete/:_id - run a delete on selected game */
router.get('/delete/:_id', function(req, res, next) {
  //read the id value from the url
  var _id = req.params._id;

  //use mongoose to delete this game
  Game.remove( { _id: _id }, function(err) {
    if (err) {
      console.log(err);
      res.render('error', {message: 'Delete Error'});
    }
    res.redirect('/games');
  });
});

/* GET /games/:_id - show the edit form */
router.get('/:_id', function(req, res, next) {
  // get the id from the url
  var _id = req.params._id;

  // look up the selected Game document with this _id
  Game.findById(_id, function(err, game) {
    if(err) {
      console.log(err);
      res.render('error', {message: 'Error loading edit form'});
    }
    else {
      // load the edit form
      res.render('edit-game', {
          title: 'Edit Game',
          game: game
      });
    }
  })
});

/* POST /games/:_id - save form to process Game updates */
router.post('/:_id', function(req, res, next) {
  // get the id from the url
  var _id = req.params._id;

  // instantiate a new Game object & populate it from the form
  var game = new Game( {
    _id: _id,
    title: req.body.title,
    publisher: req.body.publisher,
    genre: req.body.genre,
    year: req.body.year
  });

  // save the update using mongoose
  Game.update( { _id: _id}, game, function(err) {
    if(err){
      console.log(err);
      res.render('error', {message: 'Could not Update Game'});
    }
    else {
      res.redirect('/games');
    }
  });
});

// make controller public
module.exports = router;

// Created by Mark Chipp 200180985 <mark.chipp@live.ca, mark.chipp@mygeorgian.ca>
// Created on 06-Oct-2016

// define a Game class using Mongoose and make it public
var mongoose  = require('mongoose');

// define the class using mongoose schema
var gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'No title entered'
  },
  publisher: {
    type: String
  },
  genre: {
    type: String,
    required: 'No genre entered'
  },
  year: {
      type: Number,
      required: 'No year entered'
  }
});

// make the class definition public as "Game"
module.exports = mongoose.model('Game', gameSchema);

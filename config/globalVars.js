// Created by Mark Chipp 200180985 <mark.chipp@live.ca, mark.chipp@mygeorgian.ca>
// Created on 06-Oct-2016


//global variables for the application
module.exports = {
  db: 'mongodb://localhost/comp2068-thu',
  //db: 'mongodb://uname:pass@ds044989.mlab.com:44989/comp2068-thu',
  secret: 'salt for everybody shhh it is a secret',
  ids: {
    facebook: {
      clientID: '1613638918932493',
      clientSecret: 'fc6c29e18eb133e53064ed1554cb3e5e',
      callbackURL: 'http://localhost:3000/facebook/callback'
    }
  }
};
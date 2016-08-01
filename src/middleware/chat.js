'use strict';

var React = require('react');



module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    // Be careful with try...catch in asynchronous code
    // An asynchronously thrown error will not be caught

    //const markup = React.renderComponentToString();

    try{
      res.render('pages/chat');
    }
    catch(ex){
      next();
    }

  };
};

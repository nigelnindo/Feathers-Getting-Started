'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    // Be careful with try...catch in asynchronous code
    // An asynchronously thrown error will not be caught

    try{
      res.render('pages/chat');
    }
    catch(ex){
      next();
    }

  };
};

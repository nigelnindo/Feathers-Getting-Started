'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    res.render('pages/chat');

    next();
  };
};

'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    const body = req.body;

    // Get the user service and `create` a new user
    app.service('users').create({
      email: body.email,
      password: body.password
    })

    // Then redirect to the login page
    // On errors, call our error middleware
    .then(user => res.redirect('login.html')).catch(next);

  };
};

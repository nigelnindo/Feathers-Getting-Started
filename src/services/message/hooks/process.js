'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

//const defaults = {};

module.exports = function() {
  //options = Object.assign({}, defaults, options);

  return function(hook) {
    // The authenticated user
    const user = hook.params.user; // note the difference between hook.data & hook.params

    // Actual message text
    const text = hook.data.text
      // Messages can't be longer than 400 characters
      .substring(0,400)
      // Basic HTML escaping
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Override the original data
    hook.data = {
      text,
      //Set the user id
      userId: user._id,
      //Add the current time via `getTime`
      createdAt: new Date().getTime()
    };

  };

};

'use strict';

// src/services/message/hooks/restrict-to-sender.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

//const defaults = {};

const errors = require('feathers-errors');

module.exports = function(options) {
  //options = Object.assign({}, defaults, options);

  return function(hook) {

    const messageService = hook.app.service('messages'); // you can use hooks to get context of a particular service

    // First get the message that the user wants to access
    return messageService.get(hook.id, hook.params).then(message => {

      // Throw a not authenticated error if the message and the user do not match
      if (message.sentBy._id !== hook.params.user._id){
        throw new errors.NotAuthenticated('Acces not allowed');
      }

      // Otherwise just return the hook
      return hook;

    });

  };
};

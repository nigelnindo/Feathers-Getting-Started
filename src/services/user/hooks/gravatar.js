'use strict';

// src/services/user/hooks/gravatar.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

const crypto = require('crypto');

// The Gravatar image service
const gravatarUrl = 'https://s.gravatar.com/avatar';

// The size query. We need 60px images
const query = `s=60`;

// Returns a full URL to a Gravatar image for a given email adress
const gravatarImage = email => {

  const hash = crypto.createHash('md5').update(email).digest('hex');
  return `${gravatarUrl}/${hash}?${query}`;

};

module.exports = function() {
  //options = Object.assign({}, defaults, options);

  return function(hook) {
    //Assign the new data with the gravatar image
    hook.data = Object.assign({}, hook.data, {
      avatar: gravatarImage(hook.data.email)
    });
  };
};

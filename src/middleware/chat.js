'use strict';

//const ReactDOMServer = require('react-dom/server'); //fails when it encounters div in render method of React class
//import {ChatApp} from '../../react_components/chat_app.js';
//const socket = require('socket.io-client')(); //fails with can't read protocol of undefined
//const feathers = require('feathers-client');

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions


    //const markup = ReactDOMServer.renderToString(ChatApp(props));

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

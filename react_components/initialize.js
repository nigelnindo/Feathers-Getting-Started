/**
 * Created by nigelnindo on 8/1/16.
 */

var ReactDOM = require('react-dom');
var React = require('react');

import {ChatApp} from './chat_app.js';

const socket = require('socket.io-client')();
const feathers = require('feathers-client');

const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())
  //use localstorage to store our login token
  .configure(feathers.authentication({
    storage: window.localStorage
  }));

app.authenticate().then(() => {
  ReactDOM.render(<div id="app" className="flex flex-column">

    <header className="title-bar flex flex-row flex-center">
      <div className="title-wrapper block center-element">
        <img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
          alt="Feathers Logo"
        />
      </div>
    </header>

    <ChatApp app={app}/>

  </div>, document.getElementById('reactapp'))
}).catch(error => {
  if (error.code === 401){
    window.location.href = '/login.html';
  }
  console.log(error);
});

/**
 * Created by nigelnindo on 8/1/16.
 */

var ReactDOM = require('react-dom');

import {ChatApp} from './chat_app.js';

app.authenticate().then(() => {
  ReactDOM.render(<div id="app" className="flex flex-column">

    <header className="title-bar flex flex-row flex-center">
      <div className="title-wrapper block center-element">
        <img className="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
          alt="Feathers Logo"
        />
      </div>
    </header>

    <ChatApp/>

  </div>, document.body)
}).catch(error => {
  if (error.code === 401){
    window.location.href = '/login.html';
  }
  console.log(error);
});

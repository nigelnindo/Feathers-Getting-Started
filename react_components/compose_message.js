/**
 * Created by nigelnindo on 8/1/16.
 */

var React = require('react');


export const ComposeMessage = React.createClass({
  getInitialState(){
    return { text: ''};
  },

  updateText(ev){
    this.setState({text: ev.target.value});
  },

  sendMessage(ev){
    // Get the messages service
    const messageService = app.service('messages');

    // Create a new message with text from the input field
    messageService.create({
      text: this.state.text
    }).then(() => this.setState({text: ''}));

    ev.preventDeafult();
  },

  render(){
    return <form className="flex flex-row flex-space-between" onSubmit={this.sendMessage}>
      <input type="text" name="text" className="flex flex-1" value={this.state.text} onChange={this.updateText}>
      </input>
    </form>;
  }

});


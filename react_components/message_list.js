/**
 * Created by nigelnindo on 8/1/16.
 */

var React = require('React');
var moment = require('moment');

const PLACEHOLDER = 'https://placeimg.com/60/60/people';

const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

 export const MessageList = React.createClass({
  renderMessage(message,index){
    const sender = message.sentBy || dummyUser;

    return <div key={index} className="message flex flex-row">
      <img src={sender.avatar || PLACEHOLDER} alt={sender.email}/>
      <div className="message-wrapper">
        <p className="message-header">
          <span className="username font-600">{sender.email}</span>
          <span className="sent-date font-300">
            {moment(message.createdAt).format('MMM Do, hh:mm:ss')}
          </span>
        </p>
        <p className="message-content font-300">{message.text}</p>
      </div>
    </div>;
  },

  render(){
    return <main className="chat flex flex-column flex-1 clear">
      {this.props.messages.map(this.renderMessage)}
    </main>
  }
});



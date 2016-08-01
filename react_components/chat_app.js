/**
 * Created by nigelnindo on 8/1/16.
 */

var React = require('react');
var ReactDom = require('react-dom');

import {ComposeMessage} from './compose_message.js';
import {MessageList} from './message_list.js';
import {UserList} from './user_list.js';


export const ChatApp = React.createClass({
  getInitialState(){
    return{
      users: [],
      messages: []
    }
  },

  componentDidUpdate(){
    // whenever something happened, scroll to the bottom of the chat window
    //const node = this.getDOMNode().querySelector('.chat');
    const node = ReactDom.findDOMNode(this);
    node.scrollTop = node.scrollHeight - node.clientHeight;
  },

  componentDidMount(){

    const userService = this.props.app.service('users');
    const messageService = this.props.app.service('messages');

    //find all users initially
    userService.find().then(page => this.setState({users: page.data}));

    //listen to new users so that we can show them in real-time
    userService.on('created', user => this.setState({
      users: this.state.users.concat(user)
    }));

    //find the last 10 messages
    messageService.find({
      query: {
        $sort: {createdAt: -1},
        $limit: this.props.limit || 10
      }
    }).then(page => this.setState({messages: page.data.reverse() }));

    //listen to newly created messages
    messageService.on('created', message => this.setState({
      messages: this.state.messages.concat(message)
    }));

  },

  render(){
    return <div className="flex flex-row flex-1 clear">
      <UserList users={this.state.users} app={this.props.app} />
      <div className="flex flex-column col col-9">
        <MessageList users={this.state.users} messages={this.state.messages} />
        <ComposeMessage app={this.props.app}/>
      </div>
    </div>
  }

});

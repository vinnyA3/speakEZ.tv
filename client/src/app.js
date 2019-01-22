import React, { Component } from 'react';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { prop } from 'ramda';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
    };
  }

  componentDidMount() {
    ajax
      .getJSON('/api/messages')
      .pipe(
        map(prop('results')),
        catchError(e => console.error(e))
      )
      .subscribe(messages => this.setState({ messages }));
  }

  render() {
    const renderMessages = () =>
      this.state.messages.map(message => {
        return (
          <div key={message.objectId}>
            <h2>{message.username}</h2>
            <p>{message.text}</p>
          </div>
        );
      });

    return <div>{!this.state.messages ? '' : renderMessages()}</div>;
  }
}

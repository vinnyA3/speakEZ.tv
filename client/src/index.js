import React from 'react';
import { render } from 'react-dom';
import Message from 'components/message';

const App = () => (
  <div>
    <Message message="Welcome to the Thunderdome" />
  </div>
);

render(<App />, document.getElementById('app'));

// hot module replacement -- development only!!
if (module.hot) {
  module.hot.accept();
}

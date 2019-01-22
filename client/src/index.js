import React from 'react';
import { render } from 'react-dom';
import App from 'app';

render(<App />, document.getElementById('app'));

// hot module replacement -- development only!!
if (module.hot) {
  module.hot.accept();
}

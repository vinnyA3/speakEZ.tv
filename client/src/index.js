import React from 'react';
import { render } from 'react-dom';
import styles from './styles.scss';
console.log(styles);

const App = ({ message }) => (
  <div>
    <h1 className="mainHeading">{message}</h1>
  </div>
);

render(<App message="hello world!!" />, document.getElementById('app'));
// hot module replacement -- development only!!

import React from 'react';
import styles from './message-styles.scss';

export default ({ message }) => (
  <h1 className={styles.message}>
    {!message ? '' : JSON.stringify(message, null, 2)}
  </h1>
);

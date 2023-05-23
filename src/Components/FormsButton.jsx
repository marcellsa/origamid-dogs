import React from 'react';
import styles from './FormsButton.module.css';

const FormsButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default FormsButton;
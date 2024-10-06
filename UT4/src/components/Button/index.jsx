import React from 'react';
import styles from './index.module.css';

const Button = ({ children , onClickHandler }) => {
  return (
    <button onClick = {onClickHandler} className = {styles.button}> {children} </button>
  );
}

export default Button;
import React from 'react'
import { IoIosCall } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import styles from './Button.module.css'
const Button = (props) => {
    const {isoutLine,text,icon,...rest}=props;
  return (
    <button {...rest} className={isoutLine?styles.outLine_btn:styles.primary_btn}>
      
      {text}
      {icon}
      
    </button>
  )
}

export default Button

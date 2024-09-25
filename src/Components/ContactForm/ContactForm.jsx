import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { FiMessageSquare } from "react-icons/fi";
import {useState} from 'react'
const ContactForm = (props) => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [text,setText]=useState(""); 
 
  const onSubmit=(event)=>
  {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value)
    setText(event.target[2].value)
    
    
  }


  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button text="VIA Support Chat" icon={<FiMessageSquare  fontSize="24px"/>}/>
            <Button  text="VIA  Call" icon={<IoIosCall fontSize="24px" />}/>
          </div>
          <Button isoutLine={true} text="VIA  Email Form" icon={<CiMail fontSize="24px" />}/>

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
              <label htmlFor=''>Name</label>
              <input type='text' name="name"></input>
            </div>
          
            <div className={styles.form_control}>
              <label htmlFor=''>Email</label>
              <input type='email' name="email"></input>
            </div>
          
            <div className={styles.form_control}>
              <label htmlFor=''>Text</label>
              <textarea name="text" rows="8"></textarea  >
              
            </div>
            <div style={{
              display:"flex",
              justifyContent:"end"
            }}><Button isoutLine={false} text="Submit" />
            </div>
            <div>{name +" "+ email + " " + text}</div>
            
          </form>

        </div>
        <div className={styles.contact_Image}></div>
        <img src='/images/contact.svg' alt='contact image'></img>
    </section>

    
  )
}

export default ContactForm

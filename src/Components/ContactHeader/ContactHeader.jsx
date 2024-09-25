import React from 'react'
import styles from './ContactHeader.module.css'
const ContactHeader = () => {
  return (
    <div className={` ${styles.contact_section}`}>
      <h1>
        Contact Us
      </h1>
      <p>Lets connect:we here to help,and we would like to hear from you!
        Whether you have a question ,comment,or just want to chat,you can reach out to us through the cintact form
      </p>
    </div>
  )
}

export default ContactHeader

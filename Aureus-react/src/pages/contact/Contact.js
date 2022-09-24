import React from 'react'
import classes from "./Contact.module.css"

export default function Contact() {
  return (
    <main>
      
      <div className={classes["contact-us"]}> 
        <form action="https://getform.io/f/7752a244-33a5-4d0f-adff-1adcbbf86b34" method="POST">
          <h2>Contact Form</h2>
          <div className={classes["form-control"]}>
            <label htmlFor='username'>Name</label>
            <input id="username" name="username" type="text" required />

            <label htmlFor='email'>Email</label>
            <input id="email" name="email" type="email" required />

            <label htmlFor='message'>Message</label>
            <textarea name="message" id="message" rows="5" cols="50" required />
          </div>
        <button type="submit" value="submit">Submit</button>
      </form>
      <div className={classes["contact-list"]}>
        <h2>Our Contacts</h2>
        <ul>
          <li><span>Address:</span> Calçada da Senhora da Luz, nº408, 4835-112 Guimarães - Portugal</li>
          <li><span>Phone Number:</span> +351 965 127 588</li>
          <li><span>Email:</span> info@aureus-properties.com</li>
        </ul>
      </div>
      </div>
    </main>
  )
}

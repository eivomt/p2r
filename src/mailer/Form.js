import React from 'react';
import emailjs from 'emailjs-com';


export default function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_AKvdLrXf', e.target, 'user_4yJW6xOsOp2REExJ1L3Nz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>

      <label>Name</label>
      <input type="text" name="user_name" />
      <br/>

      <label>Email</label>
      <input type="email" name="user_email" />
      <br/>

      <label>Message</label>
      <textarea name="message" />
      <br/>
      <input type="submit" value="Send" />

    </form>
  );
}
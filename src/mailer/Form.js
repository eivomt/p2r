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
    <div className="form-container">
      <h2>Get in touch</h2>
      <form className="contact-form" onSubmit={sendEmail}>

        <label>Name</label>
        <input 
          type="text" 
          name="user_name"
          className="contact-input w-2-col h-2-quarters-row" />
        <br/>

        <label>Email</label>
        <input 
          type="email" 
          name="user_email"
          className="contact-input w-2-col h-2-quarters-row" />
        <br/>

        <label>Message</label>
        <textarea 
          name="message"
          className="contact-textarea w-2-col h-2-row" />
        <br/>

        <input 
          className="w-2-col h-2-quarters-row"
          type="submit" 
          value="Send" />

      </form>
    </div>
  );
}
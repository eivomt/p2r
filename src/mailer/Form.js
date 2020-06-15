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

      alert("Message sent")
      e.target.reset()

  }

  return (
    <div className="form-container">

        <div className="call-to-action">
          <h2>REACH OUT</h2>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>

            <input
              autoComplete="off" 
              type="text" 
              name="user_name"
              placeholder="Name"
              className="contact-input" />

            <input 
              required
              autoComplete="off"
              type="email" 
              name="user_email"
              placeholder="Email"
              className="contact-input" />

            <textarea 
              required
              name="message"
              placeholder="Your message..."
              className="contact-input" />

          <input 
            className="submit-btn contact-input"
            type="submit" 
            value="SEND" />

        </form>
    </div>
  );
}
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
      <div className="spacer">

        <div className="title">
          <h2>REACH OUT</h2>
          <hr className="form-title-line"/>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>

          <div className="input-container">
            {/* <label>Name</label> */}
            <input
              autoComplete="off" 
              type="text" 
              name="user_name"
              placeholder="Name"
              className="contact-input w-2-col h-3-quarters-row" />
            <br/>
          </div>

          <div className="input-container">
            {/* <label>Email</label> */}
            <input 
              required
              autoComplete="off"
              type="email" 
              name="user_email"
              placeholder="Email"
              className="contact-input w-2-col h-3-quarters-row" />
            <br/>
          </div>

          <div className="input-container">
            {/* <label>Message</label> */}
            <textarea 
              required
              name="message"
              placeholder="Your message..."
              className="message w-2-col" />
            <br/>
          </div>

          <input 
            className="submit-btn w-1-col h-3-quarters-row"
            type="submit" 
            value="SEND" />

        </form>
      </div>
    </div>
  );
}
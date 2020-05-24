import React, { Component } from 'react'
import { render } from '@testing-library/react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            message_html: '', 
            from_name: '', 
            from_email: '' 
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }

    handleChange(event) {
        let toUpdate = event.target.name
        console.log(event.target.name)
        this.setState({toUpdate: event.target.value})
    }
    
    handleSubmit (event) {
        const templateId = 'template_AKvdLrXf';
    
        this.sendFeedback(
            templateId, 
            {
                message_html: this.state.message_html,
                from_name: this.state.from_name,
                reply_to: this.state.email
            }
        )
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render() {
        return(
            <form className="mail-form">
                <div>
                    <input 
                        type="text" 
                        name="reply_to"
                        onChange={this.handleChange} />
                    <label>Your Email</label>
                    <br/>

                    <input 
                        type="text" 
                        name="from_name" 
                        onChange={this.handleChange}/>
                    <label>Your name</label>
                    <br/>

                    <textarea
                        id="test-mailing"
                        name="message_html"
                        onChange={this.handleChange}
                        placeholder="Post some lorem ipsum here"
                        required
                        value={this.state.feedback}
                        style={{width: '100%', height: '150px'}}
                    />
                <button type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit}>Send</button>
                </div>
            </form>
        )
    }
}

export default Form
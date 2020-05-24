import React, { Component } from 'react';
import Form from '../mailer/Form'

class Contact extends Component {
    render() {
        return(
            <div className="contact-container">
                <div className="form-container">
                    <Form></Form>
                </div>
            </div>
        )
    }
}

export default Contact
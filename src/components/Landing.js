import React, { Component } from 'react'
import Logo from '../assets/Logo'

class Landing extends Component {
    render () {
        return (
            <div className="landing-container w-12-col h-12-row">
                <div className="landing-logo w-4-row h-4-row">
                    <Logo fill="#ddd"/>
                </div>
                <h5>EIVIND HAUGE OMTVEIT</h5>
                <h6>full stack developer</h6>
            </div>
        )
    }
}

export default Landing
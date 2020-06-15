import React, { Component } from 'react'
import Logo from '../assets/Logo'

class Landing extends Component {
    render () {
        return (
            <div className="landing">
                <div className="l-content">
                    <Logo fill="#fff"/>
                    <h1>Eivind Omtveit</h1>
                    <h4>full stack developer</h4>
                </div>
            </div>
        )
    }
}

export default Landing
import React, { Component } from 'react'
import Logo from '../assets/Logo'

class Landing extends Component {
    render () {
        return (
            <div className="landing">
                <div className="l-content">
                    <Logo fill="#eee"/>
                    <h1>Eivind Omtveit</h1>
                    <h4>designer / developer</h4>
                </div>
            </div>
        )
    }
}

export default Landing
import React, { Component } from 'react'
import Logo from '../assets/Logo'
import Down from '../assets/svg/left.svg'

class Landing extends Component {

    constructor(props) {
        super(props)

        this.handleDownClick = this.handleDownClick.bind(this)
    }

    handleDownClick = (e) => {
        e.preventDefault()

        console.log(window.innerHeight)
        window.scrollTo(0, window.innerHeight * 1.05)
    }

    render () {
        return (
            <div className="landing">
                <div className="l-content">
                    <Logo fill="#eee"/>
                    <h1>Eivind H. Omtveit</h1>
                    <h4>designer / developer</h4>
                </div>
                <div className="intro-text">
                    {/* <p>I made this website just to show off!</p>
                    <p>Have a look at some of my previous work</p>
                    <p>down below.</p> */}
                    <img onClick={this.handleDownClick} src={Down} alt="scroll button" className="down"/>
                </div>
            </div>
        )
    }
}

export default Landing
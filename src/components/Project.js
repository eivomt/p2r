import React, { Component } from 'react'

import Left from '../assets/svg/left.svg'
import Right from '../assets/svg/right.svg'

class Project extends Component {

    constructor(props) {
        super(props)
        this.handleTechClick = this.handleTechClick.bind(this)
        this.handleImgClick = this.handleImgClick.bind(this)
        this.state = {
            img: props.images[0],
            imgCounter: 0
        }
    }

    handleImgClick = (e) => {
        if (e.target.dataset.orientation === "right" && this.state.imgCounter !== this.props.images.length -1) {
            this.setState({img: this.props.images[this.state.imgCounter + 1]})
            this.setState({imgCounter: this.state.imgCounter + 1})
        } else if (e.target.dataset.orientation === "right" && this.state.imgCounter == this.props.images.length -1) {
            this.setState({img: this.props.images[0]})
            this.setState({imgCounter: 0})
        } else if (e.target.dataset.orientation === "left" && this.state.imgCounter !== 0) {
            this.setState({img: this.props.images[this.state.imgCounter - 1]})
            this.setState({imgCounter: this.state.imgCounter - 1})
        } else if (e.target.dataset.orientation === "left" && this.state.imgCounter == 0) {
            this.setState({img: this.props.images[this.props.images.length - 1]})
            this.setState({imgCounter: this.props.images.length - 1})
        }
    }

    handleTechClick = (e) => {
        let techTitle = document.querySelector(".techTitle" + this.props.title.replace(/\s/g, ''))
        let techText = document.querySelector(".techText" + this.props.title.replace(/\s/g, ''))
        let backBtn = document.querySelector(".tech-back" + this.props.title.replace(/\s/g, ''))

        let classes = []
        for (let value of backBtn.classList.entries()){
            let btnClass = value[1]
            classes.push(btnClass)
        }

        if (e.target !== backBtn) {
            backBtn.classList.remove("unclickable")
        } else if (e.target === backBtn && !classes.includes("unclickable")) {
            backBtn.classList.add("unclickable")
        }

        techText.innerHTML =  e.target.dataset.text
        techTitle.innerHTML = e.target.dataset.title
    }

    render() {
        return(
             <div className="grid">

                <div className="title">
                    <h2>{this.props.title}</h2>
                </div>

                <div className="subtitle">
                    <h3>{this.props.subtitle}</h3>
                </div>

                <div className="summary">
                    <h2>Summary</h2>
                    {this.props.children[0]}
                </div>

                <div className="p-content">
                    <button className="btn-img">
                        <img src={Left} alt="image-button-left" onClick={this.handleImgClick} data-orientation="left"/>
                    </button>
                    <div className="img-container">
                        <img className={"project-img img" + this.props.title} src={this.state.img} alt="camera"/>
                    </div>
                    <button className="btn-img" >
                        <img src={Right} alt="image-button-right" onClick={this.handleImgClick} data-orientation="right"/>
                    </button>
                </div>

                <div className="technologies">
                    <h2 className={"techTitle" + this.props.title.replace(/\s/g, '')}>Technologies</h2>
                    {this.props.children[1]}
                    <div className="buttons">

                        <button className={"unclickable button tech-btn tech-back" + this.props.title.replace(/\s/g, '')} >
                            <img src={this.props.techIcons[0]} alt="icon" data-text={this.props.techOne} data-title={this.props.techTitles.split(" ")[0]} onClick={this.handleTechClick} />
                        </button>

                        <button className="button tech-btn" >
                            <img src={this.props.techIcons[1]} alt="icon" data-text={this.props.techTwo} 
                        data-title={this.props.techTitles.split(" ")[1]} onClick={this.handleTechClick}/>
                        </button>

                        <button className="button tech-btn" >
                            <img src={this.props.techIcons[2]} alt="icon" data-text={this.props.techThree} 
                        data-title={this.props.techTitles.split(" ")[2]} onClick={this.handleTechClick}/>
                        </button>

                        <button className="button tech-btn" >
                            <img src={this.props.techIcons[3]} alt="icon" data-text={this.props.techFour} 
                        data-title={this.props.techTitles.split(" ")[3]} onClick={this.handleTechClick}/>
                        </button>

                        <button className="button tech-btn" >
                            <img src={this.props.techIcons[4]} alt="icon" data-text={this.props.techFive} 
                        data-title={this.props.techTitles.split(" ")[4]} onClick={this.handleTechClick}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project
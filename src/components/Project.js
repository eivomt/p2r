import React, { Component } from 'react'

class Project extends Component {

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
                    <button className="btn-img"></button>
                    <div className="carousel">
                        <img className={this.props.imagesize} src={this.props.image} alt="camera"/>
                    </div>
                    <button className="btn-img"></button>
                </div>

                <div className="technologies">
                    <h2>Technologies</h2>
                    {this.props.children[1]}
                    <div className="buttons">
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>
                        <div className="button"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project
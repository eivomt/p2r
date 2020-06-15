import React, { Component } from 'react'

class Project extends Component {
    render() {
        return(
             <div className="grid">

                <div className="title">
                    <h2>{this.props.title}</h2>
                </div>

                <div className="summary">
                    <h2>Summary</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum voluptatibus ratione explicabo temporibus ipsa assumenda voluptas, rerum esse dolorum nemo blanditiis reiciendis pariatur asperiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique ea sed. Quis ab harum illo provident sequi nobis in aliquid natus.</p>
                </div>

                <div className="p-content">
                    <div className="btn-img"></div>
                    <img className={this.props.imagesize} src={this.props.image} alt="camera"/>
                    <div className="btn-img"></div>
                </div>

                <div className="technologies">
                    <h2>Technologies</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laborum voluptatibus ratione explicabo temporibus ipsa assumenda voluptas, rerum esse dolorum nemo blanditiis reiciendis pariatur asperiores.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique ea sed. Quis ab harum illo provident sequi nobis in aliquid natus.</p>
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
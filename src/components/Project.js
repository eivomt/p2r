import React, { Component } from 'react'

class Project extends Component {
    render() {
        return(
            <div className="project-container">
                <div className="img-container"></div>
                <div className="text-container">
                    <div className="left">
                        <h4>Summary</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis earum, magni cumque, quia nesciunt porro praesentium eaque, unde dicta vitae voluptatem. Expedita!</p>
                    </div>
                    <div className="right">
                        <h4>Tech</h4>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, repudiandae?</p>

                        <a href="https://www.google.com" className="tech tech1 w-2-quarters-row h-2-quarters-row">
                        </a>
                        <a href="https://www.google.com" className="tech tech2 w-2-quarters-row h-2-quarters-row">
                        </a>
                        <a href="https://www.google.com" className="tech tech3 w-2-quarters-row h-2-quarters-row">
                        </a>
                        <a href="https://www.google.com" className="tech tech4 w-2-quarters-row h-2-quarters-row">
                        </a>
                        <a href="https://www.google.com" className="tech tech5 w-2-quarters-row h-2-quarters-row">
                        </a>

                    </div>

                </div>
            </div>
        )
    }
}

export default Project
import React, { Component } from 'react';
import Camera from '../assets/Camera'
import RenderP from '../assets/images/Render-persp-1.png'
import RenderF from '../assets/images/Render-front-1.png'




class Blog extends Component {

    render() {
        return(
            <div className="blog-container">
                <img className="render" src={RenderP} alt="rendered camera"/>
                <img className="render" src={RenderF} alt="rendered camera"/>
                <Camera stroke="white"></Camera>
            </div>
        )
    }
}

export default Blog
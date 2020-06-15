import React, { Component } from 'react';
import Project from '../components/Project'
import Landing from '../components/Landing'

import CameraFront from '../assets/images/Render-front-1.png'
import CameraPersp from '../assets/images/Render-persp-1.png'
import Mario from '../assets/images/mario2.png'
import You from '../assets/images/you.svg'

class Home extends Component {

    render() {
        return(
            <div>
                <Landing/>
                <Project title="Myosotis" imagesize="normal" image={CameraFront}/>
                <Project title="Plus U" imagesize="smaller" image={You}/>
                <Project title="Portfolio" imagesize="normal" image={CameraPersp}/>
          
            </div>
        )
    }
}

export default Home
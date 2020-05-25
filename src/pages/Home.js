import React, { Component } from 'react';
import Project from '../components/Project'
import Landing from '../components/Landing'

class Home extends Component {

    render() {
        return(

            <div 
                className="home-container">

                <Landing/>
                <Project/>
                <Project/>
                <Project/>

            </div>
        )
    }
}

export default Home
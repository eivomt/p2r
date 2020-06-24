import React, { Component } from 'react';
import Project from '../components/Project'
import Landing from '../components/Landing'

import CameraFront from '../assets/images/Render-front-1.png'
import You from '../assets/images/you.svg'

class Home extends Component {

    render() {

        return(
            <div>
                <Landing/>

                <Project title="Myosotis" subtitle="Capture the moment" imagesize="normal" image={CameraFront}>
                    <div>
                        <p>A product design project I did at <a href="https://kadk.dk" target="_blank" rel="noopener noreferrer">KADK</a>. The task at the time was to find an old object with some mechanical parts. I chose an old camera which I then disassembled. The mechanical parts within aswell as its lens formed the basis of this redesign.</p>
                        <p>The parts used were taken from a fairly low-end and old camera. Therefore the redesign aims to be a cheap entry-level camera primarily for new hobbyist photographers. By keeping choices in settings uncomplicated, in some cases even binary (on/off), the camera avoids unnecessary confusion. At the same time it makes the impact of f.ex apperture far more obvious. This way the camera quickly teaches its user the basics of the craft.</p>
                        <p>Outside of its educational function, the main goal of the camera is to encourage quick capture of fleeting and unchoreographed moments. It achieves this goal by removing or simplifying the technical aspects of photography.</p>
                    </div>
                    <div>
                        <p>The aspect of fitting actual, real life technical components into my design was, at the time, a new excercise to me.</p> 
                        <p>The challenge of a grand vision clashing with reality ended up being a blessing in disguise. It was, in many ways, eye-opening to see how the two can help steer each other toward a truly unique product.</p>
                        <p>in a project such as this one, the technologies, experiences, knowledge and/or media informing the final design are many and very different to one another. Ranging from rough hand drawn sketches and physical prototypes, to detailed models created in 3D software.</p>
                    </div>
                </Project>

                <Project title="Plus U" subtitle="Let's be lonely together" imagesize="smaller" image={You}>
                    <div>
                        <p>Plus U is a web-application made to help people meet new friends and engage in social activities, otherwise unavailable to them.</p>
                        <p>This was a two week project which served as examination at the end of <a href="https://https://www.lewagon.com/oslo" target="_blank" rel="noopener noreferrer">LeWagon</a> code bootcamp. It was developed by a team of three, consisting of Torfinn Weisser, Saioa Arostegi and myself.</p>
                        <p>Be aware that Plus U was made for mobile <strong>only</strong> and will be buggy at best when viewed on other screens.</p>
                    </div>
                    <div>
                        <p>Plus U was developed in Ruby on Rails, simply because Ruby and Ruby on Rails are the language and framework respectively, taught at <a href="https://lewagon.com/oslo" target="_blank" rel="noopener noreferrer">LeWagon</a>.</p>
                        <p>The project includes quite a few functionalities that proved challenging, but ultimately rewarding and educational to implement. Such as signup/login logic, Geolocation and my favorite, Javascript animations</p>
                        <p>To me though, the most valuable lessons from this project, was not from the technical challenges, but from challenges in UX and UI design.</p>
                    </div>
                </Project>
            </div>
        )
    }
}

export default Home
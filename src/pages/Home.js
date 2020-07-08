import React, { Component } from 'react';
import Project from '../components/Project'
import Landing from '../components/Landing'

import CameraFront from '../assets/images/Render-front-1.png'
import You from '../assets/images/you.svg'
import RedMario from '../assets/images/mario1.png'
import BlueMario from '../assets/images/mario2.png'

import Ruby from '../assets/svg/ruby.svg'
import Back from '../assets/svg/back.svg'
import Git from '../assets/svg/git.svg'
import Grasshopper from '../assets/svg/grasshopper.svg'
import Illustrator from '../assets/svg/illustrator.svg'
import Indesign from '../assets/svg/indesign.svg'
import Javascript from '../assets/svg/javascript.svg'
import Keyshot from '../assets/svg/keyshot.svg'
import Linkedin from '../assets/svg/linkedIn.svg'
import Mail from '../assets/svg/mail.svg'
import Photoshop from '../assets/svg/photoshop.svg'
import Postgresql from '../assets/svg/postgresql.svg'
import Rhinoceros from '../assets/svg/rhinoceros.svg'
import Scrum from '../assets/svg/scrum.svg'
import Xd from '../assets/svg/xd.svg'
import Me from '../assets/svg/me.png'

class Home extends Component {

    render() {

        return(
            <div>
                <Landing/>

                {/* <div className="intro-container">
                    <img className="me" src={Me} alt="picture of myself"/>
                </div> */}
                
                <Project title="Myosotis" subtitle="Capture the moment" imagesize="normal" images={[CameraFront, RedMario, BlueMario]} techIcons={[Back, Rhinoceros, Keyshot, Illustrator, Indesign]}

                techOne="
                    <div className='techTextMyosotis techText'>
                        <p>The aspect of fitting actual, real life technical components into my design was, at the time, a new excercise to me.</p> 
                        <p>The challenge of a grand vision clashing with reality ended up being a blessing in disguise. It was, in many ways, eye-opening to see how the two can help steer each other toward a truly unique product.</p>
                        <p>in a project such as this one, the technologies, experiences, knowledge and/or media informing the final design are many and very different to one another. Ranging from rough hand drawn sketches and physical prototypes, to detailed models created in 3D software.</p>
                    </div>"

                techTwo="
                    <div className='techTextMyosotis techText'>
                        <p>Rhinoceros was extremely helpful in making sure my design could fit all the necessary technical components.</p>
                        <p>While Rhinoceros isn't the most precise / heavy 3D modelling software out there, its quick and exploratory nature makes it ideal in the early stages of any design process.</p>
                        <p>Even though it is a quick sketch-like program, it still isn't a tool for shaping the overarching vision / concept of a design. I instead used Rhinoceros to define details and to maximize efficiency of space, keeping the volume of the camera as small as possible but big enough to fit the essentials.</p>
                    </div>"

                techThree="
                    <div className='techTextMyosotis techText'>
                        <p>Keyshot is the software I used to create animations from the 3d model of the camera. It's a pretty simple animation software, It's options are fairly limited compared to most other 3D animation software. However that also means it's very easy to learn, even without any prior experience in animation which I did not have at the time.</p>
                        <p>Keyshot was very useful for bringing the 3D model to life. Seeing it move explains the form in a different way than static images could. It was also a great introduction to 3D animation.</p>
                    </div>"

                techFour="
                    <div className='techTextMyosotis techText'>
                        <p>I used Illustrator early on to draft technical drawings of the original camera and of the different components inside. Used those to figure out about how much space I needed for my redesign to be functional.</p>
                        <p>I would arrange the illustrations of the different components on top of each other like a puzzle. That obviously isn't a very precise method but it did help me in quick ideation and understanding of limitations set on me be the physical space needed.</p>
                        <p>Later on I used Illustrator to create final illustrations I would show at the end of the project. Using Illustrator made those illustrations crisp and precise, as well as usable at any scale because illustrator is vector based.</p>
                    </div>"

                techFive="
                    <div className='techTextMyosotis techText'>
                        <p>I used inDesign as a more advanced Microsoft Word. Part of the task of the project was keeping a log of progress all the way through. With indesign I made a general layout to follow. Then during the project I would simply fill it in with pictures, drawings and text.</p>
                        <p>At the end of the project for the final presentation I also used indesign for setting up my digital presentation. I used it to set up what / how I would print out big pages with different elements in It. </p>
                    </div>"
                techTitles="Technologies Rhinoceros Keyshot Illustrator InDesign"
                >

                    <div>
                        <p>A product design project I did at <a href="https://kadk.dk" target="_blank" rel="noopener noreferrer">KADK</a>. The task at the time was to find an old object with some mechanical parts. I chose an old camera which I then disassembled. The mechanical parts within aswell as its lens formed the basis of this redesign.</p>
                        <p>The parts used were taken from a fairly low-end and old camera. Therefore the redesign aims to be a cheap entry-level camera primarily for new hobbyist photographers. By keeping choices in settings uncomplicated, in some cases even binary (on/off), the camera avoids unnecessary confusion. At the same time it makes the impact of f.ex apperture far more obvious. This way the camera quickly teaches its user the basics of the craft.</p>
                        <p>Outside of its educational function, the main goal of the camera is to encourage quick capture of fleeting and unchoreographed moments. It achieves this goal by removing or simplifying the technical aspects of photography.</p>
                    </div>
                    <div className="techTextMyosotis techText">
                        <p>The aspect of fitting actual, real life technical components into my design was, at the time, a new excercise to me.</p> 
                        <p>The challenge of a grand vision clashing with reality ended up being a blessing in disguise. It was, in many ways, eye-opening to see how the two can help steer each other toward a truly unique product.</p>
                        <p>in a project such as this one, the technologies, experiences, knowledge and/or media informing the final design are many and very different to one another. Ranging from rough hand drawn sketches and physical prototypes, to detailed models created in 3D software.</p>
                    </div>
                </Project>

                <Project title="Plus U" subtitle="Let's be lonely together" imagesize="smaller" images={[You, RedMario, BlueMario]} techIcons={[Back, Ruby, Git, Scrum, Postgresql]}
                
                techOne="
                <div className='techTextPlusU techText'>
                    <p>Plus U was developed in Ruby on Rails, simply because Ruby and Ruby on Rails are the language and framework respectively, taught at <a href='https://lewagon.com/oslo' target='_blank' rel='noopener noreferrer'>LeWagon</a>.</p>
                    <p>The project includes quite a few functionalities that proved challenging, but ultimately rewarding and educational to implement. Such as signup/login logic, Geolocation and my favorite, Javascript animations</p>
                    <p>To me though, the most valuable lessons from this project, was not from the technical challenges, but from challenges in UX and UI design.</p>
                </div>"

                techTwo="
                    <div className='techTextPlusU techText'>
                        <p>Plus U was made mostly in Ruby. Ruby is the programming language taught at LeWagon. It's a language that's ideal for beginners since it's syntax is so straight forward and natural.</p>
                        <p>We used Ruby on Rails for our framework, It no longer is as widely used in the industry as it once was, by and large replaced by newer frameworks such as React and Vue. It is however still being used to some extent.</p>
                    </div>"

                techThree="
                    <div className='techTextPlusU techText'>
                        <p>Scrum was used as a work-method in order to optimise efficiency and workflow. We had a daily stand-up session or daily scrums, where we discussed our progress and plans for the day. This kept us up to date with what our group was working on, and made it more apparent what needed prioritising.</p>
                        <p>Since the project only lasted 2 weeks, our sprints were very short. Often just one or two days long. Working in sprints though, kept us focused on what was important to have implemented.</p>
                    </div>"

                techFour="
                    <div className='techTextPlusU techText'>
                        <p>We used Git and GitHub for version control. To begin with, remembering to push often was a challenge, but we got more used to it eventually. Git became an important tool for working efficiently as a team.</p>
                        <p>Obviously it helped in keeping older versions of the software accessible to us. We would at times go back to previous iterations when our work turned out to be counter-productive in some way. </p>
                    </div>"

                techFive="
                    <div className='techTextPlusU techText'>
                        <p>We used PostgreSQL to communicate with our database. Our database contained only seeds, but the relationship between different elements got somewhat complicated, at least to our inexperienced eyes. </p>
                        <p>Our experience with SQL was fairly limited so we learned a lot from putting this database together. Since our database was so small we didn't need to worry too much about it's efficiency.</p>
                    </div>"
                techTitles="Technologies Ruby Git Scrum PostgreSQL"
                >
                    <div>
                        <p>Plus U is a web-application made to help people meet new friends and engage in social activities, otherwise unavailable to them.</p>
                        <p>This was a two week project which served as examination at the end of <a href="https://https://www.lewagon.com/oslo" target="_blank" rel="noopener noreferrer">LeWagon</a> code bootcamp. It was developed by a team of three, consisting of Torfinn Weisser, Saioa Arostegi and myself.</p>
                        <p>Be aware that Plus U was made for mobile <strong>only</strong> and will be buggy at best when viewed on other screens.</p>
                    </div>
                    <div className="techTextPlusU techText">
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
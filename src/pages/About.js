import React, { Component } from 'react';

class About extends Component {
    render() {
        return(
            <div className="about-container">
                <div className="about-summary">
                    <h2>About me</h2>
                    <p>I am a creative web-developer. With a background in design aswell as skills in web-development, I'm sure I can bring alot of value to most projects. I love to tinker with aesthetic details and get excited by learning new things.</p>
                    <h3>Details</h3>
                    <ul>
                        <li>
                            <p>Name:</p>
                            <p>Eivind Hauge Omtveit</p>
                        </li>
                        <li>
                            <p>Age:</p>
                            <p>25</p>
                        </li>
                        <li>
                            <p>Location:</p>
                            <p>Oslo, Norway</p>
                        </li>
                    </ul>
                </div>
                <div className="about-main">
                    <div className="about-nav">
                        <div className="nav-edu">Education</div>
                        <div className="nav-skills">Skills</div>
                        <div className="nav-hobbies">Hobbies</div>
                    </div>
                    <div className="about-content">
                        <div className="education">
                            <h3>Education</h3>
                            <div className="subject">
                                <div className="logo"></div>
                                <h4>LeWagon</h4>
                                <p>LeWagon is where I learned the fundamentals of web-development and programming in general. It really is surpising how much one can learn in such a short amount of time. LeWagon's course is based on Ruby on Rails but it undoubtedly set me up to able to teach myself other frameworks and languages, like React.</p>
                            </div>

                            <div className="subject">
                                <div className="logo"></div>
                                <h4>KADK</h4>
                                <p>At KADK I learned the tools of design. Software like; the Adobe Suite, 3D modelling and 3D render software like Rhinoceros and V-Ray, are the bread and butter of modern product design. KADK also taught me a lot of less quantifiable soft skills such as working in teams and the "design process".</p>
                            </div>

                            <div className="subject">
                                <div className="logo"></div>
                                <h4>DSDH</h4>
                                <p>I enrolled to <a href="https://dsdh.dk" target="_blank" rel="noopener noreferrer">DSDH</a> straight out of high school. <a href="https://dsdh.dk" target="_blank" rel="noopener noreferrer">DSDH</a> revealed my own potential and helped me understand what creative work actually entails in the real world. It was of course also vital in helping me succeed in applying to design schools. Perhaps most important though is the huge network of good friends in the field.</p>
                            </div>
                        </div>
                        <div className="skills">
                            <h3>Skills</h3>
                            <div className="subject">
                                <div className="logo"></div>
                                <h4>Front-end development</h4>
                                <p>As a front-end developer there's allways more to learn. That being said, I have gotten to a point where I feel quite comfortable with HTML, CSS / SCSS and Javascript. I have also dabbled in some JS animation libraries like; Processing.js and popmotion, aswell as CSS animations of which there are a few examples on this site.</p>
                            </div>

                            <div className="subject">
                                <div className="logo"></div>
                                <h4>Graphic design</h4>
                                <p>Graphic design is a term that encompasses a lot, so I hesitate to say I've "mastered" the tools of the trade. I will say however that I've been trained in everything from color theory, composition and hand drawn illustration to Adobe Illustrator, Indesign and XD</p>
                            </div>

                            <div className="subject">
                                <div className="logo"></div>
                                <h4>Industrial design</h4>
                                <p>Developing new products and finding ways to improve upon existing products has been a passion of mine for a long time. Skills specific to industrial design might f. ex include; 3D printing and CNC milling, I'm familiar with most tools in woodworking, metalworking and plastic materials workshops and I have a lot of experience in rapid prototyping.</p>
                            </div>
                        </div>
                        <div className="hobbies">
                            <h3>Hobbies</h3>
                            <div className="subject">
                                <div className="logo"></div>
                                <h4>Music</h4>
                                <p>Ever since my glory days in Tanum & Jong's school band, I've loved playing music. Since then I swapped out my trusted flute for the piano and guitar. My teenage self felt very strongly that those would be more productive when trying to impress girls. To be fair, I probably wasn't wrong.</p>
                            </div>

                            <div className="subject">
                                <div className="logo"></div>
                                <h4>Drawing</h4>
                                <p>At high school I was looking for an easy subject to lessen the workload I was expecting from maths, physics and chemistry. I thought I'd found the perfect one in visual arts. It however turned out to be the subject I'd study and spend the most time on by far. I've been practicing my drawing skills ever since.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
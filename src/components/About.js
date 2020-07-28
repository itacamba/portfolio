import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id="about">
                <div id="about-container">
                    <div className="section-title">
                        <i className="fa fa-square" aria-hidden="true"></i>
                        <h1>About Me</h1>
                        <div className="thin-line"></div>
                    </div>
                    <div id="about-me">
                        <p>My name is Carla. I am a software engineer who decided to tie up my own life
                            with web development. My first site was created when my dad had the need to
                            build a mobile site for his business, he didn't have the money nor the
                            knowledge so he put his daughter to learn the technology needed.
                            I found out I loved creating software so I decided to join Flatiron School, 
                            an intensive Software Engineer program that prepares you to build full
                            stack applications, I was able to learn <span>Javascript / React / Ruby / Ruby 
                            on Rails  and to work with APIs. </span>
                            <br></br>
                            <br></br>
                            I am energetic, persistent and a team player, never afraid to get out
                            of my comfort zone. I am open to new challenges and ready to learn
                            new technologies. I am eager to deal with new projects and tasks,
                            connect with other people and work with a team of professionals.
                        </p>
                        <div id="my-pic-container">
                            <img alt="carla-sahagun" src="../../me.jpg"/>
                            <div id="orange-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;


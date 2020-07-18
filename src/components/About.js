import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div id="about">
                <div id="about-container">
                    <div id="picture-and-phrase">
                        <div id="my-picture">
                            <img src="https://as1.ftcdn.net/jpg/02/50/08/38/500_F_250083813_LsY6QAHRqLUYHm7OXYCvH9Wtm5OPgutr.jpg" />
                        </div>
                        <div id="my-phrase">
                            <h1><span>&lt;</span> Let's dive into a development world created by me <span>&#x2f;&gt;</span></h1>
                        </div>
                    </div>
                    <div id="about-me">
                        <p>My name is Carla. I am a developer who decided to tie up my own life
                            with front-end. My first site was created when my dad had the need to
                            build a mobile site for his business, he didn't have the money nor the
                            knowledge so he put his daughter to learn the technology needed.
                            I found out I loved creating software so I decided to join Flatiron School, 
                            an intensive Software Engineer program that prepares you to build full
                            stack applications, I was able to learn <span> Javascript / React / Ruby / Ruby 
                            on Rails  and to work with APIs. </span>
                        </p>
                        <p>
                            I am energetic, persistent and a team player, never afraid to get out
                            of my comfort zone. I am open to new challenges and ready to learn
                            new technologies. I am eager to deal with new projects and tasks,
                            connect with other people and work with a team of professionals.
                        </p>
                    </div>
                </div>
                <div id="mobile-about">
                    <h1><span>&lt;</span>Carla's Development World <span>&#x2f;&gt;</span></h1>
                    <img src="../../square-pic.jpg" />
                    <p>My name is Carla. I am a developer who decided to tie up my own life
                            with front-end. My first site was created when my dad had the need to
                            build a mobile site for his business, he didn't have the money nor the
                            knowledge so he put his daughter to learn the technology needed.
                            I found out I loved creating software so I decided to join Flatiron School, 
                            an intensive Software Engineer program that prepares you to build full
                            stack applications, I was able to learn <span> Javascript / React / Ruby / Ruby 
                            on Rails  and APIs. </span>
                    <br></br><br></br>
                    I am energetic, persistent and a team player, never afraid to get out
                            of my comfort zone. I am open to new challenges and ready to learn
                            new technologies. I am eager to deal with new projects and tasks,
                            connect with other people and work with a team of professionals.
                            </p>
                </div>
            </div>
        );
    }
}

export default About;

{/* <div id="skills-container">
<div id="progress-holder">
    <div id="progress-bar"></div>
</div>
</div> */}
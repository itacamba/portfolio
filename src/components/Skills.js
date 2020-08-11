import React from 'react';

const Skills = () => {
    return (
        <div id="skills">
            <div className="skills-title">
                <i className="fa fa-square" aria-hidden="true"></i>
                <h1>My Skills</h1>
                <div className="thin-line"></div>
            </div>
            <div id="skills-container">
                <div id="skills-img">
                    <img src="../../me.jpg"/>
                </div>
                <div id="skills-content">
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-html"></div>
                        </div>
                        <h1>HTML / CSS</h1>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>90%</p>
                            <div className="progress-bar skill-js"></div>
                        </div>
                        <h1>JavaScript(ES6)</h1>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-react"></div>
                        </div>
                        <h1>React JS</h1>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-responsive"></div>
                        </div>
                        <h1>Responsive Design</h1>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-other"></div>
                        </div>
                        <h1>Invision Studio / Git</h1>
                    </div>
                </div> 
            </div>
        </div>
        
    );
};

export default Skills;
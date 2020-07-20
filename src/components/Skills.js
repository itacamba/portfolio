import React from 'react';

const Skills = () => {
    return (
        <div id="skills">
            <div id="skills-container">
                <div id="skills-img">
                    <img src="../../node-development.png"/>
                </div>
                <div id="skills-content">
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-html"></div>
                        </div>
                        <p>HTML / CSS</p>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>90%</p>
                            <div className="progress-bar skill-js"></div>
                        </div>
                        <p>JavaScript(ES6)</p>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-react"></div>
                        </div>
                        <p>React JS</p>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-responsive"></div>
                        </div>
                        <p>Responsive Design</p>
                    </div>
                    <div className="skill">
                        <div className="progress-holder">
                            <p>95%</p>
                            <div className="progress-bar skill-other"></div>
                        </div>
                        <p>Invision / Git</p>
                    </div>
                </div> 
            </div>
        </div>
        
    );
};

export default Skills;
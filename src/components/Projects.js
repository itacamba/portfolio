import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <div id="projects-container">
                    <div className="section-title">
                        <i className="fa fa-square" aria-hidden="true"></i>
                        <h1>My Latest Projects</h1>
                        <div className="thin-line"></div>
                    </div>
                    <div id="project-boxes">
                        <div className="project">
                            <div className="project-image">
                                <img src="https://miro.medium.com/max/1200/1*7fXfXk2_d5t3_NHUMP-ZmQ.jpeg"/>
                            </div>
                            <div className="project-description">
                                <h1>Business Cyber Shield</h1>
                                <p>A single page web application showcasing cybersecurity services built with React, HTML, CSS3 and JavaScript. </p>
                                <div className="project-buttons">
                                    <button>source code </button>
                                    <span>&nbsp; | &nbsp;</span>
                                    <button> demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-image">
                                <img src="https://miro.medium.com/max/1200/1*7fXfXk2_d5t3_NHUMP-ZmQ.jpeg"/>
                            </div>
                            <div className="project-description">
                                <h1>Cheffed - Flatiron School Project</h1>
                                <p>A platform for food enthusiasts to display
                                    their dishes and get hired by a customer 
                                    to cook at private events. Built with
                                    Ruby on Rails and React.
                                </p>
                                <div className="project-buttons">
                                    <button>source code </button>
                                    <span>&nbsp; | &nbsp;</span>
                                    <button> demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-image">
                                <img src="https://miro.medium.com/max/1200/1*7fXfXk2_d5t3_NHUMP-ZmQ.jpeg"/>
                            </div>
                            <div className="project-description">
                                <h1>Flationary - Real Time Like App</h1>
                                <p>Online Pictionary game for multiple players
                                    that imitates real time using long polling.
                                    Built with HTML, Semantic Ui Ruby on 
                                    Rails and Javascript.
                                </p>
                                <div className="project-buttons">
                                    <button>source code </button>
                                    <span>&nbsp; | &nbsp;</span>
                                    <button> demo</button>
                                </div>
                            </div>
                        </div>
                        <div className="project">
                            <div className="project-image">
                                <img src="https://miro.medium.com/max/1200/1*7fXfXk2_d5t3_NHUMP-ZmQ.jpeg"/>
                            </div>
                            <div className="project-description">
                                <h1>Furrever - Pet Shelter App</h1>
                                <p>A ruby on rails app with restful API that showcases all
                                    animals in a shelter and allowes you to adopt them.
                                </p>
                                <div className="project-buttons">
                                    <button>source code </button>
                                    <span>&nbsp; | &nbsp;</span>
                                    <button> demo</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
        );
    }
}

export default Projects;
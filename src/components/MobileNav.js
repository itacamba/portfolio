import React from 'react';
import {Link} from 'react-scroll'

const MobileNav = ({handleNavClick}) => {
    return (
        <div id="mobile-nav">
            <i class="fa fa-times" aria-hidden="true" onClick={handleNavClick}></i>
            <Link 
                            to="about"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                        <i class="fa fa-square" aria-hidden="true"></i>About
            </Link>
            
            <Link 
                            to="skills"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <i class="fa fa-square" aria-hidden="true"></i>Skills
            </Link>
            <Link 
                            to="projects"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <i class="fa fa-square" aria-hidden="true"></i>Projects
            </Link>
            {/* <a href="#">Technical Writting</a> */}
            <Link 
                            to="contact"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <i class="fa fa-square" aria-hidden="true"></i>Contact
            </Link>
            <button className="resume-btn">Resume</button>
        </div>
    );
};

export default MobileNav;


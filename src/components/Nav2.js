import React, { useState } from 'react';
import MobileNav from './MobileNav'
import {Link} from 'react-scroll'

const Nav2 = () => {
    const [navClicked, setNavClicked] = useState(false)
    
    const handleNavClick = () => {
        setNavClicked(!navClicked)
    }

    return (
        <div id="nav-container">
                <div id="logo">
                    <img src="../../logo.png"/>
                </div>
                    <nav>
                        <Link 
                            to="about"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                        About
                        </Link>
                        <Link 
                            to="skills"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                        Skills
                        </Link>
                        <Link 
                            to="projects"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                        Projects
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
                        Contact
                        </Link>
                        <button>Resume</button>
                    </nav>
                <div id="mobile-icon"  onClick={handleNavClick}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
               {navClicked? <MobileNav handleNavClick={handleNavClick}/> : null}
            </div>
    );
};
export default Nav2;
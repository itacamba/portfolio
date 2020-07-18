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
                    <h1>Carla Sahagun</h1>
                    <p>Software Engineer from Virginia, US</p>
                </div>
                    <nav>
                        <Link 
                            to="about"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-90}
                            duration={500}
                        >
                        About
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
                        <Link 
                            to="code-challenges"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                        Code Challenges
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
                    </nav>
                <div id="mobile-icon"  onClick={handleNavClick}>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
               {navClicked? <MobileNav/> : null}
            </div>
    );
};
export default Nav2;
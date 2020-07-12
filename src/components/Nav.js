import React, { Component } from 'react';
import MobileNav from './MobileNav';
import {Link} from 'react-scroll'

class Nav extends Component {
    constructor(){
        super()
        this.state = {
            navClicked: false
        }
    }
    handleNavClick = () => {
        this.setState({
            navClicked: !this.state.navClicked
        })
    }

    // componentDidMount() {
    //     window.addEventListener("resize", this.handleNavClick);
    //   }


    render() {
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
                            offset={0}
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
                <div id="mobile-icon"  onClick={this.handleNavClick}>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
               {this.state.navClicked? <MobileNav/> : null }
            </div>
        );
    }
}

export default Nav;
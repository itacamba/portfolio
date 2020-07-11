import React, { Component } from 'react';
import MobileNav from './MobileNav';

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
                        <a href="/">About</a>
                        <a href="/">Projects</a>
                        <a href="/">Code Challenges</a>
                        {/* <a href="#">Technical Writting</a> */}
                        <a href="/">Contact</a>
                    </nav>
                <div id="mobile-icon"  onClick={this.handleNavClick}>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
               {this.state.navClicked? <MobileNav/> : null }
               {/* {window.innerWidth > 920? this.handleNavClick: null} */}
            </div>
        );
    }
}

export default Nav;
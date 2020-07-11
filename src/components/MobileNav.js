import React, { Component } from 'react';

class MobileNav extends Component {
    render() {
        return (
        <div id="mobile-nav">
            <a href="/">About</a>
            <a href="/">Projects</a>
            <a href="/">Code Challenges</a>
            {/* <a href="#">Technical Writting</a> */}
            <a href="/">Contact</a>
        </div>
        );
    }
}

export default MobileNav;
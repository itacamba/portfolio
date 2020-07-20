import React from 'react';

const MobileNav = () => {
    return (
        <div id="mobile-nav">
            <i class="fa fa-times" aria-hidden="true"></i>
            <a href="/"><i class="fa fa-square" aria-hidden="true"></i>About</a>
            <a href="/"><i class="fa fa-square" aria-hidden="true"></i>Skills</a>
            <a href="/"><i class="fa fa-square" aria-hidden="true"></i>Projects</a>
            {/* <a href="#">Technical Writting</a> */}
            <a href="/"><i class="fa fa-square" aria-hidden="true"></i>Contact</a>
            <button className="resume-btn">Resume</button>
        </div>
    );
};

export default MobileNav;


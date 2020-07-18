import React from 'react';

const MainBanner = () => {
    return (
        <div id="main-banner">
            <div id="banner-content">
                <h1>Resourceful and Proactive Developer</h1>
                <p>Full stack Web & Mobile Developer  </p>
                <button className="purple-btn">Contact Me</button>
            </div>
            <div id="banner-figure">
                <img alt="girl-computer" src="../../main-girl.jpg" />
            </div>
        </div>
    );
};

export default MainBanner;
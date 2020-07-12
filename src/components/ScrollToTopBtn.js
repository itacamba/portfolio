import React from 'react';
import {animateScroll as scroll} from 'react-scroll' 


const ScrollToTopBtn = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <div id="to-top-btn" onClick={scrollToTop}>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
    );
};

export default ScrollToTopBtn;
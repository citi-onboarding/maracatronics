import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css';

function Slide() {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 100,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                arrows: false,
              }
            }
        ]
    };

    return (
        <div className="slider-collaborators">
            <Slider className="slide" {...settings}>
                
            </Slider>
        </div>
        
    );

};

export default Slide;
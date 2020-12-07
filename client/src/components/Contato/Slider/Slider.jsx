import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Slider.css';

function Slide() {

    const [collaborators, setCollaborators] = useState([]);

    const loadDados = async () => {
        const res = await axios.get('http://localhost:3001/api/parceiros')
        setCollaborators(res.data)
    }
    useEffect( () => {
        loadDados()
    }, [])


    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 100,
        cssEase: "linear",
        pauseOnHover: true,
        adaptiveHeight: true
    };

    return (
            <Slider className="slide" {...settings}>

                {collaborators.map(( {nome, descricao, link, image} ) => (
                
                    <div className="each-collaborators">

                        <img src={image.secure_url} alt={nome}/>

                    </div>
                    
                ))
                }

            </Slider>      
    );

};

export default Slide;
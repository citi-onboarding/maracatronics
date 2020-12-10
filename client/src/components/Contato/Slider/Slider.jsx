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
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        infinite: true,
        autoplaySpeed: 0,
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    pauseOnHover: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    

    return (
            <Slider className="slide" {...settings}>

                {collaborators.map(( {nome, descricao, link, image} ) => (
                
                    <a href={link} target="blank" className="each-collaborators">

                        <img src={image.secure_url} alt={nome}/>

                        <div className="information">

                            <h3>{nome}</h3>

                            <p>{descricao}</p>

                        </div>

                    </a>
                    
                ))
                }

            </Slider>      
    );

};

export default Slide;
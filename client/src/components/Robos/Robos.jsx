import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Robos.css';

import url from '../../apiURL';

function Robos() {
    const [robos, setRobos] = useState([]);
    var robosType = null
    const loadRobos = async () => {
        const res = await axios.get(`${url.url}/api/robos`);
        robosType = res.data
        setRobos(res.data.dataRoboCombate)
    }

    function buttonsInitial(){
        var botaoCombate = document.querySelector('#botaoCombate')
        botaoCombate.style.backgroundColor = 'yellow'
    }

    function buttonsClick(){
        var arrowPrev = document.querySelector('.prev')
        var arrowNext = document.querySelector('.next')
        var botaoCombate = document.querySelector('#botaoCombate')
        var botaoAutonomosIndividuais = document.querySelector('#botaoAutonomosIndividuais')
        var botaoAutonomosColetivos = document.querySelector('#botaoAutonomosColetivos')

        function handleArrows(objeto){
            if(Object.keys(objeto).length <= 1) {
                arrowPrev.style.display = 'none'
                arrowNext.style.display = 'none'
            } else{
                arrowPrev.style.display = 'inline'
                arrowNext.style.display = 'inline'
            }
        }

        const handleBotaoCombateClick = async () => {
            botaoCombate.style.backgroundColor = 'yellow'
            botaoAutonomosIndividuais.style.backgroundColor = 'white'
            botaoAutonomosColetivos.style.backgroundColor = 'white'
            handleArrows(robosType.dataRoboCombate)
            setRobos(robosType.dataRoboCombate)
        }
        botaoCombate.addEventListener('click', handleBotaoCombateClick);
        botaoCombate.addEventListener('load', handleBotaoCombateClick);

        const handleBotaoAutonomosColetivosClick = async () => {
            botaoCombate.style.backgroundColor = 'white'
            botaoAutonomosIndividuais.style.backgroundColor = 'white'
            botaoAutonomosColetivos.style.backgroundColor = 'yellow'
            handleArrows(robosType.dataRoboAutonomoColetivo)
            setRobos(robosType.dataRoboAutonomoColetivo)
        }
        botaoAutonomosColetivos.addEventListener('click', handleBotaoAutonomosColetivosClick);

        const handleBotaoAutonomosIndividuaisClick = async () => {
            botaoCombate.style.backgroundColor = 'white'
            botaoAutonomosIndividuais.style.backgroundColor = 'yellow'
            botaoAutonomosColetivos.style.backgroundColor = 'white'
            handleArrows(robosType.dataRoboAutonomoIndividual)
            setRobos(robosType.dataRoboAutonomoIndividual)
        }
        botaoAutonomosIndividuais.addEventListener('click', handleBotaoAutonomosIndividuaisClick);
    }
    
    useEffect(() => {
        buttonsInitial();
        buttonsClick();
        loadRobos();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 820,
              settings: {
                dots: false
              },
            },
          ],
      };

  return (
      <section className="robosSection" id="robosSectionId">
          <div className="content">
              <h1>Nossos robôs</h1>
              <div className="buttonsSection">
                  <button id="botaoCombate" >Combate</button>
                  <button id="botaoAutonomosIndividuais">Autônomos Individuais</button>
                  <button id="botaoAutonomosColetivos">Autônomos Coletivos</button>
              </div>
              <button className="prev" onClick={() => {
            document.querySelector(".slick-prev.slick-arrow")?.click();
          }}></button>
              <div className="carousel">
                  <Slider {...settings}>
                      {robos?.map(({_id, nome, imagem, descrição}) =>(
                      <div className="card">
                          <div className="cardText">
                              <h2 className="nomeDoRobo">{nome}</h2>
                              <p>{descrição}</p>
                          </div>
                          <div className="cardImage" style={{backgroundImage: `url(${imagem.secure_url})`}}>

                          </div>
                      </div>
                      ))}
                  </Slider>
              </div>
              <button className="next" onClick={() => {
            document.querySelector(".slick-next.slick-arrow")?.click();
          }}></button>
          </div>
      </section>
  );
};

export default Robos;

import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Robos.css';

function Robos() {
    const [robos, setRobos] = useState([]);
    var robosType = null
    const loadRobos = async () => {
        const res = await axios.get('http://localhost:3001/api/robos');
        robosType = res.data
        setRobos(res.data.dataRoboCombate)
    }

    function buttonsClick(){
        var botaoCombate = document.querySelector('#botaoCombate')
        var botaoAutonomosIndividuais = document.querySelector('#botaoAutonomosIndividuais')
        var botaoAutonomosColetivos = document.querySelector('#botaoAutonomosColetivos')

        const handleBotaoCombateClick = async () => {
            setRobos(robosType.dataRoboCombate)
        }
        botaoCombate.addEventListener('click', handleBotaoCombateClick);

        const handleBotaoAutonomosColetivosClick = async () => {
            setRobos(robosType.dataRoboAutonomoColetivo)
        }
        botaoAutonomosColetivos.addEventListener('click', handleBotaoAutonomosColetivosClick);

        const handleBotaoAutonomosIndividuaisClick = async () => {
            setRobos(robosType.dataRoboAutonomoIndividual)
        }
        botaoAutonomosIndividuais.addEventListener('click', handleBotaoAutonomosIndividuaisClick);
    }
    
    useEffect(() => {
        buttonsClick();
        loadRobos();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };

    console.log(robos)

  return (
      <section className="robosSection">
          <div className="content">
              <h1>Nossos robôs</h1>
              <div className="buttonsSection">
                  <button id="botaoCombate" >Combate</button>
                  <button id="botaoAutonomosIndividuais">Autônomos Individuais</button>
                  <button id="botaoAutonomosColetivos">Autônomos Coletivos</button>
              </div>
              <div className="carousel">
                  <Slider {...settings}>
                      {robos?.map(({_id, nome, imagem}) =>(

                      <div className="card">
                          <h2 className="nomeDoRobo">{nome}</h2>
                          <div className="cardText">
                              <p>O robô Megatron é um robô da franquia transformers, que é péssima por sinal.</p>
                          </div>
                          <div className="cardImage">
                              <img src={imagem.secure_url}/>
                          </div>
                      </div>
                      ))}
                  </Slider>
              </div>
          </div>
      </section>
  );
};

export default Robos;

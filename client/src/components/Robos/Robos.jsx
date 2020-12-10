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
        setRobos(res.data.dataRoboAutonomoColetivo)
    }

    function buttonsInitial(){
        var botaoAutonomosColetivos = document.querySelector('#botaoAutonomosColetivos')
        botaoAutonomosColetivos.style.backgroundColor = 'yellow'
    }

    function buttonsClick(){
        var botaoCombate = document.querySelector('#botaoCombate')
        var botaoAutonomosIndividuais = document.querySelector('#botaoAutonomosIndividuais')
        var botaoAutonomosColetivos = document.querySelector('#botaoAutonomosColetivos')

        const handleBotaoCombateClick = async () => {
            botaoCombate.style.backgroundColor = 'yellow'
            botaoAutonomosIndividuais.style.backgroundColor = 'white'
            botaoAutonomosColetivos.style.backgroundColor = 'white'
            setRobos(robosType.dataRoboCombate)
        }
        botaoCombate.addEventListener('click', handleBotaoCombateClick);
        botaoCombate.addEventListener('load', handleBotaoCombateClick);

        const handleBotaoAutonomosColetivosClick = async () => {
            botaoCombate.style.backgroundColor = 'white'
            botaoAutonomosIndividuais.style.backgroundColor = 'white'
            botaoAutonomosColetivos.style.backgroundColor = 'yellow'
            setRobos(robosType.dataRoboAutonomoColetivo)
        }
        botaoAutonomosColetivos.addEventListener('click', handleBotaoAutonomosColetivosClick);

        const handleBotaoAutonomosIndividuaisClick = async () => {
            botaoCombate.style.backgroundColor = 'white'
            botaoAutonomosIndividuais.style.backgroundColor = 'yellow'
            botaoAutonomosColetivos.style.backgroundColor = 'white'
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

    console.log(robos)

  return (
      <section className="robosSection">
          <div className="content">
              <h1>Nossos robôs</h1>
              <div className="buttonsSection">
                  <button id="botaoAutonomosColetivos">Autônomos Coletivos</button>
                  <button id="botaoAutonomosIndividuais">Autônomos Individuais</button>
                  <button id="botaoCombate" >Combate</button>
              </div>
              <button className="prev" onClick={() => {
            document.querySelector(".slick-prev.slick-arrow").click();
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
            document.querySelector(".slick-next.slick-arrow").click();
          }}></button>
          </div>
      </section>
  );
};

export default Robos;

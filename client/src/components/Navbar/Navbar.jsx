import './Navbar.css';
import logoMaraca from "../assets/logoMaracaNavbar.svg";
import { useState, useEffect } from 'react';


function Navbar() {

    let menuAtivado = false

    const toggleMenu = () => {
        const navbarContainer = document.querySelector('.navbar')
        const menu = document.querySelector('.menuList');
        const botaoHamburguer = document.querySelector('.botaoHamburguer')
        const hamburguer = document.querySelector('.hamburguer');
        const linhaHamburguerCentro = document.querySelector('#hamburguerCentro');
        const linhaHamburguerCima = document.querySelector('#hamburguerCima');
        const linhaHamburguerBaixo = document.querySelector('#hamburguerBaixo');

        menu.classList.toggle('activeMenu');
        navbarContainer.classList.toggle('activeMenuNavbar')

        if(menuAtivado == false) {
            hamburguer.style.position = 'fixed';
            botaoHamburguer.style.justifyContent = 'center';
            linhaHamburguerCentro.style.transform = 'rotate(45deg)';
            linhaHamburguerCima.style.transform = 'rotate(135deg)';
            linhaHamburguerBaixo.style.display = 'none';
            menuAtivado = true
        } else {
            hamburguer.style.position = 'relative';
            botaoHamburguer.style.justifyContent = 'space-between';
            linhaHamburguerCentro.style.transform = 'rotate(0deg)';
            linhaHamburguerCima.style.transform = 'rotate(0deg)';
            linhaHamburguerBaixo.style.display = 'block';
            menuAtivado = false
        }
    }

    const marcadorMenu = () => {
        const botaoInicio = document.querySelector('.botaoInicio');
        const marcadorInicio = document.querySelector('.marcadorInicio');
        const botaoQuemSomos = document.querySelector('.botaoQuemSomos');
        const marcadorQuemSomos = document.querySelector('.marcadorQuemSomos');
        const botaoRobos = document.querySelector('.botaoRobos');
        const marcadorRobos = document.querySelector('.marcadorRobos');
        const botaoContato = document.querySelector('.botaoContato');
        const marcadorContato = document.querySelector('.marcadorContato');

        const handleBotaoInicioClick = async () => {
            marcadorInicio.style.backgroundColor = 'black';
            marcadorQuemSomos.style.backgroundColor = 'transparent';
            marcadorRobos.style.backgroundColor = 'transparent';
            marcadorContato.style.backgroundColor = 'transparent';
        }

        const handleBotaoQuemSomosClick = async () => {
            marcadorInicio.style.backgroundColor = 'transparent';
            marcadorQuemSomos.style.backgroundColor = 'black';
            marcadorRobos.style.backgroundColor = 'transparent';
            marcadorContato.style.backgroundColor = 'transparent';
        }

        const handleBotaoRobosClick = async () => {
            marcadorInicio.style.backgroundColor = 'transparent';
            marcadorQuemSomos.style.backgroundColor = 'transparent';
            marcadorRobos.style.backgroundColor = 'black';
            marcadorContato.style.backgroundColor = 'transparent';
        }

        const handleBotaoContatoClick = async () => {
            marcadorInicio.style.backgroundColor = 'transparent';
            marcadorQuemSomos.style.backgroundColor = 'transparent';
            marcadorRobos.style.backgroundColor = 'transparent';
            marcadorContato.style.backgroundColor = 'black';
        }
        
        botaoInicio.addEventListener('click', handleBotaoInicioClick);
        botaoQuemSomos.addEventListener('click', handleBotaoQuemSomosClick);
        botaoRobos.addEventListener('click', handleBotaoRobosClick);
        botaoContato.addEventListener('click', handleBotaoContatoClick);
    }

    const marcadorInitial = () => {
        const marcadorInicio = document.querySelector('.marcadorInicio');
        const marcadorQuemSomos = document.querySelector('.marcadorQuemSomos');
        const marcadorRobos = document.querySelector('.marcadorRobos');
        const marcadorContato = document.querySelector('.marcadorContato');

        marcadorInicio.style.backgroundColor = 'black';
        marcadorQuemSomos.style.backgroundColor = 'transparent';
        marcadorRobos.style.backgroundColor = 'transparent';
        marcadorContato.style.backgroundColor = 'transparent';
    }

    useEffect(() => {
        marcadorInitial();
        marcadorMenu();
    }, []);

    return (
        <header className="navbar">

            <img src={logoMaraca} alt="logo do maracatronics" className="logoNavBar"></img>
            
            <div className="menuNavbar">
                <ul className="menuList">
                    <li id="inicioText">
                        <a href="#imagemBanner" onClick={toggleMenu} className="botaoInicio">Início</a>
                        <div className="marcadorInicio"></div>
                    </li>
                    
                    <li id="sobreText">
                        <a href="#quemSomosSection" onClick={toggleMenu} className="botaoQuemSomos">Sobre o Maracatronics</a>
                        <div className="marcadorQuemSomos"></div>
                    </li>

                    <li id="robosText">
                        <a href="#robosSectionId" onClick={toggleMenu} className="botaoRobos">Nossos robôs</a>
                        <div className="marcadorRobos"></div>
                    </li>

                    <li id="contatoText">
                        <a href="#contatoSection" onClick={toggleMenu} className="botaoContato">Contato</a>
                        <div className="marcadorContato"></div>
                    </li>
                </ul>
            </div>

            <div className="botaoHamburguer" onClick={toggleMenu}>
                <span id="hamburguerCima" className="hamburguer"></span>
                <span id="hamburguerCentro" className="hamburguer"></span>
                <span id="hamburguerBaixo" className="hamburguer"></span>
            </div>

        </header>
    );
  
  };

export default Navbar;
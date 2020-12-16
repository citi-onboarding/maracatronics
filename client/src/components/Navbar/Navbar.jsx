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


    return (
        <header className="navbar">

            <img src={logoMaraca} alt="logo do maracatronics" className="logoNavBar"></img>
            
            <div className="menuNavbar">
                <ul className="menuList">
                    <li id="inicioText">
                        <a href="#imagemBanner" onClick={toggleMenu} className="botaoInicio">Início</a>
                        
                    </li>
                    
                    <li id="sobreText">
                        <a href="#quemSomosSection" onClick={toggleMenu} className="botaoQuemSomos">Sobre o Maracatronics</a>
                        
                    </li>

                    <li id="robosText">
                        <a href="#robosSectionId" onClick={toggleMenu} className="botaoRobos">Nossos robôs</a>
                        
                    </li>

                    <li id="contatoText">
                        <a href="#contatoSection" onClick={toggleMenu} className="botaoContato">Contato</a>
                        
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
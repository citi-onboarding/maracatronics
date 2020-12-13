import { useState, useEffect } from 'react';
import './Navbar.css';
import logoMaraca from "../assets/logoMaracaNavbar.svg";


function Navbar() {
    return (
        <div className="navbar">
            <img src={logoMaraca} alt="logo do maracatronics" class="logo"></img>
            <input type="checkbox" name="" id="menuHamburguer"/>
            <label for="menuHamburguer">
                <div className="botaoHamburguer">
                    <span className="hamburguer"></span>
                </div>
            </label>
            <div className="menuNavbar">
                <ul>
                    <li>
                        <a>Início</a>
                        <div className="marcadorInicio"></div>
                    </li>
                    <li>
                        <a href="">Sobre o Maracatronics</a>
                        <div className="marcadorSobreOMaraca"></div>
                    </li>
                    <li>
                        <a href="">Nossos robôs</a>
                        <div className="marcadorNossosRobos"></div>
                    </li>
                    <li>
                        <a href="">Contato</a>
                        <div className="marcadorContato"></div>
                    </li>
                </ul>
            </div>
        </div>
    );
  
  };

export default Navbar;
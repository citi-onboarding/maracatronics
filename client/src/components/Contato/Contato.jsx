import { useState, useEffect } from 'react';
import axios from 'axios';

import './Contato.css';
import './ContatoResponsivo.css';

import SocialMediaBox from './SocialMediaBox/SocialMediaBox.jsx';
import Slide from './Slider/Slider'

import email from '../assets/email.svg'
import instagram from '../assets/instagram.svg'
import local from '../assets/local.svg'
import youtube from '../assets/youtube.svg'

function Contato() {

    return (

        <section className="contato">

            <div className="yellow-line-contato"></div>

            <div className="contato-container">
                
                <div className="contato-content">
                    
                    <div className="form-contato">
                        <h1>
                            Contato
                        </h1>

                        <form action="">

                            <label htmlFor="name">Nome</label>

                            <input
                            type="text"
                            name="name"
                            />

                            <label htmlFor="email">E-mail</label>
                            
                            <input
                            type="email"
                            name="email"
                            />

                            <label htmlFor="subject">Assunto</label>

                            <input
                            type="text"
                            name="subject"
                            />

                            <label htmlFor="message">Mensagem</label>

                            <textarea
                            name="message"
                            ></textarea>

                            <input type="submit" className="button-submit"/>

                        </form>
                    </div>

                    <div className="collaborators">
                        <h1>Nossos apoiadores</h1>

                        <Slide></Slide>
                    </div>

                    <div className="social-media">

                        <SocialMediaBox
                        icon={instagram}
                        title="Instagram"
                        info={""}
                        />

                        <SocialMediaBox
                        icon={youtube}
                        title="Youtube"
                        info={""}
                        />

                        <SocialMediaBox
                        icon={email}
                        title="E-mail"
                        info={""}
                        />

                        <SocialMediaBox
                        icon={local}
                        title=""
                        info={""}
                        />

                    </div>
                
                </div>

            </div>

        </section>

    )


};

export default Contato;
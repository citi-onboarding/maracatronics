import { useState, useEffect } from 'react';
import axios from 'axios';

import './Contato.css';
import './ContatoResponsivo.css';

import SocialMediaBox from './SocialMediaBox/SocialMediaBox.jsx';
import Slide from './Slider/Slider'

import emailIcon from '../assets/email.svg'
import instagramIcon from '../assets/instagram.svg'
import localIcon from '../assets/local.svg'
import youtubeIcon from '../assets/youtube.svg'

function Contato() {

    const [redesSociais, setRedesSociais] = useState([]);

    const loadRedesSociais = async () => {
        const res = await axios.get('http://localhost:3001/api/redesSociais');
        setRedesSociais(res.data)
    }
    useEffect( () => {
        loadRedesSociais()
    }, [])

    return (

        <section className="contato">

            <div className="yellow-line-contato"></div>

            <div className="contato-container">
                
                <div className="contato-content">
                    
                    <div className="form-contato">
                        <h1>
                            Contato
                        </h1>

                        <form >

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

                        {
                            redesSociais?.map( ( {localizacao, email, youtube, instagram} ) => (

                                <>

                                    <SocialMediaBox
                                    icon={instagramIcon}
                                    title="Instagram"
                                    info={"@maracatronics"}
                                    link={instagram}
                                    target="_blank"
                                    />

                                    <SocialMediaBox
                                    icon={youtubeIcon}
                                    title="Youtube"
                                    info={"Maracatronics UFPE"}
                                    link={youtube}
                                    target="_blank"
                                    />

                                    <SocialMediaBox
                                    icon={emailIcon}
                                    title="E-mail"
                                    info={email}
                                    link={`mailto:${email}`}
                                    target="_self"
                                    />

                                    <SocialMediaBox
                                    icon={localIcon}
                                    title=""
                                    info={localizacao}
                                    />

                                </>

                            ))
                        }

                        

                    </div>
                
                </div>

            </div>

        </section>

    )


};

export default Contato;
import { useState, useEffect } from 'react';
import axios from 'axios';

import './Contato.css';
import './ContatoResponsivo.css';
import url from '../../apiURL';

import SocialMediaBox from './SocialMediaBox/SocialMediaBox.jsx';
import Slide from './Slider/Slider'

import emailIcon from '../assets/email.svg'
import instagramIcon from '../assets/instagram.svg'
import localIcon from '../assets/local.svg'
import youtubeIcon from '../assets/youtube.svg'

function Contato() {

    const [redesSociais, setRedesSociais] = useState([]);

    const loadRedesSociais = async () => {
        const res = await axios.get(`${url.url}/api/redesSociais`);
        setRedesSociais(res.data)
    }
    useEffect( () => {
        loadRedesSociais()
    }, [])

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const sendMaile = async () => {

        try {
            const db = await axios.post(`${url.url}/api/contato`, {
                "name": name,
                "email": email,
                "subject": subject,
                "message": message
            })

            if (db.status === 200) {
                console.log('Mensagem enviada!');

                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            }
        } catch (error) {
            console.log('Erro ao enviar')
            console.log(error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendMaile();
    };

    return (

        <section className="contato">

            <div className="yellow-line-contato"></div>

            <div className="contato-container">
                
                <div className="contato-content">
                    
                    <div className="form-contato">
                        <h1>
                            Contato
                        </h1>

                        <form onSubmit={(event) => handleSubmit(event)}>

                            <label htmlFor="name">Nome</label>

                            <input
                            required
                            className="input-clear"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            />

                            <label htmlFor="email">E-mail</label>
                            
                            <input
                            required
                            className="input-clear"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            />

                            <label htmlFor="subject">Assunto</label>

                            <input
                            required
                            className="input-clear"
                            type="text"
                            name="subject"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value)
                            }}
                            />

                            <label htmlFor="message">Mensagem</label>

                            <textarea
                            required
                            className="input-clear"
                            name="message"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
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
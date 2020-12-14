import { useState, useEffect } from 'react';
import axios from 'axios';

import PurposeBox from './PurposeBox/PurposeBox.jsx';
import './QuemSomos.css';
import './QuemSomosResponsive.css';

import missaoIcon from '../assets/missao.svg';
import valoresIcon from '../assets/valores.svg';
import visaoIcon from '../assets/visao.svg';
import logo from '../assets/logo-maraca.svg'

function QuemSomos() {
    const [quemSomos, setQuemSomos] = useState([]);
    const [propositos, setPropositos] = useState([]);

    const loadQuemSomos = async () => {
        const res = await axios.get('http://localhost:3001/api/quemSomos');
        setQuemSomos(res.data);
    }
    useEffect( () => {
        loadQuemSomos();
    }, []);

    const loadPropositos = async () => {
        const res = await axios.get('http://localhost:3001/api/proposito');
        setPropositos(res.data);
    }
    useEffect( () => {
        loadPropositos();
    }, []);
  
    return (
        <section className='quemSomos' id="quemSomosSection">

            <div className="yellow-line">
            </div>

            <div className="quemSomos-container">

                <div className="quemSomos-content">

                    {
                    quemSomos?.map( ( { _id, texto, imagem } ) => (

                        <div className="line-one" key={_id}>

                            <div className="title">
                                <h1>Quem somos</h1>

                                <p>
                                {texto}
                                </p>
                            </div>

                            <img src={imagem.secure_url} alt="Foto do Maraca" className="pic"/>
                        </div>

                    ))
        
                    }
                    
                    {
                    propositos?.map( ( { _id, missao, valores, visao } ) => (

                        <div className="line-two" key={_id}> 
                            <PurposeBox
                            picFile={missaoIcon}
                            title="Missão"
                            text={missao}>                   
                            </PurposeBox>

                            <PurposeBox
                            picFile={visaoIcon}
                            title="Visão"
                            text={visao}>
                            </PurposeBox>

                            <PurposeBox
                            picFile={valoresIcon}
                            title="Valores"
                            text={valores}>
                            </PurposeBox>
                        </div>

                    ))
        
                    }
                    
                    <img src={logo} alt="Maraca" className='logoMaraca'/>

                </div>
                
            </div>
                
        </section>
    );
}

export default QuemSomos;

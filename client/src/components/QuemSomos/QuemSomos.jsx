import PurposeBox from './PurposeBox/PurposeBox.jsx';
import './QuemSomos.css';

import missao from './assets/missao.svg';
import valores from './assets/valores.svg';
import visao from './assets/visao.svg';

function QuemSomos() {
  
  return (
    <section className='quemSomos'>

        <div className="yellow-line">
        </div>

        <div className="quemSomos-container">

            <div className="quemSomos-content">

                <div className="line-one">

                <div className="title">
                    <h1>Quem somos</h1>

                    <p>
                        Somos uma equipe de robótica da Universidade Federal de Pernambuco, localizada no departamento de Engenharia Mecânica do Centro de Tecnologia e Geociências (CTG).
                        <br></br>
                        <br></br>
                        A equipe foi criada em 2012, com menos de 10 alunos no projeto e hoje conta com cerca de 30 estudantes. Atuamos na pesquisa e desenvolvimento de projetos de robôs para competições de diferentes categorias.
                    </p>
                </div>

                <div className="pic">
                </div>

            </div>

                <div className="line-two"> 
                    <PurposeBox
                    picFile={missao}
                    title="Missão"
                    text="Estudar, aplicar e difundir a robótica, formando indivíduos melhores e mais capacitados para agregar valor à sociedade.">                   
                    </PurposeBox>

                    <PurposeBox
                    picFile={visao}
                    title="Visão"
                    text="Ser referência nacional em robótica com experiência comprovada através de resultados em competições de grande porte, além de proporcionar capacitação e aprendizado na área das engenharias para estudantes e profissionais do ramo.">
                    </PurposeBox>

                    <PurposeBox
                    picFile={valores}
                    title="Valores">
                    </PurposeBox>
                </div>

            </div>

        </div>

    </section>
  );
}

export default QuemSomos;

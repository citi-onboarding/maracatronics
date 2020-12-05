import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

import './Robos.css';

function Robos() {
  return (
      <section className="robosSection">
          <div className="content">
              <h1>Nossos robôs</h1>
              <div className="buttonsSection">
                  <button className="botaoCombate">Combate</button>
                  <button className="botaoAutonomosIndividuais">Autônomos Individuais</button>
                  <button className="botaoAutonomosColetivos">Autônomos Coletivos</button>
              </div>
          </div>
      </section>
  );
};

export default Robos;

import React from 'react';
import Page from '../components/Page';
import './Vista'
const Vista1 = () => {
  return (
    <Page>
      <div className="vista1-container">
        <h1 className="vista1-title">Hola, esta es la Vista 1</h1>
        <p className="vista1-content">
          Contenido de la Vista 1
        </p>
      </div>
    </Page>
  );
};

export default Vista1;
import React from "react";
import {Container, Head, Titulo, BemVindo} from './styles.js'


function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled components</Titulo>
      </Head>

      <BemVindo cor="00FF00" tamanho="50">
        Bem vindo ao projeto
      </BemVindo>
    </Container>
    
  );
}

export default App;


/*
Antigo

    <div className="container">
      <header className="header">
        <a className="titulo">Projeto Styled</a>
      </header>

      <h1>Bem vindo ao sistema</h1>
    </div>
*/
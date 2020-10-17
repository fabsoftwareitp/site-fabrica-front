import React from 'react';

import { ContainerFluid, Container, Content } from './styles';
import foto from '../../images/Time.jpeg'; 

function Card() {
  return (
    <>
    <h1 className="Title"> Notícias </h1>
    <ContainerFluid>
      <Container>
        <img src={foto} alt="noticia" />
        <Content>
          <h1 className="title"> Festinha na Fab </h1>
          <p className="non-title"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nemo ducimus repellendus, non voluptatem quam aut libero possimus omnis quibusdam esse tenetur cumque ullam animi sint sit temporibus iusto ipsam.</p>
          <span className="non-title"> 12 de Outubro de 2020 </span>
        </Content>
      </Container>
      <Container>
        <img src={foto} alt="noticia" />
        <Content>
          <h1 className="title"> Festinha na Fab </h1>
          <p className="non-title"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nemo ducimus repellendus, non voluptatem quam aut libero possimus omnis quibusdam esse tenetur cumque ullam animi sint sit temporibus iusto ipsam.</p>
          <span className="non-title"> 12 de Outubro de 2020 </span>
        </Content>
      </Container>
    </ContainerFluid>
    </>
  )
}

export default Card;
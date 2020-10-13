import React from 'react';

import { Container, Content } from './styles';
import foto from '../../images/Time.jpeg'; 

function Card() {
  return (
      <Container>
        <img src={foto} alt="noticia" />
        <Content>
          <h1> Festinha na Fab </h1>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, nemo ducimus repellendus, non voluptatem quam aut libero possimus omnis quibusdam esse tenetur cumque ullam animi sint sit temporibus iusto ipsam.</p>
          <span> 12 de Outubro de 2020 </span>
        </Content>
      </Container>
  )
}

export default Card;
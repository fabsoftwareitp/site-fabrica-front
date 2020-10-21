import React from 'react';

import { ContainerFluid, Container, Content, Post } from './styles';

function Card( { title, path_img, description, date }) {
  return (
    <>
      <Container>
        <img src={path_img} alt="noticia" />
        <Content>
          <h1 className="title"> {title} </h1>
          <p className="non-title post-desc"> {description} </p>
          <span className="non-title"> {date} </span>
        </Content>
      </Container>

    </>
  )
}

export default Card;
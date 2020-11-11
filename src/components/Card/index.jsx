import React from 'react';

import {  Container, Content } from './styles';

function Card( { title, path_img, description, date }) {
  return (
    <>
      <Container>
        <img src={path_img} alt="noticia" />
        <Content>
          <h1 className="title"> {title} </h1>
          <p className="not-title post-desc"> {description} </p>
          <span className="non-title"> <strong>Data: </strong> {date} </span>
        </Content>
      </Container>

    </>
  )
}

export default Card;
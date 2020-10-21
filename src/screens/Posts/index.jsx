import React from 'react';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Container, ContainerFluid } from './styles';
import News from '../../news.json';

function Posts() {
  let Posts = News.news;
  return (
      <>
      <Container>
      <Navbar />
      <h1 className="title news"> Notícias </h1>
        <ContainerFluid>
        {Posts.map((post, index) => {
          return (
            <Card key={index} title={post.title} path_img={post.path_img} description={post.description} date={post.date} />
            )
          })}
        </ContainerFluid>
      </Container>
        <Footer id="footer" />
      </>
  )
}

export default Posts;
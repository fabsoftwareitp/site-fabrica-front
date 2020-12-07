import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Container, ContainerFluid } from './styles';


function Posts() {
  const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://fabsoftwareitp.000webhostapp.com/api/posts',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  let Posts = data.posts;
  return (
      <>
      <Container>
      <Navbar />
      <h1 className="titleNews">Últimos acontecimentos da Fábrica </h1>
        <ContainerFluid>
          {Posts.map((post, index) => {

            console.log(post.dataCriacao);
            
            return (
              <div className="post" key={index}>
                <figure>
                  <img src={post.imagem} alt="image" />
                </figure>
                <h2>{post.titulo}</h2>
                <h6>Postado em {post.dataCriacao}</h6>
                <p>{post.descricao}</p>
              </div>
            )

            return (
              <Card key={index} title={post.titulo} path_img={post.imagem} description={post.descricao} date={post.dataCriacao} />
            )
          })}
        </ContainerFluid>
      </Container>
        <Footer id="footer" />
      </>
  )
}

export default Posts;
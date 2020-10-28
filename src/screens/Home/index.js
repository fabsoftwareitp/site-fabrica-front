import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerFluid } from '../../components/Card/styles';
import { AccessProject } from '../../components/Slider/styles';
import Navbar from '../../components/Navbar';
import Welcome from '../../components/Welcome';
import Slider from '../../components/Slider';
import About from '../../components/About';
import Members from '../../components/Members';
import Card from '../../components/Card';   
import Footer from '../../components/Footer';



function Home()  {
    const [data, setData] = useState({ posts: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://fabsoftwareitp.000webhostapp.com/api/ultimosPosts',
            );

            setData(result.data);
        };

        fetchData();
    }, []);

    let Posts = data.posts;
    const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow-x: hidden;
`;
    return (
        <>
        <Wrapper>
            <Navbar />
            <Welcome />
            <Slider />
            <About />
            <Members />
        <ContainerFluid>
            {Posts.map((post, index) => {
                return (
                    <Card key={index} title={post.titulo} path_img={post.imagem} description={post.descricao} date={post.dataCriacao} />
                )
            })}
                    <AccessProject>
                        <Link to="/noticias"> Ver mais </Link>
                    </AccessProject>
        </ContainerFluid>

            <Footer />
        </Wrapper>
        </>
    );
}

export default Home;
import React from 'react';
import styled from 'styled-components';

import { ContainerFluid } from '../../components/Card/styles';
import Navbar from '../../components/Navbar';
import Welcome from '../../components/Welcome';
import Slider from '../../components/Slider';
import About from '../../components/About';
import Members from '../../components/Members';
import Card from '../../components/Card';   
import Footer from '../../components/Footer';

import News from '../../news.json';

function Home()  {
    let Posts = News.news;
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
                    <Card key={index} title={post.title} path_img={post.path_img} description={post.description} date={post.date} />
                )
            })}
        </ContainerFluid>
            <Footer />
        </Wrapper>
        </>
    );
}

export default Home;
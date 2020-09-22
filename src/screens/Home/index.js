import React from 'react';
import styled from 'styled-components';


import Navbar from '../../components/Navbar';
import Welcome from '../../components/Welcome';
import Slider from '../../components/Slider';
import About from '../../components/About';
import Members from '../../components/Members';
import Footer from '../../components/Footer';



function Home()  {
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
            <Footer />
        </Wrapper>
        </>
    );
}

export default Home;
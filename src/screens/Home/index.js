import React from 'react';


import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';
// import Tutorial from '../../components/Tutorial';
import About from '../../components/About';
import Members from '../../components/Members';
import Footer from '../../components/Footer';

function Home()  {
    return (
        <>
            <Navbar />
            <Layout />
            <Slider />
            {/* <Tutorial /> */}
            <About />
            <Members />
            <Footer />
        </>
    );
}

export default Home;
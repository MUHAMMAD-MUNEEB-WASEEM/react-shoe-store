import '../App.css';

import HeroSection from './HeroSection/HeroSection';

import React from 'react'
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';

function Home() {
    return (
        <>
         <HeroSection />
         <Cards />
         <Footer />
        </>
    )
}

export default Home;

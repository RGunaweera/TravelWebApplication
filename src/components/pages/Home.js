import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards'
import React from 'react';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
      <>
        
        <HeroSection/>
        <Cards/>
        <Footer/>
      </>
    );
  }
  

export default Home;




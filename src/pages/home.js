import React from 'react';
import '../styles/home.css';
import Header from '../components/header';
import Hero from '../components/hero';
import Arduino from '../pages/arduino';


function Home() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Arduino></Arduino>
    </>
  );
}

export default Home;
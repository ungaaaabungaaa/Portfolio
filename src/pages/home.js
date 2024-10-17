import React from 'react';
import '../styles/home.css';
import Header from '../components/header';
import Hero from '../components/hero';
import Arduino from '../pages/arduino';
import Raspberry from '../pages/raspberry';


function Home() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    <Arduino></Arduino>
    <Raspberry></Raspberry>
    </>
  );
}

export default Home;
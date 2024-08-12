import React from 'react';
import '../styles/home.css';
import Header from '../components/header';
import Hero from '../components/hero';
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <>
    <Header></Header>
    <Hero></Hero>
    </>
  );
}

export default Home;
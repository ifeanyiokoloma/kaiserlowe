import React from 'react'
import SlidingHero from '../component/SlidingHero';
import About from '../component/About';
import Training from '../component/Training';
import Services from '../component/Services';
import Portfolio from '../component/Portfolio';
import MobilePortfolio from '../component/MobilePortfolio';
import Team from '../component/Team';
import Contact from '../component/Contact';
import Layout from '../component/Layout';

const Home = () => {
  return (
    <Layout>
      <SlidingHero />
      <About />
      <Training />
      <Services />
      <Portfolio />
      <MobilePortfolio />
      <Team />
      <Contact />
    </Layout>
  );
}

export default Home
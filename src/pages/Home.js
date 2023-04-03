import React from "react";
import SlidingHero from "../component/SlidingHero";
import About from "../component/About";
import Training from "../component/Training";
import Services from "../component/Services";
import Portfolio from "../component/Portfolio";
import MobilePortfolio from "../component/MobilePortfolio";
import Team from "../component/Team";
import Layout from "../component/Layout";
import BG from "../component/BG";

const Home = () => {
  return (
    <Layout>
      <SlidingHero />
      <About />
      <BG>
        <Training extraBtn header />
      </BG>
      <Services />
      <Portfolio />
      <MobilePortfolio />
      <Team />
    </Layout>
  );
};

export default Home;

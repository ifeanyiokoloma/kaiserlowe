import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";

const Portfolio = () => {
  return (
    <Layout>
      <Hero
        imgSrc="portfolio/architecture_e9ypau.jpg"
        h1="Portfolio"
        lead="Welcome to Kaiserlowe's portfolio page, showcasing our exceptional construction projects and unparalleled expertise in delivering high-quality solutions."
      />
    </Layout>
  );
};

export default Portfolio;

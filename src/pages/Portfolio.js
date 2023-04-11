import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";
import CenteredTabs from "../component/TabbedPortfolio";

const Portfolio = () => {
  return (
    <Layout>
      <Hero
        imgSrc="portfolio/architecture_e9ypau.jpg"
        h1="Portfolio"
        lead="Welcome to Kaiserlowe's portfolio page, showcasing our exceptional construction projects and unparalleled expertise in delivering high-quality solutions."
      />
      <CenteredTabs sx={{mt: 5}} />
    </Layout>
  );
};

export default Portfolio;

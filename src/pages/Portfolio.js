import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";
import CenteredTabs from "../component/TabbedPortfolio";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  return (
    <Layout>
      <Helmet>
        <title>Portfolio | KaiserLowe UGO Construction Company</title>
      </Helmet>
      <Hero
        imgSrc="portfolio/architecture_e9ypau.jpg"
        h1="Portfolio"
        lead="Welcome to Kaiserlowe UGO's portfolio page, showcasing our exceptional construction projects and unparalleled expertise in delivering high-quality solutions."
      />
      <main>
        <CenteredTabs sx={{ mt: 5 }} />
      </main>
    </Layout>
  );
};

export default Portfolio;

import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";
import Section from "../component/Section";
import { about } from "../asset/content";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About KaiserLowe UGO Construction Company</title>
      </Helmet>
      <Hero
        imgSrc="about/about_lgqwzw.jpg"
        h1="About Us"
        lead="Kaiserlowe UGO starts 2013 to operates in Nigeria as a building development company. We offer the whole spectrum of services in building and managing. Our business philosophy is based on continuity and organic growth, on team spirit, respect and partnership."
      />
      <main>
        <Section
          imgSrc={about[0].img}
          content={about[0].content}
          header={about[0].h2}
        />
        <Section
          imgSrc={about[2].img}
          content={about[2].content}
          header={about[2].h2}
          imgPos={2}
        />
        <Section
          imgSrc={about[1].img}
          title={about[1].content.title}
          list={about[1].content.list}
          header={about[1].h2}
        />
        <Section
          imgSrc={about[3].img}
          content={about[3].content}
          header={about[3].h2}
          imgPos={2}
        />
      </main>
    </Layout>
  );
};

export default About;

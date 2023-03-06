import React from 'react'
import Layout from '../component/Layout'
import Hero from '../component/Hero'
import Section from '../component/Section';
import { about } from '../asset/content';

const About = () => {
  return (
    <Layout>
      <Hero
        imgSrc="/images/about/about.jpg"
        h1="About Us"
        lead="Kaiser Löwe starts 2013 to operates in Nigeria as a building development company. We offer the whole spectrum of services in building and managing. Our business philosophy is based on continuity and organic growth, on team spirit, respect and partnership."
      />
      <Section imgSrc={about[3].img} content={about[3].content} header={about[3].h2} />
      <Section imgSrc={about[1].img} content={about[1].content} header={about[1].h2} />
      <Section imgSrc={about[2].img} content={about[2].content} header={about[2].h2} imgPos={2} />
    </Layout>
  );
}

export default About
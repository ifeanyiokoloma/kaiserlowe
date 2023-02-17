import React from 'react'
import Layout from '../component/Layout'
import Hero from '../component/Hero'

const About = () => {
  return (
    <Layout>
      <Hero
        imgSrc="/images/about/about.jpg"
        h1="About Us"
        lead="Kaiser Löwe starts 2013 to operates in Nigeria as a building development company. We offer the whole spectrum of services in building and managing. Our business philosophy is based on continuity and organic growth, on team spirit, respect and partnership."
      />
    </Layout>
  );
}

export default About
import React from 'react'
import Layout from '../component/Layout'
import Hero from '../component/Hero';

const Services = () => {
  return (
    <Layout>
      <Hero
        imgSrc="/images/services/building.jpg"
        h1="Our Services"
        lead="Welcome to Kaiserlowe, the premier construction company offering a wide range of services to help bring your building projects to life."
      />
    </Layout>
  );
}

export default Services
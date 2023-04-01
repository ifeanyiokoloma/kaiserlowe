import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";
import Section from "../component/Section";
import { services } from "../asset/content";

const Services = () => {
  return (
    <Layout>
      <Hero
        imgSrc="services/building_zoygef.jpg"
        h1="Our Services"
        lead="Welcome to Kaiserlowe, the premier construction company offering a wide range of services to help bring your building projects to life."
      />
      <Section
        imgSrc={services[0].img}
        content={services[0].p}
        header={services[0].h3}
      />
      <Section
        imgSrc={services[1].img}
        content={services[1].p}
        header={services[1].h3}
        imgPos={2}
      />
      <Section
        imgSrc={services[2].img}
        content={services[2].p}
        header={services[2].h3}
      />
      <Section
        imgSrc={services[3].img}
        content={services[3].p}
        header={services[3].h3}
        imgPos={2}
      />

      <Section
        imgSrc={services[4].img}
        content={services[4].p}
        header={services[4].h3}
      />

      <Section
        imgSrc={services[5].img}
        content={services[5].p}
        header={services[5].h3}
        imgPos={2}
      />
    </Layout>
  );
};

export default Services;

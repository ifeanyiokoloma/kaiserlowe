import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";
import Section from "../component/Section";
import { servicesPage } from "../asset/content";

const Services = () => {
  return (
    <Layout>
      <Hero
        imgSrc="services/building_zoygef.jpg"
        h1="Our Services"
        lead="Welcome to Kaiserlowe, the premier construction company offering a wide range of services to help bring your building projects to life."
      />
      <Section
        imgSrc={servicesPage[0].img}
        content={servicesPage[0].p}
        header={servicesPage[0].h3}
      />
      <Section
        imgSrc={servicesPage[1].img}
        title={servicesPage[1].title}
        header={servicesPage[1].h3}
        imgPos={2}
        list={servicesPage[1].li}
      />
      <Section
        imgSrc={servicesPage[2].img}
        content={servicesPage[2].p}
        header={servicesPage[2].h3}
      />
      <Section
        imgSrc={servicesPage[3].img}
        content={servicesPage[3].p}
        header={servicesPage[3].h3}
        imgPos={2}
      />

      <Section
        imgSrc={servicesPage[4].img}
        title={servicesPage[4].title}
        header={servicesPage[4].h3}
        list={servicesPage[4].li}
      />

      <Section
        imgSrc={servicesPage[5].img}
        content={servicesPage[5].p}
        header={servicesPage[5].h3}
        imgPos={2}
      />
    </Layout>
  );
};

export default Services;

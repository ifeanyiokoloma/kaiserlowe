import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";
import Training from "../component/Training";

const TrainingPage = () => {
  return (
    <Layout>
      <Hero
        imgSrc="training/bg_cb6rvv.jpg"
        h1="Training"
        lead="At Kaiserlowe, we understand that a skilled and knowledgeable workforce is crucial to the success of any construction project, which is why we offer comprehensive training programs designed to meet the unique needs of our clients."
      />
      <Training
        headerColor="black"
        headerLineColor="var(--primary)"
        header="Courses"
      />
    </Layout>
  );
};

export default TrainingPage;

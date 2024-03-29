import React from "react";
import Layout from "../component/Layout";
import Hero from "../component/Hero";
import Training from "../component/Training";

const TrainingPage = () => {
  return (
    <Layout>
      <title>Training | KaiserLowe UGO Construction Company</title>
      <Hero
        imgSrc="training/bg_cb6rvv.jpg"
        h1="Training"
        lead="At Kaiserlowe UGO, we understand that a skilled and knowledgeable workforce is crucial to the success of any construction project, which is why we offer comprehensive training programs designed to meet the unique needs of our clients."
      />
      <main>
        <Training
          headerColor="black"
          headerLineColor="var(--primary)"
          header="Courses"
        />
      </main>
    </Layout>
  );
};

export default TrainingPage;

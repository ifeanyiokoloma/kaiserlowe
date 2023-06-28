import React from "react";
import { Box } from "@mui/material";
import Section from "../component/Section";
import Layout from "../component/Layout";
import { Helmet } from "react-helmet";

const Course = ({ h1, header, img, list, title }) => {
  return (
    <Layout>
      <Helmet>
        <title>Training on {h1} | KaiserLowe Construction Company</title>
      </Helmet>
      <Box component="article">
        <Section
          h1={h1}
          header={header}
          imgSrc={img}
          list={list}
          title={title}
        />
      </Box>
    </Layout>
  );
};

export default Course;

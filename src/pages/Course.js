import React from "react";
import { Box } from "@mui/material";
import Section from "../component/Section";
import Layout from "../component/Layout";

const Course = ({ h1, header, article, img, list, title }) => {
  return (
    <Layout>
      <Box component="article">
        <Section h1={h1} header={header} imgSrc={img} list={list} title={title} />
      </Box>
    </Layout>
  );
};

export default Course;

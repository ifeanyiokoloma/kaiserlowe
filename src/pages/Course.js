import React from "react";
import { Box } from "@mui/material";
import Section from "../component/Section";
import Layout from "../component/Layout";

const Course = ({ h1, header, article, img }) => {
  return (
    <Layout>
      <Box component="article">
        <Section h1={h1} header={header} imgSrc={img} content={article} />
      </Box>
    </Layout>
  );
};

export default Course;

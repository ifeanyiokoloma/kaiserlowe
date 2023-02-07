import React from "react";
import Img from "react-cool-img";

const Image = ({ source, alt }) => {
  return <Img src={source} alt={alt} />;
};

export default Image;

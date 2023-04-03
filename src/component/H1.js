import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-weight: bold;
  color: var(--primary);
`;

const H1 = ({ children }) => {
  return <StyledH1 className="display-2">{children}</StyledH1>;
};

export default H1;

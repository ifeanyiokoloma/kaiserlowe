import React from "react";
import styled from "styled-components";

const StyledLead = styled.p`
  font-size: 0.8rem;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    padding-inline: 3rem;
  }
`;

const Lead = ({ children }) => {
  return (
    <StyledLead className="tablet-width raleway light-font lead">
      {children}
    </StyledLead>
  );
};

export default Lead;

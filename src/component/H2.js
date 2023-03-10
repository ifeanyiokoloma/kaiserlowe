import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components';


const StyledTypography = styled(Typography)`
  color: whitesmoke;
  position: relative;

  &:after {
    background: white none repeat scroll 0 0;
    bottom: -20px;
    content: "";
    height: 4px;
    left: 50%;
    margin-left: -40px;
    position: absolute;
    width: 70px;
  }
`;

const H2 = ({children}) => {
  return (
    <StyledTypography
      color="white"
      fontWeight="900"
      variant="h4"
      component="h2"
      mb={5}
    >
      {children}
    </StyledTypography>
  );
}

export default H2
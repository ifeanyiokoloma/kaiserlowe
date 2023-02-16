import { Box } from "@mui/material";
import styled from "styled-components";

const StyledContact = styled(Box)`
  & > .item:not(:last-child) {
    border-right: 1px dashed;
  }
`;

export default StyledContact;

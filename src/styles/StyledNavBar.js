import { Box, Drawer } from "@mui/material";
import styled from "styled-components";

const StyledNavBar = styled(Box)`
  display: flex;
`;

export const GlassBox = styled(Box)``;

export const TopBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const StyledNavList = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const GlassDrawer = styled(Drawer)`
  .MuiPaper-root {
    background: rgba(255, 255, 255) !important;
    color: black;
    box-shadow: unset
  }
`;

export default StyledNavBar;

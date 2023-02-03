import styled from "@emotion/styled";
import { Box, Drawer } from "@mui/material";

const StyledNavBar = styled(Box)`
  display: flex;
`;

export const GlassBox = styled(Box)``;

export const TopBar = styled(Box)`
  display: flex;
  justify-content: space-between;
  // padding-inline: .3rem;
  align-items: center;
  height: 60px;
  // border-bottom: 1px solid gray;
`;

export const StyledNavList = styled(Box)`
  height: 100%;
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const GlassDrawer = styled(Drawer)`
  .MuiPaper-root {
    background: rgba(255, 255, 255, 0.8) !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    color: black;
  }
`;

export default StyledNavBar;

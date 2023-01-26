import styled from "@emotion/styled";
import { Box, Drawer, List } from "@mui/material";

export const GlassBox = styled(Box)`
  // background: rgba(255, 255, 255, 0.2) !important;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  // backdrop-filter: blur(5px);
  // border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const GlassList = styled(List)`
  // background: rgba(255, 255, 255, 0.2) !important;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  // backdrop-filter: blur(5px);
  // border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const GlassDrawer = styled(Drawer)`
  // background: rgba(255, 255, 255, 0.2) !important;
  // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  // backdrop-filter: blur(5px);
  // border: 1px solid rgba(255, 255, 255, 0.3);

  .MuiPaper-root {
    background: rgba(255, 255, 255, 0.8) !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
  }
`;

import styled from "@emotion/styled";
import { Box } from "@mui/material";

const GlassDrawer = styled(Box)`
  background: rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export default GlassDrawer;

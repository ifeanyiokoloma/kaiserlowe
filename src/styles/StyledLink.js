import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;

  &.active {
    color: var(--secondary);
  }
`;

export default StyledLink;

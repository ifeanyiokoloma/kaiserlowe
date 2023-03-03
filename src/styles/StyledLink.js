import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: inherit;

  &.active {
    color: var(--secondary);
  }
`;

export const LinkBtn = styled(Link)`
  color: inherit;
  text-decoration: inherit;

  &:hover {
    color: inherit;
  }
`;

export default StyledLink;

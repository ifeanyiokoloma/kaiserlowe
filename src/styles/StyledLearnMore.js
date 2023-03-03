import styled from "styled-components";

export const StyledLearnMore = styled.button`
  color: var(--primary);
  background: white;

    /* general */
    position: relative;
    overflow: hidden;
    z-index: 1;

  &:before,
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    z-index: -1;
    transition: 0.4s;
  }

  &:before,
  &:after {
    height: 100%;
    transform: skewX(45deg);
    background: var(--primary);
    top: 0;
    left: -5%;
  }

  &:after {
    left: auto;
    right: -5%;
  }

  &:hover {
    background: #fff;
    transition: background 0.9s 0.15s;
    color: white;
  }

  &:hover:before,
  &:hover:after {
    width: 110%;
  }
`;

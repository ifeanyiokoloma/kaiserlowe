import styled from "@emotion/styled";

const Overlay = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
  }

  p {
    color: d3d3d3;
    padding-inline: 3rem;
  }
`;

export default Overlay;

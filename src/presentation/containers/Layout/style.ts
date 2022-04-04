import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: minmax(70px, 250px) auto;
  grid-template-areas: "ASIDE CONTENT";

  background: ${({ theme }) => theme.colors.primaryBackground};
`;

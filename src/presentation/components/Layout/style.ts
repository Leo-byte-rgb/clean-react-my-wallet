import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;

  display: grid;
  grid-template-columns: 250px calc(100% - 250px);
  grid-template-rows: 70px calc(100% - 70px);
  grid-template-areas:
    "ASIDE HEADER"
    "ASIDE CONTENT";
`;

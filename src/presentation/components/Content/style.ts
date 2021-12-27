import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  grid-area: CONTENT;

  background: ${(props) => props.theme.colors.primaryBackground};
`;

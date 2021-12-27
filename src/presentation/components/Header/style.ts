import styled from "styled-components";

export const HeaderUI = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  grid-area: HEADER;

  padding: 0 1rem;

  background: ${(props) => props.theme.colors.secondaryBackground};
`;

export const User = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 100%;

  background: ${(props) => props.theme.colors.contrastText};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.white};
`;

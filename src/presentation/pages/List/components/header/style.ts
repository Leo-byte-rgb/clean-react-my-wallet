import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;

  padding: 0 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
`;

export const OptionsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

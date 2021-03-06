import styled from 'styled-components';

export const SelectUI = styled.select`
  width: 100%;
  height: 40px;

  border-radius: 5px;

  outline: none;
  border: none;

  padding: 0 0.3rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;
export const Label = styled.label`
  color: ${(props) => props.theme.colors.white};
`;

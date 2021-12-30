import styled from 'styled-components';

export const InputUI = styled.input`
  width: 100%;
  height: 40px;

  border-radius: 5px;

  border: 0;
  outline: 0;

  padding: 0 0.3rem;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
`;
export const Label = styled.label``;

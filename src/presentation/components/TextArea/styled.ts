import styled from 'styled-components';

export const TextAreaUI = styled.textarea`
  width: 100%;
  height: 100%;

  min-height: 233px;
  border-radius: 5px;

  border: 0;
  outline: 0;

  padding: 0.5rem 0.3rem;
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

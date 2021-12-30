import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 70px;

  padding: 0 1.2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.h2`
  color: ${(props) => props.theme.colors.white};
`;

export const FormUI = styled.form`
  width: 100%;
  height: 100%;

  margin-top: 3rem;
  padding: 0 1.2rem;

  display: grid;
  grid-template-rows: 1fr 1fr 3fr;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 1rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;
  padding: 50px 10px;
`;

export const Flex = styled.div`
  min-width: 300px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;

  gap: 20px;
`;

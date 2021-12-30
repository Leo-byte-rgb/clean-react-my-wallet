import styled, { keyframes } from 'styled-components';

const skeleton = keyframes`
  from {
    background: #646464;
  }
  to {
    background: #3F3F3F;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.tertiaryBackground};
`;
export const Header = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.2rem;
`;
export const Item = styled.div`
  width: 80%;
  height: 60px;

  border-radius: 10px;
  background: ${(props) => props.theme.colors.tertiaryBackground};

  animation: ${skeleton} 1s linear infinite alternate;
  margin-top: 10px;
`;

export const Title = styled.div`
  width: 110px;
  height: 35px;

  background: ${(props) => props.theme.colors.tertiaryBackground};
  animation: ${skeleton} 1s linear infinite alternate;
`;

export const Select = styled.div`
  width: 110px;
  height: 30px;

  border-radius: 5px;

  background: ${(props) => props.theme.colors.tertiaryBackground};
  animation: ${skeleton} 1s linear infinite alternate;
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

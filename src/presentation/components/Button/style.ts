import styled, { keyframes } from 'styled-components';

type ButtonUIProps = {
  bgColor: undefined | 'warning' | 'primary';
};

function renderBackgroundColorByType(props: ButtonUIProps) {
  if (props.bgColor === 'warning') return '#E44C4E';
  return '#2196F3';
}

export const ButtonUI = styled.button<ButtonUIProps>`
  width: 100%;
  max-width: 200px;
  height: 40px;

  border-radius: 5px;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => renderBackgroundColorByType(props)};

  border: 0;
  outline: 0;

  cursor: pointer;

  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
  &:disabled {
    cursor: default;
    filter: brightness(0.8);
  }
`;

const spin = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${spin} 1s infinite linear;
  border-left: 2px solid #fff;
  border-radius: 50%;
  height: 25px;
  width: 25px;
`;
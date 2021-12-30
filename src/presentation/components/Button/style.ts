import styled from 'styled-components';

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

  &:hover {
    filter: brightness(0.9);
  }
`;

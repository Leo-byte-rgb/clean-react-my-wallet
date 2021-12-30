import React, { ButtonHTMLAttributes } from 'react';
import { ButtonUI } from './style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: 'primary' | 'warning';
}

const Button = ({ color, text, ...props }: IButtonProps) => (
  <ButtonUI bgColor={color} {...props}>
    {text}
  </ButtonUI>
);

export default Button;

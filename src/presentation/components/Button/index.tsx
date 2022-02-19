import React, { ButtonHTMLAttributes } from 'react';
import { ButtonUI, Loader } from './style';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: 'primary' | 'warning';
  isLoading?: boolean;
}

const Button = ({ color, text, isLoading, ...props }: IButtonProps) => (
  <ButtonUI bgColor={color} {...props} disabled={isLoading || props.disabled}>
    {isLoading ? <Loader /> : text} 
  </ButtonUI>
);

export default Button;

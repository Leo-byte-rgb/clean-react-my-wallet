import React, { InputHTMLAttributes } from 'react';
import { InputUI, Label, Container } from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: IInputProps) => {
  return (
    <Container>
      {label ?? <Label>{label}</Label>}
      <InputUI {...props} />
    </Container>
  );
};

export default Input;

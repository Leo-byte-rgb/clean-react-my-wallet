import React, { TextareaHTMLAttributes } from 'react';
import { TextAreaUI, Label, Container } from './styled';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = ({ label, ...props }: ITextAreaProps) => {
  return (
    <Container>
      {label ?? <Label>{label}</Label>}
      <TextAreaUI {...props} />
    </Container>
  );
};

export default TextArea;

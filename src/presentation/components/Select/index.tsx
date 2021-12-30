import React, { SelectHTMLAttributes } from 'react';
import { SelectUI, Label, Container } from './style';

type Option = {
  label: string | number;
  value: string | number;
};

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<Option>;
  label?: string;
}

const Select: React.FC<ISelectProps> = ({ options, label, ...props }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <SelectUI {...props}>
        {options.map(({ label, value }, index) => {
          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
      </SelectUI>
    </Container>
  );
};

export default Select;

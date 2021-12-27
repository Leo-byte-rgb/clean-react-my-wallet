import React, { HTMLAttributes } from "react";
import { SelectUI } from "./style";

type Option = {
  label: string | number;
  value: string | number;
};

interface ISelectProps extends HTMLAttributes<HTMLSelectElement> {
  options: Array<Option>;
}

const Select: React.FC<ISelectProps> = ({ options, ...props }) => {
  return (
    <>
      <SelectUI {...props}>
        {options.map(({ label, value }, index) => {
          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
      </SelectUI>
    </>
  );
};

export default Select;

import React, { ChangeEvent } from "react";
import Select from "../../../../components/Select";
import { Container, Title, OptionsContainer } from "./style";

type ListType = "saidas" | "entradas";

interface IHeaderProps {
  months: string[];
  years: number[];
  onMonthChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onYearChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  type: ListType;
}

const Header: React.FC<IHeaderProps> = ({
  months,
  years,
  onMonthChange,
  onYearChange,
  type,
}) => {
  const title = type === "saidas" ? "Saídas" : "Entradas";

  const monthOptions = months.map((month, index) => ({
    label: month,
    value: index,
  }));
  const yearsOptions = years.map((year) => ({ label: year, value: year }));

  return (
    <Container>
      <Title>{title}</Title>
      <OptionsContainer>
        <Select options={monthOptions} onChange={onMonthChange} />
        <Select options={yearsOptions} onChange={onYearChange} />
      </OptionsContainer>
    </Container>
  );
};

export default Header;

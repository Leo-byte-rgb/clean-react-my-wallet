import React from "react";
import { Container, Amount, Title, Footer } from "./styles";

interface IMoneyProps {
  title: string;
  amount: string;
  previusAmount?: string;
}

const MoneyCard: React.FC<IMoneyProps> = ({ title, amount, previusAmount }) => {
  return (
    <Container>
      <Title>{title.toUpperCase()}</Title>
      <Amount>{amount}</Amount>
      <Footer>{previusAmount ? previusAmount : <></>}</Footer>
    </Container>
  );
};

export default MoneyCard;

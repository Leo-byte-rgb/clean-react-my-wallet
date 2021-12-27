import React from "react";
import { Item, MainInfo, Value } from "./styled";

interface IListItemProps {
  title: string;
  frequency: string;
  amount: number | string;
  date: Date | string;
}

const ListItem: React.FC<IListItemProps> = ({
  amount,
  frequency,
  title,
  date,
}) => (
  <Item frequency={frequency}>
    <MainInfo>
      <h3>{title}</h3>
      <small>{date}</small>
    </MainInfo>
    <Value>{amount}</Value>
  </Item>
);

export default ListItem;

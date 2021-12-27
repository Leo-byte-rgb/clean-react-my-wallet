import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Expense } from "../../../domain/models/expense";
import { Gain } from "../../../domain/models/gain";
import { HttpGetClient } from "../../../data/protocols/http";
import { FormatCurrency } from "../../../domain/useCases/Currency/currency";
import { GetYearsByRecords } from "../../../domain/useCases/DatesByRecords/year-by-records";
import { fetchRecords } from "../../../data/store/entries/actions";
import Header from "./components/header";
import ListItem from "./components/listItem";
import { Container } from "./styled";

interface IListProps {
  httpGetClient: HttpGetClient;
  dateFormatterClient: GetYearsByRecords;
  currencyFormatterClient: FormatCurrency;
}

type Records = Expense[] | Gain[] | undefined;

const MONTHS_ARRAY = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const List: React.FC<IListProps> = ({
  dateFormatterClient,
  currencyFormatterClient,
  httpGetClient,
}) => {
  const { type } = useParams();

  const format = currencyFormatterClient.format;

  const listType = type === "entradas" ? "entradas" : "saidas";
  const reducer = type === "entradas" ? "entriesReducer" : "entriesReducer";

  const dispatch = useDispatch();
  const records: Records = useSelector((reducers) => reducers[reducer].data);

  const years = dateFormatterClient.getYears({ records });
  const months = [...MONTHS_ARRAY];

  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedMonth, setSelectedMonth] = useState(0);

  const handleMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(Number(event.target.value));
  };
  const handleYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(Number(event.target.value));
  };

  const data = records
    ? records.filter((item) => {
        const month = new Date(item.createdAt).getMonth();
        const year = new Date(item.createdAt).getFullYear();

        const shouldReturn = selectedYear === year && month === selectedMonth;
        return shouldReturn ? item : undefined;
      })
    : undefined;

  useEffect(() => {
    dispatch(fetchRecords(httpGetClient));
  }, [dispatch, httpGetClient]);

  return (
    <>
      <Header
        type={listType}
        months={months}
        years={years}
        onMonthChange={handleMonth}
        onYearChange={handleYear}
      />
      <Container>
        {data?.map(({ amount, name, createdAt, frequency }) => (
          <ListItem
            key={createdAt + name}
            amount={format({ amount }).formattedAmount}
            title={name}
            frequency={frequency}
            date={createdAt}
          />
        ))}
      </Container>
    </>
  );
};

export default React.memo(List);

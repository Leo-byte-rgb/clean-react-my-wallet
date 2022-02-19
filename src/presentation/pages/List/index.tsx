import React, { ChangeEvent, useEffect, useState } from 'react';

import Header from './components/header';
import ListItem from './components/listItem';
import ListSkeleton from '../../Skeletons/List';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Expense } from '../../../domain/models/expense';
import { Gain } from '../../../domain/models/gain';
import { HttpGetClient } from '../../../data/protocols/http';
import { FormatCurrency } from '../../../domain/useCases/Currency/currency';
import { GetYearsByRecords } from '../../../domain/useCases/DatesByRecords/year-by-records';
import { FormatDateRecord } from '../../../domain/useCases/DatesByRecords/format-date-record';
import { fetchRecords } from '../../../data/store/entries-and-expenses/actions';


import { Container } from './styled';

interface IListProps {
  httpGetClient: HttpGetClient;
  dateFormatterClient: GetYearsByRecords & FormatDateRecord;
  currencyFormatterClient: FormatCurrency;
}

type Records = Expense[] | Gain[] | undefined;

const MONTHS_ARRAY = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const List: React.FC<IListProps> = ({
  dateFormatterClient,
  currencyFormatterClient,
  httpGetClient,
}) => {
  const { type: listType } = useParams();

  const formatCurrency = currencyFormatterClient.format;
  const formatDate = dateFormatterClient.formatDate;

  const type = listType === 'entradas' ? 'entradas' : 'saidas';

  const dispatch = useDispatch();
  const records: Records = useSelector(({all}) => all.records);
  const loading: boolean = useSelector(({all}) => all.loading);

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
    dispatch(fetchRecords({httpGetClient, type}))
  }, [dispatch, httpGetClient, type]);

  useEffect(() => {
    setSelectedYear(years[0])
    //eslint-disable-next-line
  }, [records]);

  if (loading) return <ListSkeleton />;
  return (
    <>
      <Header
        type={type}
        months={months}
        years={years}
        onMonthChange={handleMonth}
        onYearChange={handleYear}
      />
      <Container>
        {data?.map(({ amount, name, createdAt, frequency , id}) => (
          <ListItem
            key={id}
            amount={formatCurrency({ amount }).formattedAmount}
            title={name}
            frequency={frequency}
            date={formatDate({ date: new Date(createdAt) })}
          />
        ))}
      </Container>
    </>
  );
};

export default React.memo(List);

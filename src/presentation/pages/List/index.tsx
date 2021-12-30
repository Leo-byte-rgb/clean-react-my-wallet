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
import { fetchRecords as fetchEntries } from '../../../data/store/entries/actions';
import { fetchRecords as fetchExpenses } from '../../../data/store/expenses/actions';

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
  const { type } = useParams();

  const formatCurrency = currencyFormatterClient.format;
  const formatDate = dateFormatterClient.formatDate;

  const listType = type === 'entradas' ? 'entradas' : 'saidas';
  const reducer = type === 'entradas' ? 'entries' : 'expenses';

  const dispatch = useDispatch();
  const records: Records = useSelector((reducers) => reducers[reducer].data);
  const loading: boolean = useSelector((reducers) => reducers[reducer].loading);

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
    if (listType === 'entradas') {
      dispatch(fetchEntries(httpGetClient));
    } else {
      dispatch(fetchExpenses(httpGetClient));
    }
  }, [dispatch, httpGetClient, listType]);

  if (loading) return <ListSkeleton />;
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

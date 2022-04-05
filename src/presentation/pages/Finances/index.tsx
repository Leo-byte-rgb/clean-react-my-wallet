import { FormatCurrency } from "domain/useCases/Currency/currency";
import { FindAllGains } from "domain/useCases/Gain/findAll";
import { FindAllExpenses } from "domain/useCases/Expense/findAll";
import { Gain } from "domain/models/gain";
import { Expense } from "domain/models/expense";

import { useEffect, useState } from "react";

interface IFinancePageProps {
  currencyFormater: FormatCurrency;
  entries: FindAllGains;
  expenses: FindAllExpenses;
}

const Finances: React.FC<IFinancePageProps> = ({
  currencyFormater,
  entries,
  expenses,
}) => {
  const [gains, setGains] = useState<Gain[]>();
  const [outgoings, setOutgoings] = useState<Expense[]>();

  const fetchEntries = async () => {
    const data = await entries.findAll();
    setGains(data);
  };

  const fetchExpenses = async () => {
    const data = await expenses.findAll();
    setOutgoings(data);
  };

  useEffect(() => {
    fetchEntries();
    fetchExpenses();
  });

  return <></>;
};

export default Finances;

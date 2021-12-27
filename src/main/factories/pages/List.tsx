import React from "react";
import List from "../../../presentation/pages/List";
import { HttpClient } from "../../../infra/httpClient";
import { DateClientFormatter } from "../../../data/useCases/date/client-date";
import { ClientFormatCurrency } from "../../../data/useCases/currency/format-currency";

const ListFactory = () => {
  const httpClient = new HttpClient();
  const dateCLientFormatter = new DateClientFormatter();
  const clientFormatCurrency = new ClientFormatCurrency();

  return (
    <List
      httpGetClient={httpClient}
      dateFormatterClient={dateCLientFormatter}
      currencyFormatterClient={clientFormatCurrency}
    />
  );
};

export default ListFactory;

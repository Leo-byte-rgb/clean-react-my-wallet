import { Currency } from '../../models/currency';

export interface FormatCurrency {
  format(params: FormatCurrency.Params): Currency;
}

export namespace FormatCurrency {
  export type Params = {
    amount: number;
  };
}

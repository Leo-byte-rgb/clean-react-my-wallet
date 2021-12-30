import { FormatCurrency } from '../../../domain/useCases/Currency/currency';
import { Currency as CurrencyModel } from '../../../domain/models/currency';

export class ClientFormatCurrency implements FormatCurrency {
  format({ amount }: FormatCurrency.Params): CurrencyModel {
    if (typeof amount === 'string') {
      amount = Number(amount);
    }
    const formattedAmount = amount.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
    return {
      formattedAmount,
      currency: 'BRL',
    };
  }
}

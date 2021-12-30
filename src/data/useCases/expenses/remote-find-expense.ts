import { FindExpense } from '../../../domain/useCases/Expense/find';
import { HttpGetClient } from '../../protocols/http/http-get-client';
import { Expense } from '../../../domain/models/expense';

export class RemoteFindExpense implements FindExpense {
  constructor(
    private readonly url: string,
    private readonly id: string,
    private readonly httpGetResponse: HttpGetClient
  ) {}

  async find(): Promise<Expense> {
    const httpResponse = await this.httpGetResponse.get({
      url: `${this.url}/${this.id}`,
      headers: {
        'Content-Type': 'application-json',
      },
    });

    const { data } = httpResponse;
    return {
      id: data.id,
      name: data.name,
      frequency: data.frequency,
      amount: data.amount,
      createdAt: data.createdAt,
      type: data.type,
    };
  }
}

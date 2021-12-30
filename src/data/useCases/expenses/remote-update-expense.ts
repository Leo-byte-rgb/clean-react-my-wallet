import { UpdateExpense } from '../../../domain/useCases/Expense/update';
import { HttpUpdateClient } from '../../protocols/http/http-update-client';
import { Expense } from '../../../domain/models/expense';

export class RemoteUpdateExpense implements UpdateExpense {
  constructor(
    private readonly url: string,
    private readonly id: string,
    private readonly httpUpdateResponse: HttpUpdateClient
  ) {}

  async update({
    amount,
    createdAt,
    name,
  }: UpdateExpense.Params): Promise<Expense> {
    const httpResponse = await this.httpUpdateResponse.update({
      url: `${this.url}/${this.id}`,
      body: {
        amount,
        createdAt,
        name,
      },
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

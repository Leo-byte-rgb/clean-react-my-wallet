import { CreateGain } from '../../../domain/useCases/Gain/create';
import { HttpPostClient } from '../../protocols/http/http-post-client';
import { Gain } from '../../../domain/models/gain';

export class RemoteCreateGain implements CreateGain {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async create({ amount, createdAt, name }: CreateGain.Params): Promise<Gain> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
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
      description: data.description,
      amount: data.amount,
      createdAt: data.createdAt,
      type: data.type,
    };
  }
}

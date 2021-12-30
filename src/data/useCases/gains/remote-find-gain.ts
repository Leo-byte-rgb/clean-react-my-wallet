import { FindGain } from '../../../domain/useCases/Gain/find';
import { HttpGetClient } from '../../protocols/http/http-get-client';
import { Gain } from '../../../domain/models/gain';

export class RemoteFindGain implements FindGain {
  constructor(
    private readonly url: string,
    private readonly id: string,
    private readonly httpGetResponse: HttpGetClient
  ) {}

  async find(): Promise<Gain> {
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

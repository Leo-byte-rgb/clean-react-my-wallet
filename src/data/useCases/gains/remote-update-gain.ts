import { UpdateGain } from "../../../domain/useCases/Gain/update";
import { HttpUpdateClient } from "../../protocols/http/http-update-client";
import { Gain } from "../../../domain/models/gain";

export class RemoteUpdateGain implements UpdateGain {
  constructor(
    private readonly url: string,
    private readonly id: string,
    private readonly httpUpdateResponse: HttpUpdateClient
  ) {}

  async update({ amount, createdAt, name }: UpdateGain.Params): Promise<Gain> {
    const httpResponse = await this.httpUpdateResponse.update({
      url: `${this.url}/${this.id}`,
      body: {
        amount,
        createdAt,
        name,
      },
      headers: {
        "Content-Type": "application-json",
      },
    });

    const { data } = httpResponse;
    return {
      id: data.id,
      name: data.name,
      amount: data.amount,
      frequency: data.frequency,
      createdAt: data.createdAt,
    };
  }
}

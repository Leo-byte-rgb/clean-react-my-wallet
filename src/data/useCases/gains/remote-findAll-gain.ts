import { FindAllGains } from "../../../domain/useCases/Gain/findAll";
import { HttpGetClient } from "../../protocols/http/http-get-client";
import { Gain } from "../../../domain/models/gain";

export class RemoteFindAllGains implements FindAllGains {
  constructor(
    private readonly url: string,
    private readonly id: string,
    private readonly httpGetResponse: HttpGetClient
  ) {}

  async findAll(): Promise<Gain[]> {
    const httpResponse = await this.httpGetResponse.get({
      url: `${this.url}/${this.id}`,
      headers: {
        "Content-Type": "application-json",
      },
    });

    const { data } = httpResponse;
    return data;
  }
}

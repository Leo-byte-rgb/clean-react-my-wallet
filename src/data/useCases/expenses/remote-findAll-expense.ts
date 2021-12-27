import { FindAllExpenses } from "../../../domain/useCases/Expense/findAll";
import { HttpGetClient } from "../../protocols/http/http-get-client";
import { Expense } from "../../../domain/models/expense";

export class RemoteFindAllExpenses implements FindAllExpenses {
  constructor(
    private readonly url: string,
    private readonly httpGetResponse: HttpGetClient
  ) {}

  async findAll(): Promise<Expense[]> {
    const httpResponse = await this.httpGetResponse.get({
      url: `${this.url}`,
      headers: {
        "Content-Type": "application-json",
      },
    });

    const { data } = httpResponse;
    return data;
  }
}

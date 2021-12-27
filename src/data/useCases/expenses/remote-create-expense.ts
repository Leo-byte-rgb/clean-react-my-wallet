import { CreateExpense } from "../../../domain/useCases/Expense/create";
import { HttpPostClient } from "../../protocols/http/http-post-client";
import { Expense } from "../../../domain/models/expense";

export class RemoteCreateExpense implements CreateExpense {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async create({
    amount,
    createdAt,
    name,
  }: CreateExpense.Params): Promise<Expense> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
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
      frequency: data.frequency,
      amount: data.amount,
      createdAt: data.createdAt,
    };
  }
}
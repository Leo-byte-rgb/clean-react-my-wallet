import { Expense } from "../../models/expense";

export interface CreateExpense {
  create(params: CreateExpense.Params): Promise<Expense>;
}

export namespace CreateExpense {
  export type Params = {
    amount: number;
    name: string;
    createdAt: Date;
  };
}

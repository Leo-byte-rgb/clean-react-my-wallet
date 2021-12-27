import { Expense } from "../../models/expense";

export interface UpdateExpense {
  update(params: UpdateExpense.Params): Promise<Expense>;
}

export namespace UpdateExpense {
  export type Params = {
    id: string;
    amount: number;
    name: string;
    createdAt: Date;
  };
}

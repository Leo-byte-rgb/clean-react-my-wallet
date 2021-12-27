import { Expense } from "../../models/expense";

export interface FindExpense {
  find(params: FindExpense.Params): Promise<Expense>;
}

export namespace FindExpense {
  export type Params = {
    id: string;
  };
}

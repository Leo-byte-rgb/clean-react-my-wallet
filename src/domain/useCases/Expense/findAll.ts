import { Expense } from "../../models/expense";

export interface FindAllExpenses {
  findAll(): Promise<Expense[]>;
}

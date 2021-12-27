import { Expense } from "../../models/expense";
import { Gain } from "../../models/gain";

export interface GetYearsByRecords {
  getYears(params: GetYearsByRecords.Params): Array<number>;
}

export namespace GetYearsByRecords {
  export type Params = {
    records: Expense[] | Gain[] | undefined;
  };
}

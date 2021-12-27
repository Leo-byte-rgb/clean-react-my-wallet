import { Gain } from "../../models/gain";

export interface CreateGain {
  create(params: CreateGain.Params): Promise<Gain>;
}

export namespace CreateGain {
  export type Params = {
    amount: number;
    name: string;
    createdAt: Date;
  };
}

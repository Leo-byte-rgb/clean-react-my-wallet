import { Gain } from "../../models/gain";

export interface UpdateGain {
  update(params: UpdateGain.Params): Promise<Gain>;
}

export namespace UpdateGain {
  export type Params = {
    id: string;
    amount: number;
    name: string;
    createdAt: Date;
  };
}

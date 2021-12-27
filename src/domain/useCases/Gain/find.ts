import { Gain } from "../../models/gain";

export interface FindGain {
  find(params: FindGain.Params): Promise<Gain>;
}

export namespace FindGain {
  export type Params = {
    id: string;
  };
}

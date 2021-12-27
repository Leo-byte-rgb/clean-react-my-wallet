import { Gain } from "../../models/gain";

export interface FindAllGains {
  findAll(): Promise<Gain[]>;
}

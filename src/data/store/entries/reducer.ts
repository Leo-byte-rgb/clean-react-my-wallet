import { Expense } from "../../../domain/models/expense";
import { Gain } from "../../../domain/models/gain";
import * as Types from "./types";

type Records = Expense[] | Gain[] | undefined;

type InitialState = {
  data: Records;
  error: unknown;
  loading: boolean;
};

const INITIAL: InitialState = {
  data: undefined,
  error: {},
  loading: false,
};

type State = typeof INITIAL;

export const entriesReducer = (state = INITIAL, action: any): State => {
  switch (action.type) {
    case Types.FETCH_RECORDS:
      return { ...state, data: action.data, loading: false };
    case Types.START_LOAD:
      return { ...state, loading: true };
    case Types.ERROR:
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};

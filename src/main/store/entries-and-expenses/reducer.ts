import { Expense } from '../../../domain/models/expense';
import { Gain } from '../../../domain/models/gain';
import * as Types from './types';

type Records = Expense[] | Gain[] | undefined;
type Record = Expense | Gain | undefined;

type InitialState = {
  records: Records;
  record: Record;
  error: unknown;
  loading: boolean;
};

const INITIAL: InitialState = {
  records: undefined,
  record: undefined,
  error: {},
  loading: false,
};

type State = typeof INITIAL;

const entriesAndExpensesReducer = (state = INITIAL, action: any): State => {
  console.log(action.data)
  switch (action.type) {
    case Types.FETCH_RECORDS:
      return { ...state, records: action.data, loading: false };
    case Types.FIND_RECORD: 
      return { ...state, record: action.data[0], loading: false};
    case Types.START_LOAD:
      return { ...state, loading: true };
    case Types.ERROR:
      return { ...state, error: action.error };
    default:
      return { ...state };
  }
};

export default entriesAndExpensesReducer;

import { combineReducers } from 'redux';
import entries from './entries/reducer';
import expenses from './expenses/reducer';

export const combinedReducers = combineReducers({
  entries,
  expenses,
});

export type AppState = ReturnType<typeof combinedReducers>;

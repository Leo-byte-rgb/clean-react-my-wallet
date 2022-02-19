import { combineReducers } from 'redux';
import all from './entries-and-expenses/reducer';

export const combinedReducers = combineReducers({
  all,
});

export type AppState = ReturnType<typeof combinedReducers>;

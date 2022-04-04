import { combineReducers } from "redux";
import entriesAndExpenses from "./entries-and-expenses/reducer";
import theme from "./theme/reducer";

export const combinedReducers = combineReducers({
  entriesAndExpenses,
  theme,
});

export type AppState = ReturnType<typeof combinedReducers>;

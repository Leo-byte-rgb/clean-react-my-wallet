import { combineReducers } from "redux";
import { entriesReducer } from "./entries/reducer";

export const combinedReducers = combineReducers({
  entriesReducer,
});

export type AppState = ReturnType<typeof combinedReducers>;

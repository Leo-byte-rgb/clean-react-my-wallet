import { Dispatch } from "redux";
import * as Types from "./types";

export const handleAside = () => (dispatch: Dispatch) => {
  dispatch({ type: Types.HANDLING_ASIDE });
};

import * as Types from "./types";

type InitialState = {
  isAsideOpened: boolean;
};

const INITIAL: InitialState = {
  isAsideOpened: false,
};

type State = typeof INITIAL;

const theme = (state = INITIAL, action: any): State => {
  switch (action.type) {
    case Types.HANDLING_ASIDE:
      return {
        ...state,
        isAsideOpened: !state.isAsideOpened,
      };
    default:
      return { ...state };
  }
};

export default theme;

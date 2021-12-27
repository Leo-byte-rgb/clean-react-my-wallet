import "react-redux";

import { AppState } from "../data/store/reducers";

declare module "react-redux" {
  interface DefaultRootState extends AppState {}
}

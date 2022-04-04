import "react-redux";

import { AppState } from "../main/store/reducers";

declare module "react-redux" {
  interface DefaultRootState extends AppState {}
}

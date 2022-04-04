import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  HttpGetClient,
  HttpPostClient,
  HttpUpdateClient,
} from "../../../data/protocols/http";
import * as Types from "./types";

type Body = {
  type: string;
  createdAt: string;
  name: string;
  frequency: string;
  amount: string;
  description: string;
};
interface FetchParams {
  httpGetClient: HttpGetClient;
  type?: string;
}
interface FindParams {
  httpGetClient: HttpGetClient;
  id: string | number;
}
interface PostParams {
  httpPostClient: HttpPostClient;
  body: Body;
}
interface UpdateParams {
  httpUpdateClient: HttpUpdateClient;
  id: string | number;
  body: Body;
}

const fetchRecords = (params: FetchParams) => async (dispatch: Dispatch) => {
  const { httpGetClient, type } = params;

  const url = type ? `/all?type=${type}` : "/all";

  dispatch({ type: Types.START_LOAD });

  try {
    const { data } = await httpGetClient.get({ url });
    dispatch({ type: Types.FETCH_RECORDS, data });
  } catch (error) {
    dispatch({ type: Types.ERROR, error });
  }
};

export const findRecord =
  (params: FindParams) => async (dispatch: Dispatch) => {
    const { httpGetClient, id } = params;
    const url = `/all?id=${id}`;

    dispatch({ type: Types.START_LOAD });

    try {
      const { data } = await httpGetClient.get({ url });
      dispatch({ type: Types.FIND_RECORD, data });
    } catch (error) {
      dispatch({ type: Types.ERROR, error });
    }
  };

const saveRecord = (params: PostParams) => async (dispatch: Dispatch) => {
  const { httpPostClient, body } = params;

  dispatch({ type: Types.START_LOAD });

  try {
    await httpPostClient.post({ url: "/all", body });
    dispatch({ type: Types.SAVE_RECORD });
    toast(`${body.name}`, { type: "success" });
  } catch (error) {
    dispatch({ type: Types.ERROR, error });
  }
};

const updateRecord = (params: UpdateParams) => async (dispatch: Dispatch) => {
  const { httpUpdateClient, body, id } = params;
  const url = `/all/${id}`;
  dispatch({ type: Types.START_LOAD });

  try {
    await httpUpdateClient.update({ url, body });
    dispatch({ type: Types.SAVE_RECORD });
    toast(`${body.name}`, { type: "success" });
  } catch (error) {
    dispatch({ type: Types.ERROR, error });
  }
};

export { fetchRecords, saveRecord, updateRecord };

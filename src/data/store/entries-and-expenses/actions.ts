import { Dispatch } from 'redux';
import {
  HttpGetClient,
  HttpPostClient,
  HttpUpdateClient,
} from '../../protocols/http';
import * as Types from './types';

interface FetchParams {
  httpGetClient: HttpGetClient;
}
interface PostParams {
  httpPostClient: HttpPostClient;
  type: 'entradas' | 'saidas';
  body: unknown;
}
interface IUpdateParams {
  httpUpdateClient: HttpUpdateClient;
  id: string | number;
  type: 'entradas' | 'saidas';
  body: unknown;
}

const fetchRecords = (params: FetchParams) => async (dispatch: Dispatch) => {
  const { httpGetClient } = params;

  dispatch({ type: Types.START_LOAD });

  try {
    const { data } = await httpGetClient.get({ url: '/all' });
    dispatch({ type: Types.FETCH_RECORDS, data });
  } catch (error) {
    dispatch({ type: Types.ERROR, error });
  }
};

const postRecord = (params: PostParams) => async (dispatch: Dispatch) => {
  const { httpPostClient, type, body } = params;

  const specificURL = type === 'entradas' ? 'entries' : 'expenses';

  dispatch({ type: Types.START_LOAD });

  try {
    await Promise.all([
      await httpPostClient.post({ url: '/all', body }),
      await httpPostClient.post({ url: `/${specificURL}`, body }),
    ]);
    dispatch({ type: Types.SAVE_RECORDS });
  } catch (error) {
    dispatch({ type: Types.ERROR, error });
  }
};

export { fetchRecords, postRecord };

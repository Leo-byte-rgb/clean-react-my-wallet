import { Dispatch } from 'redux';
import { HttpGetClient } from '../../protocols/http';
import * as Types from './types';

const fetchRecords =
  (httpGetClient: HttpGetClient) => async (dispatch: Dispatch) => {
    dispatch({ type: Types.START_LOAD });
    try {
      const { data } = await httpGetClient.get({ url: '/expenses' });
      dispatch({ type: Types.FETCH_RECORDS, data });
    } catch (error) {
      dispatch({ type: Types.ERROR, error });
    }
  };

export { fetchRecords };

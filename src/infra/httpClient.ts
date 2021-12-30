import axios, { AxiosResponse } from 'axios';
import {
  HttpGetClient,
  HttpPostClient,
  HttpUpdateClient,
} from '../data/protocols/http';

const api = axios.create({ baseURL: 'http://localhost:3003' });

export class HttpClient
  implements HttpUpdateClient, HttpPostClient, HttpGetClient
{
  async post(params: HttpPostClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse = {} as AxiosResponse;

    try {
      axiosResponse = await api.post(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
  async get(params: HttpGetClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse = {} as AxiosResponse;

    try {
      axiosResponse = await api.get(params.url, {
        headers: params.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
  async update(params: HttpUpdateClient.Params): Promise<any> {
    let axiosResponse: AxiosResponse = {} as AxiosResponse;

    try {
      axiosResponse = await api.put(params.url, params.body, {
        headers: params.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return axiosResponse;
  }
}

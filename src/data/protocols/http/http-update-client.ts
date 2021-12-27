export interface HttpUpdateClient {
  update: (params: HttpUpdateClient.Params) => Promise<any>;
}

export namespace HttpUpdateClient {
  export type Params = {
    url: string;
    body?: unknown;
    headers?: {
      [key: string]: string;
    };
  };
}

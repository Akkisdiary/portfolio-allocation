import { QueryParams } from './types';

const HOST = process.env.REACT_APP_REMOTE;

export const Endpoints = {
  TickerSearch: (query: string) => Url("/search", { query: query }),
  TickerDetail: (url: string) => Url("/detail", { url: url }),
};

export const Url = (path: string, params: QueryParams) => {
  const url = new URL(HOST + path);
  Object.entries(params).forEach(([k, v]) => {
    url.searchParams.set(k, v);
  });
  return url.toString();
};

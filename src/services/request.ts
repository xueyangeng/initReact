import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { merge } from 'lodash-es';
import { v4 as uuid } from 'uuid';

export type AllowMethods = 'get' | 'post' | 'put' | 'del' | 'patch';
export type Response<T> = {
  code: number;
  message: string;
  data: T;
};
export default class Request {
  instace: AxiosInstance;

  constructor(options: AxiosRequestConfig = {}) {
    this.instace = axios.create(options);
  }

  private request<T>(options: AxiosRequestConfig): Promise<Response<T>> {
    return new Promise((resolve, reject) => {
      options.headers = options.headers || {};
      options.headers['x-request-id'] = uuid();
      options.headers.Authorization = `Bearer ${
        window.localStorage.getItem('u') || ''
      }`;
      this.instace
        .request(options)
        .then((res) => {
          if (res.status === 200) {
            if (res.data && res.data.code === 0) {
              resolve(res.data);
            }
            reject(res.data);
          }
          reject({
            code: res.status,
            message: res.statusText,
            data: {},
          });
        })
        .catch((err) => {
          reject({
            code: -1111,
            message:
              err && err.message ? err.message : '服务器过于繁忙，请稍后再试!',
            data: {},
          });
        });
    });
  }

  get<T>(url: string, options: AxiosRequestConfig = {}) {
    return this.request<T>(merge(options, { url, method: 'GET' }));
  }

  post<T>(url: string, options: AxiosRequestConfig = {}) {
    return this.request<T>(merge(options, { url, method: 'POST' }));
  }

  put<T>(url: string, options: AxiosRequestConfig = {}) {
    return this.request<T>(merge(options, { url, method: 'PUT' }));
  }

  del<T>(url: string, options: AxiosRequestConfig = {}) {
    return this.request<T>(merge(options, { url, method: 'DELETE' }));
  }

  patch<T>(url: string, options: AxiosRequestConfig = {}) {
    return this.request<T>(merge(options, { url, method: 'PATCH' }));
  }
}

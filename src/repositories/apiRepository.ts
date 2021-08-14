import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Server from 'configs/server';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class ApiRepository {
  protected readonly instance: AxiosInstance;

  constructor() {
    let baseURL = Server.API_URL;
    this.instance = axios.create({
      baseURL,
    });
    this.initializeResponseInterceptor();
  }

  initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  };
  
  private handleResponse = ({data}: AxiosResponse) => {
    return data;
  };

  private handleError = (error: any) => Promise.reject(error);
}

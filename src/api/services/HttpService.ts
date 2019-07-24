import { AxiosInstance, AxiosRequestConfig } from "axios";

export class Http<T> {
  url: string;
  http: AxiosInstance;
  constructor(httpClient: AxiosInstance, url: string = "") {
    this.url = url;
    this.http = httpClient;
  }

  getAll(config?: AxiosRequestConfig) {
    return this.http.get<T>(this.url, config);
  }

  create(data?: object, config?: AxiosRequestConfig) {
    return this.http.post<T>(this.url, data, config);
  }
}

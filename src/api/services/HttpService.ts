import { AxiosInstance, AxiosRequestConfig } from 'axios';

export class Http<T> {
	url: string;
	http: AxiosInstance;
	constructor(httpClient: AxiosInstance, url: string = '') {
		this.url = url;
		this.http = httpClient;
		this.http.defaults.headers.post['Content-Type'] = 'application/json-patch+json';
	}

	getAll(config?: AxiosRequestConfig) {
		return this.http.get<T>(this.url, config);
	}

	create(data?: object, config?: AxiosRequestConfig) {
		return this.http.post<T>(this.url, data, {
			...config,
			headers: {
				'Content-Type': 'application/json-patch+json',
			},
		});
	}
}

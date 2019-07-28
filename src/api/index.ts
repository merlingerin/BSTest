import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Http } from './services/HttpService';
import AuthorizationService from './services/AuthorizationService';
import { IUpcomingFlight, IRepotsResponse } from '../interfaces';

export class Api {
	http: AxiosInstance;
	baseUrl: string;
	authorization: AuthorizationService = new AuthorizationService('https://dev-api.blue-style.cz/account/v1');
	upcomingFlights: Http<IUpcomingFlight[]>;
	roomingList: Http<any[]>;
	passengerList: Http<any[]>;
	transferList: Http<IRepotsResponse[]>;
	isRefreshingToken: Promise<any> | null = null;

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
		this.http = Axios.create({
			baseURL: baseUrl,
			timeout: 7000,
		});
		this.upcomingFlights = new Http<IUpcomingFlight[]>(this.http, '/Definitions/getUpcomingFlights');
		this.roomingList = new Http<IRepotsResponse[]>(this.http, '/Reports/roomingList');
		this.passengerList = new Http<IRepotsResponse[]>(this.http, '/Reports/flightPassengerList');
		this.transferList = new Http<IRepotsResponse[]>(this.http, '/Reports/transferList');

		this.setAuthorizationsHeaders();
	}

	private setAuthorizationsHeaders() {
		this.http.interceptors.request.use(async (config: AxiosRequestConfig) => {
			if (this.isRefreshingToken !== null) {
				await this.isRefreshingToken;
			}
			let credentials = this.getCredentials();

			if (!credentials.Token || parseInt(credentials.ExpiresIn + '') < new Date().getTime()) {
				try {
					this.isRefreshingToken = this.authorization.createToken();
					await this.isRefreshingToken;
					credentials = this.getCredentials();
				} catch (error) {
					console.log(error);
				}
			}
			return {
				...config,
				headers: {
					...config.headers,
					Authorization: `${credentials.TokenType} ${credentials.Token}`,
				},
			};
		});
	}

	private getCredentials() {
		const store: Storage = window['localStorage'];
		return {
			Token: store.getItem('token'),
			TokenType: store.getItem('tokenType'),
			ExpiresIn: store.getItem('expiresIn'),
		};
	}
}
const flightApi = new Api('https://dev-api.blue-style.cz/homework/v1');
export default flightApi;

import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IToken {
	Type: string;
	Token: string;
	ExpiresIn: number;
}

interface IAuthorizationCredentials {
	Code: string;
	User: string;
	Password: string;
}

export default class AuthorizationService {
	private http: AxiosInstance;
	private baseUrl: string;
	private store: Storage = window['localStorage'];
	private baseCredentils: IAuthorizationCredentials = {
		Code: 'BRIGHT',
		User: 'dev',
		Password: 'sf*&4okgrf&^regrfskl',
	};

	constructor(baseUrl: string) {
		this.baseUrl = baseUrl;
		this.http = Axios.create({
			baseURL: baseUrl,
			timeout: 7000,
		});
	}

	createToken(authorizationCredentials?: IAuthorizationCredentials, config?: AxiosRequestConfig) {
		return this.http
			.post<IToken>('/token', (authorizationCredentials = this.baseCredentils), config)
			.then(
				(response) => {
					this.saveToken(response.data);
					return Promise.resolve(response);
				},
				(error) => Promise.reject(error)
			);
	}

	saveToken(token: IToken) {
		if (!this.store) {
			return false;
		}

		this.store.setItem('token', token.Token);
		this.store.setItem('tokenType', token.Type);
		this.store.setItem(
			'expiresIn',
			new Date().getTime() + parseInt(token.ExpiresIn + '') * 60 * 1000 + ''
		);
	}

	clearToken() {
		this.store.removeIte('token');
		this.store.removeIte('tokenType');
		this.store.removeIte('expiresIn');
	}
}

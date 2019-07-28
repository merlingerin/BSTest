import { AxiosRequestConfig } from 'axios';
import { IFilters } from '../../interfaces';

export interface IReportPageProps<T> {
	fetchReportList: (params: IFilters, config?: AxiosRequestConfig) => Promise<any>;
	listData: T;
	flightsFilters: IFilters;
	isLoading: boolean;
	error: {
		name: string;
		message: string;
	};
}

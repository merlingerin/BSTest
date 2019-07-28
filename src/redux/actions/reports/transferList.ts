import Api from '../../../api';
import {
	transferList_failure,
	transferList_request,
	transferList_success,
} from '../../actionTypes';
import { get } from 'lodash';
import { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { IFilters } from '../../../interfaces';

const requestStart = () => ({
	type: transferList_request,
});

const requestSuccess = (data: any[]) => {
	return {
		type: transferList_success,
		payload: data,
	};
};

const requestFailure = (error: {}) => ({
	type: transferList_failure,
	payload: [],
	error: error,
});

export const fetchTransferList = (params: IFilters, config?: AxiosRequestConfig) => (
	dispatch: Dispatch
): Promise<AxiosResponse> => {
	dispatch(requestStart());

	return Api.transferList.create(params || {}, { ...config }).then(
		(response: AxiosResponse) => {
			const data = get(response, 'data', []);

			dispatch(requestSuccess(data));
			return Promise.resolve(response);
		},
		(error: AxiosError) => {
			dispatch(requestFailure(get(error, 'response.data', error.message)));
			return Promise.reject(error);
		}
	);
};

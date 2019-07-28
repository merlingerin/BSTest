import Api from '../../../api';
import { roomingList_failure, roomingList_request, roomingList_success } from '../../actionTypes';
import { get } from 'lodash';
import { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { Dispatch } from 'redux';
import { IFilters } from '../../../interfaces';

const requestStart = () => ({
	type: roomingList_request,
});

const requestSuccess = (data: any[]) => {
	return {
		type: roomingList_success,
		payload: data,
	};
};

const requestFailure = (error: {}) => ({
	type: roomingList_failure,
	payload: [],
	error: error,
});

export const fetchRoomingList = (params: IFilters, config?: AxiosRequestConfig) => (
	dispatch: Dispatch
): Promise<any> => {
	dispatch(requestStart());

	return Api.roomingList.create(params || {}, { ...config }).then(
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

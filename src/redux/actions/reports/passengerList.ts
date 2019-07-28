import Api from "../../../api";
import {
	passengerList_failure,
	passengerList_request,
	passengerList_success
} from "../../actionTypes";
import { get } from "lodash";
import { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { IFilters } from "../../../interfaces";

const requestStart = () => ({
	type: passengerList_request
});

const requestSuccess = (data: any[]) => {
	return {
		type: passengerList_success,
		payload: data
	};
};

const requestFailure = (error: {}) => ({
	type: passengerList_failure,
	payload: [],
	error: error
});

export const fetchPassengerList = (
	params: IFilters,
	config?: AxiosRequestConfig
) => (dispatch: Dispatch): Promise<any> => {
	dispatch(requestStart());

	return Api.passengerList.create(params || {}, { ...config }).then(
		(response: AxiosResponse) => {
			const data = get(response, "data", []);

			dispatch(requestSuccess(data));
			return Promise.resolve(response);
		},
		(error: AxiosError) => {
			dispatch(requestFailure(get(error, "response.data", error.message)));
			return Promise.reject(error);
		}
	);
};

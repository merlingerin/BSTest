import Api from "../../api";
import {
	upcomingFlights_failure,
	upcomingFlights_request,
	upcomingFlights_success
} from "../actionTypes";
import { get } from "lodash";
import { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";

const requestStart = () => ({
	type: upcomingFlights_request
});

const requestSuccess = (data: any[]) => {
	return {
		type: upcomingFlights_success,
		payload: data
	};
};

const requestFailure = (error: {}) => ({
	type: upcomingFlights_failure,
	payload: [],
	error: error
});

export const fetchUpcomingFlights = (config?: AxiosRequestConfig) => (
	dispatch: Dispatch
): Promise<any> => {
	dispatch(requestStart());
	return Api.upcomingFlights.getAll({ ...config }).then(
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

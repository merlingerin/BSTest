import {
	upcomingFlights_failure,
	upcomingFlights_request,
	upcomingFlights_success,
} from '../actionTypes';
import { IApiRequestAction, IApiRequestState } from '../interfaces';

const initialsState = {
	isLoading: false,
	data: [],
	error: {},
};

export const upcomingFlights = (
	state: IApiRequestState = initialsState,
	{ type, payload, error }: IApiRequestAction
) => {
	switch (type) {
		case upcomingFlights_request:
			return {
				...state,
				isLoading: true,
				error: {},
			};
		case upcomingFlights_success:
			return {
				...state,
				isLoading: false,
				data: [...payload],
			};
		case upcomingFlights_failure:
			return {
				...state,
				isLoading: false,
				error: { ...error },
			};
		default:
			return state;
	}
};

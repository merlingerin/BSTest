import {
	passengerList_failure,
	passengerList_request,
	passengerList_success
} from "../../actionTypes";
import { IApiRequestAction, IApiRequestState } from "../../interfaces";

const initialsState = {
	isLoading: false,
	data: [],
	error: {}
};

export const passengerList = (
	state: IApiRequestState = initialsState,
	{ type, payload, error }: IApiRequestAction
) => {
	switch (type) {
		case passengerList_request:
			return {
				...state,
				isLoading: true,
				error: {}
			};
		case passengerList_success:
			return {
				...state,
				isLoading: false
				// data: [...payload] #NOTE: Uncomment field if you need to save request data in store
			};
		case passengerList_failure:
			return {
				...state,
				isLoading: false,
				error: { ...error }
			};
		default:
			return state;
	}
};

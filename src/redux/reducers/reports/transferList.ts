import {
	transferList_failure,
	transferList_request,
	transferList_success,
} from '../../actionTypes';
import { IApiRequestAction, IApiRequestState } from '../../interfaces';

const initialsState = {
	isLoading: false,
	data: [],
	error: {},
};

export const transferList = (
	state: IApiRequestState = initialsState,
	{ type, payload, error }: IApiRequestAction
) => {
	switch (type) {
		case transferList_request:
			return {
				...state,
				isLoading: true,
				error: {},
			};
		case transferList_success:
			return {
				...state,
				isLoading: false,
				// data: [...payload] #NOTE: Uncomment field if you need to save request data in store
			};
		case transferList_failure:
			return {
				...state,
				isLoading: false,
				error: { ...error },
			};
		default:
			return state;
	}
};

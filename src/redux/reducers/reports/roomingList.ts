import { roomingList_failure, roomingList_request, roomingList_success } from '../../actionTypes';
import { IApiRequestAction, IApiRequestState } from '../../interfaces';

const initialsState = {
	isLoading: false,
	data: [],
	error: {},
};

export const roomingList = (
	state: IApiRequestState = initialsState,
	{ type, payload, error }: IApiRequestAction
) => {
	switch (type) {
		case roomingList_request:
			return {
				...state,
				isLoading: true,
				error: {},
			};
		case roomingList_success:
			return {
				...state,
				isLoading: false,
				// data: [...payload] #NOTE: Uncomment field if you need to save request data in store
			};
		case roomingList_failure:
			return {
				...state,
				isLoading: false,
				error: { ...error },
			};
		default:
			return state;
	}
};

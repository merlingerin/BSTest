import { setFilter, removeFilter, resetFilters } from '../actionTypes';
import { IFlightsFiltersState, IFlightsFiltersAction } from '../interfaces';
import { IFilters } from '../../interfaces';

const initialsState: IFilters = {
	FromDate: '',
	DepartureAirport: '',
	ArrivalAirport: '',
	PnlName: '',
	ToDate: '',
};

export const flightsFilters = (
	state: IFlightsFiltersState = initialsState,
	{ type, payload }: IFlightsFiltersAction
) => {
	switch (type) {
		case setFilter:
			return {
				...state,
				[payload.name]: payload.value,
			};
		case removeFilter:
			return {
				...state,
				[payload.name]: '',
			};
		case resetFilters:
			return initialsState;
		default:
			return state;
	}
};

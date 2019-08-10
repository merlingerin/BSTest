import { setFilter, removeFilter, resetFilters } from '../actionTypes';
import { IFlightsFiltersState, IFlightsFiltersAction } from '../interfaces';
import { IFilters } from '../../interfaces';

const initialsState: IFilters = {
	ArrivalAirport: 'HRG',
	DepartureAirport: 'PRG',
	FromDate: '2019-08-09',
	PnlName: '',
	ToDate: '2019-08-09',
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

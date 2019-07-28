import { IUpcomingFlight } from '../interfaces';

export interface IFlightsFiltersState {
	FromDate: string;
	DepartureAirport: string;
	ArrivalAirport: string;
	PnlName: string;
}

export interface IFlightsFiltersAction {
	type: string;
	payload: {
		name: string;
		value: string;
	};
}

export interface IApiRequestState {
	isLoading: boolean;
	data: IUpcomingFlight[];
	error: object;
}

export interface IApiRequestAction {
	type: string;
	payload: IUpcomingFlight[];
	error?: {
		name: string;
		messange: string;
	};
}

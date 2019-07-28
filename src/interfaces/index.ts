export interface IDepartureCity {
	Id: number;
	Name: string;
}

export interface IArrivalCity {
	Id: number;
	Name: string;
}

export interface IDepartureAirport {
	Code: string;
	Name: string;
}

export interface IArrivalAirport {
	Code: string;
	Name: string;
}

export interface IUpcomingFlight {
	DepartureCity: IDepartureCity;
	ArrivalCity: IArrivalCity;
	DepartureAirport: IDepartureAirport;
	ArrivalAirport: IArrivalAirport;
	FlyDate: string;
	PnlName: string;
}

export interface IFilters {
	FromDate: string;
	ToDate: string;
	DepartureAirport: string;
	ArrivalAirport: string;
	PnlName: string;
}

export interface IRepotsResponse {
	FlightPaxCountDetails: [];
	PaxCountDetails: [];
	ReservationPaxCountDetails: [];
	Result: IReportResponseItem[];
}

// For example we have hot array with objects like this
export interface IReportResponseItem {
	time: string;
	id: number;
	flightName: string;
}

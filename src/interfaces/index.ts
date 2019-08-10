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

// Not required because api entities not stable (test project)
export interface IReportResponseItem {
	Arrival?: { Name: string };
	ArrivalAirport?: { Code: string; Name: string };
	BeginDate?: string;
	Departure?: { Name: string };
	DepartureAirport?: { Code: string; Name: string };
	DepartureFlight?: string;
	DepartureFlightArrivalDateTime?: string;
	DepartureFlightDateTime?: string;
	EndDate?: string;
	Hotel?: { Code: string; Name: string };
	HotelLocation?: { Name: string };
	Night?: number;
	Room?: {
		Code: string;
		Name: string;
	};
	Accom?: {
		Code: string;
		Name: string;
	};
	Board?: {
		Code: string;
		Name: string;
	};
	ReservationBeginDate?: string;
	ReservationEndDate?: string;
	ReservationNumber?: string;
	ReturnFlight?: string;
	ReturnFlightDateTime: string;
	Service?: { Code: string; Name: string };
	Supplier?: string;
	SupplierNote?: string;
	TravellerInfo?: TravellerInfo;
	FlightNo?: string;
	Nation?: string;
}

interface TravellerInfo {
	PaxType: string;
	Id: number;
	Title: string;
	Name: string;
	Surname: string;
	Age: number;
	DateOfBirth: string;
	IsLeader: boolean;
}

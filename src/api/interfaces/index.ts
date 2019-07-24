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

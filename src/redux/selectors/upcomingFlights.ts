import { IUpcomingFlight } from "../../interfaces";
import _ from "lodash";

/**
|--------------------------------------------------
| Selectors
|--------------------------------------------------
*/

export const getData = (state: any) => {
	return _.get(state, "upcomingFlights.data", []);
};

export const getCitiesByType = (state: IUpcomingFlight[], fieldName: string) =>
	_.chain(state)
		.map((item: IUpcomingFlight) => {
			return _.get(item, fieldName, undefined);
		})
		.keyBy("Id")
		.map()
		.value();

export const getAirportByType = (state: IUpcomingFlight[], fieldName: string) =>
	_.chain(state)
		.map((item: IUpcomingFlight) => {
			return _.get(item, fieldName, undefined);
		})
		.keyBy("Code")
		.map()
		.value();

export const getFlightDates = (state: IUpcomingFlight[]): string[] =>
	_.chain(state)
		.map(item => {
			return item["FlyDate"];
		})
		.uniq()
		.value();

export const getPnlNames = (state: IUpcomingFlight[]): string[] =>
	_.chain(state)
		.map(item => {
			return item["PnlName"];
		})
		.uniq()
		.value();

export const geByFilter = (
	state: IUpcomingFlight[],
	filters: { Id: number }
) => {
	const data = _.filter(state, filters);
	return data;
};

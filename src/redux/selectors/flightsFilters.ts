import { IFlightsFiltersState } from "../interfaces";
import { get } from "lodash";

export const getByFilterName = (state: any, filterName: string) => {
	const filtersState: IFlightsFiltersState = get(state, "flightsFilters", {});

	return get(filtersState, filterName, "");
};

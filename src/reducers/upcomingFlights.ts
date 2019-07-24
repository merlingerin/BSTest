import { useReducer } from "react";
import _ from "lodash";
import { IUpcomingFlight } from "../api/interfaces";

const FETCH_REQUEST = "upcomingFlights/fetch_request";
const FETCH_SUCCESS = "upcomingFlights/fetch_request";
const FETCH_FAILURE = "upcomingFlights/fetch_failure";

const upcomingFlights = (
  state: IUpcomingFlight[],
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload]
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      break;
  }
};

interface IUpcomingFlightsState {
  isLoading: boolean;
  data: any[];
  error: boolean;
}

const initialState: IUpcomingFlightsState = {
  isLoading: false,
  data: [],
  error: false
};

export default () => {
  const [upcomingFlightsData, dispatch] = useReducer<any>(
    upcomingFlights,
    initialState
  );

  return [upcomingFlightsData, dispatch];
};

/**
|--------------------------------------------------
| Selectors
|--------------------------------------------------
*/

export const getCity = (state: IUpcomingFlight[], fieldName: string) =>
  _.chain(state)
    .map((item: IUpcomingFlight) => {
      return _.get(item, fieldName, undefined);
    })
    .keyBy("Id")
    .value();

export const getFlightName = (state: IUpcomingFlight[]) =>
  _.chain(state)
    .map(item => {
      return item["FlyDate"];
    })
    .uniq()
    .value();

export const getPnlName = (state: IUpcomingFlight[]) =>
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

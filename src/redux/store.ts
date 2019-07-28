import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	upcomingFlights,
	flightsFilters,
	roomingList,
	passengerList,
	transferList
} from "./reducers";

const rootRedducer = combineReducers({
	flightsFilters,
	upcomingFlights,
	roomingList,
	passengerList,
	transferList
});

export const store = createStore(
	rootRedducer,
	composeWithDevTools(applyMiddleware(thunk))
);

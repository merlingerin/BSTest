import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchUpcomingFlights, setFilter } from '../redux/actions';

import FlightFilters from '../componentsUI/FlightFilter';
import { AxiosRequestConfig } from 'axios';
import { IUpcomingFlight } from '../interfaces';
import { getIsLoading } from '../redux/selectors/apiRequestState';
import { DefaultSpinnder } from '../componentsUI/Spinner';

interface IProps {
	fetchUpcomingFlights: (config?: AxiosRequestConfig) => Promise<any>;
	setFilter: (filter: { name: string; value: string }) => void;
	upcomingFlights: IUpcomingFlight[];
	isLoading: boolean;
}

const FlightFiltersContainer: React.FC<IProps> = ({
	fetchUpcomingFlights,
	setFilter,
	upcomingFlights,
	isLoading,
}): JSX.Element => {
	useEffect(() => {
		fetchUpcomingFlights();
	}, []);

	if (isLoading) {
		return (
			<div className="center-align">
				<DefaultSpinnder />
			</div>
		);
	}

	return <FlightFilters setFilter={setFilter} upcomingFlights={upcomingFlights} />;
};

const mapStateToProps = (state: any) => ({
	filters: state.flightsFilters,
	upcomingFlights: state.upcomingFlights.data,
	isLoading: getIsLoading(state, 'upcomingFlights'),
});

const mapDispatchToProp = {
	fetchUpcomingFlights,
	setFilter,
};

export default connect(
	mapStateToProps,
	mapDispatchToProp
)(FlightFiltersContainer);

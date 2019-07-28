import React from 'react';
import Header from '../componentsUI/Header/Header';
import FlightFiltersContainer from '../containers/FlightFiltersContainer';
import RootRoute from '../router';

const DefaultAppLayout: React.FC = ({ children }) => {
	return (
		<>
			<Header />
			<div className="container">
				<div className="row ">
					<h4 className="center-align">FLIGHTS FILTER</h4>
					<FlightFiltersContainer />
				</div>
			</div>
			<RootRoute />
		</>
	);
};

export default DefaultAppLayout;

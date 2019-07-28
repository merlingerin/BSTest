import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PassengerPage from '../pages/reportPages/PassengerPage';
import TransferPage from '../pages/reportPages/TransferPage';
import RoomingPage from '../pages/reportPages/RoomingPage';
import FlightsPage from '../pages/FlightsPage';

const RootRoute = () => {
	return (
		<Switch>
			<Route path="/" exact component={FlightsPage} />
			<Route path="/passenger" component={PassengerPage} />
			<Route path="/rooming" component={RoomingPage} />
			<Route path="/transfer" component={TransferPage} />
		</Switch>
	);
};

export default RootRoute;

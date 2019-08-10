import * as actions from './flightsFilters';
import * as filterTypes from '../actionTypes';

describe('flightFilters actions', () => {
	it('should create an action to set new filter', () => {
		const filterValue = { name: 'toDate', value: '00/00/00' };
		const expectedAction = {
			type: filterTypes.setFilter,
			payload: { ...filterValue },
		};

		expect(actions.setFilter(filterValue)).toEqual(expectedAction);
	});
});

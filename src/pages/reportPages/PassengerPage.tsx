import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getIsLoading, getError } from '../../redux/selectors/apiRequestState';
import { fetchPassengerList } from '../../redux/actions';
import { IReportPageProps } from './interface';
import { IRepotsResponse } from '../../interfaces';

// Components
import Table from '../../componentsUI/ReportTableList/Table';
import { DefaultSpinnder } from '../../componentsUI/Spinner';

export const PassengerPage: React.FC<IReportPageProps<IRepotsResponse>> = ({ error, fetchReportList, isLoading, flightsFilters, listData }) => {
	useEffect(() => {
		fetchReportList(flightsFilters);
	}, [fetchReportList, flightsFilters]);
	return (
		<div className="container flights-page">
			<div className="row">
				<h5 className="center-align">PASSENGER</h5>
				{isLoading && (
					<div className="center-align">
						<DefaultSpinnder />
					</div>
				)}
				<Table listData={listData} />
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	flightsFilters: state.flightsFilters,
	isLoading: getIsLoading(state, 'passengerList'),
	error: getError(state, 'passengerList'),
});

const mapDispatchToProps = {
	fetchReportList: fetchPassengerList,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(PassengerPage);

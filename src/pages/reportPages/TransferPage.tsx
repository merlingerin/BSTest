import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getIsLoading, getError, getListData } from '../../redux/selectors/apiRequestState';
import { fetchTransferList } from '../../redux/actions';
import { IReportPageProps } from './interface';
import { IRepotsResponse } from '../../interfaces';

// Components
import Table from '../../componentsUI/ReportTableList/Table';
import { DefaultSpinnder } from '../../componentsUI/Spinner';

export const TransferPage: React.FC<IReportPageProps<IRepotsResponse>> = ({
	error,
	fetchReportList,
	isLoading,
	flightsFilters,
	listData,
}) => {
	useEffect(() => {
		fetchReportList(flightsFilters);
	}, [fetchReportList, flightsFilters]);
	return (
		<div className="container flights-page">
			<div className="row">
				<h5 className="center-align">TRANSFER</h5>
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
	listData: getListData(state, 'transferList'),
	isLoading: getIsLoading(state, 'transferList'),
	error: getError(state, 'transferList'),
});

const mapDispatchToProps = {
	fetchReportList: fetchTransferList,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TransferPage);

import React from 'react';
import { IRepotsResponse } from '../../interfaces';
import { get, isEmpty } from 'lodash';
import TableList from './TableList';
import './Table.css';

interface IProps {
	listData: IRepotsResponse;
	tableTitle?: string;
}

const Table: React.FC<IProps> = ({ listData, tableTitle }) => {
	const resultList = get(listData, 'Result', []);
	return (
		<div className="report-table">
			{tableTitle && <h3 className="table-title">{tableTitle}</h3>}
			{!isEmpty(resultList) ? (
				<ul className="collection with-header">
					<TableList data={resultList} />
				</ul>
			) : (
				<div className="center-align">
					<em className="center">No reports data</em>
				</div>
			)}
		</div>
	);
};

export default Table;

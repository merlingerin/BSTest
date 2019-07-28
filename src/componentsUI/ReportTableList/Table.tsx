import React from 'react';
import { IRepotsResponse } from '../../interfaces';
import { get } from 'lodash';
import TableList from './TableList';

interface IProps {
	listData: IRepotsResponse;
	tableTitle?: string;
}

const Table: React.FC<IProps> = ({ listData, tableTitle }) => {
	return (
		<div className="report-table">
			{tableTitle && <h3 className="table-title">{tableTitle}</h3>}
			<ul className="collection with-header">
				<TableList data={get(listData, 'Result', [])} />
			</ul>
		</div>
	);
};

export default Table;

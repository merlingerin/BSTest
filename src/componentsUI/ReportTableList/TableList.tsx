import React from 'react';
import TableRow from './TableRow';
import { map } from 'lodash';
import { IReportResponseItem } from '../../interfaces';

interface IProps<T> {
	data: T[];
}

const TableList: React.FC<IProps<IReportResponseItem>> = ({ data }) => {
	return (
		<>
			{map(data, (item, key) => {
				return <TableRow key={key} {...{ listItem: item }} />;
			})}
		</>
	);
};

export default TableList;

import React from 'react';
import TableRow from './TableRow';
import { map } from 'lodash';
import { IReportResponseItem } from '../../interfaces';

interface IProps<T> {
	data: T[];
}

const TableList: React.FC<IProps<IReportResponseItem>> = ({ data }) => {
	data = [
		{
			time: '22:30',
			id: 0,
			flightName: 'QS1241',
		},
		{
			time: '09:55',
			id: 1,
			flightName: 'QS1241',
		},
		{
			time: '02:45',
			id: 2,
			flightName: 'QS1241',
		},
	];
	return (
		<>
			{map(data, (item) => {
				return <TableRow key={item.id} {...{ listItem: item }} />;
			})}
		</>
	);
};

export default TableList;

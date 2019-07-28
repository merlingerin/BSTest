import React from 'react';
import { map } from 'lodash';
import { IReportResponseItem } from '../../interfaces';

interface IProps {
	listItem: IReportResponseItem;
}

const TableRow: React.FC<IProps> = ({ listItem }) => {
	return (
		<li className="collection-item">
			{map(listItem, (item, key) => (
				<p key={item}>
					{key} --------->{item}
				</p>
			))}
		</li>
	);
};

export default TableRow;

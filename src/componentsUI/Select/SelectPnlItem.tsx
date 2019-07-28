import React from 'react';
import { MenuItem } from '@material-ui/core';

interface IProps {
	option: string | number;
}

const SelectPnlItem: React.FC<IProps> = ({ option }) => {
	return (
		<MenuItem key={option} value={option}>
			{option}
		</MenuItem>
	);
};

export default SelectPnlItem;

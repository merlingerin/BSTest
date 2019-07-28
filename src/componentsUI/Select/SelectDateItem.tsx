import React from 'react';
import { MenuItem } from '@material-ui/core';

interface IProps {
	option: string | number;
}

const SelectDateItem: React.FC<IProps> = ({ option }) => {
	if (!option) {
		return null;
	}
	return (
		<MenuItem key={option} value={option}>
			{new Date(option).toLocaleDateString()}
		</MenuItem>
	);
};

export default SelectDateItem;

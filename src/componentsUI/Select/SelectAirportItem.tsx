import React from 'react';
import { MenuItem } from '@material-ui/core';

interface IProps {
	option: IOptionsItem;
}

interface IOptionsItem {
	Code: number;
	Name: string;
}

const SelectAirportItem: React.FC<IProps> = ({ option }) => {
	return (
		<MenuItem key={option.Code} value={option.Code}>
			{option.Name}
		</MenuItem>
	);
};

export default SelectAirportItem;

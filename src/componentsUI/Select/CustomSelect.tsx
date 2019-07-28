import React, { useState } from 'react';
import { get, map } from 'lodash';
import InputLabel from '@material-ui/core/InputLabel';
import DefaultMenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { ISelectProps } from './interface';

export const CustomSelect: React.FC<ISelectProps<string>> = ({
	name,
	id,
	options,
	onChange,
	renderItem,
}) => {
	const [option, setOption] = useState({
		value: 0,
		name: '',
	});

	function _handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
		const name = get(event, 'target.name', '');
		const value = get(event, 'target.value', '');
		console.log('name', name, 'value', value);
		onChange({ name: name, value: value });
		setOption({ name: name, value: value });
	}
	return (
		<div>
			<InputLabel htmlFor="demo-controlled-open-select">{name.toUpperCase()}</InputLabel>
			<Select
				value={option.value}
				onChange={_handleChange}
				inputProps={{
					name: name,
					id: id || 'demo-controlled-open-select',
				}}
			>
				<DefaultMenuItem value="">None</DefaultMenuItem>
				{map(options, (option: any) => renderItem && renderItem({ option }))}
			</Select>
		</div>
	);
};

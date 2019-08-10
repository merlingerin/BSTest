import React, { useState } from 'react';
import './DatePicker.css';

interface IProps {
	label?: string;
	id?: string;
	name?: string;
	onChange: (value: string | null) => string | null;
	defaultValue?: string;
}

export const DatePicker: React.FC<IProps> = ({ id, name, label, onChange, defaultValue }) => {
	const [value, setValue] = useState(defaultValue || new Date().toLocaleString());
	function _handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const {
			target: { value },
		} = event;
		setValue(value);
		onChange(value);
		return value;
	}

	return (
		<div className="date-picker__container">
			{label && (
				<label
					className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated"
					htmlFor={id || name}
				>
					{label.toUpperCase()}
				</label>
			)}
			<div className="MuiInputBase-root MuiInput-root MuiInput-underline">
				<input
					onChange={_handleChange}
					id={id}
					name={id || name}
					className="date-picker__inputMuiInputBase-input MuiSelect-selectMenu custom-input"
					type="date"
					value={value}
				/>
			</div>
		</div>
	);
};

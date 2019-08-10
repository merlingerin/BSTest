import React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from './DatePicker';

describe('Date picker component', () => {
	it('should render component with correct props', () => {
		const props = {
			name: 'ToDate',
			label: 'To Date',
			id: 'ToDate',
			onChange: (value: any) => {
				return null;
			},
		};
		const shallowComponent = shallow(<DatePicker {...props} />);

		expect(shallowComponent.find('#' + props.id)).toHaveLength(1);
	});
});

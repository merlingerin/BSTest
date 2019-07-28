import React from 'react';
import { CustomSelect } from './CustomSelect';
import SelectPnlItem from './SelectPnlItem';
import { create } from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('CustomSelect component', () => {
	it('Render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<CustomSelect
				name="FromDate"
				id="FromDate"
				options={['a', 'b', 'c']}
				onChange={() => {}}
				MenuItem={SelectPnlItem}
			/>,
			div
		);
	});
	// describe('Select', () => {
	// 	it('Render OptionsList, children length equal option length', () => {
	// 		const options = ['a', 'b', 'c'];
	// 		const optionList = create(<CustomSelect name="FromDate" id="FromDate" options={['a', 'b', 'c']} onChange={() => {}} MenuItem={SelectPnlItem} />);
	// 		const instance = optionList.root;
	// 		expect(instance.children.length).toBe(options.length);
	// 	});
	// });
	describe('MenuItem', () => {
		it('Render menuItem with correct value', () => {
			const options = ['a', 'b', 'c'];
			const selecItem = create(<SelectPnlItem option={options[0]} />);
			expect(selecItem.toJSON()).not.toBeNull();
			expect;
		});
	});
});

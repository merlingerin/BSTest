import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import listData from '../../__mocks__/api/reportsResponse.json';
import { IRepotsResponse } from '../../interfaces';

import Table from './Table';
import TableList from './Table';
import TableRow from './TableRow';

describe('Table component', () => {
	it('Render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Table listData={listData as IRepotsResponse} tableTitle="Report table" />,
			div
		);
	});
	it('Render correct props', () => {
		const tableTitle = 'Report table';
		const table = create(<Table listData={listData as IRepotsResponse} tableTitle={tableTitle} />);

		const rootTable = table.root;
		expect(rootTable.props.listData).toEqual(listData);
		expect(rootTable.props.tableTitle).toBe(tableTitle);
	});
	it('Render TableList', () => {
		const tableTitle = 'Report table';
		const table = create(<Table listData={listData as IRepotsResponse} tableTitle={tableTitle} />);
		const tableList = create(<TableList data={listData.Result} />);
		const rootTable = table.root;
		const rootTableList = tableList.root;

		expect(rootTable.findByType(TableList).children.length).toBe(listData.Result.length);
		expect(rootTableList.children.length).toBe(listData.Result.length);
	});

	it('Render TableRow', () => {
		const tableRowData = listData.Result[0];
		const tableRow = create(<TableRow listItem={tableRowData} />);
		const rootTableRow = tableRow.root;

		expect(rootTableRow.props.listItem).toEqual(tableRowData);
	});

	it('should correct render exist fields in data array', () => {
		const tableRowData = listData.Result[0];
		const shallowTableRow = shallow(<TableRow listItem={tableRowData} />);

		expect(
			shallowTableRow
				.find('.collection .collection-item')
				.at(0)
				.text()
		).toEqual(`FlightNo: ${tableRowData.FlightNo}`);
		expect(shallowTableRow.find('.collection')).toHaveLength(2);
	});
});

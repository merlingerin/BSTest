import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import listData from '../../__mocks__/api/reportsResponse.json';
import { IRepotsResponse } from '../../interfaces';
import { shallow } from 'enzyme';

import Table from './Table';
import TableList from './TableList';
import TableRow from './TableRow';

describe('Table component', () => {
	it('Render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Table listData={listData as IRepotsResponse} tableTitle="Report table" />, div);
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
		const tableList = create(<TableList data={listData.Result} />);
		const rootTableRow = tableRow.root;
		const rootTableList = tableList.root;

		expect(rootTableRow.props.listItem).toEqual(tableRowData);
		expect(rootTableList.children.length).toBe(Object.keys(tableRowData).length);
	});
});

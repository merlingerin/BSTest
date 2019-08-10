import React from 'react';
import { map, startCase } from 'lodash';
import { IReportResponseItem } from '../../interfaces';

interface IProps {
	listItem: IReportResponseItem;
}

const TableRow: React.FC<IProps> = ({ listItem }) => {
	return (
		<li className="collection-item">
			<ul className="collection with-header">
				<li className="collection-header flex-container flex-row justify-between">
					<h5>
						<em>Details:</em>
					</h5>
				</li>
				{listItem.FlightNo && (
					<li className="collection-item">
						<span className="collection-item__title--strong">FlightNo: </span>
						{listItem.FlightNo}
					</li>
				)}
				{listItem.Hotel && (
					<li className="collection-item">
						<span className="collection-item__title--strong">Hotel: </span>
						{listItem.Hotel.Name}
					</li>
				)}
				{listItem.Night && (
					<li className="collection-item">
						<span className="collection-item__title--strong">Night: </span>
						{listItem.Night}
					</li>
				)}
				{listItem.Service && (
					<li className="collection-item">
						<span className="collection-item__title--strong">Service: </span>
						{listItem.Service.Name}
					</li>
				)}
				{listItem.Nation && (
					<li className="collection-item">
						<span className="collection-item__title--strong">Nation: </span>
						{listItem.Nation}
					</li>
				)}
			</ul>
			<ul className="collection with-header">
				<li className="collection-header flex-container flex-row justify-between">
					<h5>
						<em>Traveller:</em>
					</h5>
				</li>
				{map(listItem.TravellerInfo, (item, key) => {
					return (
						<li key={key} className="collection-item">
							<span className="collection-item__title--strong">{startCase(key)}: </span>
							{item}
						</li>
					);
				})}
			</ul>
		</li>
	);
};

export default TableRow;

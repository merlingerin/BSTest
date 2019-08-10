import React from 'react';
import { IUpcomingFlight } from '../interfaces';
import { getAirportByType, getPnlNames } from '../redux/selectors/upcomingFlights';
import { ISelectValue } from './Select/interface';
import { CustomSelect } from './Select/CustomSelect';
import SelectAirportItem from '../componentsUI/Select/SelectAirportItem';
import SelectPnlItem from './Select/SelectPnlItem';

import { DatePicker } from '../componentsUI/DatePicker';

interface IProps {
	setFilter: (filter: { name: string; value: string }) => void;
	upcomingFlights: IUpcomingFlight[];
}

const FlightFilter: React.FC<IProps> = ({ setFilter, upcomingFlights }) => {
	const _handleSelectDateChange = (params: ISelectValue) => {
		setFilter({ name: params.name, value: params.value });
	};
	return (
		<div className="row flex-container flex-row align-start justify-around">
			<div className="container-item size-15">
				<DatePicker
					name="FromDate"
					label="From Date"
					id="FromDate"
					onChange={(value: any) => {
						_handleSelectDateChange({ name: 'FromDate', value });
						return null;
					}}
				/>
			</div>
			<div className="container-item size-15">
				<DatePicker
					name="ToDate"
					label="To Date"
					id="ToDate"
					onChange={(value: any) => {
						_handleSelectDateChange({ name: 'ToDate', value });
						return null;
					}}
				/>
			</div>
			<div className="container-item size-15">
				<CustomSelect
					name="DepartureAirport"
					id="departure-airport"
					options={getAirportByType(upcomingFlights, 'DepartureAirport')}
					onChange={_handleSelectDateChange}
					renderItem={SelectAirportItem}
				/>
			</div>
			<div className="container-item size-15">
				{/* <i className="small material-icons arrow-icon">arrow_forward</i> */}
				<CustomSelect
					name="ArrivalAirport"
					id="arrival-aiport"
					options={getAirportByType(upcomingFlights, 'ArrivalAirport')}
					onChange={_handleSelectDateChange}
					renderItem={SelectAirportItem}
				/>
			</div>
			<div className="container-item size-15">
				<CustomSelect
					name="PnlName"
					id="PnlName"
					options={getPnlNames(upcomingFlights)}
					onChange={_handleSelectDateChange}
					renderItem={SelectPnlItem}
				/>
			</div>
		</div>
	);
};

export default FlightFilter;

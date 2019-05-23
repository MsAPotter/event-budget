import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		console.log('Event: render');
		let dates = this.props.dates;
		let today = new Date();
		let start = Date.parse(dates.start);
		let monthsAway =
			Math.floor((start - today) / 1000 / 60 / 60 / 24 / 30) >= 0
				? Math.floor((start - today) / 1000 / 60 / 60 / 24 / 30)
				: 0;
		let savePerMonth;
		if (monthsAway > 0) {
			savePerMonth = 1500 / monthsAway;
		} else {
			savePerMonth = 0;
		}
		console.log(dates);
		console.log(today);
		return (
			<div className="Event">
				<h2 className="Event-Name">{this.props.name}</h2>
				<h3 className="Event-Dates">{`${dates.start.slice(5, 7)}/${dates.start.slice(
					8,
					10
				)}/${dates.start.slice(0, 4)} - ${dates.end.slice(5, 7)}/${dates.end.slice(8, 10)}/${dates.end.slice(
					0,
					4
				)}`}</h3>
				<h3 className="Event-MonthsAway">
					{monthsAway + ' '}
					months remaining
				</h3>
				<h3 className="Event-Save">Save ${savePerMonth}/month</h3>
			</div>
		);
	}
}

export default Event;

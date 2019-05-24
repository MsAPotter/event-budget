import React, { Component } from 'react';
import axios from 'axios';
import './Event.css';

class Event extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.deleteEvent = this.deleteEvent.bind(this);
	}

	deleteEvent(evt) {
		evt.preventDefault();
		console.log(this.props.userId);
		console.log(this.props._id);
		axios
			.delete(`http://event-budget-api.herokuapp.com/api/${this.props.userId}/events/${this.props._id}`)
			.then((delEvent) => {
				console.log(delEvent);
				this.props.fetchEvents(this.props.userId);
			});
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
				<div className="Event-Header">
					<h2 className="Event-Name">{this.props.name}</h2>
					<div className="Event-Delete" onClick={this.deleteEvent}>
						<p>Delete</p>
						<div>
							<i className="fas fa-trash" />
						</div>
					</div>
				</div>
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

import React, { Component } from 'react';
import './Event.css';

class Event extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		let dates = this.props.dates;
		console.log(dates);
		return (
			<div>
				<div className="listedEvents">
					<h1 className="nameOfEvent">{this.props.name}</h1>
					<h2 className="startDate">{`${dates.start.slice(5, 7)}/
          ${dates.start.slice(8, 10)}/${dates.start.slice(0, 4)} - ${dates.end.slice(5, 7)}/${dates.end.slice(
						8,
						10
					)}/${dates.end.slice(0, 4)}`}</h2>
					<h2 className="monthly-savings">You need to save $ X per paycheck </h2>
				</div>
			</div>
		);
	}
}

export default Event;

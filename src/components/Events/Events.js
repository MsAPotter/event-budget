import React, { Component } from 'react';
import Event from './Event.js';
import './Events.css';

class Events extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		let eventCards = this.props.events.map((event, i) => {
			return <Event {...this.props.events[i]} />;
		});
		return (
			<div>
				<h1 className="events-heading">My Events</h1>
				{eventCards}
			</div>
		);
	}
}

export default Events;

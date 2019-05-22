import React, { Component } from 'react';
import '../Home/Home.css';
import EventCost from '../EventCost/EventCost';

let placeholder = [
	'Take me to Greece!',
	'Road trip to Mount Rushmore',
	'Honeymoon in Hawaii',
	'Bermuda, Bahama, come on pretty mama'
];

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',
			trip: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.eventDetails = this.eventDetails.bind(this);
		this.handleEventDetails = this.handleEventDetails.bind(this);
	}

	componentDidMount() {
		console.log('Home: componentDidMount');
		var x = Math.floor(Math.random() * placeholder.length);
		placeholder = placeholder[x];
		console.log(placeholder);
		this.setState({
			placeholder: placeholder
		});
	}

	handleChange(event) {
		console.log('Home: handleChange');
		this.setState({
			input: event.target.value
		});
	}

	eventDetails(trip) {
		console.log('Home: eventDetails');
		let newEvent = {
			trip: this.state.trip
		};
		this.props.addEvent(newEvent);
	}

	handleEventDetails(event) {
		console.log('Home: handleEventDetails');
		event.preventDefault();
		let newEvent = {
			trip: this.state.input
		};
		console.log(newEvent);
		this.props.addEvent(newEvent);

		this.setState({ submitted: true });
		// Reference:  https://stackoverflow.com/questions/28907965/how-do-i-add-a-component-after-an-submit-event-using-reactjs
	}

	render() {
		console.log('Home: render');
		// console.log(placeholder)
		if (this.state.submitted) {
			return <EventCost />;
		} else {
			return (
				<div className="container">
					<div className="content">
						<h1>Where do you want to go?</h1>
						<h1>What do you want to do?</h1>

						{/* <input
							type="text"
							name="event"
							id="event"
							placeholder="Take me to Greece!"
							onChange={this.handleChange}
							onSubmit={this.eventDetails}
						/> */}

						<form onSubmit={this.handleEventDetails}>
							<input
								type="text"
								id="trip"
								value={this.props.trip}
								placeholder={placeholder}
								onChange={this.handleChange}
							/>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default Home;

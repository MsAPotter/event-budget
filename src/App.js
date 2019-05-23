import React, { Component } from 'react';
import Sidenav from './components/Sidenav/Sidenav';
import { Route, Switch, Redirect } from 'react-router-dom';
import Bills from './components/Bills/Bills';
import EventCost from './components/EventCost/EventCost';
import Events from './components/Events/Events';
import AddEvent from './components/AddEvent/AddEvent';
import Login from './components/Login/Login.js';
import axios from 'axios';
import './App.css';

// userId: '5ce45ac1456d2e0017bb0d7f',

const newEvents = [];
const TotalCosts = [];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newEvents: newEvents,
			TotalCosts: TotalCosts,
			userId: '',
			eventId: '',
			events: [],
			dataLoaded: false
		};
		this.addEvent = this.addEvent.bind(this);
		this.addTotalCost = this.addTotalCost.bind(this);
		this.selectEvent = this.selectEvent.bind(this);
		this.selectUser = this.selectUser.bind(this);
		this.fetchEvents = this.fetchEvents.bind(this);
	}

	selectEvent(eventName) {
		console.log('App: selectEvent');
		axios.get(`https://event-budget-api.herokuapp.com/api/${this.state.userId}/events/`).then((events) => {
			let event = events.data.filter((evt) => {
				return evt.name === eventName;
			});
			console.log(event);
		});
		// this.setState({eventId: ''})
	}

	selectUser(input) {
		console.log('App: selectUser');
		this.fetchEvents(input._id);
		this.setState({ userId: input._id });
	}

	addEvent(newEvent) {
		console.log('App: addEvent');
		console.log(newEvent);
		let newEvents = this.state.newEvents.concat([ newEvent ]);
		console.log(newEvents);
		this.setState({ newEvents: newEvents });
	}
	addTotalCost(totalCost) {
		console.log('App: addTotalCost');
		console.log(totalCost);
		let TotalCosts = this.state.TotalCosts.concat([ totalCost ]);
		console.log(TotalCosts);
		this.setState({ TotalCosts: TotalCosts });
	}

	fetchEvents(input) {
		console.log('App: fetchEvents');
		axios.get(`https://event-budget-api.herokuapp.com/api/${input}/events`).then((events) => {
			console.log(events);
			this.setState({ events: events.data, dataLoaded: true });
		});
	}

	componentDidMount() {
		console.log('App: componentDidMount');
		if (this.state.userId) {
			this.fetchEvents(this.state.userId);
		}
	}

	render() {
		console.log('App: render');
		console.log(this.state.newEvents);
		console.log(this.state.TotalCosts);
		return (
			<div className="App">
				<div className="App-Nav">
					<Sidenav />
				</div>
				<div className="App-Main">
					<Switch>
						<Route
							exact
							path="/"
							render={(routerProps) => {
								console.log(this.state.events);
								console.log(this.state.dataLoaded);
								if (!this.state.userId) {
									return <Login fetchEvents={this.fetchEvents} selectUser={this.selectUser} />;
								} else {
									if (this.state.events.length < 1 && this.state.dataLoaded === true) {
										return <Redirect to="/add-event" />;
									} else {
										return <Events {...this.state} selectEvent={this.selectEvent} />;
									}
								}
							}}
						/>
						<Route exact path="/add-event" render={(routerProps) => <AddEvent {...this.state} />} />
						<Route
							exact
							path="/event-cost"
							render={(routerProps) => (
								<EventCost addTotalCost={this.addTotalCost} {...this.state} {...routerProps} />
							)}
						/>
						<Route
							exact
							path="/bills"
							render={(routerProps) => <Bills {...routerProps} {...this.state} />}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;

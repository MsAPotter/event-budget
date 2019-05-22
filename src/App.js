import React, { Component } from 'react';
import Sidenav from './components/Sidenav/Sidenav';
import { Route, Switch, Redirect } from 'react-router-dom';
import Expenses from './components/Expenses/Expenses';
import EventCost from './components/EventCost/EventCost';
import Events from './components/Events/Events';
import AddEvent from './components/AddEvent/AddEvent';
import axios from 'axios';
import './App.css';

const newEvents = [];
const TotalCosts = [];

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newEvents: newEvents,
			TotalCosts: TotalCosts,
			userId: '5ce45ac1456d2e0017bb0d7f',
			events: [],
			dataLoaded: false
		};
		this.addEvent = this.addEvent.bind(this);
		this.addTotalCost = this.addTotalCost.bind(this);
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

	componentDidMount() {
		axios.get(`https://event-budget-api.herokuapp.com/api/${this.state.userId}/events`).then((events) => {
			console.log(events);
			this.setState({ events: events.data, dataLoaded: true });
		});
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
								if (this.state.events.length < 1 && this.state.dataLoaded === true) {
									return <Redirect to="/add-event" />;
								} else {
									return <Events />;
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
							path="/expenses"
							render={(routerProps) => <Expenses {...routerProps} {...this.state} />}
						/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;

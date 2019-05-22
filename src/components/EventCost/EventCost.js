import React, { Component } from 'react';
import Expenses from '../Expenses/Expenses';
import '../EventCost/EventCost.css';

class EventCost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			planeticket: 0,
			gas: 0,
			accomodation: 0,
			transportation: 0,
			food: 0,
			total: 0
		};

		this.handleChange = this.handleChange.bind(this);
		// this.handleTotal = this.handleTotal.bind(this);
		// this.handleTotalCost = this.handleTotalCost.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	componentDidUpdate() {
		if (
			this.state.total !==
			parseInt(this.state.planeticket, 10) +
				parseInt(this.state.gas, 10) +
				parseInt(this.state.accomodation, 10) +
				parseInt(this.state.transportation, 10) +
				parseInt(this.state.food, 10)
		) {
			this.setState({
				total:
					parseInt(this.state.planeticket, 10) +
					parseInt(this.state.gas, 10) +
					parseInt(this.state.accomodation, 10) +
					parseInt(this.state.transportation, 10) +
					parseInt(this.state.food, 10)
			});
		}
	}

	// handleTotal(event) {
	//     event.preventDefault();
	//     let total = 0;
	//     console.log(this.state.length)
	//     for(var i=0;i<6;i++){
	//         if(parseInt(this.state[i].value))
	//             total += parseInt(this.state[i].value);
	//     }
	// }

	// handleTotalCost(event) {
	//     event.preventDefault();
	//     let totalCost = {
	//         total: this.state.total
	//     }
	//     console.log(totalCost)
	//     this.props.addTotalCost(totalCost)

	//     this.setState({'submitted': true })
	// }

	render() {
		if (this.state.submitted) {
			return <Expenses />;
		} else {
			return (
				<div className="container2">
					<div className="prompt2">
						<h1>How Much Will It Cost? (Round up!)</h1>

						<form className="form" onSubmit={this.handleTotalCost}>
							<div className="small-box">
								<p>Plane ticket cost</p>
								<input
									className="event-box-prices"
									type="text"
									id="planeticket"
									name="planeticket"
									defaultValue="0"
									// value={parseInt(this.state.planeticket, 10)}
									// placeholder="1500"
									onChange={this.handleChange}
								/>
							</div>

							<div className="small-box">
								<p>Gas cost</p>
								<input
									className="event-box-prices"
									type="text"
									id="gas"
									defaultValue="0"
									// value={parseInt(this.state.gas, 10)}
									// placeholder="100"
									onChange={this.handleChange}
									name="gas"
								/>
							</div>

							<div className="small-box">
								<p>Hotel/ Airbnb</p>
								<input
									className="event-box-prices"
									type="text"
									id="accomodation"
									defaultValue="0"
									// value={parseInt(this.state.accomodation, 10)}
									// placeholder="1000"
									onChange={this.handleChange}
									name="accomodation"
								/>
							</div>

							<div className="small-box">
								<p>Train/ Uber costs</p>
								<input
									className="event-box-prices"
									type="text"
									id="transportation"
									defaultValue="0"
									// value={parseInt(this.state.transportation, 10)}
									// placeholder="100"
									onChange={this.handleChange}
									name="transportation"
								/>
							</div>

							<div className="small-box">
								<p>Food estimate</p>
								<input
									className="event-box-prices"
									type="text"
									id="food"
									defaultValue="0"
									// value={parseInt(this.state.food, 10)}
									// placeholder="300"
									onChange={this.handleChange}
									name="food"
								/>
							</div>

							<div className="small-box">
								<p>TOTAL</p>
								<div className="event-box-prices" id="total" name="total">
									{this.state.total}
								</div>
							</div>

							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			);
		}
	}
}

export default EventCost;
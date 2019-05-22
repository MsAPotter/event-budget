import React, { Component } from 'react';
import './Expenses.css';

class Expenses extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.togglePanel = this.togglePanel.bind(this);
	}

	togglePanel(e) {
		this.setState({ open: !this.state.open });
	}

	// REFERENCE: https://medium.com/@subalerts/implememting-a-simple-collapsible-component-in-react-js-67c796e64652

	render() {
		return (
			<div className="Expenses">
				<h1 className="expenses-intro">
					Now it's time to calculate your <em>monthly</em> expenses! <br />If you don't know exactly, make
					your best guess. And remember to round up!
				</h1>
				<div>
					<h1 className="bills-headings">Essentials</h1>
					<div className="dropdown">
						<div onClick={(e) => this.togglePanel(e)} className="header">
							Home<span>+</span>
						</div>
						{this.state.open ? (
							<div className="content3">
								<div className="bills-content">
									<div className="box">
										<p>
											<i className="fas fa-home" /> Rent / Mortgage
										</p>
										<input className="expense-input" />
									</div>
									<div className="box">
										<p>
											<i className="fas fa-plug" /> Electric
										</p>
										<input />
									</div>
									<div className="box">
										<p>
											<i className="fas fa-burn" /> Gas
										</p>
										<input />
									</div>
									<div className="box">
										<p>
											<i className="fas fa-tint" /> Water
										</p>
										<input />
									</div>
								</div>
							</div>
						) : null}
					</div>

					<div className="dropdown">
						<div onClick={(e) => this.togglePanel(e)} className="header">
							Car<span>+</span>
						</div>
						{this.state.open ? (
							<div className="content3">
								<div className="bills-content">
									<div className="box">
										<p>
											<i className="fas fa-car" /> Car Payment
										</p>
										<input />
									</div>
									<div className="box">
										<p>
											<i className="fas fa-car-crash" /> Car Insurance
										</p>
										<input />
									</div>
									<div className="box ">
										<p>
											<i className="fas fa-gas-pump" /> Gas
										</p>
										<input />
									</div>
								</div>
							</div>
						) : null}
					</div>

					<div className="dropdown">
						<div onClick={(e) => this.togglePanel(e)} className="header">
							Food<span>+</span>
						</div>
						{this.state.open ? (
							<div className="content3">
								<div className="bills-content">
									<div className="box">
										<p>
											<i className="fas fa-shopping-cart" /> Groceries
										</p>
										<input />
									</div>
									<div className="box">
										<p>
											<i className="fas fa-utensils" /> Restaurants
										</p>
										<input />
									</div>
								</div>
							</div>
						) : null}
					</div>

					<div className="dropdown">
						<div onClick={(e) => this.togglePanel(e)} className="header">
							Fixed Expenses<span>+</span>
						</div>
						{this.state.open ? (
							<div className="content3">
								<div className="bills-content">
									<div className="box">
										<p>
											<i className="fas fa-graduation-cap" /> Education
										</p>
										<input />
									</div>
									<div className="box">
										<p>
											<i className="fas fa-stethoscope" /> Health Care
										</p>
										<input />
									</div>
								</div>
							</div>
						) : null}
					</div>
				</div>

				<div>
					<h1 className="bills-headings">Lifestyle</h1>

					<div className="dropdown">
						<div onClick={(e) => this.togglePanel(e)} className="header">
							Technology<span>+</span>
						</div>
						{this.state.open ? (
							<div className="content3">
								<div className="box">
									<p>
										<i className="fas fa-mobile-alt" /> Cell Phone
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-wifi" /> Internet
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-ethernet" /> Cable
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-tv" /> Streaming Services (Netflix, Hulu, HBO)
									</p>
									<input />
								</div>
							</div>
						) : null}
					</div>

					<div className="dropdown">
						<div onClick={(e) => this.togglePanel(e)} className="header">
							Health & Body<span>+</span>
						</div>
						{this.state.open ? (
							<div className="content3">
								<div className="box">
									<p>
										<i className="fas fa-dumbbell" /> Gym
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-eye" /> Beauty
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-tshirt" /> Clothing
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-gamepad" /> Entertainment (Social)
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-tag" /> Shopping
									</p>
									<input />
								</div>
							</div>
						) : null}
					</div>
				</div>

				<div>
					<h1 className="bills-headings">Retirement</h1>

					<div className="dropdown">
						<div onClick={(e) => this.togglePanel(e)} className="header">
							Family<span>+</span>
						</div>
						{this.state.open ? (
							<div className="content3">
								<div className="box">
									<p>
										<i className="fas fa-piggy-bank" /> 401K
									</p>
									<input />
								</div>
								<div className="box">
									<p>
										<i className="fas fa-piggy-bank" /> IRA (Traditional / Roth)
									</p>
									<input />
								</div>
							</div>
						) : null}
					</div>
				</div>

				<button type="submit" className="expenses-submit">
					Submit
				</button>
			</div>
		);
	}
}

export default Expenses;

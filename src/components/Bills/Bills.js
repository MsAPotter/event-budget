import React, { Component } from 'react';
import BillCategory from './BillCategory.js';
import axios from 'axios'
import './Bills.css';

class Bills extends Component {
	constructor(props) {
		super(props);
		this.state = {
			billCategories: [ 'Home', 'Car', 'Food', 'Fixed Expenses', 'Technology', 'Lifestyle' ],
			newBills: [],
			bills: [
				{
					name: 'Rent / Mortgage',
					icon: 'home',
					category: 'Home'
				},
				{
					name: 'Electric',
					icon: 'plug',
					category: 'Home'
				},
				{
					name: 'Gas',
					icon: 'burn',
					category: 'Home'
				},
				{
					name: 'Water',
					icon: 'tint',
					category: 'Home'
				},
				{
					name: 'Car Payment',
					icon: 'car',
					category: 'Car'
				},
				{
					name: 'Car Insurance',
					icon: 'car-crash',
					category: 'Car'
				},
				{
					name: 'Gas',
					icon: 'gas-pump',
					category: 'Car'
				},
				{
					name: 'Groceries',
					icon: 'shopping-cart',
					category: 'Food'
				},
				{
					name: 'Restaurants',
					icon: 'utensils',
					category: 'Food'
				},
				{
					name: 'Education',
					icon: 'graduation-cap',
					category: 'Fixed Expenses'
				},
				{
					name: 'Healthcare',
					icon: 'stethoscope',
					category: 'Fixed Expenses'
				},
				{
					name: 'Cell Phone',
					icon: 'mobile-alt',
					category: 'Technology'
				},
				{
					name: 'Internet',
					icon: 'wifi',
					category: 'Technology'
				},
				{
					name: 'Cable',
					icon: 'ethernet',
					category: 'Technology'
				},
				{
					name: 'Streaming (Netflix, Hulu, HBO)',
					icon: 'tv',
					category: 'Technology'
				},
				{
					name: 'Gym',
					icon: 'dumbbell',
					category: 'Lifestyle'
				},
				{
					name: 'Beauty',
					icon: 'eye',
					category: 'Lifestyle'
				},
				{
					name: 'Clothing',
					icon: 'tshirt',
					category: 'Lifestyle'
				},
				{
					name: 'Entertainment / Social',
					icon: 'gamepad',
					category: 'Lifestyle'
				},
				{
					name: 'Shopping',
					icon: 'tag',
					category: 'Lifestyle'
				},
				{
					name: 'Retirement',
					icon: 'piggy-bank',
					category: 'Lifestyle'
				}
			]
		};
		this.submitBills = this.submitBills.bind(this)
		this.addNewBill = this.addNewBill.bind(this)
	}

	addNewBill(newBill) {
		let newBills = this.state.newBills
		newBills.push(newBill)
		this.setState({newBills: newBills})
	}

	submitBills(evt, newBillArray) {
		evt.preventDefault()
			axios.post(`https://event-budget-api.herokuapp.com/api/${this.props.userId}/bills/`, this.state.newBills.filter((newBill) => {
				return newBill.name
			}))
			.then((res) => {
			console.log(res);
	});
	}

	render() {

		let categories = [];
		for (let i = 0; i < this.state.billCategories.length; i++) {
			categories.push(
				<div key={i}>
					<BillCategory addNewBill={this.addNewBill}
						{...this.props}
						category={this.state.billCategories[i]}
						bills={this.state.bills.filter((bill) => bill.category === this.state.billCategories[i])}
					/>
				</div>
			);
		}
		return (
			<div className="Bills">
				<h1 className="Bills-Intro">
					Now it's time to calculate your <em>monthly</em> expenses! <br />If you don't know exactly, make
					your best guess. And remember to round up!
				</h1>
				<div className="Bills-CategoryList">
					<form onSubmit={this.submitBills}>
						{categories}
						{/* <button type="submit" className="Bills-Submit">
							Submit
						</button> */}
					<input type="submit" className="Bills-Submit"/>
					</form>
					{/* {categories} */}
					

				</div>
			</div>
		);
	}
}

export default Bills;
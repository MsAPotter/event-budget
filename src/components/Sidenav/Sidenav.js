import React, { Component } from 'react';
import './Sidenav.css';
import { NavLink } from 'react-router-dom';

class Sidenav extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		console.log('Sidenav: render');
		return (
			<div className="sidebar">
				<div className="nav-header" />
				<NavLink to="/">
					<i className="sidebar-nav fa fa-home" /> Dashboard
				</NavLink>
				<NavLink to="/add-event">
					<i className="sidebar-nav fa fa-calendar" /> Add Event
				</NavLink>
				<NavLink to="/bills">
					<i className="sidebar-nav fa fa-credit-card-alt" /> Bills
				</NavLink>
				<NavLink to="#" className="nav-row">
					<i className="sidebar-nav fa fa-money" /> Income
				</NavLink>
			</div>
		);
	}
}

export default Sidenav;

// Icons Reference: https://www.w3schools.com/icons/fontawesome_icons_webapp.asp

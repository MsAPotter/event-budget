import React, { Component } from 'react';
import './Home.css'
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super()
    }
    
    render() {
        return (
            <div className="sidebar">
            <Link to="#home"><i className="sidebar-nav fa fa-home"></i> Home</Link>
            <Link to="#services"><i className="sidebar-nav fa fa-credit-card-alt"></i> Expenses</Link>
            <Link to="#clients"><i className="sidebar-nav fa fa-money"></i> Income</Link>
            {/* <Link to="#contact"><i className="sidebar-nav fa fa-fw fa-calendar-check-o"></i> Event</Link> */}
            {/* <Link to="#contact"><i className="sidebar-nav fa fa-car"></i> Event</Link>     */}
            <Link to="#contact"><i className="sidebar-nav fa fa-smile-o"></i> Event</Link> 
            </div>
        );
    }
}

export default Home;

// Icons Reference: https://www.w3schools.com/icons/fontawesome_icons_webapp.asp
import React, { Component } from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
// import SideNav, {MenuIcon} from 'react-simple-sidenav';
// import { Sidenav, Toggle, Nav, Icon } from 'rsuite';

class Home extends Component {
    constructor(props) {
        super()

   
    }

    
    render() {
        return (
            <div className="sidebar">
            <Link to="#home"><i className="sidebar-nav fa fa-fw fa-home"></i> Home</Link>
            <Link to="#services"><i className="sidebar-nav fas fa-file-invoice-dollar"></i> Expenses</Link>
            <Link to="#clients"><i className="sidebar-nav fas fa-money-bill"></i> Income</Link>
            <Link to="#contact"><i className="sidebar-nav fas fa-calendar-check"></i> Event</Link>
                
            </div>
        );
    }
}

export default Home;
import React, { Component } from 'react';
import Bills from '../Bills/Bills';
import './Income.css';

class Income extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(evt) {
		this.setState({ open: !this.state.open });
    }
    
    render() {
        if (this.state.open === true ) {
        return (
            <div>
            <div className="Bills"
            onClick={(e) => this.togglePanel()}>
            <h1 className="Bills-Intro">
                Now it's time to calculate your <em>monthly</em> expenses! <br />If you don't know exactly, make
                your best guess. And remember to round up!
			</h1>
                <h1 className="Bills-header">Bills</h1>
                <hr></hr>
                </div>

                <p>Monthly take-home Pay</p>
                <input type="text" />
                {/* <h1 className="Bills-header"
						onClick={(e) => this.togglePanel()}>Bills </h1> <h1 className="Income-header">Income</h1>
						<hr></hr> */}
            </div>
        );
    }
    else {
        console.log("false")
        return <Bills />
    }
}
}

export default Income;
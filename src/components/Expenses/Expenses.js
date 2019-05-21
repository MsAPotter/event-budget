import React, { Component } from 'react';
import './Expenses.css'

class Expenses extends Component {

    constructor(props){
        super(props);
        this.state = {
        open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
        }

       togglePanel(e){
        this.setState({open: !this.state.open})
        }

    render() {
        return (
            <div>
                <div>
                    <div onClick={(e)=>this.togglePanel(e)} className="header">
                    Essentials</div>
                    {this.state.open ? (
                    <div className="content3">
                    <p>Rent / Mortgage</p>
                        <input></input>
                    </div>
                    ) : null}
                    </div>
                    {/* );
 } */}
                {/* <div className="header1">Essentials */}
                <div onClick={(e)=>this.togglePanel(e)} className="header">
                    Home</div>
                    {/* <button className="collapsible" onClick={this.open}>Home</button> */}
                        <div className="content2">
                        <p>Rent / Mortgage</p>
                        <input></input>
                        </div>

                        <div className="content2">
                        <p>Electric</p>
                        <input></input>
                        </div>

                        <div className="content2">
                        <p>Gas</p>
                        <input></input>
                        </div>

                        <div className="content2">
                        <p>Water</p>
                        <input></input>
                        </div>
                </div>
            // </div>
        );
    }
}

export default Expenses;
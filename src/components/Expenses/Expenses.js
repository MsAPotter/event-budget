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

 // REFERENCE: https://medium.com/@subalerts/implememting-a-simple-collapsible-component-in-react-js-67c796e64652

    render() {
        return (
            <div className="main">
                <h1 className="expenses-intro">Now it's time to calculate your <em>monthly</em> expenses! <br/>If you don't know exactly, make your best guess. And remember to round up!</h1>
                <div>
                    <h1>Essentials</h1>
                    <div className="dropdown">
                        <div onClick={(e)=>this.togglePanel(e)} className="header">Home<span>+</span></div>
                            {this.state.open ? ( <div className="content3">
                                                <div className="bills-content"><div className="box"><p><i class="fas fa-home"></i> Rent / Mortgage</p><input></input></div>
                                                <div className="box"><p><i class="fas fa-plug"></i> Electric</p><input></input></div>
                                                <div className="box"><p><i className="fas fa-burn"></i> Gas</p><input></input></div>
                                                <div className="box"><p><i class="fas fa-tint"></i> Water</p><input></input></div>
                                                </div>
                                                </div>
                            ) : null} 
                    </div>

                    <div className="dropdown">
                    <div onClick={(e)=>this.togglePanel(e)} className="header">Car<span>+</span></div>
                    {this.state.open ? ( <div className="content3">
                                        <div className="bills-content"><div className="box"><p><i class="fas fa-car"></i> Car Payment</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-car-crash"></i> Car Insurance</p><input></input></div>
                                        <div className="box "><p><i class="fas fa-gas-pump"></i> Gas</p><input></input></div>
                                        </div>
                                        </div>
                    ) : null}
                    </div>

                    <div className="dropdown">
                    <div onClick={(e)=>this.togglePanel(e)} className="header">Food<span>+</span></div>
                    {this.state.open ? ( <div className="content3">
                                        <div className="bills-content"><div className="box"><p><i class="fas fa-shopping-cart"></i> Groceries</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-utensils"></i> Restaurants</p><input></input></div>
                                        </div>
                                        </div>
                    ) : null}
                    </div>

                    <div className="dropdown">
                    <div onClick={(e)=>this.togglePanel(e)} className="header">Fixed Expenses<span>+</span></div>
                    {this.state.open ? ( <div className="content3">
                                        <div className="bills-content"><div className="box"><p><i class="fas fa-graduation-cap"></i> Education</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-stethoscope"></i> Health Care</p><input></input></div>
                                        </div>
                                        </div>
                    ) : null}
                    </div>

                </div>

                <div>
                    <h1>Lifestyle</h1>

                    <div className="dropdown">
                    <div onClick={(e)=>this.togglePanel(e)} className="header">Technology<span>+</span></div>
                    {this.state.open ? ( <div className="content3">
                                        <div className="box"><p><i class="fas fa-mobile-alt"></i> Cell Phone</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-wifi"></i> Internet</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-ethernet"></i> Cable</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-tv"></i> Streaming Services (Netflix, Hulu, HBO)</p><input></input></div>
                                        </div>
                    ) : null}
                    </div>

                    <div className="dropdown">
                    <div onClick={(e)=>this.togglePanel(e)} className="header">Health & Body<span>+</span></div>
                    {this.state.open ? ( <div className="content3">
                                        <div className="box"><p><i class="fas fa-dumbbell"></i> Gym</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-eye"></i> Beauty</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-tshirt"></i> Clothing</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-gamepad"></i> Entertainment (Social)</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-tag"></i> Shopping</p><input></input></div>
                                        </div>
                    ) : null}
                    </div>

                    

                        
                </div>

                <div>
                    <h1>Retirement</h1>

                    <div className="dropdown">
                    <div onClick={(e)=>this.togglePanel(e)} className="header">Family<span>+</span></div>
                    {this.state.open ? ( <div className="content3">
                                        <div className="box"><p><i class="fas fa-piggy-bank"></i> 401K</p><input></input></div>
                                        <div className="box"><p><i class="fas fa-piggy-bank"></i> IRA (Traditional / Roth)</p><input></input></div>
                                        </div>
                    ) : null}
                    </div>
                    
                </div>

                <button type="submit" className="expenses-submit">Submit</button>
                    
            </div>
        );
    }
}

export default Expenses;
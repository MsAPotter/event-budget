import React, { Component } from 'react';
import '../Home/Home.css';
import EventCost from '../EventCost/EventCost';
import {Link} from 'react-router-dom';

let placeholder = [
    `Take me to Greece!`,
    "Road trip to Mount Rushmore",
    "Honeymoon in Hawaii",
    "Bermuda, Bahama, come on pretty mama"
]

class Home extends Component {
    constructor(props) {
        super()

        this.state = {
            input: "",
            trip: ""
          }

        this.handleChange = this.handleChange.bind(this);
        this.handleEventDetails = this.handleEventDetails.bind(this);
    }

    componentDidMount() {
        var x = Math.floor(Math.random() * placeholder.length);
        placeholder = placeholder[x]
        console.log(placeholder)
        this.setState({
            placeholder: placeholder
          })
    }

    handleChange(event) {
        this.setState({
          input: event.target.value
        })
      }

    handleEventDetails(event) {
        event.preventDefault();
        let newEvent = {
            trip: this.state.input
        }
        console.log(newEvent)
        this.props.addEvent(newEvent)

        this.setState({'submitted': true })
// Reference:  https://stackoverflow.com/questions/28907965/how-do-i-add-a-component-after-an-submit-event-using-reactjs
        
}
  
    render() {
        // console.log(placeholder)
        if (this.state.submitted) {
            return <EventCost />
        } else {
        return (
            <div className="container">
                <div className="content">
                    <h1>Where do you want to go?</h1>
                    <h1>What do you want to do?</h1>

                    <form onSubmit={this.handleEventDetails}>
                    <input 
                    type="text" 
                    id="trip"
                    value={this.props.trip}
                    placeholder= {placeholder}
                    onChange={this.handleChange}
                    />
                    </form>
                </div>
            </div>
        );
    }
    }
}

export default Home;
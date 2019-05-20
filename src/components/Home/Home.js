import React, { Component } from 'react';
import '../Home/Home.css'

class Home extends Component {
    constructor(props) {
        super()

        this.state = {
            input: '',
            trip: ''
          }

        this.handleChange = this.handleChange.bind(this);
        this.eventDetails = this.eventDetails.bind(this);
    }


    handleChange(event) {
        this.setState({
          input: event.target.value
        })
      }

    eventDetails(trip) {
        let newEvent = {
            trip: this.state.trip
        }
        this.props.addEvent(newEvent)
        }
  
    render() {
        return (
            <div className="container">
                <div className="content">
                    <h1>Where do you want to go?</h1>
                    <h1>What do you want to do?</h1>

                    <input 
                    type="text" 
                    name="event"
                    id="event"
                    placeholder="Take me to Greece!"
                    onChange={this.handleChange}
                    onSubmit={this.eventDetails}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
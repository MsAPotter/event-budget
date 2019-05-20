import React, { Component } from 'react';
import '../Home/Home.css'

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
            input: '',
            trip: '',
            placeholder
          }

        this.handleChange = this.handleChange.bind(this);
        this.eventDetails = this.eventDetails.bind(this);
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

    eventDetails(trip) {
        let newEvent = {
            trip: this.state.trip
        }
        this.props.addEvent(newEvent)
        }
  
    render() {
        console.log(placeholder)
        return (
            <div className="container">
                <div className="content">
                    <h1>Where do you want to go?</h1>
                    <h1>What do you want to do?</h1>

                    <input 
                    type="text" 
                    name="event"
                    id="event"
                    placeholder= {placeholder}
                    onChange={this.handleChange}
                    onSubmit={this.eventDetails}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
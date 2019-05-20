import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import EventCost from './components/EventCost/EventCost';

const newEvents = [];

class App extends Component {
  constructor(props) {
    super()

    this.state = {newEvents: newEvents}

    this.addEvent = this.addEvent.bind(this)
  }

  addEvent(newEvent) {
    console.log(newEvent)
    let newEvents = this.state.newEvents.concat([newEvent])
    console.log(newEvents)
    this.setState({newEvents: newEvents})
  }


  render() {
    console.log('App: render')
    console.log(this.state.newEvents)

    return (
      <div>
        <Switch>
        <Route
            exact path="/"
            render={routerProps => (
              <Home 
              addEvent={this.addEvent}
              {...this.state} />
            )}
          />

        <Route
            exact path="/eventcost"
            render={routerProps => (
              <EventCost 
              {...routerProps} 
              {...this.state} />
            )}
          />
        </Switch>
        
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import EventCost from './components/EventCost/EventCost';
import Expenses from './components/Expenses/Expenses';

const newEvents = [];
const TotalCosts = [];

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      newEvents: newEvents,
      TotalCosts: TotalCosts
    }

    this.addEvent = this.addEvent.bind(this);
    this.addTotalCost = this.addTotalCost.bind(this);
  }

  addEvent(newEvent) {
    console.log(newEvent)
    let newEvents = this.state.newEvents.concat([newEvent])
    console.log(newEvents)
    this.setState({newEvents: newEvents})
  }

  addTotalCost(totalCost) {
    console.log(totalCost)
    let TotalCosts = this.state.TotalCosts.concat([totalCost])
    console.log(TotalCosts)
    this.setState({TotalCosts: TotalCosts})
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
              addTotalCost={this.addTotalCost}
              {...this.state} />
            )}
          />

        <Route
            exact path="/expenses"
            render={routerProps => (
              <Expenses
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
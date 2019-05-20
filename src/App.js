import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home'

class App extends Component {
  constructor(props) {
    super()


  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact path="/"
            render={routerProps => (
              <Home 
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
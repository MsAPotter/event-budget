import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Sidenav from './components/Sidenav/Sidenav'

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
              <Sidenav 
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
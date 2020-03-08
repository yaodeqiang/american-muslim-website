import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './views/home/home';
import Details from './views/details/details';
import DetailsList from './views/detailsList/list';

class App extends Component {
  render() {
    return (
      <div className="Website">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/details-list" component={DetailsList} />
            <Redirect from={"*"} to={'/'} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

import React from 'react'

import { Switch, Route } from 'react-router-dom';
import Home from '@/views/home/home';
import Details from '@/views/details/details';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/details" component={Details} />
  </Switch>
)

export default Routers

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Usuario from '../pages/usuarios';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/usuario/:id" component={Usuario} />
  </Switch>
);

export default Routes;

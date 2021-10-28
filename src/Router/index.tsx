import { ReactElement } from 'react';
import { Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Offers } from '../pages/Offers';
import { Route } from './Route';

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/offers" isPrivate component={Offers} />
    </Switch>
  );
}

import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Offers } from '../pages/Offers';

export function Routes(): ReactElement {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/offers" component={Offers} />
    </Switch>
  );
}

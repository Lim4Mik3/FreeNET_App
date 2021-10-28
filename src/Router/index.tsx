import { ReactElement } from 'react';
import { BrowserRouter as ReactRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Offers } from '../pages/Offers';

export function Router(): ReactElement {
  return (
    <ReactRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/offers" component={Offers} />
      </Switch>
    </ReactRouter>
  );
}

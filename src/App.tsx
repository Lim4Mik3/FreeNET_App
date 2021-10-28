import { ReactElement } from 'react';
import { OffersContextProvider } from './hooks/useOffers';

import { Router } from './Router';
import { GlobalStyle } from './styles/Global';

function App(): ReactElement {
  return (
    <OffersContextProvider>
      <Router />
      <GlobalStyle />
    </OffersContextProvider>
  );
}

export default App;

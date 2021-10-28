import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { OffersContextProvider } from './hooks/useOffers';

import { Routes } from './Router';
import { GlobalStyle } from './styles/Global';

function App(): ReactElement {
  return (
    <BrowserRouter>
      <OffersContextProvider>
        <Routes />
        <GlobalStyle />
      </OffersContextProvider>
    </BrowserRouter>
  );
}

export default App;

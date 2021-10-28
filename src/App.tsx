import { ReactElement } from 'react';

import { Router } from './Router';
import { GlobalStyle } from './styles/Global';

function App(): ReactElement {
  return (
    <>
      <Router />
      <GlobalStyle />
    </>
  );
}

export default App;

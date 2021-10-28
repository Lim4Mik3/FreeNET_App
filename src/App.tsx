import { ReactElement } from 'react';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/Global';

function App(): ReactElement {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;

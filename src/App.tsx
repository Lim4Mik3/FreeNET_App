import { ReactElement } from 'react';
import { Offers } from './pages/Offers';
import { GlobalStyle } from './styles/Global';

function App(): ReactElement {
  return (
    <>
      <Offers />
      <GlobalStyle />
    </>
  );
}

export default App;

import { ReactElement } from 'react';

import { Header, Container, Actions } from './styles';

export function Home(): ReactElement {
  return (
    <Header>
      <Container>
        <strong>
          Free<span>NET</span>
        </strong>

        <Actions>
          <h3>11 3601-3601</h3>
          <button type="button">Contrate</button>
        </Actions>
      </Container>
    </Header>
  );
}

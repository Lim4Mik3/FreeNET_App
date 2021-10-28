import { ReactElement } from 'react';

import { Header, Container, Actions, Content } from './styles';

export function Home(): ReactElement {
  return (
    <>
      <Header>
        <Container>
          <strong>
            Free<span>NET</span>
          </strong>

          <Actions>
            <h3>11 3601-3601</h3>
            <button type="button">CONTRATE</button>
          </Actions>
        </Container>
      </Header>

      <Content>
        <div>
          <h1>Olá visitante, seja bem vindo!</h1>

          <span>
            Para buscarmos os planos disponíveis, por favor insira seu CEP
            abaixo.
          </span>
          <form>
            <p>Apenas números</p>
            <input id="zipcode" type="text" autoComplete="off" />

            <button type="submit">Buscar</button>
          </form>
        </div>
      </Content>
    </>
  );
}

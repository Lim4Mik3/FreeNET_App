import { ReactElement } from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { Content } from './styles';

export function Home(): ReactElement {
  return (
    <>
      <Header />

      <Content>
        <div>
          <h1>Olá visitante, seja bem vindo!</h1>

          <span>
            Para buscarmos os planos disponíveis, por favor insira seu CEP
            abaixo.
          </span>
          <form>
            <input id="zipcode" type="text" autoComplete="off" />
            <p>Apenas números</p>

            <button type="submit">Buscar</button>
          </form>
        </div>
      </Content>

      <Footer />
    </>
  );
}

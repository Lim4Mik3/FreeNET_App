import { ReactElement } from 'react';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';

import { PublicLayout } from '../../components/PublicLayout';

import { Content } from './styles';

export function Home(): ReactElement {
  return (
    <PublicLayout>
      <Content>
        <div>
          <h1>Olá visitante, seja bem vindo!</h1>

          <span>
            Para buscarmos os planos disponíveis, por favor insira seu CEP
            abaixo.
          </span>

          <form>
            <Input subtitle="Apenas números" type="text" />

            <Button title="Buscar" type="submit" />
          </form>
        </div>
      </Content>
    </PublicLayout>
  );
}

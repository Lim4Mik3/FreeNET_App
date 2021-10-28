import { ReactElement } from 'react';

import { OfferCatalog } from '../../components/OfferCatalog';
import { PublicLayout } from '../../components/PublicLayout';

import { Content } from './styles';

export function Offers(): ReactElement {
  return (
    <PublicLayout>
      <Content>
        <span>
          Exibindo ofertas para: Rua João Lourenço dos Santos, 175 - Osasco SP
        </span>

        <OfferCatalog />

        <button type="button">Ops, errei meu cep!</button>
      </Content>
    </PublicLayout>
  );
}

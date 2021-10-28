import { ReactElement } from 'react';

import { OfferCatalog } from '../../components/OfferCatalog';
import { PublicLayout } from '../../components/PublicLayout';
import { useOffers } from '../../hooks/useOffers';

import { Content } from './styles';

export function Offers(): ReactElement {
  const { customerAdress } = useOffers();

  return (
    <PublicLayout>
      <Content>
        <span>
          Exibindo ofertas para:{' '}
          {`${customerAdress.street}, ${customerAdress.neighborhood} - ${customerAdress.nation}`}
        </span>

        <OfferCatalog />

        <button type="button">Ops, errei meu cep!</button>
      </Content>
    </PublicLayout>
  );
}

import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { OfferCatalog } from '../../components/OfferCatalog';
import { PublicLayout } from '../../components/PublicLayout';
import { useOffers } from '../../hooks/useOffers';

import { Content, WrongCepButton } from './styles';

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

        <WrongCepButton>
          <Link to="/">Ops, errei meu cep!</Link>
        </WrongCepButton>
      </Content>
    </PublicLayout>
  );
}

import { ReactElement } from 'react';

import { Button } from '../../components/Form/Button';
import { OfferCatalog } from '../../components/OfferCatalog';
import { OfferCard } from '../../components/OfferCatalog/OfferCard';
import { PublicLayout } from '../../components/PublicLayout';

import { Content, AdressInfo } from './styles';

export function Offers(): ReactElement {
  return (
    <PublicLayout>
      <Content>
        <AdressInfo>
          <span>
            Exibindo ofertas para: Rua João Lourenço dos Santos, 175 - Osasco SP
          </span>
        </AdressInfo>

        <OfferCatalog>
          <OfferCard
            title="Oferta 01"
            description="Tenha 80 megas de internet para usar o mes todo!"
            price="R$ 50,99"
          />
        </OfferCatalog>

        <footer>
          <Button title="Ops, errei meu cep!" type="button" />
        </footer>
      </Content>
    </PublicLayout>
  );
}

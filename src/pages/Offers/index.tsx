import { ReactElement } from 'react';
import { Button } from '../../components/Form/Button';
import { PublicLayout } from '../../components/PublicLayout';

import { Content, OfferCatalog, OfferCard, AdressInfo } from './styles';

export function Offers(): ReactElement {
  return (
    <PublicLayout>
      <Content>
        <AdressInfo>
          <strong>
            Exibindo ofertas para: Rua João Lourenço dos Santos, 175 - Osasco SP
          </strong>
        </AdressInfo>

        <OfferCatalog>
          <OfferCard>
            <header>
              <span>Oferta 01</span>
            </header>
            <div>
              <p>Tenha 80MB de internet fibra ótica para navegar o mês todo.</p>
              <strong>R$ 50,99</strong>

              <button type="button">Assine já</button>
            </div>
          </OfferCard>
          <OfferCard>
            <header>
              <span>Oferta 01</span>
            </header>
            <div>
              <p>Tenha 80MB de internet fibra ótica para navegar o mês todo.</p>
              <strong>R$ 50,99</strong>

              <button type="button">Assine já</button>
            </div>
          </OfferCard>
          <OfferCard>
            <header>
              <span>Oferta 01</span>
            </header>
            <div>
              <p>Tenha 80MB de internet fibra ótica para navegar o mês todo.</p>
              <strong>R$ 50,99</strong>

              <button type="button">Assine já</button>
            </div>
          </OfferCard>
          <OfferCard>
            <header>
              <span>Oferta 01</span>
            </header>
            <div>
              <p>Tenha 80MB de internet fibra ótica para navegar o mês todo.</p>
              <strong>R$ 50,99</strong>

              <button type="button">Assine já</button>
            </div>
          </OfferCard>
          <OfferCard>
            <header>
              <span>Oferta 01</span>
            </header>
            <div>
              <p>Tenha 80MB de internet fibra ótica para navegar o mês todo.</p>
              <strong>R$ 50,99</strong>

              <button type="button">Assine já</button>
            </div>
          </OfferCard>
          <OfferCard>
            <header>
              <span>Oferta 01</span>
            </header>
            <div>
              <p>Tenha 80MB de internet fibra ótica para navegar o mês todo.</p>
              <strong>R$ 50,99</strong>

              <button type="button">Assine já</button>
            </div>
          </OfferCard>
        </OfferCatalog>

        <footer>
          <Button title="Ops, errei meu cep!" type="button" />
        </footer>
      </Content>
    </PublicLayout>
  );
}

import { OfferCard } from './OfferCard';

import { Container } from './styles';

const OfferCatalog: React.FC = () => {
  return (
    <Container>
      <OfferCard
        title="Oferta 01"
        description="Tenha 80 megas de internet para usar o mes todo!"
        price="R$ 50,99"
      />
    </Container>
  );
};

export { OfferCatalog };

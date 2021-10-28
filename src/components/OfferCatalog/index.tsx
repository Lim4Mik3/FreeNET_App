import { useOffers } from '../../hooks/useOffers';
import { OfferCard } from './OfferCard';

import { Container } from './styles';

const OfferCatalog: React.FC = () => {
  const { customerData } = useOffers();

  let offers;

  if (customerData.offers) {
    offers = customerData.offers.map((offer) => ({
      ...offer,
      formatedPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(offer.price / 100),
    }));
  }

  return (
    <Container>
      {offers &&
        offers.map((offer) => (
          <OfferCard
            key={offer.id}
            title={offer.name}
            description={`Tenha ${
              offer.id * 100
            } megas de internet para usar o mes todo!`}
            price={offer.formatedPrice}
          />
        ))}
    </Container>
  );
};

export { OfferCatalog };

import { useOffers } from '../../../hooks/useOffers';
import { Container } from './styles';

interface OfferCard {
  title: string;
  price: string;
  description: string;
}

const OfferCard: React.FC<OfferCard> = ({
  title,
  price,
  description,
}: OfferCard) => {
  const { loadOffers } = useOffers();

  return (
    <Container>
      <header>
        <span>{title}</span>
      </header>
      <div>
        <p>{description}</p>
        <strong>{price}</strong>

        <button type="button" onClick={loadOffers}>
          Assine já
        </button>
      </div>
    </Container>
  );
};

export { OfferCard };

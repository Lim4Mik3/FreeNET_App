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
  return (
    <Container>
      <header>
        <span>{title}</span>
      </header>
      <div>
        <p>{description}</p>
        <strong>{price}</strong>

        <button type="button">Assine já</button>
      </div>
    </Container>
  );
};

export { OfferCard };

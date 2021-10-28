import { useOffers } from '../../../hooks/useOffers';
import { Container } from './styles';

interface OfferCard {
  id: number;
  title: string;
  price: string;
  description: string;
  isSelected: boolean;
}

const OfferCard: React.FC<OfferCard> = ({
  id,
  title,
  price,
  description,
  isSelected,
}: OfferCard) => {
  const { handleSelectedOffer } = useOffers();

  const handleCardClick = (): void => handleSelectedOffer(id);

  return (
    <Container onClick={handleCardClick} selected={isSelected}>
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

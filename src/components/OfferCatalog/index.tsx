import { ReactElement } from 'react';

import { Container } from './styles';

interface OfferCatalogProps {
  children: ReactElement;
}

const OfferCatalog: React.FC<OfferCatalogProps> = ({
  children,
}: OfferCatalogProps) => {
  return <Container>{children}</Container>;
};

export { OfferCatalog };

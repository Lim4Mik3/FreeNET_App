import { ReactNode } from 'react';

import { Footer } from '../Footer';
import { Header } from '../Header';

import { Container } from './styles';

interface PublicLayoutProps {
  children: ReactNode;
}

export const PublicLayout: React.FC<PublicLayoutProps> = ({
  children,
}: PublicLayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

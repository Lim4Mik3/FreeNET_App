import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;

  footer {
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 2rem;
  }

  // Tablet breakpoint
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0.5rem 1.5rem 3rem 1.5rem;
  }

  // Smartphone breakpoint
  @media screen and (max-width: 767px) {
    padding: 0.5rem 1.5rem 2rem 1.5rem;
  }
`;

export const AdressInfo = styled.div`
  padding: 2rem;
  height: 2rem;

  span {
    font-size: 1.43rem;
    font-weight: 400;
    font-family: 'Roboto', cursive;
    color: var(--title);
  }
`;

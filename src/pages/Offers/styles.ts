import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
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

  strong {
    font-size: 1.43rem;
    font-weight: 400;
    font-family: 'Roboto', cursive;
    color: var(--title);
  }
`;

export const OfferCatalog = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem;
  padding: 1rem 2rem;

  overflow: hidden;
  height: 100%;
`;

export const OfferCard = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(18, 18, 18, 0.3);

  header {
    height: 1rem;

    span {
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: 700;
      color: var(--red-chill);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    p {
      font-size: 1.5rem;
      padding: 0.5rem;
      color: var(--title);
    }

    strong {
      display: inline-block;
      padding: 1.5rem 0rem;
      font-size: 2.3rem;
    }

    button {
      margin-top: 1rem;
      width: 100%;
      padding: 1rem;
      border-radius: 12px;
      border: 1px solid #ddd;
      background-color: var(--gold);
      font-weight: bold;
      color: var(--title);
      font-size: 1.5rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.85);
      }
    }
  }
`;

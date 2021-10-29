import styled from 'styled-components';

export const Content = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // Tablet breakpoint
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 1rem 1.3rem;
  }

  // Smartphone breakpoint
  @media screen and (max-width: 767px) {
    padding: 0.8rem;
  }

  span {
    padding: 2rem;
    font-size: 1.43rem;
    font-weight: 400;
    font-family: 'Roboto', cursive;
    color: var(--title);

    // Tablet breakpoint
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      padding: 1.7rem;
      font-size: 1.43rem;
    }

    // Smartphone breakpoint
    @media screen and (max-width: 767px) {
      padding: 1rem;
      font-size: 1.2rem;
    }
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

export const WrongCepButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: end;

  a {
    margin-top: 1rem;
    width: 20rem;
    border-radius: 20px;
    border: 1px solid red;
    padding: 1rem 2rem;
    background-color: #e63f55;

    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;

    transition: filter 0.2s;

    // Tablet breakpoint
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 18rem;
      padding: 1rem 2rem;
      font-size: 1rem;
    }

    // Smartphone breakpoint
    @media screen and (max-width: 767px) {
      width: 16rem;
      padding: 1rem;
      font-size: 1rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

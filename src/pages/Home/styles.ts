import styled from 'styled-components';

export const Content = styled.main`
  div {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 6rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // Tablet breakpoint
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      padding: 5rem 1.5rem;
    }

    // Smartphone breakpoint
    @media screen and (max-width: 767px) {
      padding: 4rem 1rem;
    }

    h1 {
      font-size: 4rem;
      color: var(--red-chill);

      // Tablet breakpoint
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 3.5rem;
      }

      // Smartphone breakpoint
      @media screen and (max-width: 767px) {
        font-size: 3rem;
      }
    }

    span {
      margin-top: 4rem;
      font-size: 2rem;
      font-weight: thin;
      color: var(--title);

      // Tablet breakpoint
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        margin-top: 3rem;
        font-size: 1.7rem;
      }

      // Smartphone breakpoint
      @media screen and (max-width: 767px) {
        margin-top: 2.5rem;
        font-size: 1.3rem;
      }
    }

    form {
      padding: 5rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      // Tablet breakpoint
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding: 4rem 2.5rem;
      }

      // Smartphone breakpoint
      @media screen and (max-width: 767px) {
        padding: 3.5rem 2rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }
`;

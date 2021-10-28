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

      input {
        width: 20rem;
        background-color: var(--white);
        height: 4rem;
        border-radius: 20px;
        border: 1px solid #333;
        padding: 0 1rem;
        font-size: 2rem;
        color: var(--black);

        // Tablet breakpoint
        @media screen and (min-width: 768px) and (max-width: 1023px) {
          width: 19rem;
          height: 3.5rem;
          padding: 0 1rem;
          font-size: 1.5rem;
        }

        // Smartphone breakpoint
        @media screen and (max-width: 767px) {
          width: 18rem;
          height: 3.5rem;
          padding: 0 0.8rem;
          font-size: 1rem;
        }
      }

      button {
        display: block;
        margin-top: 1rem;
        width: 20rem;
        height: 4rem;
        border-radius: 20px;
        border: 1px solid red;
        background-color: #e63f55;

        font-size: 1.4rem;
        color: var(--white);
        text-transform: uppercase;
        letter-spacing: 1px;

        transition: filter 0.2s;

        // Tablet breakpoint
        @media screen and (min-width: 768px) and (max-width: 1023px) {
          width: 19rem;
          height: 3.5rem;
          padding: 0 1rem;
          font-size: 1.5rem;
        }

        // Smartphone breakpoint
        @media screen and (max-width: 767px) {
          width: 18rem;
          height: 3.5rem;
          padding: 0 0.8rem;
          font-size: 1rem;
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

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

    h1 {
      font-size: 4rem;
      color: var(--red-chill);
    }

    span {
      margin-top: 4rem;
      font-size: 2rem;
      font-weight: thin;
      color: var(--title);
    }

    form {
      padding: 5rem 3rem;

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

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 10rem;
  background: rgb(245, 23, 53);
  background: linear-gradient(
    157deg,
    rgba(245, 23, 53, 1) 30%,
    rgba(250, 38, 128, 1) 75%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p,
  span {
    font-size: 1.5rem;
    color: var(--white);
  }
`;

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background: rgb(245, 23, 53);
  background: linear-gradient(
    157deg,
    rgba(245, 23, 53, 1) 30%,
    rgba(250, 38, 128, 1) 75%
  );
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  strong {
    font-size: 2.5rem;
    font-family: 'Bebas Neue', cursive;
    color: var(--white);
    letter-spacing: 3px;

    @media (max-width: 720px) {
      font-size: 2rem;
      letter-spacing: 1.5px;
    }

    span {
      font-size: 2rem;
      color: var(--black);
      letter-spacing: 2px;

      @media (max-width: 720px) {
        font-size: 1.5rem;
        letter-spacing: 1px;
      }
    }
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column;
  }

  h3 {
    font-size: 1.5rem;
    color: var(--white);
    letter-spacing: 1px;

    @media (max-width: 720px) {
      font-size: 1.3rem;
    }
  }

  button {
    margin-left: 0.5rem;
    width: 10rem;
    height: 2.5rem;
    font-weight: bold;
    border: 0;
    border-radius: 2.5rem;
    background-color: var(--gold);
    color: var(--black);

    transition: filter 0.2s;

    @media (max-width: 720px) {
      width: 9rem;
      height: 2rem;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

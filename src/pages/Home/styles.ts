import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 5rem;
  background: rgb(245, 23, 53);
  background: linear-gradient(
    157deg,
    rgba(245, 23, 53, 1) 30%,
    rgba(250, 38, 128, 1) 75%
  );
`;

export const Container = styled.div`
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

    span {
      font-size: 2rem;
      color: var(--black);
      letter-spacing: 2px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    color: var(--white);
    letter-spacing: 1px;
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

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

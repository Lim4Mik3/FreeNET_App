import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(18, 18, 18, 0.3);

  header {
    height: 2.5rem;

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

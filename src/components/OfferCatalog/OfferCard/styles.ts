import styled from 'styled-components';

interface ContainerProps {
  selected?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.selected === true
      ? '0px 0px 10px 2px rgba(255, 18, 18, 0.8)'
      : '0px 0px 10px 2px rgba(18, 18, 18, 0.3)'};

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 2px rgba(255, 18, 18, 0.3);
  }

  header {
    height: 2.5rem;

    // Tablet breakpoint
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: 2.3rem;
    }

    // Smartphone breakpoint
    @media screen and (max-width: 767px) {
      height: 2rem;
    }

    span {
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: 700;
      color: var(--red-chill);

      // Tablet breakpoint
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.4rem;
      }

      // Smartphone breakpoint
      @media screen and (max-width: 767px) {
        font-size: 1.3rem;
      }
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

      // Tablet breakpoint
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.3rem;
        padding: 1.2rem 1rem;
      }

      // Smartphone breakpoint
      @media screen and (max-width: 767px) {
        font-size: 1.1rem;
        padding: 1rem 1rem;
      }
    }

    strong {
      display: inline-block;
      padding: 1.5rem 0rem;
      font-size: 2.3rem;

      // Tablet breakpoint
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        padding: 1.2rem 1rem;
        font-size: 2rem;
      }

      // Smartphone breakpoint
      @media screen and (max-width: 767px) {
        padding: 1rem;
        font-size: 1.7rem;
      }
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
      align-self: center;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.85);
      }

      // Tablet breakpoint
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 80%;
        font-size: 1.2rem;
      }

      // Smartphone breakpoint
      @media screen and (max-width: 767px) {
        width: 70%;
        font-size: 1.2rem;
      }
    }
  }
`;

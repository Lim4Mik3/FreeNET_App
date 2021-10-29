import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 4rem;
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
  margin-top: auto;

  p,
  span {
    font-size: 1.5rem;
    color: var(--white);
    text-align: center;

    // Tablet breakpoint
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 1.5rem;
    }

    // Smartphone breakpoint
    @media screen and (max-width: 767px) {
      font-size: 1.2rem;
    }
  }
`;

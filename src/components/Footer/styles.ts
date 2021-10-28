import styled from 'styled-components';

export const FooterContainer = styled.footer`
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

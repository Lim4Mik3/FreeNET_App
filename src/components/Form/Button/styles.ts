import styled from 'styled-components';

export const ButtonCustom = styled.button`
  display: block;
  margin-top: 1rem;
  width: 20rem;
  height: 4rem;
  border-radius: 20px;
  border: 1px solid red;
  background-color: #e63f55;

  font-size: 1.2rem;
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
`;

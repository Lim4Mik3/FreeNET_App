import styled from 'styled-components';

export const InputCustom = styled.input`
  width: 20rem;
  background-color: var(--white);
  height: 4rem;
  border-radius: 20px;
  border: 1px solid #333;
  padding: 0 1rem;
  font-size: 1.8rem;
  text-align: center;
  color: var(--black);

  // Tablet breakpoint
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 19rem;
    height: 3.5rem;
    padding: 0 1rem;
    font-size: 1.6rem;
  }

  // Smartphone breakpoint
  @media screen and (max-width: 767px) {
    width: 18rem;
    height: 3.5rem;
    padding: 0 0.8rem;
    font-size: 1.4rem;
  }

  &::placeholder {
    color: #ddd;
    font-size: 1.7rem;
    text-align: center;
  }
`;

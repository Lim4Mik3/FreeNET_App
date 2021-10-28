import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem;
  padding: 1rem 2rem;
  align-self: center;

  overflow: auto;
  height: 100%;

  // Tablet breakpoint
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    gap: 1.5rem;
    padding: 1rem;
  }

  // Smartphone breakpoint
  @media screen and (max-width: 767px) {
    grid-template-columns: 330px;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

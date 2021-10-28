import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2.5rem;
  padding: 1rem 2rem;

  overflow: hidden;
  height: 100%;
`;

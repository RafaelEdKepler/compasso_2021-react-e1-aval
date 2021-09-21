import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 40px 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media(max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px 140px 150px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media(max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media(max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media(max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    margin-left: 90px;
  }
`;
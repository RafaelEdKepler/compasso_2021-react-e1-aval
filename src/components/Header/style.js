import styled from 'styled-components';

export const Container = styled.header`
  min-height: 65px;
  background: var(--primary);

  div {
    display: flex;
    flex-direction: row;
    min-height: 65px;
    max-width: 70%;

    div:first-child {
      background: rgba(255, 255, 255, 0.2);;
      width: 120px;
      min-height: 30px;
      display: flex;
      margin: auto auto;
    }

    div {
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        color: var(--link);
      }

      a {
        text-decoration: none;
      }

    }

  }
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 25px;
  color: var(--link);
  transition: 0.2s;

  a {
    color: inherit;
  }

  &:hover {
    color: var(--secondary);
  }
`;

export const SpanTitle = styled(Span)`
  color: var(--secondary);
`;
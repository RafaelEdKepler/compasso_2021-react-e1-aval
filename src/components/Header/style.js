import styled from 'styled-components';

export const Container = styled.header`
  min-height: 65px;
  background: var(--primary);

  div {
    display: flex;
    flex-direction: row;
    min-height: 65px;
    max-width: 80%;

    div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
      width: 120px;
      min-height: 30px;
      display: flex;
      margin: auto 35px auto 50px;

      a {
        text-decoration: none;
      }

    }
    select {
      width: 200px;
      border-radius: 5px;
    }

    svg {
      color: var(--link);
      margin-right: 15px;
      transition: .2s;
      height: 15px;
      width: 15px;
    }
  }
`;

export const LinkContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.selected ? 'var(--blue-50)' : 'transparent'};
  padding: 0 25px;

  span, span svg {
    color: ${props => props.selected ? 'var(--secondary)' : 'var(--link)'};
  }

  a {
    text-decoration: none;
  }
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 25px;
  color: var(--link);
  transition: 0.2s;
  display: flex;
  align-items: center;

  a {
    color: inherit;
  }

  &:hover, &:hover svg {
    color: var(--secondary);
  }
`;

export const SpanTitle = styled(Span)`
  color: var(--secondary);
`;

export const PathContainer = styled.div`
  background: var(--secondary);
  display: flex;
  align-items: center;
  height: 50px;

  span {
    margin: 35px 0 35px 50px;
    text-align: center;

    a {
      text-decoration: none;
      color: var(--link);
      transition: .2s;

      &:hover {
        color: var(--blue-50);
      }
    }
  }
`;
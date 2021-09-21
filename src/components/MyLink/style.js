import styled from 'styled-components';

export const LinkContainer = styled.div`
  min-height: 65px;
  min-width: 150px;
  margin: auto 10px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: ${props => props.selected ? 'var(--blue-50)' : 'transparent'};
  padding: 0 25px;

  span, svg {
    color: ${props => props.selected ? 'var(--secondary)' : 'var(--link)'};
  }

  a {
    text-decoration: none;
  }

  @media(min-width: 1360px) {
    min-width: 250px;
  }

  @media(max-width: 1000px) {
    width: 15px;
    min-width: 50px;
    justify-content: center;

    svg {
      min-width: 15px;
      min-height: 15px;
      margin-left: 10px;
      color: ${props => props.selected ? 'var(--secondary)' : 'var(--link)'};
    }

    span {
      display: none;
    }
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

  &:hover, &:hover svg {
    color: var(--secondary);
  }
`;
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

  &:hover, &:hover svg {
    color: var(--secondary);
  }
`;
import styled from 'styled-components';
import { Span } from '../MyLink/style';

export const Container = styled.header`
  min-height: 65px;
  background: var(--primary);
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 65px;
  width: 80%;
  max-width: 1120px;

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
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  width: 120px;
  min-height: 30px;
  display: flex;
  margin: auto 35px auto 50px;
  padding: 5px 15px 5px 15px;

  a {
    text-decoration: none;
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
import styled from 'styled-components';

export const Container = styled.div`
  height: 65px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${props => props.selected ? 'var(--blue-50)' : 'transparent'};
`;

export const ComboContainer = styled.div`
  max-height: 65px;
  width: 300px;

  margin: 0 auto;
`;
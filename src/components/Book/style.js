import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 201px;
  text-align: center;
  border: solid 1pt var(--border);
  border-bottom: 0;
  margin-bottom: 30px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  img {
    margin-left: -1px;
    width: 201px;
    height: 225px;
  }
`;

export const TitleSpan = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 10px 5px;
`;

export const AuthorSpan = styled(TitleSpan)`
    color: var(--link);
`;
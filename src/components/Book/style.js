import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 201px;
  text-align: center;
  border: solid 1pt var(--border);
  border-bottom: 0;

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

export const DropdownMenuContent = styled.div`
  display: none;
  z-index: 1;
  background: #FFF;
  margin-top: 20px;
  box-shadow: 1px 1px 1px 1px var(--border);
`;

export const DropdownMenu = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 40px;
  width: 198px;
  cursor: pointer;
  position: relative;
  border-bottom: solid 1px var(--border);
  border-top: solid 1px var(--border);
  background-color: var(--gray-50);

  span {
    font-family: 16px;
    font-weight: bold;
    color: var(--link);
    transition: 0.2s;

    &:hover {
      color: blue;
    }
  }

  &:hover ${DropdownMenuContent} {
    display: block;
  }
`;

export const SideMenuContent = styled.div`
  width: 200px;
  display: none;
  z-index: 1;
  margin-left: 15px;

  ul {
    list-style: none;
    height: 40px;
    box-shadow: 1px 1px 1px 1px var(--link);

    li {
      color: var(--link);
      transition: .2s;

      &:hover {
        color: blue;
      }
    }
  }
`;

export const SideMenu = styled.div`

  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 25px;

  span {
    width: 200px;
    text-align: center;
    margin: 0;
    margin: 0;
    padding: 0;
  }

  &:hover {
    width: 400px;
  }

  &:hover ${SideMenuContent} {
    display: block;
  }
`;
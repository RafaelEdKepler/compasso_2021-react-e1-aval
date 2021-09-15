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

export const LabelOverviewMenu = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownMenuContent = styled.div`
  display: none;
  z-index: 1;
  background: #FFF;
  box-shadow: 1px 1px 1px 1px var(--border);
  text-align: left;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const DropdownMenu = styled.div`
  display: inline-block;
  margin-top: 10px;
  height: 40px;
  width: 198px;
  cursor: pointer;
  position: relative;
  border-bottom: solid 1px var(--border);
  border-top: solid 1px var(--border);
  background-color: var(--gray-50);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  span {
    font-family: 16px;
    font-weight: bold;
    color: var(--black);
    transition: 0.2s;

    &:hover {
      color: var(--blue-50);
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
  border-radius: 1px;

  ul {
    list-style: none;
    height: 40px;
    box-shadow: 1px 1px 1px 1px var(--link);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;

    li:first-child {
      margin-bottom: 5px;
    }

    li {
      color: var(--black);
      transition: .2s;
      font-size: 12px;
      display: flex;
      align-items: center;

      svg {
        margin: auto 5px auto 10px;
      }

      &:hover {
        color: var(--blue-50);
      }
    }
  }
`;

export const SideMenu = styled.div`

  position: relative;
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 25px;

  span {
    width: 200px;
    font-size: 12px;
    margin-left: 10px;
    padding: 0;
  }

  &:hover {
    width: 400px;
  }

  &:hover ${SideMenuContent} {
    display: block;
  }
`;

export const ExcludeDiv = styled.div`

  display: flex;
  height: 20px;
  align-items: center;

  svg {
    margin: 0 5px 0 10px;
  }

  span {
    font-size: 12px;
  }

  &:hover svg {
    color: var(--blue-50);
  }

  span, svg {
    font-size: 12px;
    color: var(--black);
  }
`;

export const MoveToSpan = styled.span`
  margin: auto auto;
`;
import styled from 'styled-components';

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
  background: var(--secondary);
  box-shadow: 1px 1px 1px 1px var(--border);
  text-align: left;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  div {
    display: flex;


    span {
      margin: auto 0;
      display: flex;
      align-items: center;
      font-size: 12px;

      svg {
        margin: auto 15px auto 5px;
        transition: 0.2s;
      }
    }

    &:hover svg, &:hover span {
      color: var(--blue-50);
    }
  }
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
  display: none !important;
  z-index: 1;
  margin-left: 15px;
  border-radius: 1px;
  background: var(--secondary);

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

  @media(max-width: 500px) {

    width: 50px;

    ul {
      min-height: 60px;

      li {
        display: flex;
        justify-content: center;
        height: 25px;

        svg {
          width: 15px;
          height: 15px;
        }

        span {
          display: none;
        }
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
    padding-left: 10px;
  }

  &:hover {
    width: 400px;
  }

  &:hover ${SideMenuContent} {
    display: block !important;
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
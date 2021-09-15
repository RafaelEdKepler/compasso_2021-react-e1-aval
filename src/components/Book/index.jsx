import useBook from "../../hooks/useBook";
import {
  AuthorSpan,
  Container,
  TitleSpan,
  SideMenu,
  DropdownMenuContent,
  DropdownMenu,
  SideMenuContent,
  LabelOverviewMenu,
  ExcludeDiv,
} from "./style";

import { BiTrashAlt } from "react-icons/bi";
import { AiOutlineBook, AiOutlineCheck } from "react-icons/ai";

export default function Book({ index, thumb, title, author, shelf }) {
  const { changeShelf, removeBookFromShelf } = useBook();

  function changelShelfOptions() {
    if (shelf === 0) {
      return (
        <>
          <li onClick={() => changeShelf(0, index, 1)}>
            <AiOutlineBook />
            Want to read
          </li>
          <li onClick={() => changeShelf(0, index, 2)}>
            <AiOutlineCheck />
            Read
          </li>
        </>
      );
    }
    if (shelf === 1) {
      return (
        <>
          <li onClick={() => changeShelf(1, index, 0)}>
            <AiOutlineBook />
            Currently reading
          </li>
          <li onClick={() => changeShelf(1, index, 2)}>
            <AiOutlineCheck />
            Read
          </li>
        </>
      );
    }
    if (shelf === 2) {
      return (
        <>
          <li onClick={() => changeShelf(2, index, 0)}>
            <AiOutlineBook />
            Currently reading
          </li>
          <li onClick={() => changeShelf(2, index, 1)}>
            <AiOutlineCheck />
            Want to read again
          </li>
        </>
      );
    }
  }

  return (
    <Container>
      <img src={thumb} />
      <TitleSpan>{title}</TitleSpan>
      <AuthorSpan>{author && author.map((author) => author)}</AuthorSpan>
      <DropdownMenu>
        <LabelOverviewMenu>
          <span>...</span>
        </LabelOverviewMenu>
        <DropdownMenuContent>
          <SideMenu>
            <span>Move to shelf</span>
            <SideMenuContent>
              <ul>{changelShelfOptions()}</ul>
            </SideMenuContent>
          </SideMenu>
          <ExcludeDiv onClick={() => removeBookFromShelf(index, shelf)}>
            <BiTrashAlt />
            <span>Remove from the shelf</span>
          </ExcludeDiv>
        </DropdownMenuContent>
      </DropdownMenu>
    </Container>
  );
}

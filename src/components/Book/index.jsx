import useBook from "../../hooks/useBook";
import {
  AuthorSpan,
  Container,
  TitleSpan,
  SideMenu,
  DropdownMenuContent,
  DropdownMenu,
  SideMenuContent,
} from "./style";

export default function Book({ index, thumb, title, author, shelf }) {
  const { changeShelf } = useBook();

  function changelShelfOptions() {
    if (shelf === 0) {
      return (
        <>
          <li onClick={() => changeShelf(0, index, 1)}>Want to read</li>
          <li onClick={() => changeShelf(0, index, 2)}>Read</li>
        </>
      );
    }
    if (shelf === 1) {
      return (
        <>
          <li onClick={() => changeShelf(1, index, 0)}>Currently reading</li>
          <li onClick={() => changeShelf(1, index, 2)}>Read</li>
        </>
      );
    }
    if (shelf === 2) {
      return (
        <>
          <li onClick={() => changeShelf(2, index, 0)}>Currently reading</li>
          <li onClick={() => changeShelf(2, index, 1)}>Want to read</li>
        </>
      );
    }
  }

  return (
    <Container>
      <img src={thumb} />
      <TitleSpan>{title}</TitleSpan>
      <AuthorSpan>{author.map((author) => author)}</AuthorSpan>
      <DropdownMenu>
        <span>...</span>
        <DropdownMenuContent>
          <SideMenu>
            <span>Move to shelf</span>
            <SideMenuContent>
              <ul>{changelShelfOptions()}</ul>
            </SideMenuContent>
          </SideMenu>
          <span>Remove from the shelf</span>
        </DropdownMenuContent>
      </DropdownMenu>
    </Container>
  );
}

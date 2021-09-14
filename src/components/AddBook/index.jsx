import { useState } from "react";
import useBook from "../../hooks/useBook";
import {
  AuthorSpan,
  Container,
  TitleSpan,
  DropdownMenuContent,
  DropdownMenu,
} from "../Book/style";

export default function Book({ index, thumb, title, author, shelf }) {
  const [added, setAdded] = useState(false);
  const { addBookToShelf } = useBook();

  async function addBook(book, shelf) {
    await addBookToShelf(book, shelf);
    setAdded(true);
  }

  return (
    <Container>
      <img src={thumb} />
      <TitleSpan>{title}</TitleSpan>
      <AuthorSpan>{author && author.map((author) => author)}</AuthorSpan>
      <DropdownMenu>
        <span>Move to...</span>
        <DropdownMenuContent>
          {!added ? (
            <>
              <div onClick={() => addBook(index, "currentlyReading")}>
                <span>Currently reading</span>
              </div>
              <div onClick={() => addBook(index, "wantToRead")}>
                <span>Want to read</span>
              </div>
              <div onClick={() => addBook(index, "read")}>
                <span>Read</span>
              </div>
            </>
          ) : (
            <div>
              <span>Added</span>
            </div>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </Container>
  );
}

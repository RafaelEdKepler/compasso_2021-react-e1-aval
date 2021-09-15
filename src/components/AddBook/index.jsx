import { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";
import useBook from "../../hooks/useBook";
import {
  AuthorSpan,
  Container,
  TitleSpan,
  DropdownMenuContent,
  DropdownMenu,
  LabelOverviewMenu,
} from "../Book/style";
import { SpinRotate } from "../../global/style";

export default function Book({ index, thumb, title, author, shelf }) {
  const [added, setAdded] = useState(0);
  const { addBookToShelf } = useBook();

  async function addBook(book, shelf) {
    setAdded(1);
    await addBookToShelf(book, shelf);
    setAdded(2);
  }

  function loadingSpin() {
    if (added === 1) {
      return (
        <LabelOverviewMenu>
          <SpinRotate>
            <ImSpinner2 />
          </SpinRotate>
        </LabelOverviewMenu>
      );
    }
    if (added === 2) {
      return (
        <LabelOverviewMenu>
          <AiFillCheckCircle />
        </LabelOverviewMenu>
      );
    }
  }

  return (
    <Container>
      <img src={thumb} />
      <TitleSpan>{title}</TitleSpan>
      <AuthorSpan>{author && author.map((author) => author)}</AuthorSpan>
      <DropdownMenu>
        {added === 0 ? (
          <>
            <LabelOverviewMenu>
              <span>Move to...</span>
            </LabelOverviewMenu>
            <DropdownMenuContent>
              <div onClick={() => addBook(index, "currentlyReading")}>
                <span>Currently reading</span>
              </div>
              <div onClick={() => addBook(index, "wantToRead")}>
                <span>Want to read</span>
              </div>
              <div onClick={() => addBook(index, "read")}>
                <span>Read</span>
              </div>
            </DropdownMenuContent>
          </>
        ) : (
          loadingSpin()
        )}
      </DropdownMenu>
    </Container>
  );
}

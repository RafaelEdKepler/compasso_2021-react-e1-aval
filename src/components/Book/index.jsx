import { AuthorSpan, Container, TitleSpan } from "./style";

import MenuBook from "../MenuBook";

export default function Book({ book, shelf, type }) {
  return (
    <Container>
      <img src={book.imageLinks && book.imageLinks.thumbnail} />
      <TitleSpan>{book.title}</TitleSpan>
      <AuthorSpan>
        {book.authors && book.authors.map((author) => author)}
      </AuthorSpan>
      <MenuBook index={book.id} shelf={shelf} type={type} />
    </Container>
  );
}

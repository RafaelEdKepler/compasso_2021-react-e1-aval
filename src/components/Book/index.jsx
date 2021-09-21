import { AuthorSpan, Container, TitleSpan } from "./style";

import Menu from "../Menu";

export default function Book({ book, shelf, type }) {
  return (
    <Container>
      <img
        src={book.imageLinks && book.imageLinks.thumbnail}
        alt={book.title}
      />
      <TitleSpan>{book.title}</TitleSpan>
      <AuthorSpan>
        {book.authors && book.authors.map((author) => author)}
      </AuthorSpan>
      <Menu index={book.id} shelf={shelf} type={type} />
    </Container>
  );
}

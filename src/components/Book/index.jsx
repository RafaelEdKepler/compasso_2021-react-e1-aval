import { AuthorSpan, Container, TitleSpan } from "./style";

import MenuBook from "../MenuBook";

export default function Book({ index, thumb, title, author, shelf, type }) {
  return (
    <Container>
      <img src={thumb} />
      <TitleSpan>{title}</TitleSpan>
      <AuthorSpan>{author && author.map((author) => author)}</AuthorSpan>
      <MenuBook index={index} shelf={shelf} type={type} />
    </Container>
  );
}

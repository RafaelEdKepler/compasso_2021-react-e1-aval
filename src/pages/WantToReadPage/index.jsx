import Book from "../../components/Book";
import Header from "../../components/Header";
import useBook from "../../hooks/useBook";
import { Container } from "../style";

export default function WantToReadPage() {
  const { wantToRead } = useBook();
  return (
    <div>
      <Header />
      <Container>
        {wantToRead &&
          wantToRead.map((item) => (
            <Book
              key={item.id}
              index={item.id}
              title={item.title}
              author={item.authors}
              thumb={item.imageLinks.thumbnail}
              shelf={1}
            />
          ))}
      </Container>
    </div>
  );
}

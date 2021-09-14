import Book from "../../components/Book";
import Header from "../../components/Header";
import useBook from "../../hooks/useBook";
import { Container } from "../style";

export default function ReadPage() {
  const { read } = useBook();
  return (
    <div>
      <Header />
      <Container>
        {read &&
          read.map((item) => (
            <Book
              key={item.id}
              index={item.id}
              title={item.title}
              author={item.authors}
              thumb={item.imageLinks.thumbnail}
              shelf={2}
            />
          ))}
      </Container>
    </div>
  );
}

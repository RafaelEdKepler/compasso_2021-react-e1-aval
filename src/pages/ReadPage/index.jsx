import Book from "../../components/Book";
import Footer from "../../components/Footer";
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
              thumb={item.imageLinks && item.imageLinks.thumbnail}
              shelf={2}
              type="shelf"
            />
          ))}
      </Container>
      <Footer />
    </div>
  );
}

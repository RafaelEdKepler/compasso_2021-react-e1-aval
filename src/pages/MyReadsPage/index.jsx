import Book from "../../components/Book";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useBook from "../../hooks/useBook";
import { Container } from "../style";

export default function MyReadsPage() {
  const { currentlyReadings } = useBook();

  return (
    <div>
      <Header />
      <Container>
        {currentlyReadings &&
          currentlyReadings.map((item) => (
            <Book
              key={item.id}
              index={item.id}
              title={item.title}
              author={item.authors}
              thumb={item.imageLinks && item.imageLinks.thumbnail}
              shelf={0}
            />
          ))}
      </Container>
      <Footer />
    </div>
  );
}

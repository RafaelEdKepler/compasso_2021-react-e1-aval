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
            <Book key={item.id} book={item} shelf={0} type="shelf" />
          ))}
      </Container>
      <Footer />
    </div>
  );
}

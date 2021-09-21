import Book from "../../components/Book";
import Footer from "../../components/Footer";
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
          wantToRead.map((item) => <Book book={item} shelf={0} type="shelf" />)}
      </Container>
      <Footer />
    </div>
  );
}

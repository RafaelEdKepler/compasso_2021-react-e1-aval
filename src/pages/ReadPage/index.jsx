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
          read.map((item) => <Book book={item} shelf={0} type="shelf" />)}
      </Container>
      <Footer />
    </div>
  );
}

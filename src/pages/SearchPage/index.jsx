import { useEffect } from "react";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import useBook from "../../hooks/useBook";
import { Container } from "../style";

export default function SearchPage() {
  const { search } = useBook();

  return (
    <div>
      <Header />
      <Container>
        {search &&
          search.map((item) => (
            <Book key={item.id} book={item} shelf={0} type="search" />
          ))}
      </Container>
      <Footer />
    </div>
  );
}

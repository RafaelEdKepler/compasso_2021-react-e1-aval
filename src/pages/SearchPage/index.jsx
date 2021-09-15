import { useEffect } from "react";
import AddBook from "../../components/AddBook";
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
            <AddBook
              key={item.id}
              index={item.id}
              title={item.title}
              author={item.authors}
              thumb={item.imageLinks && item.imageLinks.thumbnail}
              shelf={2}
            />
          ))}
      </Container>
      <Footer />
    </div>
  );
}

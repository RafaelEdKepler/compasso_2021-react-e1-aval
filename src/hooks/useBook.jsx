import { createContext, useState, useContext, useEffect } from "react";
import { updateBook, getMyBooks, searchBooks, getBook } from "../api";
import { useHistory, useLocation } from "react-router-dom";

const BookContext = createContext({});

export function BookProvider({ children }) {
  const [currentlyReadings, setCurrentlyReadings] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [search, setSearch] = useState([]);

  const history = useHistory();

  useEffect(() => {
    provideMyBooks();
  }, []);

  async function provideMyBooks() {
    const response = await getMyBooks();
    if (response.books) {
      setWantToRead(
        response.books.filter((item) => item.shelf === "wantToRead")
      );
      setCurrentlyReadings(
        response.books.filter((item) => item.shelf === "currentlyReading")
      );

      setRead(response.books.filter((item) => item.shelf === "read"));
    }
  }

  /*
  origin/destiny
  0 => currently reading
  1 => want to read
  2 => read
  */
  const changeShelf = async (origin, index, destiny) => {
    let book = {};
    if (origin === 0) {
      book = currentlyReadings.filter((item) => item.id === index).shift();
      setCurrentlyReadings(
        currentlyReadings.filter((item) => item.id !== index)
      );
    }

    if (origin === 1) {
      book = wantToRead.filter((item) => item.id === index).shift();
      setWantToRead(wantToRead.filter((item) => item.id !== index));
    }

    if (origin === 2) {
      book = read.filter((item) => item.id === index).shift();
      setRead(read.filter((item) => item.id !== index));
    }

    if (book) {
      if (destiny === 0) {
        setCurrentlyReadings([...currentlyReadings, book]);
        await updateBook(book, "currentlyReading");
      }
      if (destiny === 1) {
        setWantToRead([...wantToRead, book]);
        await updateBook(book, "wantToRead");
      }
      if (destiny === 2) {
        setRead([...read, book]);
        await updateBook(book, "read");
      }
    }
  };

  const searchBooksByType = async (type) => {
    const response = await searchBooks(type);
    history.push("/search");
    if (response) {
      setSearch(response.books);
    }
  };

  const addBookToShelf = async (idBook, shelf) => {
    const response = await getBook(idBook);
    if (response && response.book) {
      await updateBook(response.book, shelf);
      await provideMyBooks();
    }
  };

  /*
  origin
  0 => currently reading
  1 => want to read
  2 => read
  */
  const removeBookFromShelf = async (index, origin) => {
    let book = {};
    if (index) {
      if (origin === 0) {
        book = currentlyReadings.filter((item) => item.id === index).shift();
        setCurrentlyReadings(
          currentlyReadings.filter((item) => item.id !== index)
        );
      }
      if (origin === 1) {
        book = wantToRead.filter((item) => item.id === index).shift();
        setWantToRead(wantToRead.filter((item) => item.id !== index));
      }
      if (origin === 2) {
        book = read.filter((item) => item.id === index).shift();
        setRead(read.filter((item) => item.id !== index));
      }
      await updateBook(book, "noShelf");
    }
  };

  return (
    <BookContext.Provider
      value={{
        currentlyReadings,
        setCurrentlyReadings,
        wantToRead,
        setWantToRead,
        read,
        setRead,
        changeShelf,
        searchBooksByType,
        search,
        addBookToShelf,
        removeBookFromShelf,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default function useBook() {
  return useContext(BookContext);
}

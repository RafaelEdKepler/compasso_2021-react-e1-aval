import { createContext, useState, useContext, useEffect } from "react";
import { updateBook, getMyBooks, searchBooks, getBook } from "../api";
import { useHistory, useLocation } from "react-router-dom";

const BookContext = createContext({});

export function BookProvider({ children }) {
  const [currentlyReadings, setCurrentlyReadings] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  const [search, setSearch] = useState([]);
  const [type, setType] = useState("nooptions");

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    provideMyBooks();
    if (!location.pathname.includes("search")) {
      setType("nooptions");
    }
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

  const changeShelf = async (origin, index, destiny) => {
    let shelf = [];
    let book = {};
    if (origin === 0) {
      shelf = [...currentlyReadings];
      book = shelf.filter((item) => item.id === index).shift();
      setCurrentlyReadings(shelf.filter((item) => item.id !== index));
    }

    if (origin === 1) {
      shelf = [...wantToRead];
      book = shelf.filter((item) => item.id === index).shift();
      setWantToRead(shelf.filter((item) => item.id !== index));
    }

    if (origin === 2) {
      shelf = [...read];
      book = shelf.filter((item) => item.id === index).shift();
      setRead(shelf.filter((item) => item.id !== index));
    }

    if (book) {
      if (destiny === 0) {
        setCurrentlyReadings([...currentlyReadings, book]);
        await updateBook(book, "currentlyReading");
      }
      if (destiny === 1) {
        setWantToRead([...wantToRead, book]);
        const response = await updateBook(book, "wantToRead");
        console.log(response);
      }
      if (destiny === 2) {
        setRead([...read, book]);
        await updateBook(book, "read");
      }
    }
  };

  const searchBooksByType = async (type) => {
    setType(type);
    const response = await searchBooks(type);
    if (response) {
      setSearch(response.books);
    }
    history.push("/search");
  };

  const addBookToShelf = async (idBook, shelf) => {
    const responseMyBook = await getBook(idBook);
    if (responseMyBook) {
      const book = responseMyBook.book;
      await updateBook(book, shelf);
      await provideMyBooks();
    }
  };

  const removeBookFromShelf = async (index, origin) => {
    let shelf = [];
    let book = {};
    if (index) {
      if (origin === 0) {
        shelf = [...currentlyReadings];
        book = shelf.filter((item) => item.id === index).shift();
        setCurrentlyReadings(shelf.filter((item) => item.id !== index));
      }
      if (origin === 1) {
        shelf = [...wantToRead];
        book = shelf.filter((item) => item.id === index).shift();
        setWantToRead(shelf.filter((item) => item.id !== index));
      }
      if (origin === 2) {
        shelf = [...read];
        book = shelf.filter((item) => item.id === index).shift();
        setRead(shelf.filter((item) => item.id !== index));
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
        type,
        setType,
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

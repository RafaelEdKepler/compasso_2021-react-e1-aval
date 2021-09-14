import { createContext, useState, useContext, useEffect } from "react";
import { updateBook, getMyBooks } from "../api";

const BookContext = createContext({});

export function BookProvider({ children }) {
  const [currentlyReadings, setCurrentlyReadings] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
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
    provideMyBooks();
  }, []);

  const changeShelf = async (origin, index, destiny) => {
    let shelf = [];
    let book = {};
    if (origin === 0) {
      shelf = [...currentlyReadings];
      book = shelf.filter((item) => item.id === index);
      setCurrentlyReadings(shelf.filter((item) => item.id !== index));
    }

    if (origin === 1) {
      shelf = [...wantToRead];
      book = shelf.filter((item) => item.id === index);
      setWantToRead(shelf.filter((item) => item.id !== index));
    }

    if (origin === 2) {
      shelf = [...read];
      book = shelf.filter((item) => item.id === index);
      setRead(shelf.filter((item) => item.id !== index));
    }

    if (book) {
      if (destiny === 0) {
        setCurrentlyReadings([...currentlyReadings, book[0]]);
        await updateBook(book[0], "currentlyReading");
      }
      if (destiny === 1) {
        setWantToRead([...wantToRead, book[0]]);
        const response = await updateBook(book[0], "wantToRead");
        console.log(response);
      }
      if (destiny === 2) {
        setRead([...read, book[0]]);
        await updateBook(book[0], "read");
      }
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
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default function useBook() {
  return useContext(BookContext);
}

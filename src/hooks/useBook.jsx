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
      let shelfs = response.books.map((item) => item.shelf + ", ");
      console.log(shelfs);
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

  const changeShelf = (origin, index, destiny) => {
    let shelf = [];
    let book = {};
    if (origin === 0) {
      shelf = [...wantToRead];
      book = shelf.filter((item) => item.id === index);
      setWantToRead(shelf.filter((item) => item.id !== index));
    }

    if (origin === 1) {
      shelf = [...currentlyReadings];
      book = shelf.filter((item) => item.id === index);
      setCurrentlyReadings(shelf.filter((item) => item.id !== index));
    }

    if (origin === 2) {
      shelf = [...read];
      book = shelf.filter((item) => item.id === index);
      setRead(shelf.filter((item) => item.id !== index));
    }

    if (!!book) {
      if (destiny === 0) {
        setWantToRead([...wantToRead, book]);
      }
      if (destiny === 1) {
        setCurrentlyReadings([...currentlyReadings, book]);
      }
      if (destiny === 2) {
        setRead([...read, book]);
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

import { Link, useLocation } from "react-router-dom";

import {
  Container,
  Span,
  SpanTitle,
  PathContainer,
  LinkContainer,
} from "./style";
import { AiOutlineEye, AiOutlineBook, AiOutlineCheck } from "react-icons/ai";

import { types } from "../../utils/bookTypes";
import { useEffect, useState } from "react";
import useBook from "../../hooks/useBook";

export default function Header() {
  const [selectedOption, setSelectedOption] = useState("nooption");
  const { searchBooksByType, type } = useBook();

  const location = useLocation();

  function transcriptRoute() {
    return location.pathname
      .substr(1, location.pathname.length)
      .replace(/_/g, " ");
  }

  useEffect(() => {
    setSelectedOption(type);
  });

  return (
    <>
      <Container>
        <div>
          <div>
            <Link to="/">
              <SpanTitle>MyReads</SpanTitle>
            </Link>
          </div>
          <LinkContainer
            selected={location.pathname.includes("/currently_reading")}
          >
            <Span>
              <AiOutlineEye />
              <Link to="/currently_reading">Currently reading</Link>
            </Span>
          </LinkContainer>
          <LinkContainer selected={location.pathname.includes("/want_to_read")}>
            <Span>
              <AiOutlineBook />
              <Link to="/want_to_read">Want to Read</Link>
            </Span>
          </LinkContainer>
          <LinkContainer selected={location.pathname.includes("/read")}>
            <Span>
              <AiOutlineCheck />
              <Link to="/read">Read</Link>
            </Span>
          </LinkContainer>
          <LinkContainer selected={location.pathname.includes("search")}>
            <select onChange={(e) => searchBooksByType(e.target.value)}>
              <option
                value="nooption"
                selected={selectedOption === "nooption"}
                disabled
              >
                Search other books
              </option>
              {types &&
                types.map((type) => (
                  <option
                    key={type}
                    value={type}
                    selected={type === selectedOption}
                    onSelect={(type) => searchBooksByType(type)}
                  >
                    {type}
                  </option>
                ))}
            </select>
          </LinkContainer>
        </div>
      </Container>
      <PathContainer>
        <span>
          <Link to="/">Home </Link>/ {transcriptRoute()}
        </span>
      </PathContainer>
    </>
  );
}

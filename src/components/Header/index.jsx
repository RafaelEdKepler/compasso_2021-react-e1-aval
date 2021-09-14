import { Link } from "react-router-dom";

import { Container, Span, SpanTitle } from "./style";
import { AiFillEye } from "react-icons/ai";

import { types } from "../../utils/bookTypes";
import { useEffect, useState } from "react";
import useBook from "../../hooks/useBook";

export default function Header(type) {
  const [selectedOption, setSelectedOption] = useState("");
  const { searchBooksByType } = useBook();

  useEffect(() => {
    if (type) {
      setSelectedOption(type);
    }
  });

  return (
    <Container>
      <div>
        <div>
          <a href="/">
            <SpanTitle>MyReads</SpanTitle>
          </a>
        </div>
        <div>
          <img src={AiFillEye} />
          <a href="#">
            <Span>
              <Link to="/">Currently reading</Link>
            </Span>
          </a>
        </div>
        <div>
          <img src="" />
          <a href="#">
            <Span>
              <Link to="/wantToRead">Want to Read</Link>
            </Span>
          </a>
        </div>
        <div>
          <img src="" />
          <a href="#">
            <Span>
              <Link to="/read">Read</Link>
            </Span>
          </a>
        </div>
        <div>
          <select
            onChange={(e) => searchBooksByType(e.target.value)}
            defaultValue={type ? type : ""}
          >
            <option value="" disabled>
              Search other books
            </option>
            {types &&
              types.map((type) => (
                <option
                  key={type}
                  value={type}
                  onSelect={(type) => searchBooksByType(type)}
                >
                  {type}
                </option>
              ))}
          </select>
        </div>
      </div>
    </Container>
  );
}

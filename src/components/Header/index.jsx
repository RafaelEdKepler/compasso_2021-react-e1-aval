import { Link, useLocation } from "react-router-dom";

import {
  Container,
  Span,
  SpanTitle,
  PathContainer,
  LinkContainer,
  SelectContainer,
  HeaderContainer,
  BrandContainer,
} from "./style";
import { AiOutlineEye, AiOutlineBook, AiOutlineCheck } from "react-icons/ai";
import SingleSelect from "../SingleSelect";

export default function Header() {
  const location = useLocation();

  function transcriptRoute() {
    return location.pathname
      .substr(1, location.pathname.length)
      .replace(/_/g, " ");
  }

  return (
    <>
      <Container>
        <HeaderContainer>
          <BrandContainer>
            <Link to="/">
              <SpanTitle>MyReads</SpanTitle>
            </Link>
          </BrandContainer>
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
          <SelectContainer>
            <SingleSelect />
          </SelectContainer>
        </HeaderContainer>
      </Container>
      <PathContainer>
        <span>
          <Link to="/">Home </Link>/ {transcriptRoute()}
        </span>
      </PathContainer>
    </>
  );
}

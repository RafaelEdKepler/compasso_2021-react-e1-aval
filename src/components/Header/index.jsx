import { Link, useLocation } from "react-router-dom";

import {
  Container,
  SpanTitle,
  PathContainer,
  HeaderContainer,
  BrandContainer,
} from "./style";
import { AiOutlineEye, AiOutlineBook, AiOutlineCheck } from "react-icons/ai";
import SingleSelect from "../SingleSelect";
import MyLink from "../MyLink";

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
          <MyLink route="currently_reading" title="Currently Reading">
            <AiOutlineEye />
          </MyLink>
          <MyLink route="want_to_read" title="Want to read">
            <AiOutlineBook />
          </MyLink>
          <MyLink route="read" title="Read">
            <AiOutlineCheck />
          </MyLink>
          <SingleSelect />
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

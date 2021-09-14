import { Link } from "react-router-dom";

import { Container, Span, SpanTitle } from "./style";
import { AiFillEye } from "react-icons/ai";

export default function Header() {
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
          <select>
            <option>...</option>
          </select>
        </div>
      </div>
    </Container>
  );
}

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
            <Span>Currently reading</Span>
          </a>
        </div>
        <div>
          <img src="" />
          <a href="#">
            <Span>Want to Read</Span>
          </a>
        </div>
        <div>
          <img src="" />
          <a href="#">
            <Span>Read</Span>
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

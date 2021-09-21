import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { LinkContainer, Span } from "./style";

export default function MyLink({ title, route, children }) {
  const location = useLocation();

  return (
    <Link to={"/" + route}>
      <LinkContainer selected={location.pathname.includes("/" + route)}>
        <Span>
          {children}
          {title}
        </Span>
      </LinkContainer>
    </Link>
  );
}

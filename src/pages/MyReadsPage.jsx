import Header from "../components/Header";
import useBook from "../hooks/useBook";

export default function MyReadsPage() {
  const { wantToRead } = useBook();

  return (
    <div>
      <Header />
      {wantToRead &&
        wantToRead.map((item) => (
          <div>
            <img src={item.imageLinks.thumbnail} alt={item.title} />
            <span>{item.title}</span>
          </div>
        ))}
    </div>
  );
}

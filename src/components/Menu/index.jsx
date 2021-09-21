import { useState } from "react";
import {
  AiFillCheckCircle,
  AiOutlineBook,
  AiOutlineCheck,
  AiOutlineEye,
} from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import { SpinRotate } from "../../global/style";
import useBook from "../../hooks/useBook";
import {
  DropdownMenu,
  DropdownMenuContent,
  ExcludeDiv,
  LabelOverviewMenu,
  SideMenu,
  SideMenuContent,
} from "./style";

export default function Menu({ shelf, index, type }) {
  const [added, setAdded] = useState(0);
  const { changeShelf, removeBookFromShelf, addBookToShelf } = useBook();

  function changeShelfOptions() {
    if (shelf === 0) {
      return (
        <>
          <li onClick={() => changeShelf(0, index, 1)}>
            <AiOutlineBook />
            <span>Want to read</span>
          </li>
          <li onClick={() => changeShelf(0, index, 2)}>
            <AiOutlineCheck />
            <span>Read</span>
          </li>
        </>
      );
    }
    if (shelf === 1) {
      return (
        <>
          <li onClick={() => changeShelf(1, index, 0)}>
            <AiOutlineEye />
            <span>Currently reading</span>
          </li>
          <li onClick={() => changeShelf(1, index, 2)}>
            <AiOutlineCheck />
            <span>Read</span>
          </li>
        </>
      );
    }
    if (shelf === 2) {
      return (
        <>
          <li onClick={() => changeShelf(2, index, 0)}>
            <AiOutlineEye />
            <span>Currently reading</span>
          </li>
          <li onClick={() => changeShelf(2, index, 1)}>
            <AiOutlineBook />
            <span>Want to read again</span>
          </li>
        </>
      );
    }
  }

  async function addBook(book, shelf) {
    setAdded(1);
    await addBookToShelf(book, shelf);
    setAdded(2);
  }

  function loadingSpin() {
    if (added === 1) {
      return (
        <LabelOverviewMenu>
          <SpinRotate>
            <ImSpinner2 />
          </SpinRotate>
        </LabelOverviewMenu>
      );
    }
    if (added === 2) {
      return (
        <LabelOverviewMenu>
          <AiFillCheckCircle />
        </LabelOverviewMenu>
      );
    }
  }

  return (
    <DropdownMenu>
      {type === "shelf" ? (
        <>
          <LabelOverviewMenu>
            <span>...</span>
          </LabelOverviewMenu>
          <DropdownMenuContent>
            <SideMenu>
              <span>Move to shelf</span>
              <SideMenuContent>
                <ul>{changeShelfOptions()}</ul>
              </SideMenuContent>
            </SideMenu>
            <ExcludeDiv onClick={() => removeBookFromShelf(index, shelf)}>
              <BiTrashAlt />
              <span>Remove from the shelf</span>
            </ExcludeDiv>
          </DropdownMenuContent>
        </>
      ) : (
        <>
          {added === 0 ? (
            <>
              <LabelOverviewMenu>
                <span>Move to...</span>
              </LabelOverviewMenu>
              <DropdownMenuContent>
                <div onClick={() => addBook(index, "currentlyReading")}>
                  <span>
                    <AiOutlineEye />
                    Currently reading
                  </span>
                </div>
                <div onClick={() => addBook(index, "wantToRead")}>
                  <span>
                    <AiOutlineBook />
                    Want to read
                  </span>
                </div>
                <div onClick={() => addBook(index, "read")}>
                  <span>
                    <AiOutlineCheck />
                    Read
                  </span>
                </div>
              </DropdownMenuContent>
            </>
          ) : (
            loadingSpin()
          )}
        </>
      )}
    </DropdownMenu>
  );
}

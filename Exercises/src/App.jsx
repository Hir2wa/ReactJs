import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import About from "./pages/About";
import Book from "./pages/Book";
import BooksList from "./pages/BooksList";
import NewPage from "./pages/NewPage";
import NotFound from "./pages/NotFound";
import BookLayout from "./pages/BookLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            {/*   link tag has more properties like replace and reloadDocument which used in different useCase   State property  */}
          </li>
          <li>
            <NavLink
              to="/books"
              end
              ///these will course the style applied to only be applied on the parent class only not even on the children class
              // style={({ isActive }) => {
              //   return isActive ? { color: "red" } : { color: "blue" };
              // }}
            >
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BooksList />}></Route>
          <Route path=":id" element={<Book />}></Route>
          <Route path="new" element={<NewPage />}></Route>
        </Route>

        {/* <Route path="/book" element={<BooksList />}></Route>
        <Route path="book/:id" element={<Book />}></Route>
        <Route path="book/new" element={<NewPage />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

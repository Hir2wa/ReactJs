import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import { Route, Routes, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [search, setSearch] = useState("");
  const [post, setPost] = useState([
    {
      id: 1,
      title: "Welcome to My Blog",
      datetime: "June 30, 2025 12:00 PM",
      body: "Hey there! This is my first post on the blog. Stay tuned for more content!",
    },
    {
      id: 2,
      title: "Why I Love React ❤️",
      datetime: "July 1, 2025 09:30 AM",
      body: "React makes building UIs fun and powerful. The component-based structure is game-changing!",
    },
    {
      id: 3,
      title: "Tips for Learning JavaScript",
      datetime: "July 2, 2025 05:45 PM",
      body: "Start with the basics, build small projects, and don't forget to master ES6+ features!",
    },
    {
      id: 4,
      title: "React Router in 5 Minutes",
      datetime: "July 3, 2025 08:15 AM",
      body: "React Router helps you build single-page applications that feel multi-page. It's 🔥",
    },
    {
      id: 5,
      title: "The Power of useState and useEffect",
      datetime: "July 3, 2025 06:00 PM",
      body: "React Hooks changed everything. Learn to manage state and side effects like a pro.",
    },
  ]);
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="App">
      <Header title="React Blog" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="post/:id" element={<NewPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Missing />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;

import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import Post from "./Post";
import Missing from "./Missing";
import About from "./About";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <Post />
      <NewPost />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}
export default App;

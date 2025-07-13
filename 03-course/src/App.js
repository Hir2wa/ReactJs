import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/post">
          <PostPage />
        </Route>
        <Route path="post/:id">
          <NewPost />
        </Route>

        <About />
        <Missing />
      </Switch>

      <Footer />
    </div>
  );
}
export default App;

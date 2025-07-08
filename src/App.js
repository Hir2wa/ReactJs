// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ListKeys from "./ListKeys";
function App() {
  return (
    <div className="App">
      <Header title="Grocery List " />
      <Content />
      <ListKeys />
      <Footer />
    </div>
  );
}

export default App;

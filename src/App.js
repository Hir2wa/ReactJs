// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import ListKeys from "./ListKeys";
function App() {
  const [items, setItems] = useState([
    { id: 1, item: "shoes", checked: true },
    { id: 2, item: "t-shirt", checked: false },
    { id: 3, item: "jacket", checked: true },
  ]);

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

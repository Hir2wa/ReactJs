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

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setItems(listItems);
    localStorage.setItem("Item-List", JSON.stringify(listItems));
  };
  const handeDelete = (id) => {
    const listItems = items.filter((items) => items.id !== id);
    setItems(listItems);
    localStorage.setItem("Item-List", JSON.stringify(listItems));
  };
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

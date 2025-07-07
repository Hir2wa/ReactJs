// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
function App() {
  // const handleNameChanges = () => {
  //   let name = ["Alain", "Hirwa", "Fabrice"];
  //   let init = Math.floor(Math.random() * 3);
  //   return name[init];
  // };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> changed.
        </p>
        <p> Hello {handleNameChanges()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Header />
      <Content />
    </div>
  );
}

export default App;

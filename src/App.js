import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid w-25" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <a
          href="https://github.com/taybauer/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>{" "}
        code by{" "}
        <a href="https://github.com/taybauer" target="_blank" rel="noreferrer">
          Taylor Bauer
        </a>
        . Hosted on{" "}
        <a
          href="https://tubular-duckanoo-73125c.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Hero from "./components/Hero";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Hero />
      {/* Komponen lain nanti nyusul */}
    </>
  );
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./components/List";
import ListVirtualize from "./components/ListVirtualize";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <List/> */}
      <ListVirtualize />
    </>
  );
}

export default App;

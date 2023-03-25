import { useState } from "react";

import "./App.css";
import ComA from "./components/ComA";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ComA />
    </div>
  );
}

export default App;

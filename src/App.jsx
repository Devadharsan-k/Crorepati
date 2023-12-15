import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Question from "./Components/Questions/Question";
function App() {
  const [moneyLevel, setMoneyLevel] = useState(1);
  return (
    <div className="main">
      <Navbar setMoneyLevel={setMoneyLevel} moneyLevel={moneyLevel} />
      <Question setMoneyLevel={setMoneyLevel} />
    </div>
  );
}

export default App;

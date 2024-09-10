import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoPage from "./components/Nopage";

import StateExample from "./useState/StateExample";
import EffectExample from "./useEffect/EffectExample";
import ReducerExample from "./useReduce/ReduceExample";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>

      <StateExample />
      <EffectExample />
      <ReducerExample />
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Recette from "./components/Recette";
import Home from "./pages/Home";
import data from "./data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:title" element={<Recette data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

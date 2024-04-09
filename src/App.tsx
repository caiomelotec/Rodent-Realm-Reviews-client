import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/NavBar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { GameDetails } from "./pages/GameDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

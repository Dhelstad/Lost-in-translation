import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./wiews/Login";
import Orders from "./wiews/Orders";
import Profile from "./wiews/Profile";
import "animate.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <header>
        <h1 className="animate__animated animate__bounce">
          Lost in translation
        </h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

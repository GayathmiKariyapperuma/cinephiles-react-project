import "./styles.css";
import { Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Genre from "./pages/Genre";
import Top50 from "./pages/Top50";
import BestFilms from "./pages/BestFilms";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="mainContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/top-50" element={<Top50 />} />
            <Route path="/best-picture" element={<BestFilms />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

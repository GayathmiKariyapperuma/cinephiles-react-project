import "./styles.css";
import { Route, Routes } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import GetHelp from "./pages/GetHelp";

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
            <Route path="/get-help" element={<GetHelp />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import Home from "./components/pages/Home";
import Packages from "./components/pages/Packages";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/packages" element={<Packages />}/>
          <Route path="/shop" element={<Shop/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

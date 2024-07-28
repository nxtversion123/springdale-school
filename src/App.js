import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Addmissions from "./pages/Addmissions";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exaxt path="/" element={<Home style={{backgroundColor:"aqua"}}/>} />
          <Route exaxt path="/about" element={<About />} />
          <Route exaxt path="/academics" element={<Academics />} />
          <Route exaxt path="/addmissions" element={<Addmissions />} />
          <Route exaxt path="/faculty" element={<Faculty />} />
          <Route exaxt path="/students" element={<Students />} />
          <Route exaxt path="/gallery" element={<Gallery />} />
          <Route exaxt path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

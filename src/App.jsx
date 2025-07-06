import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listado from "./pages/Listado";
import Devteam from "./pages/Devteam"
import InfoApi from "./pages/InfoApi";
import Navbar from "./components/Navbar";
import PokemonDetalle from "./pages/InfoApi";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/info-api" element={<InfoApi/>}/>
        <Route path="/Devteam" element={<Devteam />} />
        <Route path="/pokemon/:nombre" element={<PokemonDetalle/>}/>
      </Routes>
    </Router>
  );
}



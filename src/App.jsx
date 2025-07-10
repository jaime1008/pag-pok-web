import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listado from "./pages/Listado";
import InfoApi from "./pages/InfoApi";
import Devteam from "./pages/Devteam";
import PokemonInfo from "./pages/PokemonInfo";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/infoapi" element={<InfoApi/>}/>
        <Route path="/Devteam" element={<Devteam />} />
        <Route path="/pokemon/:nombre" element={<PokemonInfo/>}/>
      </Routes>
    </Router>
  );
}



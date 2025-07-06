import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex gap-4">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/Listado">LISTADO</Link></li>
        <li><Link to="/InfoApi">Información API</Link></li>
        <li><Link to="/Devteam">Contactanos</Link></li>
      </ul>
    </nav>
  );
}
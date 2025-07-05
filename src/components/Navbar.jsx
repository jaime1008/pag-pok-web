import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex gap-4">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/listado">LISTADO</Link></li>
        <li><Link to="/equipo">EQUIPO</Link></li>
        <li><Link to="/nosotros">NOSOTROS</Link></li>
      </ul>
    </nav>
  );
}
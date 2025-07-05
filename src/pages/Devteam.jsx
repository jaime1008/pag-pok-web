const devs = [
  { nombre: "Jaime Sánchez", rol: "Frontend" },
  { nombre: "Martin Carvallo", rol: "Backend" },
  { nombre: "Mathias Salinas", rol: "Diseño UX" },
  { nombre: "Camila Montes", rol: "Testing" },
];

const Nosotros = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Equipo de Desarrollo</h2>
    <ul className="space-y-2">
      {devs.map((dev, idx) => (
        <li key={idx} className="border p-4 rounded-lg shadow">
          <strong>{dev.nombre}</strong> — {dev.rol}
        </li>
      ))}
    </ul>
  </div>
);

export default Nosotros;
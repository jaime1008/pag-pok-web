const devs = [
  { nombre: "Jaime Sánchez", rol: "por definir" },
  { nombre: "Martin Carvallo", rol: "por definir" },
  { nombre: "Mathias Salinas", rol: "por definir" },
  { nombre: "Camila Montes", rol: "por definir" },
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
import { useEffect, useState } from "react";
import Background from "./ui/Background"; // ajusta la ruta si es necesario

const proyectos = [
  { nombre: "Proyecto X", descripcion: "Una app que resuelve problemas Y.", link: "#" },
  { nombre: "Proyecto Z", descripcion: "Herramienta web para gestión de tareas.", link: "#" },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className={`relative flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-24 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* 🌈 Fondo animado reutilizable */}
      <Background variant="projects" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl w-full text-left">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-8">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              className="bg-gray-950 bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 block"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {proj.nombre}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                {proj.descripcion}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

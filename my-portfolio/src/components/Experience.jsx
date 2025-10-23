import { useEffect, useState } from "react";
import Background from "./ui/Background"; // ajusta la ruta según tu estructura

const experiencias = [
  { empresa: "Empresa A", rol: "Desarrollador Frontend", periodo: "2022 - 2023" },
  { empresa: "Empresa B", rol: "Ingeniero de Software", periodo: "2021 - 2022" },
];

export default function Experience() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="experience"
      className={`relative flex flex-col items-start justify-center w-full min-h-screen px-6 md:px-12 lg:px-24 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* 🌈 Fondo reutilizable */}
      <Background variant="experience" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl w-full text-left">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-8">
          Experiencia
        </h2>

        <div className="flex flex-col space-y-6">
          {experiencias.map((exp, i) => (
            <div
              key={i}
              className="bg-gray-950 bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {exp.rol}
              </h3>
              <p className="text-primary text-lg sm:text-xl">{exp.empresa}</p>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                {exp.periodo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

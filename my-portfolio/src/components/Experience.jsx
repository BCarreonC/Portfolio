import { useEffect, useState } from "react";
import Background from "./ui/Background"; // ajusta la ruta según tu estructura

const experiencias = [
  {
    empresa: "TechSolutions MX",
    rol: "Desarrollador Frontend",
    periodo: "2024 - Actualidad",
    descripcion:
      "Diseño y desarrollo de interfaces interactivas con React y Tailwind CSS para un sistema ERP. Implementación de autenticación con Supabase y despliegue en entornos Electron.",
    tecnologias: ["React", "Vite", "Electron", "Supabase", "Tailwind CSS"],
  },
  {
    empresa: "SoftFactory",
    rol: "Ingeniero de Software",
    periodo: "2023 - 2024",
    descripcion:
      "Participé en el desarrollo de una aplicación de monitoreo IoT para optimizar el consumo energético. Integración de dashboards con análisis de datos en tiempo real.",
    tecnologias: ["Node.js", "Express", "MongoDB", "Chart.js", "IoT APIs"],
  },
  {
    empresa: "InnovaWeb",
    rol: "Desarrollador Fullstack Jr.",
    periodo: "2022 - 2023",
    descripcion:
      "Desarrollo de aplicaciones web empresariales con enfoque en rendimiento y usabilidad. Colaboración con equipos de diseño y QA bajo metodología ágil (Scrum).",
    tecnologias: ["Flask", "React", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    empresa: "UAQ - Proyecto Universitario",
    rol: "Desarrollador de Sistemas",
    periodo: "2021 - 2022",
    descripcion:
      "Diseño de un sistema de gestión académica modular con control de usuarios, autenticación OTP y generación automática de reportes PDF.",
    tecnologias: ["Python", "Flask", "SQLite", "Bootstrap", "ReportLab"],
  },
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
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-center w-full min-h-screen px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* 🌈 Fondo reutilizable */}
      <Background variant="experience" />

      {/* Contenido principal */}
      <div className="relative z-10 col-span-full max-w-5xl w-full text-left">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-10 text-center md:text-left">
          Experiencia
        </h2>
      </div>

      {/* Tarjetas de experiencia en 2 columnas */}
      {experiencias.map((exp, i) => (
        <div
          key={i}
          className="relative z-10 bg-gray-950 bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-500 transform hover:-translate-y-1"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {exp.rol}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-1 sm:mt-0">
              {exp.periodo}
            </p>
          </div>

          <p className="text-primary text-lg sm:text-xl font-semibold mb-2">
            {exp.empresa}
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {exp.descripcion}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {exp.tecnologias.map((tech, j) => (
              <span
                key={j}
                className="bg-primary/10 text-primary text-xs sm:text-sm px-3 py-1 rounded-full border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

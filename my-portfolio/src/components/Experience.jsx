import { useEffect, useState } from "react";
import Background from "./ui/Background";

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
      className={`relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-40 py-16 sm:py-20 md:py-28 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Fondo con efecto */}
      <Background variant="experience" />

      <div className="relative z-10 w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center md:text-left">
          Experiencia
        </h2>

        {/* Layout adaptable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
          {experiencias.map((exp, i) => (
            <div
              key={i}
              className="relative z-10 bg-gray-950 bg-opacity-70 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-500 transform hover:-translate-y-1"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                {exp.rol}
              </h3>
              {/* Empresa y periodo */}
              <div className="flex flex-row justify-between sm:space-between sm:items-center mb-1 my-2">
                <p className="flex items-center text-primary text-base sm:text-lg md:text-xl font-semibold mb-2">
                  {exp.empresa}
                </p>
                <p className="flex items-center text-gray-400 text-sm sm:text-base mb-2">
                  {exp.periodo}
                </p>
              </div>

              {/* Descripción */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {exp.descripcion}
              </p>

              {/* Tecnologías */}
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
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import Background from "./ui/Background";

const educacion = [
  {
    institucion: "Universidad Autónoma de Querétaro (UAQ)",
    grado: "Ingeniería en Software",
    periodo: "2019 - 2025",
    descripcion:
      "Formación integral en desarrollo de software, bases de datos, metodologías ágiles y proyectos reales de ingeniería.",
  },
  {
    institucion: "Platzi",
    grado: "Curso de React y Tailwind CSS",
    periodo: "2023",
    descripcion:
      "Aprendizaje práctico de desarrollo web moderno con React, Tailwind y buenas prácticas en UI/UX.",
  },
  {
    institucion: "Udemy",
    grado: "Curso de Python y Flask",
    periodo: "2022",
    descripcion:
      "Desarrollo de aplicaciones backend con Flask, integración de bases de datos y despliegue en servidores locales.",
  },
];

export default function Education() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="education"
      className={`relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-40 py-16 sm:py-20 md:py-28 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Background variant="education" />

      <div className="relative z-10 col-span-full max-w-5xl w-full text-center md:text-left">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-12">
          Educación
        </h2>
      </div>

      {educacion.map((edu, i) => (
        <div
          key={i}
          className="relative z-10 bg-gray-950 bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-500 transform hover:-translate-y-1 mb-8 w-full max-w-5xl"
        >
          <div className="flex sm:flex-row sm:justify-between sm:items-center mb-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {edu.grado}
            </h3>
            <p className="flex no-wrap text-gray-400 text-sm sm:text-base mt-1 ml-4 sm:mt-0 whitespace-nowrap">
              {edu.periodo}
            </p>
          </div>

          <p className="text-primary text-lg sm:text-xl font-semibold mb-2">
            {edu.institucion}
          </p>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {edu.descripcion}
          </p>
        </div>
      ))}
    </section>
  );
}

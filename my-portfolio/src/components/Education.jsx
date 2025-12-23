import { useEffect, useState, useRef } from "react";
import Background from "./ui/Background";

const educacion = [
  {
    institucion: "Universidad Autónoma de Querétaro (UAQ)",
    grado: "Ingeniería en Software — Egresado",
    periodo: "2021 – 2025",
    descripcion:
      "Formación profesional en ingeniería de software con enfoque en desarrollo full-stack, arquitectura de sistemas, bases de datos, calidad de software y metodologías ágiles. Participación en proyectos académicos y profesionales orientados a sistemas empresariales.",
  },
];

const certificaciones = [
  {
    nombre: "AWS Cloud Foundations",
    periodo: "2024",
    descripcion:
      "Fundamentos de computación en la nube, servicios principales de AWS, arquitectura cloud, seguridad y buenas prácticas para entornos empresariales.",
  },
  {
    nombre: "Visualización de Datos con Python",
    periodo: "2024",
    descripcion:
      "Análisis y visualización de datos utilizando Python para interpretación de información y apoyo a la toma de decisiones.",
  },
  {
    nombre: "Ingeniería de Datos con Python y PySpark",
    periodo: "En curso",
    descripcion:
      "Procesamiento de datos a gran escala, pipelines de datos y fundamentos de ingeniería de datos utilizando PySpark.",
  },
  {
    nombre: "Prompt Engineering",
    periodo: "En curso",
    descripcion:
      "Diseño y optimización de prompts para modelos de lenguaje, aplicado a soluciones de IA y automatización.",
  },
];

export default function Education() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // anima solo una vez
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-40 py-16 sm:py-20 md:py-28"
    >
      <Background variant="education" />

      {/* TÍTULO */}
      <div className="relative z-10 max-w-5xl w-full text-center md:text-left mb-12">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary">
          Educación
        </h2>
      </div>

      {/* EDUCACIÓN */}
      {educacion.map((edu, i) => (
        <div
          key={i}
          className={`relative z-10 bg-gray-950 bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg mb-8 w-full max-w-5xl
                      transition-all duration-700 transform
                      hover:-translate-y-1 hover:shadow-primary/30
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                      `}
        >
          <div className="flex sm:flex-row sm:justify-between sm:items-center mb-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {edu.grado}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
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

      {/* CERTIFICACIONES - TÍTULO */}
      <div
        className={`relative z-10 max-w-5xl w-full text-center md:text-left mt-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{ transitionDelay: "200ms" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
          Certificaciones
        </h2>
      </div>

      {/* CERTIFICACIONES - CARDS */}
      {certificaciones.map((cert, i) => (
        <div
          key={i}
          className={`relative z-10 bg-gray-950 bg-opacity-60 backdrop-blur-md p-5 rounded-xl shadow-md mb-6 w-full max-w-5xl transition-all duration-700 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: `${300 + i * 120}ms` }}
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {cert.nombre}
            </h3>
            <span className="text-gray-400 text-sm">
              {cert.periodo}
            </span>
          </div>
          <p className="text-gray-300 text-sm sm:text-base">
            {cert.descripcion}
          </p>
        </div>
      ))}
    </section>
  );
}

import { useEffect, useState, useRef } from "react";
import Background from "./ui/Background";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Education() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const educacion = [
  {
    institucion: t("education.0.institution"),
    grado: t("education.0.degree"),
    periodo: t("education.0.duration"),
    descripcion: t("education.0.description"),
  },
];

const certificaciones = [
  {
    nombre: t("certifications.0.name"),
    periodo: t("certifications.0.date"),
    descripcion: t("certifications.0.description"),
  },
  {
    nombre: t("certifications.1.name"),
    periodo: t("certifications.1.date"),
    descripcion: t("certifications.1.description"),
  },
  {
    nombre: t("certifications.2.name"),
    periodo: t("certifications.2.date"),
    descripcion: t("certifications.2.description"),
  },
  {
    nombre: t("certifications.3.name"),
    periodo: t("certifications.3.date"),
    descripcion: t("certifications.3.description"),
  },
];

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
          {t("education.title")}
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
          {t("certifications.title")}
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

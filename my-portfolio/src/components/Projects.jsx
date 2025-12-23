import { useEffect, useState } from "react";
import Background from "./ui/Background";
import TechCarousel from "./Skills";

const proyectos = [
  {
    nombre: "ERP Empresarial Interno",
    descripcion:
      "Sistema ERP interno desarrollado durante prácticas profesionales en una consultora de tecnología. Gestiona clientes, empleados, contenidos, blog y reclutamiento con control de accesos por roles.",
    tecnologias: [
      "TypeScript",
      "NestJS",
      "Tailwind",
      "MongoDB",
      "Docker",
      "MinIO",
      "Vault",
      "Postman",
    ],
    link: "#",
    tipo: "ERP / Full Stack",
    imagenes: ["/images/erp-startup-1.png", "/images/erp-startup-2.png"],
  },
  {
    nombre: "ERP para Empresa de Seguridad Privada",
    descripcion:
      "Sistema ERP para la gestión de inventarios, proyectos y reportes automáticos. Incluyó levantamiento de requerimientos y entregas incrementales bajo metodología Scrum.",
    tecnologias: [
      "JavaScript",
      "HTML",
      "CSS",
      "Electron",
      "Supabase",
    ],
    link: "#",
    tipo: "Desktop App / ERP",
    imagenes: ["/images/erp-seguridad-1.png", "/images/erp-seguridad-2.png"],
  },
  {
    nombre: "Chatbot Inteligente de Medicamentos",
    descripcion:
      "Chatbot con inteligencia artificial para consulta de medicamentos del sector salud. Utiliza NLP para interpretar preguntas y responder con información médica estructurada.",
    tecnologias: [
      "Python",
      "TensorFlow",
      "NLP",
      "Base de datos IMSS",
    ],
    link: "#",
    tipo: "IA / NLP",
    imagenes: ["/images/chatbot-1.png", "/images/chatbot-2.png"],
  },
  {
    nombre: "Portafolio Profesional",
    descripcion:
      "Portafolio web personal para presentar experiencia, proyectos y stack tecnológico, con diseño responsivo y animaciones modernas.",
    tecnologias: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    link: "https://benjamincarreon.vercel.app",
    tipo: "Web App",
    imagenes: ["/images/portfolio-1.png", "/images/portfolio-2.png"],
  },
];



export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
  requestAnimationFrame(() => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  });
};


  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  if (selectedProject) {
    setLoadedImages({});
  }
}, [selectedProject]);


  return (
    <section
      id="projects"
      className={`relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-40 py-12 sm:py-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Background variant="projects" />

      <div className="relative z-10 col-span-full max-w-5xl w-full text-center md:text-left">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-12">
          Proyectos
        </h2>
      </div>

      <div className="relative z-10">

        {/* Grilla adaptable de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16">
          {proyectos.map((proj, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(proj)}
              className={`cursor-pointer relative bg-gray-950 bg-opacity-70 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                {proj.nombre}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-2">
                {proj.tipo}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4">
                {proj.descripcion}
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {proj.tecnologias.map((tech, j) => (
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

      {/* Carrusel de tecnologías*/}
      <div className="w-full mt-10 mb-0 pt-0">
        <TechCarousel />
      </div>

      {/* Modal de detalle de proyecto */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 sm:px-6"
          onClick={() => {
  setSelectedProject(null);
  setLoadedImages({});
}}

        >
          <div
            className="bg-gray-900 p-4 sm:p-6 rounded-xl w-full max-w-md sm:max-w-2xl md:max-w-3xl relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
  setSelectedProject(null);
  setLoadedImages({});
}}

              className="absolute top-3 right-3 text-red-500 text-2xl font-bold hover:text-red-400 cursor-pointer"
            >
              &times;
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedProject.nombre}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              {selectedProject.tipo}
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              {selectedProject.descripcion}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 justify-center sm:justify-start">
              {selectedProject.tecnologias.map((tech, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary text-xs sm:text-sm px-3 py-1 rounded-full border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Galería adaptable */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {selectedProject.imagenes.map((img, i) => (
  <div
    key={i}
    className={`rounded-lg overflow-hidden transition-all duration-700 ease-out
      ${
        loadedImages[i]
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
  >
    <img
      src={img}
      alt={`${selectedProject.nombre} ${i + 1}`}
      onLoad={() => handleImageLoad(i)}
      className="object-cover w-full h-40 sm:h-48 md:h-56"
    />
  </div>
))}

            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              className="inline-block bg-primary text-black font-bold text-sm sm:text-base px-5 py-2 rounded hover:bg-primary/80 transition"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

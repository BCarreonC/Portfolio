import { useEffect, useState } from "react";
import Background from "./ui/Background";

const proyectos = [
  {
    nombre: "Gestor de Tareas Pro",
    descripcion:
      "Aplicación web para organizar tareas y proyectos en equipo, con autenticación de usuarios y notificaciones en tiempo real.",
    tecnologias: ["React", "Tailwind CSS", "Firebase", "Vite"],
    link: "#",
    tipo: "Web App",
    imagenes: ["/images/gestor1.png", "/images/gestor2.png"],
  },
  {
    nombre: "ShopX eCommerce",
    descripcion:
      "Plataforma de comercio electrónico con carrito de compras, pagos en línea y dashboard administrativo.",
    tecnologias: ["Next.js", "Stripe API", "MongoDB", "Vercel"],
    link: "#",
    tipo: "Web App",
    imagenes: ["/images/shopx1.png", "/images/shopx2.png"],
  },
  {
    nombre: "ChatBot AI",
    descripcion:
      "Bot conversacional integrado a un CRM para atención al cliente con procesamiento de lenguaje natural.",
    tecnologias: ["Node.js", "Express", "Dialogflow", "Socket.io"],
    link: "#",
    tipo: "Backend / AI",
    imagenes: ["/images/chatbot1.png", "/images/chatbot2.png"],
  },
  {
    nombre: "Portfolio Personal",
    descripcion:
      "Sitio web personal para mostrar proyectos, experiencia y contacto, con animaciones y diseño responsivo.",
    tecnologias: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "#",
    tipo: "Web App",
    imagenes: ["/images/portfolio1.png", "/images/portfolio2.png"],
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className={`relative flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-24 py-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Background variant="projects" />

      <div className="relative z-10 max-w-5xl w-full text-left">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-10 text-center md:text-left">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proj, i) => (
            <div
              key={i}
              onClick={() => setSelectedProject(proj)}
              className={`cursor-pointer relative bg-gray-950 bg-opacity-70 backdrop-blur-md p-6 rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {proj.nombre}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mb-2">{proj.tipo}</p>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {proj.descripcion}
              </p>
              <div className="flex flex-wrap gap-2">
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

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.nombre}</h3>
            <p className="text-gray-400 mb-2">{selectedProject.tipo}</p>
            <p className="text-gray-300 mb-4">{selectedProject.descripcion}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tecnologias.map((tech, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary text-xs sm:text-sm px-3 py-1 rounded-full border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {selectedProject.imagenes.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedProject.nombre} ${i + 1}`}
                  className="rounded-lg object-cover w-full h-40 sm:h-48"
                />
              ))}
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              className="inline-block bg-primary text-black font-bold px-6 py-2 rounded hover:bg-primary/80 transition"
            >
              Ver Proyecto
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

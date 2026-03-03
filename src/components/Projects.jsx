import { useEffect, useState } from "react";
import Background from "./ui/Background";
import TechCarousel from "./Skills";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { FaGithub as GitHub } from "react-icons/fa";

{/* === Importación de estilos Swiper === */}
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "../styles/swiper-custom.css";

{/* === Imágenes del proyecto Elvoratec ERP === */}
import adminAgregarVacante from "../assets/elvoratec-erp/admin-agregarvacante.png";
import adminArticuloEdit from "../assets/elvoratec-erp/admin-articuloedit.png";
import adminArticulonew from "../assets/elvoratec-erp/admin-articulonew.png";
import adminCandidatos from "../assets/elvoratec-erp/admin-candidatos.png";
import adminClientes from "../assets/elvoratec-erp/admin-clientes.png";
import adminCursos from "../assets/elvoratec-erp/admin-cursos.png";
import adminEmpleados from "../assets/elvoratec-erp/admin-empleados.png";
import adminPrincipal from "../assets/elvoratec-erp/admin-principal.png";
import adminProspectos from "../assets/elvoratec-erp/admin-prospectos.png";
import adminProyectos from "../assets/elvoratec-erp/admin-proyectos.png";
import adminVacantes from "../assets/elvoratec-erp/admin-vacantes.png";
import blogsArticulos from "../assets/elvoratec-erp/blogs-articulos.png";
import landingInicio from "../assets/elvoratec-erp/landing-inicio.png";
import landingPortafolio from "../assets/elvoratec-erp/landing-portafolio.png";

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const { t } = useTranslation();

  const normalizeImages = (imagenes) =>
    imagenes
      .map((img) =>
        typeof img === "string"
          ? { src: img, descripcion: "Vista del proyecto" }
          : img,
      )
      .filter((img) => img?.src);

  const proyectos = [
    {
      nombre: t("projects.0.name"),
      descripcion: t("projects.0.description"),
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
      liveVisibility: true,
      liveLink: "https://elvoratec.com/",
      githubVisibility: false,
      githubLink: "#",
      tipo: t("projects.0.type"),
      imagenes: [
        {
          src: adminPrincipal,
          descripcion:
            t("projects.0.images.adminPrincipal"),
        },
        {
          src: adminClientes,
          descripcion:
            t("projects.0.images.adminClientes"),
        },
        {
          src: adminEmpleados,
          descripcion:
            t("projects.0.images.adminEmpleados"),
        },
        {
          src: adminVacantes,
          descripcion:
            t("projects.0.images.adminVacantes"),
        },
        {
          src: adminCandidatos,
          descripcion:
            t("projects.0.images.adminCandidatos"),
        },
        {
          src: adminProyectos,
          descripcion:
            t("projects.0.images.adminProyectos"),
        },
        {
          src: adminCursos,
          descripcion:
            t("projects.0.images.adminCursos"),
        },
        {
          src: adminAgregarVacante,
          descripcion: t("projects.0.images.adminAgregarVacante"),
        },
        {
          src: adminArticulonew,
          descripcion:
            t("projects.0.images.adminArticulonew"),
        },
        {
          src: adminArticuloEdit,
          descripcion:
            t("projects.0.images.adminArticuloEdit"),
        },
        {
          src: blogsArticulos,
          descripcion:
            t("projects.0.images.blogsArticulos"),
        },
        {
          src: landingInicio,
          descripcion:
            t("projects.0.images.landingInicio"),
        },
        {
          src: landingPortafolio,
          descripcion:
            t("projects.0.images.landingPortafolio"), 
        },
        {
          src: adminProspectos,
          descripcion: t("projects.0.images.adminProspectos"),
        },
      ],
    },
    {
      nombre: t("projects.1.name"),
      descripcion: t("projects.1.description"),
      tecnologias: ["JavaScript", "HTML", "CSS", "Electron", "Supabase"],
      liveVisibility: false,
      liveLink: "#",
      githubVisibility: false,
      githubLink: "#",
      tipo: t("projects.1.type"),
      imagenes: [],
    },
    {
      nombre: t("projects.2.name"),
      descripcion: t("projects.2.description"),
      tecnologias: ["Python", "TensorFlow", "NLP", "Base de datos IMSS"],
      liveVisibility: false,
      liveLink: "#",
      githubVisibility: false,
      githubLink: "#",
      tipo: t("projects.2.type"),
      imagenes: [],
    },
    {
      nombre: t("projects.3.name"),
      descripcion: t("projects.3.description"),
      tecnologias: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveVisibility: false,
      liveLink: "#",
      githubVisibility: false,
      githubLink: "#",
      tipo: t("projects.3.type"),
      imagenes: [],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const images = selectedProject
    ? normalizeImages(selectedProject.imagenes)
    : [];

  return (
    <section
      id="projects"
      className={`relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-40 py-12 sm:py-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Background variant="projects" />

      <div className="relative z-10 w-full mx-auto ">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-12 text-center md:text-left">
          {t("projects.title")}
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
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
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
          }}
        >
          <div
            className="bg-gray-900 p-4 sm:p-6 rounded-xl w-full max-w-md sm:max-w-2xl md:max-w-3xl relative overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedProject(null);
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

            {/* === Carrusel principal === */}
            {images.length > 0 ? (
              <>
                {thumbsSwiper && !thumbsSwiper.destroyed && (
                  <Swiper
                    key={thumbsSwiper.el}
                    className="project-swiper"
                    modules={[Navigation, Thumbs]}
                    onSwiper={setMainSwiper}
                    navigation
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={16}
                  >
                    {images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-56 sm:h-64 md:h-72">
                          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded">
                            {t("projects.view_image")} {i + 1} / {images.length}
                          </div>

                          <img
                            src={img.src}
                            alt={img.descripcion}
                            className="w-full h-full mt-1 object-cover cursor-zoom-in"
                            onClick={(e) => {
                              e.stopPropagation();
                              setFullscreenImage(img);
                            }}
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                          {/* Texto */}
                          <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                            <p className="text-white text-sm sm:text-base font-medium leading-snug">
                              {img.descripcion}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                {/* === Thumbnails === */}
                <Swiper
                  className="project-swiper-thumbs"
                  modules={[Thumbs]}
                  onSwiper={setThumbsSwiper}
                  spaceBetween={12}
                  slidesPerView={4}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                  watchSlidesProgress
                  slideToClickedSlide
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="cursor-pointer group">
                        <img
                          src={img.src}
                          alt={img.descripcion}
                          className="w-full h-full object-cover cursor-pointer rounded-lg"
                          onClick={() => mainSwiper?.slideTo(i)}
                        />

                        <p className="text-gray-400 text-xs mt-2 leading-snug">
                          {img.descripcion}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <div className="text-center text-gray-400 py-10">
                {t("projects.no_images")}
              </div>
            )}
            {/* Botones de acción */}
            <div className="flex flex-col gap-4 mt-6">
  <div className="flex flex-wrap gap-4 justify-center sm:justify-start">

    {/* === DEMO / LIVE === */}
    {selectedProject.liveVisibility &&
    selectedProject.liveLink &&
    selectedProject.liveLink !== "#" ? (
      <a
        href={selectedProject.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-black font-bold px-5 py-2 rounded hover:bg-primary/80 transition"
      >
        {t("projects.button1")}
      </a>
    ) : (
      <button
        disabled
        className="inline-block bg-gray-700 text-gray-400 font-bold px-5 py-2 rounded cursor-not-allowed"
      >
        {t("projects.demo_unavailable")}
      </button>
    )}

    {/* === GITHUB === */}
    {selectedProject.githubVisibility &&
    selectedProject.githubLink &&
    selectedProject.githubLink !== "#" ? (
      <a
        href={selectedProject.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gray-800 text-white font-semibold px-5 py-2 rounded hover:bg-gray-700 transition"
      >
        <GitHub size={18} />
        {t("projects.button2")}
      </a>
    ) : (
      <button
        disabled
        className="inline-flex items-center gap-2 bg-gray-700 text-gray-400 font-semibold px-5 py-2 rounded cursor-not-allowed"
      >
        <GitHub size={18} />
        {t("projects.code_unavailable")}
      </button>
    )}
  </div>

  {/* === MENSAJE SIEMPRE VISIBLE === */}
  <div className="text-sm text-gray-400 italic bg-gray-800/60 px-4 py-2 rounded max-w-fit">
    {t("projects.always_visible")}
  </div>
</div>

          </div>
        </div>
      )}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center px-4"
          onClick={() => setFullscreenImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-primary transition"
            >
              &times;
            </button>

            {/* Imagen */}
            <img
              src={fullscreenImage.src}
              alt={fullscreenImage.descripcion}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Descripción */}
            <p className="text-gray-300 text-sm sm:text-base mt-4 text-center max-w-3xl mx-auto">
              {fullscreenImage.descripcion}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

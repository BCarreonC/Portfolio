import { useEffect, useState } from "react";

export default function Hero() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const frases = [
    "Ingeniero de Software y Desarrollador Fullstack.",
    "Construyo experiencias digitales con propósito.",
    "Desarrollo software funcional y centrado en las personas.",
    "Diseño interfaces modernas con React y Tailwind.",
    "Creo herramientas que facilitan el trabajo y conectan ideas.",
    "Transformo la complejidad en soluciones simples y elegantes.",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);

  const socialIcons = [
    {
      name: "GitHub",
      href: "https://github.com/BCarreonC",
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/Zerox512",
      d: "M18.244 2.25h3.308l-7.227 8.26L22 21.75h-5.937l-4.64-6.084-5.31 6.084H2.805l7.727-8.85L2 2.25h6.063l4.178 5.568L18.244 2.25z",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/benjamin-carre%C3%B3n-cadenas-b4044723b/",
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      rect: { x: 2, y: 9, width: 4, height: 12 },
      circle: { cx: 4, cy: 4, r: 2 },
    },
  ];

  // Aparición del contenido principal
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    const socialTimer = setTimeout(() => setSocialVisible(true), 1200); // redes sociales animan después
    return () => {
      clearTimeout(timer);
      clearTimeout(socialTimer);
    };
  }, []);

  // Efecto de tipeo letra por letra
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFrase = frases[index];

      if (!deleting && subIndex < currentFrase.length) {
        setSubIndex(subIndex + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (!deleting && subIndex === currentFrase.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % frases.length);
      }
    }, deleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, frases]);

  return (
    <main
    id="about" 
    className="relative flex grow items-center justify-start min-h-screen px-6 md:px-12 lg:px-24 overflow-hidden bg-linear-to-br from-gray-950 via-gray-900 to-black">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_70%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.1),transparent_70%)] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(147,51,234,0.08),transparent_70%)] animate-pulse delay-1000"></div>
      </div>

      {/* Contenido principal */}
      <div
        className={`relative z-10 container mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl text-left">
          <p className="lg:mt-8 text-primary text-base sm:text-lg mb-2 sm:mb-4">
            Hola, mi nombre es
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
            Benjamín Carreón
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-2 sm:mt-4 leading-snug">
            <span className="border-r-4 border-primary pr-2 animate-caret">
              {frases[index].substring(0, subIndex)}
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 md:mt-8 max-w-2xl text-gray-300 text-sm sm:text-base lg:text-lg transition-opacity duration-700">
            Soy un desarrollador de software especializado en construir experiencias digitales excepcionales. 
            Actualmente estoy enfocado en crear productos accesibles y centrados en el ser humano.
          </p>

          <div className="mt-6 sm:mt-8 md:mt-12">
            <a
              className="inline-block text-primary border border-primary rounded px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              href="#projects"
            >
              Ver mis proyectos
            </a>
          </div>
        </div>
      </div>

      {/* Redes sociales solo en móvil con animación */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 flex  md:hidden xl:hidden space-x-10 z-20 transition-all duration-700 ${
          socialVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {socialIcons.map((icon, i) => (
          <a
            key={i}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {icon.rect && <rect {...icon.rect} />}
              {icon.circle && <circle {...icon.circle} />}
              {icon.line && <line {...icon.line} />}
              <path d={icon.d} />
            </svg>
          </a>
        ))}
      </div>
    </main>
  );
}

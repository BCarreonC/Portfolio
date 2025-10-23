import { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: "00", label: "Sobre mí", href: "#about" },
    { id: "01", label: "Experiencia", href: "#experience" },
    { id: "02", label: "Proyectos", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/50 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 md:px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="inline-flex items-center justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 100 100"
            className="stroke-primary text-primary fill-transparent"
          >
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              strokeWidth="4"
            />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="36"
              fontWeight="bold"
              fill="currentColor"
            >
              B
            </text>
          </svg>
        </a>

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex space-x-6">
            {links.map((link) => (
              <a
                key={link.id}
                className="text-text-dark-secondary hover:text-primary"
                href={link.href}
              >
                <span className="text-primary">{link.id}.</span> {link.label}
              </a>
            ))}
          </div>
          <a
            className="text-primary border border-primary rounded px-4 py-2 hover:bg-primary/10 transition-colors"
            href="#"
          >
            Currículum
          </a>
        </nav>

        {/* Botón menú móvil */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-12 h-12 border border-primary rounded text-primary hover:bg-primary/10 cursor-pointer focus:outline-none transition-colors"
          >
            <Menu size={22} />
          </button>

          <a
            href="#"
            className="flex items-center justify-center gap-2 w-20 h-12 text-primary border border-primary rounded hover:bg-primary/10 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <FileText size={22} />
            CV
          </a>
        </div>
      </div>

      {/* Menú móvil desplegable con fade + slide */}
      <div
        className={`fixed top-0 right-0 w-64 h-screen bg-background-dark/95 backdrop-blur-md z-50 transform transition-all duration-500 flex flex-col pt-20 px-6 space-y-6 shadow-2xl
        ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {/* Botón de cerrar */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-primary hover:text-text-light hover:bg-primary/10 rounded-full p-2 cursor-pointer transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Enlaces */}
        <nav className="flex flex-col space-y-6 text-lg">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-text-dark-secondary hover:text-primary hover:bg-primary/20 rounded px-3 py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-primary mr-2">{link.id}.</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

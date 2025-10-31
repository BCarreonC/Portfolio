import { useEffect, useState } from "react";
import Background from "./ui/Background";
import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFlask,
} from "react-icons/si";

/* --- Subcomponente reutilizable para el blur de los bordes --- */
function MarqueeEdgeBlur({
  side = "left",
  blurStrength = "10px",
  width = "3rem",
  opacity = 0.005, // controla qué tan visible es el efecto de “vidrio”
}) {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute top-0 h-full z-20 pointer-events-none ${
        isLeft ? "left-0" : "right-0"
      }`}
      style={{
        width,
        backdropFilter: `blur(${blurStrength})`,
        WebkitBackdropFilter: `blur(${blurStrength})`,
        background: isLeft
          ? `linear-gradient(to right, rgba(255,255,255,${opacity}), transparent)`
          : `linear-gradient(to left, rgba(255,255,255,${opacity}), transparent)`,
      }}
    />
  );
}

const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-5xl" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400 text-5xl" /> },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className={`relative flex flex-col items-center justify-center w-full py-10 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Background variant="skills" />

      <div className="relative w-full overflow-hidden">
        {/* Efectos de blur con transparencia */}
        <MarqueeEdgeBlur side="left" blurStrength="5px" width="2rem" opacity={0.005} />
        <MarqueeEdgeBlur side="right" blurStrength="5px" width="2rem" opacity={0.005} />

        {/* Carrusel */}
        <Marquee 
          speed={60} 
          gradient={false}
          autoFill={true}
          loop={0}
        >
          <div className="flex gap-12 py-6">
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center mx-10"
              >
                {tech.icon}
                <p className="text-white mt-2 font-semibold text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

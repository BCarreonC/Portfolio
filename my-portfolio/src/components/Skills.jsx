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

const techStack = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-5xl" />,
  },
  { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-300 text-5xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400 text-5xl" />,
  },
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
      className={`relative flex flex-col items-start justify-center w-full min-h-screen px-16 md:px-32 lg:px-64 py-16 md:py-24 lg:py-32 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Background variant="skills" />

      <div className="relative z-10 w-full text-left mb-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary">
          Tecnologías
        </h2>
      </div>

      {/* Cinta de Tecnologías sin espacios y continua */}
      <div className="marquee-container w-full">
        <Marquee speed={50} gradient={false}>
          <div className="marquee-container">
            <div className="marquee-content py-6">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center mx-14"
                >
                  {tech.icon}
                  <p className="text-white mt-2 font-semibold text-sm">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>

      
    </section>
  );
}

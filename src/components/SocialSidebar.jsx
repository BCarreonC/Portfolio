export default function SocialSidebar() {
  const icons = [
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
      href: "https://www.linkedin.com/in/benjamincarreon/",
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      rect: { x: 2, y: 9, width: 4, height: 12 },
      circle: { cx: 4, cy: 4, r: 2 },
    },
  ];

  return (
    <div className="fixed bottom-0 left-8 hidden md:flex flex-col items-center space-y-6 z-50">
      {icons.map((icon, i) => (
        <div key={i} className="relative group">
          <a
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dark-secondary hover:text-primary transform hover:-translate-y-1 transition-transform"
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

          {/* Tooltip */}
          <span className=" flex items-center justify-center absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-text-light-primary bg-primary rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-bold">
            {icon.name}
          </span>
        </div>
      ))}
      <div className="h-24 w-px bg-text-dark-secondary"></div>
    </div>
  );
}

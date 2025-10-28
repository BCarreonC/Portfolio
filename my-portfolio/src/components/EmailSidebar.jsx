import { useState } from "react";
import { Check } from "lucide-react";

export default function EmailSidebar() {
  const email = "benjamin.carreon@hotmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="fixed right-8 bottom-0 hidden md:flex flex-col items-center space-y-6 z-50">
      <div className="relative flex flex-col items-center justify-center">
        <a
          href={`mailto:${email}`}
          onClick={handleCopy}
          className="writing-mode-vertical text-sm tracking-widest text-text-dark-secondary hover:text-primary transform transition-transform cursor-pointer"
        >
          {email}
        </a>

        {copied && (
          <span className="absolute inline-block whitespace-nowrap -top-0 right-8 text-xs bg-primary text-black px-3 py-1 rounded-lg shadow-md animate-fade-in">
            Copiado
            <Check className="h-4 w-4 inline-block ml-2 text-black" />
          </span>
        )}
      </div>

      <div className="h-24 w-px bg-text-dark-secondary"></div>
    </div>
  );
}

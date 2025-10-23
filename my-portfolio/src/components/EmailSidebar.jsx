export default function EmailSidebar() {
  return (
    <div className="fixed bottom-0 right-8 hidden md:flex flex-col items-center space-y-6 z-50">
      <a
        href="mailto:benjamin.carreon@gmail.com"
        className="writing-mode-vertical text-sm tracking-widest text-text-dark-secondary hover:text-primary transform transition-transform"
      >
        benjamin.carreon@hotmail.com
      </a>
      <div className="ml-5 h-24 w-px bg-text-dark-secondary mt-6"></div>
    </div>
  );
}

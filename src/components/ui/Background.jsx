// src/components/ui/Background.jsx
export default function Background({ variant = "hero", className = "" }) {
  const base =
    "absolute inset-0 w-full h-full overflow-hidden transition-all duration-1000";

  const variants = {
    hero: (
      <>
        <div
          className={`${base} bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.1),transparent_70%)] animate-pulse`}
        ></div>
        <div
          className={`${base} bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.08),transparent_70%)] animate-pulse delay-700`}
        ></div>
        <div
          className={`${base} bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] animate-pulse delay-1000`}
        ></div>
      </>
    ),
    experience: (
      <div
        className={base}
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(circle at 20% 80%, rgba(16,185,129,0.05), transparent 60%), linear-gradient(135deg, #0A192F 0%, #111827 100%)",
        }}
      />
    ),
    projects: (
      <div
        className={base}
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(147,51,234,0.08), transparent 60%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.05), transparent 60%), linear-gradient(135deg, #0F172A 0%, #1E1E1E 100%)",
        }}
      />
    ),
  };

  return <div className={`absolute inset-0 ${className}`}>{variants[variant]}</div>;
}

// src/app/(auth)/layout.tsx
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-accent">
      {/* Header: Banda negra con logo centrado */}
      <nav className="w-full bg-dark text-white py-4 px-8 flex items-center justify-center sticky top-0 z-50 shadow-md font-sans">
        <Link href="/" className="flex items-center group">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-dark font-black text-[9px] leading-tight text-center p-1">
              CAZA <br /> OFERTAS
            </span>
          </div>
        </Link>
      </nav>

      {/* Contenido de las páginas (Login, Registro, etc.) */}
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
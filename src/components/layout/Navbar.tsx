"use client";

import Link from "next/link";
import Image from "next/image"; // Importamos el componente Image de Next.js

export const Navbar = () => {
  const navItems = [
    { name: "HOMBRES", href: "#" },
    { name: "MUJERES", href: "#" },
    { name: "NIÑOS", href: "#" },
    { name: "ACCESORIOS", href: "#" },
  ];

  return (
    <nav className="w-full bg-dark text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md font-sans">
      {/* CAMBIO AQUÍ: Reemplazamos el div circular por la imagen del logo */}
      <Link href="/" className="flex items-center group">
        <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
          <Image
            src="/logo.png" // Ruta correcta para archivos en /public
            alt="Logo Caza Ofertas"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-light transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        {/* Botón de Iniciar Sesión original */}
        <Link
          href="/login"
          className="bg-secondary text-dark px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all inline-block text-center"
        >
          INICIAR SESIÓN
        </Link>

        {/* Botón de Registro original */}
        <Link
          href="/register"
          className="bg-primary text-white px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all inline-block text-center"
        >
          REGISTRARME
        </Link>
      </div>
    </nav>
  );
};

"use client";

import Link from "next/link";
import Image from "next/image"; // Importamos Image para el SVG

export const NavbarUser = () => {
  const navItems = [
    { name: "HOMBRES", href: "#" },
    { name: "MUJERES", href: "#" },
    { name: "NIÑOS", href: "#" },
    { name: "ACCESORIOS", href: "#" },
  ];

  return (
    <nav className="w-full bg-dark text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md font-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
          <span className="text-dark font-black text-[9px] leading-tight text-center p-1">
            CAZA <br /> OFERTAS
          </span>
        </div>
      </Link>

      {/* Menú Central */}
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

      {/* Perfil del Usuario */}
      <div className="flex items-center">
        <Link 
          href="/perfil" 
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors group"
        >
          {/* Texto del perfil */}
          <span className="text-[11px] font-bold tracking-[0.2em] text-white/70 group-hover:text-light transition-colors">
            MI PERFIL
          </span>
          
          {/* Icono de usuario desde la carpeta public */}
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
            <Image 
              src="/user.svg" 
              alt="Icono de usuario" 
              width={20} 
              height={20}
              className="brightness-0 invert" // Esto hace que el icono negro de public se vea blanco
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};
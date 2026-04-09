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
    <nav className="w-full bg-[#1A1A1A] text-white py-4 px-8 flex items-center md:justify-center top-0 fit shadow-md font-sans">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
          <Image
            src="/logo.png"
            alt="Logo Caza Ofertas"
            height={72}
            width={72}
            priority
          />
        </div>
      </Link>
      {/* <Link href="/" className="flex items-center group">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
          <span className="text-dark font-black text-[9px] leading-tight text-center p-1">
            CAZA <br /> OFERTAS
          </span>
        </div>
      </Link> */}

      {/* Menú Central */}
      {/* <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-light transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div> */}

      {/* Perfil del Usuario */}
      {/* <div className="flex items-center">
        <Link 
          href="/perfil" 
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/5 transition-colors group"
        >
          <span className="text-[11px] font-bold tracking-[0.2em] text-white/70 group-hover:text-light transition-colors">
            MI PERFIL
          </span>
          
          <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
            <Image 
              src="/user.svg" 
              alt="Icono de usuario" 
              width={20} 
              height={20}
              className="brightness-0 invert" 
            />
          </div>
        </Link>
      </div> */}
    </nav>
  );
};
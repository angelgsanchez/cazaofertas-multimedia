"use client";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const navItems = [
    { name: "HOMBRES", href: "/hombres" },
    { name: "MUJERES", href: "/mujeres" },
    { name: "NIÑOS", href: "/ninos" },
    { name: "ACCESORIOS", href: "/accesorios" },
  ];

  return (
    <nav className="w-full bg-dark text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md font-sans">
      <Link href="/" className="flex items-center group">
        <div className="relative w-12 h-12 transition-transform group-hover:scale-105">
          <Image
            src="/logo.png"
            alt="Logo Caza Ofertas"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* MENÚ: Aumentamos el gap a 8 para que haya más espacio entre botones */}
      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="
              group
              flex items-center justify-center
              /* Ajustamos a 130px de ancho para que el texto separado quepa bien */
              w-[130px] h-[36px] rounded-[8px]
              bg-transparent transition-all duration-300
              hover:bg-[#F9F9F7]
            "
          >
            <span
              className="
              /* Texto más grande (12px) y más separado (0.3em) */
              text-[12px] font-bold uppercase tracking-[0.3em] 
              text-white transition-colors duration-300 
              group-hover:text-dark
            "
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-secondary text-dark px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all inline-block text-center uppercase tracking-wider"
        >
          INICIAR SESIÓN
        </Link>

        <Link
          href="/register"
          className="bg-primary text-white px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all inline-block text-center uppercase tracking-wider"
        >
          REGISTRARME
        </Link>
      </div>
    </nav>
  );
};

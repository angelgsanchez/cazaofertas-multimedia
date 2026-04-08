"use client";

import Link from "next/link";

export const Navbar = () => {
  const navItems = [
    { name: "HOMBRES", href: "#" },
    { name: "MUJERES", href: "#" },
    { name: "NIÑOS", href: "#" },
    { name: "ACCESORIOS", href: "#" },
  ];

  return (
    <nav className="w-full bg-dark text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md font-sans">
      <Link href="/" className="flex items-center group">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
          <span className="text-dark font-black text-[9px] leading-tight text-center p-1">
            CAZA <br /> OFERTAS
          </span>
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
        <button className="bg-secondary text-dark px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all">
          Iniciar sesión
        </button>
        <button className="bg-primary text-white px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all">
          Registrarme
        </button>
      </div>
    </nav>
  );
};

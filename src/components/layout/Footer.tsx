"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-dark py-16 mt-auto border-t border-white/10 flex flex-col items-center gap-6 font-sans">
      {/* LOGO */}
      <div className="relative w-16 h-16 transition-transform hover:scale-105 cursor-pointer">
        <Image
          src="/logo.png"
          alt="Logo Caza Ofertas"
          height={72}
            width={72}
          className="object-contain"
          priority
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        {/* 1. COPYRIGHT - Ahora bien visible en blanco al 80% */}
        <p className="text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase text-center">
          © 2026 CazaOfertas. Todos los derechos reservados.
        </p>

        {/* 2. LINKS DE NAVEGACIÓN - También visibles y con hover */}
        <div className="flex gap-8">
          <button className="text-[10px] font-bold text-white/80 hover:text-primary transition-colors uppercase tracking-widest">
            Términos
          </button>
          <button className="text-[10px] font-bold text-white/80 hover:text-primary transition-colors uppercase tracking-widest">
            Privacidad
          </button>
          <button className="text-[10px] font-bold text-white/80 hover:text-primary transition-colors uppercase tracking-widest">
            Contacto
          </button>
        </div>
      </div>
    </footer>
  );
};

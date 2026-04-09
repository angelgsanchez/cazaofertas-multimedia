"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  // 1. Cargar el usuario desde el localStorage al montar el componente
  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem("user_session");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    };

    checkUser();
    // Escuchamos cambios por si el usuario hace login en otra pestaña
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const navItems = [
    { name: "HOMBRES", href: "#" },
    { name: "MUJERES", href: "#" },
    { name: "NIÑOS", href: "#" },
    { name: "ACCESORIOS", href: "#" },
  ];

  // 2. Función para obtener la inicial y el color del avatar
  const getAvatarContent = () => {
    if (!user) return { char: "", color: "bg-gray-500" };

    const name = user.name || user.email;
    const char = name.charAt(0).toUpperCase();

    const colors: { [key: string]: string } = {
      A: "bg-red-500",
      B: "bg-blue-500",
      C: "bg-green-500",
      D: "bg-yellow-600",
      E: "bg-purple-500",
      F: "bg-pink-500",
      G: "bg-indigo-500",
      H: "bg-orange-500",
      J: "bg-[#e91e63]", 
    };

    return {
      char,
      color: colors[char] || "bg-primary",
    };
  };

  const avatar = getAvatarContent();

  return (
    <nav className="w-full bg-dark text-white py-4 px-8 flex items-center justify-between sticky top-0 z-50 shadow-md font-sans">
      {/* LOGO */}
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

      {/* MENÚ CENTRAL */}
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

      {/* SECCIÓN DERECHA DINÁMICA */}
      <div className="flex items-center gap-4">
        {!user ? (
          // ESTADO: NO LOGUEADO
          <>
            <Link
              href="/login"
              className="bg-secondary text-dark px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all"
            >
              INICIAR SESIÓN
            </Link>

            <Link
              href="/register"
              className="bg-primary text-white px-5 py-2 rounded-lg text-[11px] font-bold hover:brightness-110 active:scale-95 transition-all"
            >
              REGISTRARME
            </Link>
          </>
        ) : (
          // ESTADO: LOGUEADO (Avatar + Username)
          <Link href="/">
            <div className="flex items-center gap-3 ml-4 cursor-pointer hover:opacity-80 transition-opacity">
              <div
                className={`w-9 h-9 ${avatar.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner`}
              >
                {avatar.char}
              </div>
              <span className="text-[12px] font-bold tracking-wider text-white/90">
                {user.name?.split(" ")[0].toUpperCase() || "USUARIO"}
              </span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

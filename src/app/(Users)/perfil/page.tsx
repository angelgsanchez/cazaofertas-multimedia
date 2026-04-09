"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// 1. Importamos tu componente ProductCard
import { ProductCard } from "@/components/ui/ProductCard";

export default function ProfilePage() {
  // Estado para controlar qué pantalla se ve en la versión móvil
  const [mobileView, setMobileView] = useState<"menu" | "config">("menu");

  return (
    // Contenedor principal: Fondo rosado en móvil, gris en escritorio
    <div className="min-h-screen bg-accent md:bg-accent font-sans flex flex-col md:flex-row">
      
      {/* =========================================
          VERSIÓN MÓVIL (Se oculta en pantallas grandes)
          ========================================= */}
      <div className="md:hidden flex flex-col w-full min-h-screen">
        
        {/* Header Móvil (Fondo oscuro) */}
        <div className="bg-dark text-white pt-6 pb-8 px-6 flex flex-col items-center relative">
          <div className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-dark font-black text-[7px] leading-tight text-center">
              CAZA <br /> OFERTAS
            </span>
          </div>
          
          <div className="w-28 h-28 mt-4 bg-gray-200 rounded-full border-4 border-white overflow-hidden flex items-center justify-center">
             <Image src="/user.svg" alt="Avatar" width={60} height={60} className="opacity-50" />
          </div>
          <h2 className="text-2xl font-bold mt-4">Andres Perez</h2>
        </div>

        {/* Contenido Móvil Dinámico */}
        {mobileView === "menu" ? (
          // PANTALLA 1: MENÚ MÓVIL
          <div className="flex-1 p-6 flex flex-col gap-4">
            <button className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm active:scale-95 transition-transform text-dark font-bold">
              <span className="text-xl">❤️</span> Favoritos
            </button>
            <Link 
                href="/perfil-config" 
                className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm active:scale-95 transition-transform text-dark font-bold"
                >
                <span className="text-xl">⚙️</span> Configuracion
            </Link>
            <Link href="/" className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm active:scale-95 transition-transform text-red-600 font-bold">
              <span className="text-xl">🚪</span> Salir
            </Link>

            <h3 className="font-bold text-dark mt-6 mb-2">Actividad Reciente</h3>
            
            {/* 2. Usamos ProductCard en el grid móvil */}
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <ProductCard 
                  key={i} 
                  // Aquí le pasarías las props que necesite tu componente, por ejemplo:
                  // title={i % 2 === 0 ? "Pantalon" : "Camisa"}
                  // price={i % 2 === 0 ? 19.22 : 29.95}
                />
              ))}
            </div>
          </div>
        ) : (
          // PANTALLA 2: CONFIGURACIÓN MÓVIL
          <div className="flex-1 p-6 flex flex-col gap-3">
            {[
              { icon: "👤", text: "Cambiar Username" },
              { icon: "🔑", text: "Cambiar contraseña" },
              { icon: "✉️", text: "Cambiar correo electronico" },
              { icon: "⚧", text: "Genero" },
              { icon: "📞", text: "Numero de telefóno" },
              { icon: "📍", text: "Ubicación" },
              { icon: "🎨", text: "Preferencia en tallas y colores" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm text-dark font-bold text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-lg">{item.icon}</span> {item.text}
                </div>
                <span className="text-gray-400">▼</span>
              </div>
            ))}
            
            <button 
              onClick={() => setMobileView("menu")}
              className="mt-8 bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm active:scale-95 transition-transform text-red-600 font-bold"
            >
              <span className="text-xl">🚪</span> Salir (Volver)
            </button>
          </div>
        )}
      </div>

      {/* =========================================
          VERSIÓN ESCRITORIO (Se oculta en móviles)
          ========================================= */}
      
      <aside className="hidden md:flex w-[300px] flex-col shadow-lg bg-white z-10 sticky top-0 h-screen">
        <div className="bg-dark text-white py-12 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white overflow-hidden flex items-center justify-center">
              <Image src="/user.svg" alt="Avatar" width={80} height={80} className="opacity-50" />
            </div>
            <div className="absolute bottom-1 right-2 w-6 h-6 bg-gray-300 border-2 border-white rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold mb-1">Andres Perez</h2>
          <p className="text-xs text-gray-400 font-medium">Miembro desde: Febrero del 2026</p>
        </div>

        <nav className="flex-1 w-full pt-4">
          <Link href="#" className="flex items-center gap-4 px-8 py-4 bg-accent/50 border-l-4 border-primary text-dark font-bold text-sm">
            <Image src="/user.svg" alt="icon" width={18} height={18} className="brightness-0" />
            Mi Perfil
          </Link>
          <Link href="#" className="flex items-center gap-4 px-8 py-4 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
            <span className="text-lg">❤️</span> Mis ofertas favoritas
          </Link>
          <Link href="/" className="flex items-center gap-4 px-8 py-4 text-red-600 hover:bg-red-50 transition-colors text-sm font-medium mt-2">
            <span className="text-lg">🚪</span> Cerrar Sesión
          </Link>
        </nav>
      </aside>

      <main className="hidden md:block flex-1 p-10 lg:p-14 max-w-5xl overflow-y-auto">
        <h1 className="text-4xl font-bold text-dark mb-8">Mi Perfil</h1>

        <section className="mb-10">
          <h3 className="text-xl font-bold text-dark mb-4">Informacion personal</h3>
          <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100 shadow-sm">
            {[
              { label: "Username", value: "Aperez" },
              { label: "Genero", value: "desconocido" },
              { label: "Correo electronico", value: "andres.perez@gmail.com" },
              { label: "Telefono", value: "desconocido" },
              { label: "Ubicación", value: "desconocido" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <Image src="/user.svg" alt="icon" width={16} height={16} className="opacity-30 brightness-0" />
                  <p className="text-sm text-dark font-medium">
                    <span className="text-gray-500">{item.label}:</span> {item.value}
                  </p>
                </div>
                <span className="text-gray-300 group-hover:text-primary transition-colors text-xs">❯</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-bold text-dark mb-4">Configuracion de Cuenta</h3>
          <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100 shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">🔑</span>
                <p className="text-sm text-dark font-medium">Cambiar contraseña</p>
              </div>
              <span className="text-gray-300 group-hover:text-primary text-xs">❯</span>
            </div>
            <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">🎨</span>
                <p className="text-sm text-dark font-medium">Preferencia en tallas y colores</p>
              </div>
              <span className="text-gray-300 group-hover:text-primary text-xs">❯</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-dark mb-4">Favoritos</h3>
          
          {/* 3. Usamos ProductCard en el grid de escritorio */}
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <ProductCard 
                key={i} 
                // Asegúrate de pasar las props correctas aquí también
              />
            ))}
          </div>
        </section>
      </main>
      
    </div>
  );
}
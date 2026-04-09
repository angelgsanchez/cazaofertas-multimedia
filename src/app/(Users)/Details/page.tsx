"use client";

import Image from "next/image";

export default function ProductDetailsPage() {
  return (
    <div className="min-h-screen bg-accent font-sans">


      <main className="container mx-auto p-4 md:p-10">
        {/* --- CONTENEDOR PRINCIPAL BLANCO --- */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-14 flex flex-col md:flex-row gap-12">
          
          {/* SECCIÓN IZQUIERDA: IMAGEN */}
          <div className="w-full md:w-1/2 relative">
            <div className="bg-[#EBEBEB] rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden border border-gray-100">
              {/* Icono de imagen placeholder */}
              <div className="w-48 h-48 opacity-10">
                <Image src="/user.svg" alt="Placeholder" width={200} height={200} />
              </div>
              
              {/* Botón Favorito circular con borde */}
              <button className="absolute top-6 left-6 w-12 h-12 bg-dark rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform">
                <span className="text-xl">❤️</span>
              </button>
            </div>
          </div>

          {/* SECCIÓN DERECHA: INFORMACIÓN Y ACCIONES */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
              {/* Nombre y Precio */}
              <div className="flex-1">
                <h1 className="text-4xl font-black text-dark mb-2">Blusa bonita</h1>
                <span className="bg-[#D1FAE5] text-[#065F46] text-xs font-bold px-3 py-1 rounded-md">
                  Tag
                </span>
                <div className="mt-4 flex items-start">
                  <span className="text-2xl font-black text-dark mt-1">$</span>
                  <span className="text-6xl font-black text-dark tracking-tighter">50</span>
                </div>
                <p className="text-gray-400 text-sm mt-2 font-medium">Text</p>
              </div>

              {/* Acordeón de Título/FAQ lateral */}
              <div className="w-full md:w-72 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-dark text-sm">Title</span>
                  <span className="text-xs text-dark">▲</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                  Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.
                </p>
              </div>
            </div>

            {/* SELECTORES DE TALLA Y COLOR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-dark ml-1">Talla</label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer">
                    <option>Seleccionar</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs pointer-events-none">▼</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-dark ml-1">Color</label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-xl p-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer">
                    <option>Seleccionar</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs pointer-events-none">▼</span>
                </div>
              </div>
            </div>

            {/* BOTONES DE ACCIÓN: En escritorio van lado a lado */}
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-secondary hover:bg-[#8391A1] text-white font-bold py-4 rounded-xl shadow-sm transition-all active:scale-[0.98]">
                Contactar por Whatsapp
              </button>
              <button className="flex-1 bg-primary hover:bg-secondary/90 text-white font-bold py-4 rounded-xl shadow-sm transition-all active:scale-[0.98]">
                Ver Ubicacion
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
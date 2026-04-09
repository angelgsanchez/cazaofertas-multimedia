"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MobileConfigPage() {
  const router = useRouter();

  const configItems = [
    { icon: "👤", text: "Cambiar Username" },
    { icon: "🔑", text: "Cambiar contraseña" },
    { icon: "✉️", text: "Cambiar correo electronico" },
    { icon: "⚧", text: "Genero" },
    { icon: "📞", text: "Numero de telefóno" },
    { icon: "📍", text: "Ubicación" },
    { icon: "📂", text: "Preferencia en tallas y colores" },
  ];

  return (
    <div className="min-h-screen bg-accent font-sans md:hidden flex flex-col">
      {/* HEADER OSCURO (Igual que el perfil principal) */}
      <div className="bg-[#1A1A1A] text-white pt-8 pb-10 px-6 flex flex-col items-center relative">
        {/* Logo Caza Ofertas */}
        <div className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <span className="text-[#1A1A1A] font-black text-[7px] leading-tight text-center">
            CAZA <br /> OFERTAS
          </span>
        </div>
        
        {/* Avatar con borde blanco */}
        <div className="w-28 h-28 mt-4 bg-gray-200 rounded-full border-4 border-white overflow-hidden flex items-center justify-center relative">
           <Image src="/user.svg" alt="Avatar" width={60} height={60} className="opacity-50" />
           {/* Indicador de estado/online */}
           <div className="absolute bottom-1 right-5 w-5 h-5 bg-gray-300 border-2 border-white rounded-full"></div>
        </div>
        <h2 className="text-2xl font-bold mt-4 tracking-tight">Andres Perez</h2>
      </div>

      {/* LISTADO DE CONFIGURACIÓN */}
      <div className="flex-1 p-6 flex flex-col gap-3">
        {configItems.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm border border-gray-100 active:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl grayscale opacity-70">{item.icon}</span> 
              <span className="text-dark font-bold text-[14px]">{item.text}</span>
            </div>
            {/* Icono de flecha hacia abajo como en la imagen */}
            <span className="text-gray-400 text-[10px]">▼</span>
          </div>
        ))}
        
        {/* BOTÓN SALIR / VOLVER */}
        <button 
          onClick={() => router.back()}
          className="mt-6 bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-gray-100 active:scale-95 transition-transform text-[#E11D48] font-bold"
        >
          <span className="text-xl">🚪</span> Salir
        </button>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import {
  MdEmail,
  MdLogout,
  MdRoomPreferences,
  MdKeyboardArrowDown,
} from "react-icons/md";
import {
  FaHeart,
  FaPhoneAlt,
  FaRegUser,
  FaTransgender,
  FaUser,
} from "react-icons/fa";
import { IoLocation, IoSettingsOutline } from "react-icons/io5";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";
import { useAuth } from "@/app/hooks/useAuth";
import { IoIosAddCircle } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import { LuFolderHeart } from "react-icons/lu";

// =========================================
// COMPONENTE MODAL DE EDICIÓN
// =========================================
const EditModal = ({ title, fields, isOpen, onClose }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xs p-6">
      <div className="bg-white rounded-[25px] w-full max-w-[400px] p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute top-5 right-6 text-gray-400 text-xl font-bold hover:text-dark">✕</button>
        
        <h2 className="text-[22px] font-bold text-dark mb-7 tracking-tight">{title}</h2>
        
        <div className="flex flex-col gap-5">
          {fields.map((field: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-2">
              <label className="text-[16px] font-semibold text-dark ml-1">{field.label}</label>
              
              {field.type === 'select' ? (
                <div className="relative">
                  <select className="w-full h-[55px] bg-white border border-[#E0E0E0] rounded-2xl px-5 appearance-none outline-none focus:border-secondary transition-colors text-dark font-medium">
                    <option>Elegir</option>
                  </select>
                  <MdKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400 pointer-events-none" />
                </div>
              ) : field.type === 'phone' ? (
                <div className="flex gap-3">
                  <div className="relative w-24">
                    <select className="w-full h-[55px] border border-[#E0E0E0] rounded-2xl px-3 outline-none appearance-none font-medium text-center">
                      <option>+58</option>
                    </select>
                    <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-lg text-gray-400 pointer-events-none" />
                  </div>
                  <input type="text" placeholder="teléfono" className="flex-1 h-[55px] border border-[#E0E0E0] rounded-2xl px-5 outline-none placeholder:text-gray-300 font-medium" />
                </div>
              ) : (
                <input 
                  type={field.type} 
                  placeholder={field.placeholder}
                  className="w-full h-[55px] bg-white border border-[#E0E0E0] rounded-2xl px-5 outline-none focus:border-secondary transition-colors placeholder:text-gray-300 font-medium text-dark"
                />
              )}
            </div>
          ))}
          
          <button 
            onClick={onClose}
            className="w-full h-[55px] bg-[#E57A64] text-white font-bold rounded-2xl mt-4 active:scale-[0.97] transition-all shadow-md "
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default function ProfilePage() {
  const { user, avatar, logout } = useAuth();
  const [mobileView, setMobileView] = useState<"menu" | "config">("menu");
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Configuración de los campos de cada modal basado en tus fotos
  const modalConfigs: any = {
    "username": { title: "Cambiar username", fields: [{ label: "Cambiar username", type: "text", placeholder: "username" }, { label: "Contraseña", type: "password", placeholder: "*******" }] },
    "password": { title: "Cambiar contraseña", fields: [{ label: "Contraseña actual", type: "password", placeholder: "*******" }, { label: "Nueva contraseña", type: "password", placeholder: "*******" }] },
    "email": { title: "Cambiar correo electronico", fields: [{ label: "Cambiar correo electronico", type: "text", placeholder: "username" }, { label: "Contraseña", type: "password", placeholder: "*******" }] },
    "genero": { title: "Género", fields: [{ label: "Género", type: "select" }, { label: "Contraseña", type: "password", placeholder: "*******" }] },
    "telefono": { title: "Numero de telefóno", fields: [{ label: "Numero de telefóno", type: "phone" }, { label: "Contraseña", type: "password", placeholder: "*******" }] },
    "ubicacion": { title: "Ubicación", fields: [{ label: "Ubicación", type: "select" }, { label: "Contraseña", type: "password", placeholder: "*******" }] },
  };

  if (!user) return <div className="min-h-screen bg-[#F5E6E6]" />;

  return (
    <div className="min-h-screen mx-auto container md:bg-accent font-sans flex flex-col md:flex-row">
      
      {/* =========================================
          VERSIÓN MÓVIL
          ========================================= */}
      <div className="md:hidden flex flex-col w-full min-h-screen bg-[#F5E6E6]">
        <div className="bg-[#1A1A1A] text-white pt-10 pb-12 px-6 flex flex-col items-center relative">
          <div className="relative">
            <div className={`w-32 h-32 rounded-full border-[5px] border-[#333] overflow-hidden flex items-center justify-center text-5xl font-bold ${avatar.color} text-white`}>
              {avatar.char}
            </div>
            <div className="absolute bottom-1 right-2 w-7 h-7 bg-green-500  border-[4px] border-[#1A1A1A] rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold mt-4 tracking-tight text-white">{user.name}</h2>
        </div>

        {mobileView === "menu" ? (
          <div className="flex-1 px-6 py-8 flex flex-col">
            <div className="flex flex-col gap-4">
              <button className="bg-white rounded-[20px] p-5 flex items-center gap-4 shadow-sm active:scale-[0.98] transition-all">
                <LuFolderHeart className="text-2xl text-dark" />
                <span className="text-dark font-bold text-lg">Favoritos</span>
              </button>

              <button onClick={() => setMobileView("config")} className="bg-white rounded-[20px] p-5 flex items-center gap-4 shadow-sm active:scale-[0.98] transition-all">
                <IoSettingsOutline className="text-2xl text-dark" />
                <span className="text-dark font-bold text-lg">Configuración</span>
              </button>

              {user.isMerchant && (
                <button className="bg-white rounded-[20px] p-5 flex items-center gap-4 shadow-sm active:scale-[0.98] transition-all">
                  <IoIosAddCircle className="text-2xl text-dark" />
                  <span className="text-dark font-bold text-lg">Añadir Producto</span>
                </button>
              )}

              <button onClick={logout} className="bg-white rounded-[20px] p-5 flex items-center gap-4 shadow-sm active:scale-[0.98] transition-all">
                <HiOutlineLogout className="text-2xl text-red-500" />
                <span className="text-dark font-bold text-lg">Salir</span>
              </button>
            </div>

            <h3 className="font-bold text-xl text-dark mt-10 mb-6 tracking-tight">Actividad Reciente</h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProductCard key={i} index={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 px-6 py-8 flex flex-col gap-3">
            {[
              { id: "username", icon: <RiUserLine />, text: "Cambiar Username" },
              { id: "password", icon: <RiLockPasswordLine />, text: "Cambiar contraseña" },
              { id: "email", icon: <MdEmail />, text: "Cambiar correo electronico" },
              { id: "genero", icon: <FaTransgender />, text: "Género" },
              { id: "telefono", icon: <FaPhoneAlt />, text: "Numero de telefóno" },
              { id: "ubicacion", icon: <IoLocation />, text: "Ubicación" },
              { id: "genero", icon: <MdRoomPreferences />, text: "Preferencia en tallas y colores" },
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveModal(item.id)}
                className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-sm cursor-pointer active:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl text-dark">{item.icon}</span>
                  <span className="text-dark font-bold text-[15px]">{item.text}</span>
                </div>
                <MdKeyboardArrowDown className="text-2xl text-gray-400" />
              </div>
            ))}
            <button onClick={() => setMobileView("menu")} className="mt-8 bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm text-dark font-bold">
              <HiOutlineLogout className="text-2xl text-red-500 rotate-180" />
              <span>Regresar</span>
            </button>
          </div>
        )}
      </div>

      {/* =========================================
          VERSIÓN ESCRITORIO
          ========================================= */}
      <aside className="hidden md:flex w-[300px] flex-col shadow-lg bg-white z-10 sticky top-0 h-screen">
        <div className="bg-[#1A1A1A] text-white py-12 flex flex-col items-center text-center px-4">
          <div className="relative w-32 h-32 mb-4">
            <div className={`w-full h-full rounded-full ${avatar.color} border-4 border-white flex items-center justify-center text-5xl font-bold shadow-xl`}>
              {avatar.char}
            </div>
            <div className="absolute bottom-1 right-2 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
          <p className="text-xs text-gray-400 font-medium italic">Miembro desde: Abril del 2026</p>
        </div>

        <nav className="flex-1 w-full mt-4">
          <Link href="#" className="flex items-center gap-4 px-8 py-4 bg-[#F5E6E6] border-l-4 border-[#E57A64] text-dark font-bold text-sm">
            <FaRegUser className="text-lg" /> Mi Perfil
          </Link>
          {user.isMerchant && (
            <Link href="#" className="flex items-center gap-4 px-8 py-4 text-dark font-bold hover:bg-gray-50 transition-colors text-sm">
              <IoIosAddCircle className="text-lg" /> Añadir Producto
            </Link>
          )}
          <Link href="#" className="flex items-center gap-4 px-8 py-4 text-dark font-bold hover:bg-gray-50 transition-colors text-sm">
            <FaHeart className="text-lg" /> Mis ofertas favoritas
          </Link>
          <button onClick={logout} className="flex items-center gap-4 px-8 py-4 text-dark font-bold hover:bg-red-50 w-full transition-colors text-sm mt-auto mb-6">
            <MdLogout className="text-lg text-red-500" /> Cerrar Sesión
          </button>
        </nav>
      </aside>

      <main className="hidden md:block flex-1 p-10 lg:p-14 max-w-5xl overflow-y-auto">
        <h1 className="text-4xl font-bold text-dark mb-8 tracking-tight">Mi Perfil</h1>

        <section className="mb-10">
          <h3 className="text-xl font-bold text-dark mb-4">Información personal</h3>
          <div className="bg-white rounded-[20px] border border-gray-100 divide-y divide-gray-50 shadow-sm overflow-hidden">
            {[
              { id: "username", label: "Username", value: user.name, icon: <FaUser color="#8DAA91" /> },
              { id: "genero", label: "Género", value: "Masculino", icon: <FaTransgender color="#8DAA91" /> },
              { id: "email", label: "Correo electronico", value: user.email, icon: <MdEmail color="#8DAA91" /> },
              { id: "telefono", label: "Telefono", value: "+58 412-0000000", icon: <FaPhoneAlt color="#8DAA91" /> },
              { id: "ubicacion", label: "Ubicación", value: "Falcón, Venezuela", icon: <IoLocation color="#8DAA91" /> },
            ].map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveModal(item.id)}
                className="flex items-center justify-between px-8 py-5 hover:bg-gray-50 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-[15px] text-gray-500 font-medium">
                    <span className="text-dark font-bold">{item.label}:</span> {item.value}
                  </p>
                </div>
                <span className="text-gray-300 group-hover:text-secondary text-sm">❯</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-bold text-dark mb-4">Configuración de Cuenta</h3>
          <div className="bg-white rounded-[20px] border border-gray-100 divide-y divide-gray-50 shadow-sm overflow-hidden">
            <div onClick={() => setActiveModal("password")} className="flex items-center justify-between px-8 py-5 hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center gap-5">
                <RiLockPasswordLine className="text-xl" color="#8DAA91" />
                <p className="text-[15px] text-dark font-bold">Cambiar contraseña</p>
              </div>
              <span className="text-gray-300 group-hover:text-secondary text-sm">❯</span>
            </div>
            <div onClick={() => setActiveModal("genero")} className="flex items-center justify-between px-8 py-5 hover:bg-gray-50 cursor-pointer group">
              <div className="flex items-center gap-5">
                <MdRoomPreferences className="text-xl" color="#8DAA91" />
                <p className="text-[15px] text-dark font-bold">Preferencia en tallas y colores</p>
              </div>
              <span className="text-gray-300 group-hover:text-secondary text-sm">❯</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-dark mb-4">Favoritos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <ProductCard key={i} index={i} />
            ))}
          </div>
        </section>
      </main>

      {/* RENDERIZADO DEL MODAL ACTIVO */}
      <EditModal 
        isOpen={!!activeModal} 
        onClose={() => setActiveModal(null)}
        {...(activeModal ? modalConfigs[activeModal] : {})}
      />
    </div>
  );
}
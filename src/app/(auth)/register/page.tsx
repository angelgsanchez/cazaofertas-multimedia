// Ruta: src/app/register/page.tsx
"use client"; 

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  // Estado para capturar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isMerchant: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Enviamos los datos a nuestra API interna
    const response = await fetch("api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log(JSON.stringify(formData));
    
    if (response.ok) {
      alert("Usuario registrado con éxito en data.txt");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent p-4 font-sans text-dark">
      <h1 className="text-3xl font-bold mb-10 mt-10 text-dark/90">Registrarse</h1>

      <div className="w-full max-w-sm bg-white p-10 rounded-xl shadow-xl shadow-dark/5 border border-dark/5">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-dark/80">Nombre</label>
            <input 
              type="text" 
              required
              placeholder="Tu nombre completo" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>  
          
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-dark/80">Correo</label>
            <input 
              type="email" 
              required
              placeholder="ejemplo@gmail.com" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-dark/80">Contraseña</label>
            <input 
              type="password" 
              required
              placeholder="**********" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {/* CHECKBOX: Soy comerciante */}
          <div className="flex items-center gap-3">
            <input 
              type="checkbox" 
              id="merchant"
              className="w-5 h-5 accent-primary cursor-pointer"
              onChange={(e) => setFormData({...formData, isMerchant: e.target.checked})}
            />
            <label htmlFor="merchant" className="text-sm font-bold text-dark/70 cursor-pointer">
              Soy comerciante
            </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-lg text-base hover:brightness-110 active:scale-[0.98] transition-all mt-3"
          >
            Registrarse
          </button>

          <div className="text-center text-sm text-dark/70">
            ¿Ya tienes una cuenta? <Link href="/login" className="font-bold text-dark underline">Ingresar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
"use client"; 

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // GUARDAR EN LOCALSTORAGE
        // Guardamos el objeto convertido a texto para usarlo en cualquier página
        localStorage.setItem("user_session", JSON.stringify(data.user));

        // Redirigir según el tipo de usuario
        if (data.user.isMerchant) {
          router.push("/"); // O la ruta que prefieras
        } else {
          router.push("/");
        }
      } else {
        setError(data.error || "Error al iniciar sesión");
      }
    } catch (err) {
      setError("Hubo un problema con la conexión");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent p-4 font-sans text-dark">
      <h1 className="text-3xl font-bold mb-10 mt-10 text-dark/90">Iniciar sesión</h1>

      <div className="w-full max-w-sm bg-white p-10 rounded-xl shadow-xl shadow-dark/5 border border-dark/5">
        
        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded-lg text-sm mb-4 text-center font-bold">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-dark/80">Correo</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@gmail.com" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm focus:ring-2 focus:ring-primary/40 outline-none"
              required 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-dark/80">Contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm focus:ring-2 focus:ring-primary/40 outline-none"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-white font-bold py-3 rounded-lg text-base hover:brightness-110 active:scale-[0.98] transition-all mt-3"
          >
            Iniciar sesión
          </button>

          <div className="text-center text-sm text-dark/70 font-medium">
            ¿No tienes una cuenta? <Link href="/register" className="font-bold text-dark underline">Regístrate</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
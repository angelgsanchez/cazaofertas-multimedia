"use client"; 

import Link from "next/link";
import { useRouter } from "next/navigation"; // 1. Importamos el hook para navegación

export default function LoginPage() {
  const router = useRouter(); // 2. Inicializamos el router

  // 3. Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Aquí podrías añadir lógica de validación en el futuro
    
    router.push("/common"); // 4. Redirige a la ruta del usuario logueado
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent p-4 font-sans text-dark">
      
      <h1 className="text-3xl font-bold mb-10 mt-10 text-dark/90">Iniciar sesión</h1>

      <div className="w-full max-w-sm bg-white p-10 rounded-xl shadow-xl shadow-dark/5 border border-dark/5">
        
        {/* 5. Añadimos el onSubmit al formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[16px] font-bold text-dark/80">
              Correo
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="ejemplo@gmail.com" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
              required 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-[16px] font-bold text-dark/80">
              Contraseña
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="**********" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
              required
            />
          </div>

          <div className="flex flex-col gap-3 text-center text-base text-dark/70 font-medium">
            <p>
              ¿No tienes una cuenta? {' '}
              <Link href="/register" className="font-bold text-dark hover:text-primary transition-colors underline underline-offset-2">
                Registrate
              </Link>
            </p>
            <p>
              ¿Quieres comerciar? {' '}
              <Link href="/register-merchant" className="font-bold text-dark hover:text-primary transition-colors underline underline-offset-2">
                Registrate
              </Link>
            </p>
          </div>

          <Link 
            href="/common" 
            className="w-full bg-primary text-white font-bold py-3 rounded-lg text-base hover:brightness-110 active:scale-[0.98] transition-all mt-3 text-center block"
          >
            Iniciar sesion
          </Link>

        </form>
      </div>
    </div>
  );
}
// Ruta: src/app/login/page.tsx
// Usamos "use client" porque los formularios suelen necesitar interactividad
"use client"; 

import Link from "next/link";

export default function LoginPage() {
  return (
    // 1. Fondo de toda la página (color 'accent' de tu paleta, rosado suave)
    <div className="flex flex-col items-center justify-center min-h-screen bg-accent p-4 font-sans text-dark">
      
      {/* 2. Título principal fuera de la tarjeta */}
      <h1 className="text-3xl font-bold mb-10 mt-10 text-dark/90">Iniciar sesión</h1>

      {/* 3. La tarjeta blanca principal */}
      <div className="w-full max-w-sm bg-white p-10 rounded-xl shadow-xl shadow-dark/5 border border-dark/5">
        
        <form className="flex flex-col gap-6">
          
          {/* 4. Campo: Correo */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[16px] font-bold text-dark/80">
              Correo
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="ejemplo@gmail.com" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>

          {/* 5. Campo: Contraseña */}
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-[16px] font-bold text-dark/80">
              Contraseña
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="**********" 
              className="w-full px-4 py-3 border border-dark/15 rounded-lg text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
            />
          </div>

          {/* 6. Enlaces de ayuda (¿No tienes cuenta? / ¿Quieres comerciar?) */}
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

          {/* 7. Botón principal (color 'primary' de tu paleta, naranja/coral) */}
          <button 
            type="submit" 
            className="w-full bg-primary text-white font-bold py-3 rounded-lg text-base hover:brightness-110 active:scale-[0.98] transition-all mt-3"
          >
            Iniciar sesion
          </button>

        </form>
      </div>
    </div>
  );
}
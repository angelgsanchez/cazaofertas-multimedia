import { ProductCard } from "@/components/ui/ProductCard";
import { HeroCarousel } from "@/components/features/HeroCarousel";
import { SearchBar } from "@/components/ui/SearchBar";
import { Navbar } from "@/components/layout/Navbar"; // Verifica la ruta según tu estructura
import { Footer } from "@/components/layout/Footer"; // Verifica la ruta según tu estructura

export default function Home() {
  return (
    /* Contenedor principal con el color de fondo de tu diseño */
    <div className="flex flex-col min-h-screen bg-[#F9E5E1]">
      {/* 1. Navbar: Asegúrate de importarlo desde @/components/layout/Navbar */}
      <Navbar />

      {/* 2. Contenido Principal */}
      <main className="flex-grow flex flex-col items-center gap-10 pt-10 pb-20 font-sans">
        <div className="w-full max-w-[1200px] px-6 flex flex-col gap-10">
          {/* SearchBar corregida (833px de ancho y foco limpio) */}
          <div className="flex justify-center">
            <SearchBar className="w-full max-w-[833px]" />
          </div>

          {/* Carrusel de Ofertas */}
          <HeroCarousel />

          {/* Grilla de Productos */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 16 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </section>
        </div>
      </main>

      {/* 3. Footer: Asegúrate de importarlo desde @/components/layout/Footer */}
      <Footer />
    </div>
  );
}

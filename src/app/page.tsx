import { Navbar } from "@/components/layout/Navbar";
import { SearchBar } from "@/components/ui/SearchBar";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    /* Contenedor principal con el color de fondo de tu diseño */
    <div className="flex flex-col min-h-screen bg-[#F9E5E1]">
      {/* 1. HEADER (Hombres, Mujeres, Niños, etc.) */}
      <Navbar />

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="flex-grow flex flex-col items-center pt-8 px-4">
        {/* SearchBar con el ancho de 833px de Figma */}
        <SearchBar className="mb-10" />

        {/* Contenedor de Banners y Grilla de Productos */}
        <div className="w-full max-w-[1200px] space-y-8">
          {/* Banner Principal (LOREM IPSUM) */}
          <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <div className="aspect-[21/9] flex items-center justify-center bg-gray-100">
              <h1 className="text-6xl font-black text-black tracking-tighter italic">
                LOREM IPSUM
              </h1>
            </div>
          </div>

          {/* Grilla de productos (Placeholders) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-[3/4] bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
}

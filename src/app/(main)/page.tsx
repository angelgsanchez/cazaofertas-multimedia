import { ProductCard } from "@/components/ui/ProductCard";
import { HeroCarousel } from "@/components/features/HeroCarousel";
import { SearchBar } from "@/components/ui/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-10 pt-10 pb-20 bg-background font-sans">
      <div className="w-full max-w-[1200px] px-6 flex flex-col gap-10">
        {/* Solo el componente, sin iconos por fuera */}
        <SearchBar />

        <HeroCarousel />

        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 2 }).map((_, i) => (            
            <ProductCard key={i} index={i}/>
          ))}
        </section>
      </div>
    </main>
  );
}

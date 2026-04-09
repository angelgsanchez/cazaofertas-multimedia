"use client";

import { useState } from "react";

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sustituye las URLs por las rutas de tus imágenes generadas
  const slides = [
    { 
      id: 1, 
      image: "/banner1.png", 
      alt: "Nueva Colección Urbana" 
    },
    { 
      id: 2, 
      image: "/banner2.png", 
      alt: "Ofertas de Temporada" 
    },
    { 
      id: 3, 
      image: "/banner3.png", 
      alt: "Accesorios y Tendencias" 
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white border-[12px] border-white rounded-sm shadow-md aspect-[21/9] relative overflow-hidden group">
      {/* Slides Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative"
          >
            {/* Imagen con estilo profesional */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover transition-scale duration-500 group-hover:scale-105"
            />
            {/* Overlay sutil para que el banner se sienta más "premium" */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Flechas de Navegación (Estilizadas) */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-black shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"
      >
        <span className="text-xl">❮</span>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-black shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"
      >
        <span className="text-xl">❯</span>
      </button>

      {/* Indicadores (Dots) Minimalistas */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              currentSlide === index 
                ? "bg-white w-8 shadow-sm" 
                : "bg-white/50 w-2 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
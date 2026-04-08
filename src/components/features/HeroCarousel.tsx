"use client";

import { useState } from "react";

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, text: "LOREM IPSUM", color: "#E5E5E5" },
    { id: 2, text: "NUEVAS OFERTAS", color: "#D1D1D1" },
    { id: 3, text: "DESCUENTOS", color: "#BDBDBD" },
  ];

  return (
    <section className="w-full bg-white border-[12px] border-white rounded-sm shadow-sm aspect-[21/9] relative overflow-hidden group">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full flex items-center justify-center"
            style={{ backgroundColor: slide.color }}
          >
            <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter text-dark uppercase italic select-none">
              {slide.text}
            </h2>
          </div>
        ))}
      </div>

      {/* Flechas de Navegación */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-dark opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ❮
      </button>
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-dark opacity-0 group-hover:opacity-100 transition-opacity"
      >
        ❯
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentSlide === index ? "bg-dark w-6" : "bg-dark/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

"use client";

import React, { useState, useMemo } from "react";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ProductCard } from "@/components/ui/ProductCard";

// Mock de datos
const INITIAL_PRODUCTS = [
  { id: 1, name: "Franela Spring", price: 25, color: "Amarillo", size: "S", tags: ["Spring"] },
  { id: 2, name: "Zapato Smart", price: 85, color: "Rojo", size: "M", tags: ["Smart"] },
  { id: 3, name: "Gorra Tag", price: 15, color: "Verde", size: "L", tags: ["Tag"] },
  { id: 4, name: "Chaqueta Invierno", price: 95, color: "Rojo", size: "S", tags: ["Smart"] },
  { id: 5, name: "Pantalón Sport", price: 45, color: "Amarillo", size: "M", tags: ["Spring"] },
  { id: 6, name: "Accesorio Eco", price: 10, color: "Verde", size: "L", tags: ["Tag"] },
];

export default function SearchPage() {
  // --- ESTADOS DE INTERFAZ (Lo que el usuario ve/toca) ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState(["Spring", "Smart", "Tag"]);
  const [selectedColors, setSelectedColors] = useState<string[]>(["Amarillo", "Rojo", "Verde"]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(["S", "M"]);
  const [priceRange, setPriceRange] = useState(100);
  
  // --- ESTADO DE RESULTADOS (Lo que se muestra en el grid) ---
  const [displayedProducts, setDisplayedProducts] = useState(INITIAL_PRODUCTS);

  // --- LÓGICA DE FILTRADO ---

  // 1. Filtrado Reactivo por Nombre (Funciona mientras escribes)
  const finalFilteredProducts = useMemo(() => {
    const cleanSearch = searchTerm.toLowerCase().trim();
    return displayedProducts.filter(product => 
      product.name.toLowerCase().includes(cleanSearch)
    );
  }, [searchTerm, displayedProducts]);

  // 2. Función para aplicar los filtros del panel lateral (Botón Filtrar)
  const applySideFilters = () => {
    const filtered = INITIAL_PRODUCTS.filter(product => {
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
      const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.size);
      const matchesPrice = product.price <= priceRange;
      const matchesTags = selectedTags.length === 0 || product.tags.some(t => selectedTags.includes(t));

      return matchesColor && matchesSize && matchesPrice && matchesTags;
    });
    setDisplayedProducts(filtered);
  };

  const handleTagDelete = (tagToDelete: string) => {
    const updatedTags = selectedTags.filter(tag => tag !== tagToDelete);
    setSelectedTags(updatedTags);
    // Actualizar automáticamente al borrar un tag
    const filtered = INITIAL_PRODUCTS.filter(product => 
       product.tags.some(t => updatedTags.includes(t))
    );
    setDisplayedProducts(filtered);
  };

  const toggleFilter = (item: string, state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (state.includes(item)) {
      setState(state.filter(i => i !== item));
    } else {
      setState([...state, item]);
    }
  };

  return (
    <div className="min-h-screen container mx-auto bg-[#F5E6E6] p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-center md:flex-row gap-8">
        
        {/* ASIDE: FILTROS */}
        <aside className="w-full md:w-[320px] bg-white rounded-[30px] p-8 shadow-sm h-fit">
          
          {/* Palabras clave */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[14px] font-bold text-[#1A1A1A] whitespace-nowrap">Palabras clave</span>
              <div className="h-[1px] bg-black w-full"></div>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <div key={tag} className="bg-secondary text-black px-3 py-1 rounded-md text-[12px] flex items-center gap-2 font-medium">
                  {tag} <button onClick={() => handleTagDelete(tag)} className="text-[14px] hover:text-red-500 transition-colors">×</button>
                </div>
              ))}
            </div>
          </div>

           {/* Slider de Precio */}
          <div className="mt-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[14px] font-bold text-[#1A1A1A]">Precio</span>
              <span className="text-[13px] font-bold text-[#1A1A1A]">$0 - ${priceRange}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full h-[6px] bg-[#DBC6C2] rounded-full appearance-none cursor-pointer accent-[#1A1A1A]"
            />
          </div>

          <div className="flex flex-col gap-6">
            {/* Filtro Colores */}
            <div className="hidden md:block">
              <div className="relative mb-3">
                <div className="w-full h-[45px] border border-primary rounded-xl px-4 flex items-center text-black text-sm font-medium cursor-default">
                  Colores
                  <MdKeyboardArrowDown className="absolute right-3 text-2xl" />
                </div>
              </div>
              <div className="space-y-3 ml-2">
                {["Amarillo", "Rojo", "Verde"].map((color) => (
                  <label key={color} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedColors.includes(color)}
                      onChange={() => toggleFilter(color, selectedColors, setSelectedColors)}
                      className="w-5 h-5 border-2 border-gray-200 rounded-md checked:bg-[#1A1A1A] appearance-none cursor-pointer relative checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:text-[12px] checked:after:left-[3px] checked:after:top-[-1px] transition-all" 
                    />
                    <span className="text-[14px] font-medium text-[#1A1A1A] group-hover:text-gray-500">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filtro Tallas */}
            <div>
              <div className="flex items-center justify-between md:flex-col md:items-start gap-4">
                <div className="relative w-full md:mb-3">
                  <div className="w-full h-[45px] border border-primary rounded-xl px-4 flex items-center text-black text-sm font-medium">
                    Tallas
                    <MdKeyboardArrowDown className="absolute right-3 text-2xl" />
                  </div>
                </div>

                <div className="flex md:flex-col gap-5 md:gap-3 md:ml-2">
                  {["S", "M", "L"].map((size) => (
                    <label key={size} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedSizes.includes(size)}
                        onChange={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
                        className="w-5 h-5 border-2 border-gray-200 rounded-md checked:bg-[#1A1A1A] appearance-none cursor-pointer relative checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:text-[12px] checked:after:left-[3px] checked:after:top-[-1px] transition-all" 
                      />
                      <span className="text-[14px] font-medium text-[#1A1A1A] group-hover:text-gray-500">{size}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
          <button 
            onClick={applySideFilters}
            className="w-full h-[45px] flex items-center justify-center mt-10 bg-[#E57A64] text-white font-black rounded-2xl active:scale-[0.95] transition-all hover:brightness-110 uppercase"
          >
            Filtrar
          </button>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1">
          {/* Barra de Búsqueda Reactiva */}
          <div className="hidden md:flex relative w-full mb-8">
            <input 
              type="text" 
              placeholder="Buscar por nombre..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[55px] bg-white rounded-full px-8 pr-14 shadow-sm outline-none text-[#1A1A1A] font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-[#E57A64]/10 transition-all"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 w-[45px] h-[45px] text-gray-400 rounded-full flex items-center justify-center  text-xl">
              <IoSearch />
            </div>
          </div>

          {/* Grid de Resultados */}
          {finalFilteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
              {finalFilteredProducts.map((product) => (
                <div key={product.id} className="group transition-transform hover:-translate-y-1">
                   <ProductCard index={product.id} />
                   {/* <div className="mt-3 px-1">
                     <h4 className="text-sm font-bold text-[#1A1A1A]">{product.name}</h4>
                     <p className="text-[10px] text-gray-400 uppercase font-black tracking-tighter mt-1">
                       {product.color} • Talla {product.size}
                     </p>
                     <p className="text-[#E57A64] font-black text-sm mt-1">${product.price}</p>
                   </div> */}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-white/40 rounded-[40px] border-2 border-dashed border-[#DBC6C2]">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-[#1A1A1A] font-bold text-lg">No encontramos coincidencias</p>
              <p className="text-gray-500 text-sm mb-6">Prueba ajustando los filtros o la búsqueda.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setDisplayedProducts(INITIAL_PRODUCTS);
                }} 
                className="text-[#E57A64] font-black hover:underline underline-offset-4"
              >
                Limpiar todo
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
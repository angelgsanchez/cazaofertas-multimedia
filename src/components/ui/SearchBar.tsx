import { SearchIcon } from "./Icons";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Buscar producto...",
  className = "",
}: SearchBarProps) => {
  return (
    <div
      className={`
        /* 1. Contenedor: justify-between empuja el contenido a los extremos */
        flex items-center justify-between mx-auto relative
        w-full max-w-[833px] h-12
        
        /* 2. Espaciado: Mantenemos px-6 para que no toque las curvas */
        px-6 gap-3
        
        /* 3. Estilo: Borde exacto de Figma y redondeado total */
        bg-white border border-[#DBC5C1] rounded-full shadow-sm
        transition-all duration-300
        
        /* 4. Foco: Aquí es donde se remarca el contenedor redondeado */
        focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-200
        
        ${className}
      `}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="
          /* grow hace que el input ocupe todo el espacio hasta la lupa */
          grow h-full bg-transparent 
          
          /* ELIMINA EL RECUADRO: outline-none y border-none son vitales */
          outline-none border-none focus:ring-0
          
          /* Tipografía Inter: 16px */
          font-inter font-normal text-base text-dark 
          placeholder:text-[#B3B3B3]
        "
      />

      {/* 5. Lupa: Al final del flex (Order 1 en Figma) */}
      <div className="shrink-0 flex items-center justify-center text-[#DBC5C1]">
        <SearchIcon size={18} />
      </div>
    </div>
  );
};

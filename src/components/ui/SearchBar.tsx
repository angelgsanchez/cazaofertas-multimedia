import { SearchIcon } from "./Icons";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Buscar",
  className = "",
}: SearchBarProps) => {
  return (
    /* Contenedor relativo para que la lupa se posicione respecto a este div */
    <div
      className={`relative w-full max-w-2xl mx-auto flex items-center ${className}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2.5 pl-6 pr-12 rounded-full bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/10 text-sm font-sans text-dark transition-all"
      />

      {/* La lupa: posicionada de forma absoluta a la derecha y centrada verticalmente */}
      <div className="absolute right-5 flex items-center justify-center pointer-events-none text-gray-400">
        <SearchIcon size={18} />
      </div>
    </div>
  );
};

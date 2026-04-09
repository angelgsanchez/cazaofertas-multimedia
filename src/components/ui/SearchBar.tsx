"use client"
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation"; // Para App Router. Si usas Pages Router: import { useRouter } from 'next/router';
import { SearchIcon } from "./Icons";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Buscar producto...",
  className = "",
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      // Opcional: si el campo está vacío, redirige igual a /search
      router.push("/search");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div
      className={`
        flex items-center justify-between mx-auto relative
        w-full h-12 px-6 gap-3
        bg-white border border-[#DBC5C1] rounded-full shadow-sm
        transition-all duration-300
        focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-200
        ${className}
      `}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          grow h-full bg-transparent
          outline-none border-none focus:ring-0
          font-inter font-normal text-base text-dark
          placeholder:text-[#B3B3B3]
        "
      />

      {/* Icono clickable (ya no es Link) */}
      <button
        onClick={handleSearch}
        type="button"
        className="shrink-0 flex items-center justify-center text-[#DBC5C1] cursor-pointer"
        aria-label="Buscar"
      >
        <SearchIcon size={18} />
      </button>
    </div>
  );
};
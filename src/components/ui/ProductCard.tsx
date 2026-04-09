import Image from "next/image";


export const ProductCard = ({ index }: { index: number }) => {
 // Alternamos datos para que se vea real como en tu imagen
  const isShirt = index % 2 !== 0; 
  const name = isShirt ? "Camisa" : "Pantalon";
  const price = isShirt ? "$29.95" : "$19.22";
  const imageSrc = isShirt ? "/camisa-negra.jpg" : "/jean-blue.png"; // Usa tus rutas reales

  return (
    <div className="bg-white rounded-[20px] p-4 shadow-sm flex flex-col items-start w-full">
      {/* Contenedor de Imagen */}
      <div className="relative w-full h-32 mb-3 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={name}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      
      {/* Información del Producto */}
      <div className="flex flex-col items-start gap-0.5">
        <span className="text-[11px] font-bold text-gray-800 leading-none">
          {name}
        </span>
        <span className="text-[13px] font-black text-dark">
          {price}
        </span>
      </div>
    </div>
  );
};

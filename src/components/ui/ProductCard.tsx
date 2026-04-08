export const ProductCard = () => {
  return (
    /* Quitamos el w-[256px] y usamos w-full */
    <div className="bg-white border-[8px] border-white rounded-sm shadow-sm overflow-hidden flex flex-col group cursor-pointer transition-all hover:-translate-y-1 w-full h-[347px]">
      <div className="flex-1 bg-light flex items-center justify-center group-hover:bg-[#f0f0f0] transition-colors relative">
        <div className="w-12 h-12 opacity-5 bg-dark rounded-full" />
      </div>
    </div>
  );
};

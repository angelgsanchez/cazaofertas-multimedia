export const Footer = () => {
  return (
    <footer className="w-full bg-dark py-16 mt-auto border-t border-light/10 flex flex-col items-center gap-6 font-sans">
      <div className="w-16 h-16 bg-light rounded-full flex items-center justify-center transition-transform hover:scale-105 cursor-pointer">
        <span className="text-dark font-black text-[10px] leading-tight text-center p-1">
          CAZA <br /> OFERTAS
        </span>
      </div>
{/*realmente esto esta guardando lo que yo estoy subiendo? */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[11px] font-bold tracking-[0.2em] text-light/40 uppercase">
          © 2026 CazaOfertas. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-[10px] font-bold text-light/40">
          <button className="hover:text-primary transition-colors">
            Términos
          </button>
          <button className="hover:text-primary transition-colors">
            Privacidad
          </button>
          <button className="hover:text-primary transition-colors">
            Contacto
          </button>
        </div>
      </div>
    </footer>
  );
};

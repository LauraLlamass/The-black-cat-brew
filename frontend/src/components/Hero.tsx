import { Link } from "react-router-dom";
import enProceso from "../assets/enProceso.png";

function Hero() {
  return (
    <section className="bg-[#fcedd6] pt-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:items-center">
        <div className="pb-10 md:pb-16">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-[#7c895e] uppercase">
            The Black Cat Brew
          </p>

          <h1 className="max-w-md text-5xl font-black leading-tight text-[#7a5447] md:text-6xl">
            Club del café
          </h1>

          <p className="mt-5 max-w-md text-base leading-8 text-[#7a5447]">
            Explora cafés con personalidad, descubre perfiles de sabor y guarda
            tus favoritos en una colección visual con estilo propio.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/catalogo"
              className="rounded-full bg-[#7a5447] px-6 py-3 text-sm font-semibold text-[#ffffff] transition hover:bg-[#daa77a] hover:text-[#7a5447]"
            >
              Ver catálogo
            </Link>

            <Link
              to="/favorites"
              className="rounded-full border border-[#7a5447] px-6 py-3 text-sm font-semibold text-[#7a5447] transition hover:bg-[#daa77a] hover:text-[#7a5447]"
            >
              Ir a favoritos
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] bg-[#eeefed]">
            <img
              src={enProceso}
              alt="Imagen principal de The Black Cat Brew"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 h-12 rounded-t-[2rem] bg-[#eeefed]" />
    </section>
  );
}

export default Hero;